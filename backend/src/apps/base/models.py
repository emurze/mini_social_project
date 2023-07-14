from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Profile(User):
    description = models.CharField(max_length=100, null=True)
    country = models.CharField(max_length=32)
    city = models.CharField(max_length=32)
    friends = models.ManyToManyField('Profile', blank=True)

    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'

    def __repr__(self) -> str:
        return self.username  # type: ignore

    __str__ = __repr__


class Post(models.Model):
    class Status(models.TextChoices):
        ACTIVE = ('AT', 'Active')
        PASSIVE = ('PS', 'Passive')

    title = models.CharField(max_length=32)
    content = models.TextField()
    created = models.DateTimeField(auto_now=True)
    updated = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=2, default=Status.ACTIVE,
                              choices=Status.choices)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE,
                             related_name='posts')

    def __str__(self) -> str:
        return self.title
