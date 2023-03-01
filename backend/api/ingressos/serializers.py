from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from datetime import datetime
from .models import (Cliente, Organizador, Evento, Categoria, CompraIngresso)

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = "__all__"

class OrganizadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organizador
        fields = "__all__"

class EventoSerializer(serializers.ModelSerializer):
    # def save(self):
    #     nome = self.validated_data['nome']

    class Meta:
        model = Evento
        fields = "__all__"

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = "__all__"

class VendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompraIngresso
        fields = "__all__"