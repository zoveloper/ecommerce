from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product,Work
from .serializers import ProductSerializer,WorkSerializer

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
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getWorks(request):
    works = Work.objects.all()
    serializer = WorkSerializer(works, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getWorksDetail(request, pk):
    work = Work.objects.get(_id=pk)
    serializer = WorkSerializer(work, many=False)
    return Response(serializer.data)