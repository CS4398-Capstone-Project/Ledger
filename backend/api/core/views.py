from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
#from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from rest_framework_extensions.mixins import NestedViewSetMixin
from . import models
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

    queryset = models.Appointment.objects.all().order_by('date', 'time_start', 'patient')
    serializer_class = serializers.AppointmentSerializer

#def FilterView(request):
#  queryset = models.Appointment.objects.all()
#  date_exact_query = request.GET.get('date')
#  time_start_exact_query = request.GET.get('time start')
#  patient_exact_query = request.GET.get('patient')

#    if date_exact_query != ' ' and date_exact_query is not None:
#        queryset = queryset.filter(date__iexact = date_exact_query)

#    elif time_start_exact_query != ' ' and time_start_exact_query is not None:
#        queryset = queryset.filter(time_start__iexact = time_start_exact_query)

#    elif patient_exact_query != ' ' and patient_exact_query is not None:
#        queryset = queryset.filter(patient__iexact = patient_exact_query)

#    return render(request, "index.html",{})