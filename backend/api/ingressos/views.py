from django.http import request
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status#, permissions
from rest_framework.response import Response
from django.utils import timezone
from rest_framework.decorators import action
from rest_framework.authtoken.models import Token
from .models import Cliente, Organizador, Evento, Categoria, CompraIngresso
from .serializers import ClienteSerializer, OrganizadorSerializer, EventoSerializer, CategoriaSerializer, VendaSerializer, LoginSerializer

class Auth(viewsets.ViewSet):
    serializer_class = None 

    @action(detail=False, methods=['post'], serializer_class=LoginSerializer, basename="auth")
    def login(self, request):
        usuario = User.objects.filter(username=request.data["usuario"])

        if not usuario.exists():
            return Response({'erro':'Credenciais inválidas'}, status=status.HTTP_400_BAD_REQUEST)

        usuario = usuario.first()
        if not usuario.check_password(request.data["senha"]):
            return Response({'error': 'Credenciais inválidas'}, status=status.HTTP_400_BAD_REQUEST)

        token = Token.objects.create(user=usuario)        
        return Response({"token":token.key}, status=status.HTTP_200_OK)

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

    def create(self, request):  
        qtdIngresso = int(request.data["qtdIngresso"])
        evento = get_object_or_404(Evento, id = request.data["evento"])

        if (qtdIngresso <= evento.ingressoDisponivel):
            venda = CompraIngresso.objects.create(
                qtdIngresso = qtdIngresso,
                valorTotal = qtdIngresso * evento.valorIngresso,
                dataCompra = timezone.now(),
                cliente = get_object_or_404(Cliente, id = request.data["cliente"]),
                evento = evento
            )
            
            evento.ingressoDisponivel -= venda.qtdIngresso
            evento.save()
            serializer = VendaSerializer(venda)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response({"Erro":"Ingressos insuficientes"}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['get'])
    def minhasCompras(self, request):
        pass