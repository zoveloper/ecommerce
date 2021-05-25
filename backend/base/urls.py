from django.urls import path
from. import views

urlpatterns = [
    path('',views.getRoutes, name="routes"),
    path('products/',views.getPrdoucts, name="products"),
    path('products/<str:pk>',views.getPrdouct, name="product")
]