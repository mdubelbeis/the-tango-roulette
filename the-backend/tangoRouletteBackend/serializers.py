from rest_framework import serializers
from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'firstName', 'lastName', 'isRemote', 'num_times_chosen']
