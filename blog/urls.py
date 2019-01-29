from django.conf.urls import url
from . import views

urlpatterns = [
    url('', views.PostList.as_view()),
    url('<int:pk>/', views.PostDetail.as_view()),
]
