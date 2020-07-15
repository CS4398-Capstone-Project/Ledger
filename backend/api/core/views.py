from django.shortcuts import render
from django.contrib.auth.models import User, Group, Profile
from rest_framework import viewsets

from rest_framework_extensions.mixins import NestedViewSetMixin
from . import models
from . import serializers
"""
This viewset automatically provides `list`, `create`, `retrieve`,
`update` and `destroy` actions for the User model.
"""
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = serializers.User


"""
This viewset automatically provides `list`, `create`, `retrieve`,
`update` and `destroy` actions for the Profile model.
"""
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = models.Profile.objects.all()
    serializer_class = serializers.ProfileSerializer
