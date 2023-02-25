from django.http import HttpResponse, JsonResponse
from .models import Student
from .serializers import StudentSerializer


def get_all_students(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many=True)
    return JsonResponse(serializer.data, safe=False)
