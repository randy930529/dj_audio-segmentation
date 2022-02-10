from webbrowser import get
from .models import *

from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from rest_framework import status
from django.http import Http404

# Create your views here.


class Post_APIView(APIView):

    def get(self, request, format=None, *args, **kwargs):
        post = AudioFile.objects.all()
        serializer = AudioFileSerializers(post, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        if('name' in request.POST):
            data = request.body
        data = request.data

        serializer = AudioFileSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Post_APIView_Detail(APIView):

    def get_object(self, pk):
        try:
            return AudioFile.objects.get(pk=pk)
        except AudioFile.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        get = self.get_object(pk)
        serializer = AudioFileSerializers(get)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = AudioFileSerializers(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class Get_APIView_Category(APIView):

    def get(self, request, format=None, *args, **kwargs):
        get = Category.objects.all()
        serializer = CategorySerializers(get, many=True)
        return Response(serializer.data)


class Post_APIView_Segment(APIView):

    def get(self, request, format=None, *args, **kwargs):
        post = Segment.objects.all()
        serializer = SegmentSerializers(post, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        if('name' in request.POST):
            data = request.body
        data = request.data

        serializer = SegmentSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Post_APIView_Segment_Detail(APIView):
    def post(self, request, pk, format=None):
        post = Segment.objects.filter(audio=pk).order_by("-id")
        serializer = SegmentSerializers(post, many=True)
        return Response(serializer.data)


class Post_APIView_Delete_Segment(APIView):
    def get_object(self, pk):
        try:
            return Segment.objects.get(pk=pk)
        except Segment.DoesNotExist:
            raise Http404

    def delete(self, request, format=None, *args, **kwargs):
        Segment.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def post(self, request, pk, format=None):
        post = self.get_object(pk)
        if post:
            post.delete()
            return Response({'message': 'Segment was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)
