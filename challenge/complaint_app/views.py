from django.db.models import Count
from rest_framework import viewsets
from .models import UserProfile, Complaint
from .serializers import UserSerializer, UserProfileSerializer, ComplaintSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


# Helper zero padding
def pad_district_number(district):
    try:
        # check if padding is needed by num conversion
        district_num = int(district)
        # Pads with a leading zero
        return f"NYCC{district_num:02d}"
    except ValueError:
        # if type != number return
        return district


class ComplaintViewSet(viewsets.ModelViewSet):
    http_method_names = ["get"]
    serializer_class = ComplaintSerializer

    def list(self, request):
        # Get all complaints from the user's district
        user_profile = UserProfile.objects.get(user=request.user)
        complaints = Complaint.objects.filter(borough=user_profile.borough)
        serializer = self.get_serializer(complaints, many=True)
        return Response(serializer.data)


class OpenCasesViewSet(viewsets.ModelViewSet):
    http_method_names = ["get"]

    def list(self, request):
        # Get only the open complaints from the user's district
        user_profile = UserProfile.objects.get(user=request.user)
        padded_district = pad_district_number(user_profile.district)
        open_complaints = Complaint.objects.filter(
            account=padded_district,
            closedate__isnull=True,
        )
        serializer = ComplaintSerializer(open_complaints, many=True)
        return Response(serializer.data)


class ClosedCasesViewSet(viewsets.ModelViewSet):
    http_method_names = ["get"]

    def list(self, request):
        # Get only complaints that are close from the user's district
        user_profile = UserProfile.objects.get(user=request.user)
        padded_district = pad_district_number(user_profile.district)
        closed_complaints = Complaint.objects.filter(
            account=padded_district, closedate__isnull=False
        )
        serializer = ComplaintSerializer(closed_complaints, many=True)
        return Response(serializer.data)


class TopComplaintTypeViewSet(viewsets.ModelViewSet):
    http_method_names = ["get"]

    def list(self, request):
        user_profile = UserProfile.objects.get(user=request.user)
        padded_district = pad_district_number(user_profile.district)
        top_complaint_types = (
            Complaint.objects.filter(account=padded_district)
            .values("complaint_type")
            .annotate(total=Count("complaint_type"))
            .order_by("-total")[:3]
        )
        # Get the top 3 complaint types from the user's district
        return Response(top_complaint_types)
