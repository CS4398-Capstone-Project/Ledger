#!/usr/bin/python
# -*- coding: utf-8 -*-
from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from phonenumber_field.modelfields import PhoneNumberField
from django_localflavor_us.models import USStateField


# Create your models here.
TYPE_CHOICES = (
    ('1', 'Male'),
    ('2', 'Female')
)

TIME_CHOICES = (
    ('1', '7:00am'),
    ('2', '8:00am'),
    ('3', '9:00am'),
    ('4', '10:00am'),
    ('5', '11:00am'),
    ('6', '12:00pm'),
    ('7', '1:00pm'),
    ('8', '2:00pm'),
    ('9', '3:00pm'),
    ('10', '4:00pm'),
    ('11', '5:00pm'),
    )

REPETITION_CHOICES = (
    (0, 'Never'),
    (1, 'Daily'),
    (7, 'Weekly'),
    (31, 'Monthly'), #check this one against months
    (365, 'Yearly') #leap year check
)

class Profile(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    date_registered = models.DateField(null=True, blank=True)
    phone_number = PhoneNumberField(null=True)
    gender = models.CharField(default="Choose Gender", max_length=50, choices=TYPE_CHOICES)
    address_1 = models.CharField(("address"), max_length=128, default="")
    address_2 = models.CharField(("address 2"), max_length=128, blank=True)
    city = models.CharField(("city"), max_length=64, default="")
    state = USStateField(("state"), default="TX")
    zip_code = models.CharField(("zip code"), max_length=5, default="43701")


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
    profile = models.ForeignKey(Profile, null = True, on_delete=models.CASCADE)
    work = models.CharField(max_length=50)

class Patient(models.Model):

    profile = models.ForeignKey(Profile, null = True, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)



class Appointment(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    date = models.DateField(max_length=50)
    start_time = models.CharField(default="Choose Start Time", max_length=50, choices=TIME_CHOICES)
    end_time = models.CharField(default="Choose End Time", max_length=50, choices=TIME_CHOICES)
    location = models.CharField(max_length=64, default="")
#    repeat = models.IntegerField(choices=REPETITION_CHOICES)
