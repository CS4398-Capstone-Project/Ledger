from django.contrib.auth.models import User, Profile
from rest_framework import serializers
from . import models
from . import serializers as serializer


"""
This serializer controls how the User is returned and created when called.
"""
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'id']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

"""
This serializer controls how the Profile is returned when called.
"""
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = ['user', 'bio', 'location', 'birth_date', 'date_registered','phone_number', 'type']
