from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from datetime import datetime
from .models import (Cliente, Organizador, Evento, Categoria, Compra)

class CadastroSerializer(serializers.ModelSerializer):
    nomeCompleto = serializers.CharField()
    nascimento = serializers.DateField()
    username = serializers.SerializerMethodField()
    email = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ["username", "nomeCompleto", "nascimento", "email"]

    def get_username(self, obj):
         return obj.user.username
    
    def get_email(self, obj):
        return obj.user.email

class LoginSerializer(serializers.Serializer):
    usuario = serializers.SerializerMethodField()

    def get_usuario(self, obj):
        if hasattr(obj, "organizador"):
            id = obj.organizador.id
            nome_completo = obj.organizador.nomeCompleto
            tipo_usuario = "organizador"
            nascimento = obj.organizador.nascimento

        elif hasattr(obj, "cliente"):
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
    categoria = serializers.SerializerMethodField()

    class Meta:
        model = Evento
        fields = "__all__"

    def get_categoria(self, obj):
        return obj.categoria.nome

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = "__all__"

class CompraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compra
        fields = "__all__"