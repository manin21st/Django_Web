from django.conf.urls import url
from . import views

urlpatterns = [
    url('', views.comment_list),
    url('<int:pk>/', views.comment_detail),
]
