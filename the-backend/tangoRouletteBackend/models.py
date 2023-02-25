from django.db import models


class Student(models.Model):
    firstName = models.CharField(max_length=25)
    lastName = models.CharField(max_length=25)
    isRemote = models.BooleanField(default=False)
    num_times_chosen = models.IntegerField(default=0)

    def __str__(self):
        to_string = self.firstName + " " + self.lastName
        return to_string
