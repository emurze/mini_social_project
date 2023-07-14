from django.urls import path

from apps.base.api_views import ProfileListAPI

urlpatterns = [
    path('profile/', ProfileListAPI.as_view()),
]
