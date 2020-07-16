#!/usr/bin/python
# -*- coding: utf-8 -*-
from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from phonenumber_field.modelfields import PhoneNumberField


# Create your models here.

class Profile(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    phone_number = PhoneNumberField(null=True)


@receiver(post_save, sender=User)
def create_user_profile(
    sender,
    instance,
    created,
    **kwargs
    ):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

class Doctor(models.Model):

    doctor_name = models.CharField(max_length=50)
    work = models.CharField(max_length=50)

class Patient(models.Model):

    profile = models.ForeignKey(Profile, null = True, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    registration_date = models.DateTimeField('date-registered')


class Appointment(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    date = models.CharField(max_length=50)
    time_start = models.CharField(max_length=50)
