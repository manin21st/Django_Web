from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'', views.comment_list),
    url(r'<int:pk>/', views.comment_detail),
]
