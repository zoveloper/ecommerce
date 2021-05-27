from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product
from .models import Work


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'
        
class WorkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Work
        fields = '__all__'


