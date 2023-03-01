from django.http import request
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authtoken.models import Token
from .models import Cliente, Organizador, Evento, Categoria, CompraIngresso
from .serializers import ClienteSerializer, OrganizadorSerializer, EventoSerializer, CategoriaSerializer, VendaSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class OrganizadorViewSet(viewsets.ModelViewSet):
    queryset = Organizador.objects.all()
    serializer_class = OrganizadorSerializer

class EventoViewSet(viewsets.ModelViewSet):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class VendaViewSet(viewsets.ModelViewSet):
    queryset = CompraIngresso.objects.all()
    serializer_class = VendaSerializer

    # @action(detail=False, methods=['get'], url_path='', permission_classes=[])
    # def resposta(self, request, pk=None):
    #     queryset = Cliente.objects.all()
    #     serializer = ClienteSerializer(queryset, many=True)
    #     return Response(serializer.data)