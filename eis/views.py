from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response

from .models import SalesPvsrCym
from .serializers import SalesPvsrCymSerializer


def login(request):
    return render(request, 'main/login.html', {})


class SalesPvsrCymViewSet(viewsets.ModelViewSet):
    queryset = SalesPvsrCym.objects.all()
    serializer_class = SalesPvsrCymSerializer

    # HTTP GET /eis/SalesPvsrCym/
    # HTTP GET /eis/SalesPvsrCym/?search=
    def get_queryset(self):
        qs = super().get_queryset()

        search = self.request.query_params.get('search','')
        if search:
            qs = qs.filter(yymm__icontains=search)

        return qs

    # HTTP GET /eis/SalesPvsrCym/get_django/
    @list_route()
    def get_django(self, request):
        qs = self.get_queryset().filter(yymm__icontains='2018')
        serializer = self.get_serializer(qs, many=True)
        return Response(serializer.data)

    # HTTP PATCH /eis/SalesPvsrCym/{pk}/set_modified
    @detail_route(methods=['patch'])
    def set_modified(self, request, pk):
        instance = self.get_object()
        instance.yymm = instance.yymm[0:4] + '01'
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
