from django.urls import path
from base.views import work_views as views

urlpatterns = [
    path('',views.getRoutes, name="routes"),
    path('',views.getWorks, name="Works"),
    path('<str:pk>/',views.getWorksDetail, name="work-detail"),
]