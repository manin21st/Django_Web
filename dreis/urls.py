from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.login),
    url('404/', views.e404, name='404'),
    url('blank/', views.blank, name='blank'),
    url('buttons/', views.buttons, name='buttons'),
    url('cards/', views.cards, name='cards'),
    url('charts/', views.charts, name='charts'),
    url('forgot-password/', views.forgot_password, name='forgot-password'),
    url('index/', views.index, name='index'),
    url('login/', views.login, name='login'),
    url('register/', views.register, name='register'),
    url('tables/', views.tables, name='tables'),
    url('utilities-color/', views.utilities_color, name='utilities-color'),
    url('utilities-border/', views.utilities_border, name='utilities-border'),
    url('utilities-animation/', views.utilities_animation, name='utilities-animation'),
    url('utilities-other/', views.utilities_other, name='utilities-other'),
]
