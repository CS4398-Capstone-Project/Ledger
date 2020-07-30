from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import generics
from rest_framework import filters
#from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from rest_framework_extensions.mixins import NestedViewSetMixin
from . import models
from .models import Appointment
from . import serializers



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

class AppointmentSearchView(generics.ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class = serializers.AppointmentSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['date', 'start_time', 'patient']

class AppointmentOrderView(generics.ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class = serializers.AppointmentSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['date', 'start_time']