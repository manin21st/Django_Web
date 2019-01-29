from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'', views.PostList.as_view()),
    url(r'<int:pk>/', views.PostDetail.as_view()),
]
