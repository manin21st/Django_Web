from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('SalesPvsrCym', views.SalesPvsrCymViewSet)

urlpatterns = [
    url(r'^$', views.login),
    url(r'^data/', include(router.urls)),
    url(r'^dashboard/', views.dashboard, name='dashboard'),
    url(r'^chart/', views.chart, name='chart'),
    url(r'^chart_test/', views.chart_test),
    url(r'^grid_test/', views.grid_test),
]