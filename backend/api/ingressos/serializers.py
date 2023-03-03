from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from datetime import datetime
from .models import (Cliente, Organizador, Evento, Categoria, Compra)

class CadastroSerializer(serializers.ModelSerializer):
    nomeCompleto = serializers.CharField()
    nascimento = serializers.DateField()
    user = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ["nomeCompleto", "nascimento", "user"]

    def get_user(self, obj):
        return {
            "username" : obj.user.username,
            "email" : obj.user.email
        }

class LoginSerializer(serializers.Serializer):
    extra_data = serializers.SerializerMethodField()

    def get_extra_data(self, obj):
        if hasattr(obj, "organizador"):
            id = obj.organizador.id
            nome_completo = obj.organizador.nomeCompleto
            tipo_usuario = "organizador"
            nascimento = obj.organizador.nascimento

        elif hasattr(obj.usuario, "cliente"):
            id = obj.cliente.id
            nome_completo = obj.cliente.nomeCompleto
            tipo_usuario = "cliente"
            nascimento = obj.cliente.nascimento

        return {
            "id": id,
            "tipoUsuario": tipo_usuario,
            "nomeCompleto": nome_completo,
            "nascimento": nascimento
        }

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = "__all__"

class OrganizadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organizador
        fields = "__all__"

class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = "__all__"

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = "__all__"

class CompraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compra
        fields = "__all__"