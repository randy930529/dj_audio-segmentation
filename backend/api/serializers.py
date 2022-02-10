from pyexpat import model
from rest_framework import serializers
from .models import *


class AudioFileSerializers(serializers.ModelSerializer):
    class Meta:
        model = AudioFile
        exclude = ['created_date', 'updated_date']


class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'parent']


class SegmentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Segment
        fields = ['id', 'color', 'ini', 'end', 'width',
                  'comment', 'audio', 'category', 'sub_category']
