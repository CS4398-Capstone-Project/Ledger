from django.db import models

# Create your models here.
class Doctor(models.Model):
    doctor_name = models.CharField(max_length = 50)
    registration_date = models.DateTimeField("date-registered")


class Patient(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    patient_name = models.CharField(max_length=50)
    registration_date = models.DateTimeField("date-registered")

    @property
    def is_waiting(self):
        return bool(self.waiting_status)
