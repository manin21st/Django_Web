from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('SalesPvsrCym', views.SalesPvsrCymViewSet)

urlpatterns = [
    url('', include(router.urls))
]