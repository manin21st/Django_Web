from rest_framework import viewsets
from .models import SalesPvsrCym
from .serializers import SalesPvsrCymSerializer


class SalesPvsrCymViewSet(viewsets.ModelViewSet):
    queryset = SalesPvsrCym.objects.all()
    serializer_class = SalesPvsrCymSerializer

    # HTTP GET /blog/post/
    # HTTP GET /blog/post/?search=
    def get_queryset(self):
        qs = super().get_queryset()

        search = self.request.query_params.get('search','')
        if search:
            qs = qs.filter(yymm__icontains=search)

        return qs

    # # HTTP GET /blog/post/get_django/
    # @list_route()
    # def get_django(self, request):
    #     qs = self.get_queryset().filter(yymm__icontains='20')
