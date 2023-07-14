from rest_framework import serializers

from apps.base.models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    friends = serializers.SlugRelatedField(
        many=True, read_only=True, slug_field='username'
    )

    class Meta:
        model = Profile
        fields = ('id', 'username', 'description',
                  'country', 'city', 'friends')
