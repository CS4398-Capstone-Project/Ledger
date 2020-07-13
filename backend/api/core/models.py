from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
# Create your models here.


TYPE_CHOICES = (('1.', 'Patient'),( '2.', 'Doctor'))
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    registration_date = models.DateTimeField("date-registered")
    type = models.CharField(default="Doctor or Patient?", max_length=50, choices=TYPE_CHOICES)


    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()

# class Doctor(models.Model):
#     doctor_name = models.CharField(max_length = 50)
#     registration_date = models.DateTimeField("date-registered")
#
#
# class Patient(models.Model):
#     doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
#     patient_name = models.CharField(max_length=50)
#     registration_date = models.DateTimeField("date-registered")
#
#     @property
#     def is_waiting(self):
#         return bool(self.waiting_status)
