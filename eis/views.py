from rest_framework import viewsets
from .models import SalesPvsrCym
from .serializers import SalesPvsrCymSerializer


class SalesPvsrCymViewSet(viewsets.ModelViewSet):
    queryset = SalesPvsrCym.objects.all()


serializer_class = SalesPvsrCymSerializer
