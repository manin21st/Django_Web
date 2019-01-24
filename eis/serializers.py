from rest_framework import serializers
from .models import SalesPvsrCym


class SalesPvsrCymSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalesPvsrCym
        fields = '__all__'
