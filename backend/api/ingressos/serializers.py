from rest_framework import serializers
from django.contrib.auth.models import User
from .models import (Cliente, Organizador, Evento, Categoria, Compra)

class CadastroSerializer(serializers.ModelSerializer):
    nomeCompleto = serializers.CharField()
    nascimento = serializers.DateField()
    username = serializers.SerializerMethodField()
    email = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ["username", "nomeCompleto", "nascimento", "email"]

    def get_username(self, request):
         return request.user.username
    
    def get_email(self, request):
        return request.user.email

class LoginSerializer(serializers.Serializer):
    usuario = serializers.SerializerMethodField()

    def get_usuario(self, request):
        if hasattr(request, "organizador"):
            id = request.organizador.id
            nomeCompleto = request.organizador.nomeCompleto
            tipoUsuario = "organizador"
            nascimento = request.organizador.nascimento

        elif hasattr(request, "cliente"):
            id = request.cliente.id
            nomeCompleto = request.cliente.nomeCompleto
            tipoUsuario = "cliente"
            nascimento = request.cliente.nascimento

        return {
            "id": id,
            "username": request.username,
            "tipoUsuario": tipoUsuario,
            "nomeCompleto": nomeCompleto,
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
    nomeOrganizador = serializers.SerializerMethodField()

    class Meta:
        model = Evento
        fields = "__all__"

    def get_categoria(self, request):
        return request.categoria.nome
    
    def get_nomeOrganizador(self, request):
        return request.organizador.nomeCompleto

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = "__all__"

class CompraSerializer(serializers.ModelSerializer):
    nomeCliente = serializers.SerializerMethodField()
    evento = EventoSerializer()

    class Meta:
        model = Compra
        fields = "__all__"

    def get_nomeCliente(self, request):
        return (request.cliente.nomeCompleto)
