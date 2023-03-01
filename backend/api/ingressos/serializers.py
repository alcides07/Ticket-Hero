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