from django.urls import path
from rest_framework import routers
from .views import ComplaintViewSet, OpenCasesViewSet, ClosedCasesViewSet, TopComplaintTypeViewSet, UserProfileViewSet, ContituentComplaintsViewSet

router = routers.SimpleRouter()
router.register(r'allComplaints', ComplaintViewSet, basename='complaint')
router.register(r'openCases', OpenCasesViewSet, basename='openCases')
router.register(r'closedCases', ClosedCasesViewSet, basename='closedCases')
router.register(r'topComplaints', TopComplaintTypeViewSet, basename='topComplaints')
router.register(r'userProfile', UserProfileViewSet, basename='userProfile')
router.register(r'constituentComplaints', ContituentComplaintsViewSet, basename='constituentComplaints')
urlpatterns = [
]
urlpatterns += router.urls