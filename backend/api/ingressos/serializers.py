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
        contexto = {}
        tipoUsuario = ""
        if hasattr(request, "organizador"):
            tipoUsuario = "organizador"
            contexto["rg"] = request.organizador.rg
            contexto["cpf"] = request.organizador.cpf
            contexto["instagram"] = request.organizador.instagram

        elif hasattr(request, "cliente"):
            tipoUsuario = "cliente"

        contexto.update({
            "id": getattr(request, tipoUsuario).id,
            "username": request.username,
            "tipoUsuario": tipoUsuario,
            "nomeCompleto": getattr(request, tipoUsuario).nomeCompleto,
            "nascimento": getattr(request, tipoUsuario).nascimento,
            "email": request.email,   
        })
        return contexto

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
        if(hasattr(request.organizador, "nomeCompleto")):
            return request.organizador.nomeCompleto
        else:
            return ""
        
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
