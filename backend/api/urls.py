from django.urls import path
from .views import *

urlpatterns = [
    path('v1/post/', Post_APIView.as_view()),
    path('v1/post/<int:pk>/', Post_APIView_Detail.as_view()),
    path('v2/get/', Get_APIView_Category.as_view()),
    path('v3/post/', Post_APIView_Segment.as_view()),
    path('v3/post/<int:pk>/', Post_APIView_Segment_Detail.as_view()),
    path('v3/delete/', Post_APIView_Delete_Segment.as_view()),
    path('v3/delete/<int:pk>/', Post_APIView_Delete_Segment.as_view()),
]
