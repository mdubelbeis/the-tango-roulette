from django.db import models


class Student(models.Model):
    firstName = models.CharField(max_length=25)
    lastName = models.CharField(max_length=25)
    isRemote = models.BooleanField
    num_times_chosen = models.IntegerField
