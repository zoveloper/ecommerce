from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .serializers import ProductSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = []
    
    
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getPrdouct(request, pk):
    product = Product.objects.filter(_id=pk)
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)