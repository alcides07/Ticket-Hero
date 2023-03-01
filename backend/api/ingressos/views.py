from django.http import request
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authtoken.models import Token
from .models import Cliente
from .serializers import ClienteSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

    # @action(detail=False, methods=['get'], url_path='', permission_classes=[])
    # def resposta(self, request, pk=None):
    #     queryset = Cliente.objects.all()
    #     serializer = ClienteSerializer(queryset, many=True)
    #     return Response(serializer.data)