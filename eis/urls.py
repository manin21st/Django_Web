from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('SalesPvsrCym', views.SalesPvsrCymViewSet)

urlpatterns = [
    #url('', include(router.urls)),
    url(r'^$', views.login),
    url('dashboard/', views.dashboard, name='dashboard'),
    url('chart/', views.chart, name='chart'),
    url('chart_test/', views.chart_test),
    url('grid_test/', views.grid_test),
]