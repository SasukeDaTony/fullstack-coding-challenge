from django.contrib.auth.models import User
from .models import UserProfile, Complaint
from rest_framework import serializers


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


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "first_name", "last_name")


class UserProfileSerializer(serializers.ModelSerializer):
    # BONUS Task: Flatten out the User object inside of UserProfile.
    username = serializers.CharField(source="user.username")
    first_name = serializers.CharField(source="user.first_name")
    last_name = serializers.CharField(source="user.last_name")
    district = serializers.SerializerMethodField()

    def get_district(self, obj):
        # obj is the UserProfile instance. Use pad_district_number to format the district field.
        return pad_district_number(obj.district)

    class Meta:
        model = UserProfile
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
            "full_name",
            "district",
            "party",
            "borough",
            "thumbnail"
        )


class ComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complaint
        fields = (
            "unique_key",
            "account",
            "opendate",
            "complaint_type",
            "descriptor",
            "zip",
            "borough",
            "city",
            "council_dist",
            "community_board",
            "closedate",
        )



