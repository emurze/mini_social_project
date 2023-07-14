from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination

from apps.base.models import Profile
from apps.base.serializers import ProfileSerializer


class ProfilePagination(PageNumberPagination):
    page_size = 2
    max_page_size = 2
    page_size_query_param = 'page_size'


class ProfileListAPI(ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    pagination_class = ProfilePagination

    def list(self, request, *args, **kwargs):
        print(request.user)
        # queryset = self.get_queryset()
        # current_user = request.user
        # instance = queryset.get()
        # "for each item in queryset that is in friend need set follow: True"
        #
        # for query in queryset:
        #     pass
        return super().list(request, *args, **kwargs)

