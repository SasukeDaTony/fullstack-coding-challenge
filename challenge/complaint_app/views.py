from django.db.models import Count
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import UserProfile, Complaint
from .serializers import (
    UserSerializer,
    UserProfileSerializer,
    ComplaintSerializer,
    pad_district_number,
)
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class ComplaintViewSet(viewsets.ModelViewSet):
    http_method_names = ["get"]
    serializer_class = ComplaintSerializer

    def list(self, request):
        # Get all complaints from the user's district
        user_profile = UserProfile.objects.get(user=request.user)
        padded_district = pad_district_number(user_profile.district)
        complaints = Complaint.objects.filter(account=padded_district)
        serializer = self.get_serializer(complaints, many=True)
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


class UserProfileViewSet(viewsets.ModelViewSet):
    http_method_names = ["get"]
    serializer_class = UserProfileSerializer

    def get_queryset_user(self):
        return UserProfile.objects.select_related("user").all()

    def list(self, request):
        user_profile = self.get_queryset_user().get(user=request.user)
        serializer = self.get_serializer(user_profile)
        return Response(serializer.data)


class ContituentComplaintsViewSet(viewsets.ModelViewSet):
    http_method_names = ["get"]
    serializer_class = ComplaintSerializer

    def list(self, request):
        user_profile = UserProfile.objects.get(user=request.user)
        padded_district = pad_district_number(user_profile.district)
        constituent_complaints = Complaint.objects.filter(
            account=padded_district, council_dist=padded_district
        )
        serializer = self.get_serializer(constituent_complaints, many=True)
        return Response(serializer.data)


class AllUsersViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def get_permissions(self):
        if self.request.method == "GET":
            return [AllowAny()]
        return super().get_permissions()
