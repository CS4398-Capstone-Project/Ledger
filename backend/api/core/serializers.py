#!/usr/bin/python
# -*- coding: utf-8 -*-
from django.contrib.auth.models import User
from rest_framework import serializers
from . import models
from . import serializers as serializer


class UserSerializer(serializers.ModelSerializer):

    class Meta:

        model = User
        fields = ['email', 'username', 'password', 'id']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(email=validated_data['email'],
                    username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:

        model = models.Profile
        fields = [
            'user',
            'bio',
            'birth_date',
            'date_registered',
            'phone_number',
            'gender',
            'address_1',
            'address_2',
            'city',
            'state',
            'zip_code'
            ]


class AppointmentSerializer(serializers.ModelSerializer):

    class Meta:

        model = models.Appointment
        fields = ['patient', 'doctor', 'date','start_time', 'end_time', 'location']


class DoctorSerializer(serializers.ModelSerializer):

    class Meta:

        model = models.Doctor
        fields = ['work']


class PatientSerializer(serializers.ModelSerializer):

    class Meta:

        model = models.Patient
        fields = ['profile', 'doctor']
