#!/usr/bin/python
# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.contrib.auth.models import User, Group, Profile, Doctor, Appointment
from rest_framework import viewsets
from rest_framework_extensions.mixins import NestedViewSetMixin
from  import models
from  import serializers


class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = serializers.User


class ProfileViewSet(viewsets.ModelViewSet):

    queryset = models.Profile.objects.all()
    serializer_class = serializers.ProfileSerializer


class DoctorViewSet(viewsets.ModelViewSet):

    queryset = models.Doctor.objects.all()
    serializer_class = serializers.DoctorSerializer


class PatientViewSet(viewsets.ModelViewSet):

    queryset = models.Patient.objects.all()
    serializer_class = serializers.PatientSerializer


class AppointmentViewSet(viewsets.ModelViewSet):

    queryset = models.Appointment.objects.all()
    serializer_class = serializers.AppointmentSerializer
