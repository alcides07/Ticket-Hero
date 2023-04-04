from django.http import request
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from django_filters import rest_framework as filters
from django_filters.rest_framework import DjangoFilterBackend
import datetime
from django.utils import timezone
from rest_framework.decorators import permission_classes
from rest_framework.decorators import action
from rest_framework.authtoken.models import Token
from django.db.models import F
from .permissions import AllowAny, EhCliente, EhOrganizador
from .models import Cliente, Organizador, Evento, Categoria, Compra
from .serializers import ClienteSerializer, OrganizadorSerializer, EventoSerializer, CategoriaSerializer, CompraSerializer, CadastroSerializer, LoginSerializer


class Auth(viewsets.ViewSet):
    serializer_class = None

    @action(detail=False, methods=["post"], basename="auth", permission_classes=[AllowAny])
    def login(self, request):
        usuario = User.objects.filter(username=request.data.get("usuario"))

        if not usuario.exists():
            usuario = User.objects.filter(email=request.data.get("usuario"))
            if not usuario.exists():
                return Response({"erro": "Credenciais inválidas!"}, status=status.HTTP_400_BAD_REQUEST)

        usuario = usuario.first()
        if not usuario.check_password(request.data.get("senha")):
            return Response({"erro": "Credenciais inválidas!"}, status=status.HTTP_400_BAD_REQUEST)

        token, created = Token.objects.get_or_create(user=usuario)
        serializer = LoginSerializer(usuario).data
        serializer['token'] = token.key
        return Response(serializer, status=status.HTTP_200_OK)

    @action(detail=False, methods=["post"], basename="auth", permission_classes=[AllowAny])
    def cadastro(self, request):
        username = request.data.get("usuario")
        senha = request.data.get("senha")
        confirmacaoSenha = request.data.get("confirmacaoSenha")
        tipoUsuario = request.data.get("tipoUsuario")
        nomeCompleto = request.data.get("nomeCompleto")
        email = request.data.get("email")
        nascimento = request.data.get("nascimento")
        instagram = request.data.get("instagram")
        cpf = request.data.get("cpf")
        rg = request.data.get("rg")

        if (senha != confirmacaoSenha):
            return Response({"erro": "Senhas não coincidem!"}, status=status.HTTP_400_BAD_REQUEST)

        if (User.objects.filter(username=username)):
            return Response({"erro": "Esse nome de usuário já está em uso!"}, status=status.HTTP_400_BAD_REQUEST)

        if (User.objects.filter(email=email)):
            return Response({"erro": "Esse e-mail já está em uso!"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(
            username=username, email=email, password=senha)

        if (tipoUsuario.upper() == "O"):
            organizador = Organizador.objects.create(
                user=user, nomeCompleto=nomeCompleto, nascimento=nascimento, instagram=instagram, cpf=cpf, rg=rg)
            usuario = organizador

        elif (tipoUsuario.upper() == "C"):
            cliente = Cliente.objects.create(
                user=user, nomeCompleto=nomeCompleto, nascimento=nascimento)
            usuario = cliente

        serializer = CadastroSerializer(usuario)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ClienteViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer


class OrganizadorViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Organizador.objects.all()
    serializer_class = OrganizadorSerializer


class EventoFilter(filters.FilterSet):
    idadeMinima = filters.NumberFilter(field_name="idadeMinima", lookup_expr='gte')
    idadeMaxima = filters.NumberFilter(field_name="idadeMinima", lookup_expr='lte')
    nome = filters.CharFilter(field_name="nome", lookup_expr='icontains')
    descricao = filters.CharFilter(field_name="descricao", lookup_expr='icontains')

class EventoViewSet(viewsets.ModelViewSet):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = EventoFilter

    def create(self, request):
        self.permission_classes = [permissions.IsAuthenticated, EhOrganizador]
        valorIngresso = request.data.get("valorIngresso")
        ingressoTotal = request.data.get("ingressoTotal")
        nomeCategoria = request.data.get("categoria")

        if (valorIngresso < 0):
            return Response({"Erro": "Valor do ingresso não pode ser negativo!"}, status=status.HTTP_400_BAD_REQUEST)

        if (ingressoTotal <= 0):
            return Response({"Erro": "Não é possível criar um evento com essa quantidade de ingressos!"}, status=status.HTTP_400_BAD_REQUEST)

        categoria = Categoria.objects.filter(nome=nomeCategoria).first()
        if not (categoria):
            categoria = Categoria.objects.create(nome=nomeCategoria)

        evento = Evento.objects.create(
            nome = request.data.get("nome"),
            descricao = request.data.get("descricao"),
            data = request.data.get("data"),
            valorIngresso = valorIngresso,
            ingressoTotal = ingressoTotal,
            vendidos = 0,
            ingressoDisponivel = ingressoTotal,
            organizador = request.user.organizador,
            categoria = categoria,
            local = request.data.get("local"),
            publico = request.data.get("publico"),
            idadeMinima = request.data.get("idadeMinima"),
            pathImg = request.data.get("pathImg"),
        )

        serializer = EventoSerializer(evento)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def update(self, request, pk):
        self.permission_classes = [permissions.IsAuthenticated, EhOrganizador]
        idEvento = request.data.get("id")
        nomeCategoria = request.data.get("categoria")
        valorIngresso = request.data.get("valorIngresso")
        ingressoTotal = request.data.get("ingressoTotal")

        if (valorIngresso < 0):
            return Response({"Erro":"Valor do ingresso não pode ser negativo!"}, status=status.HTTP_400_BAD_REQUEST)

        if (ingressoTotal < 0):
            return Response({"Erro":"Não é possível ter um evento com essa quantidade de ingressos!"}, status=status.HTTP_400_BAD_REQUEST)

        evento = Evento.objects.filter(id=idEvento).first()
        categoria = Categoria.objects.filter(nome = nomeCategoria).first()
        
        if not(categoria):
            categoria = Categoria.objects.create(nome = nomeCategoria)
        
        evento.categoria = categoria
        if (ingressoTotal > evento.ingressoTotal): # Quero mais ingressos ainda
            evento.ingressoDisponivel += (ingressoTotal - evento.ingressoTotal)
            evento.ingressoTotal = ingressoTotal

        elif (ingressoTotal < evento.ingressoTotal): # Quero diminuir a quantidade de ingressos do evento
            if (ingressoTotal < evento.vendidos):
                return Response({"Erro":"Não é possível diminuir ainda mais a quantidade de eventos!"}, status=status.HTTP_400_BAD_REQUEST)

            evento.ingressoTotal = ingressoTotal
            evento.ingressoDisponivel = ingressoTotal - evento.vendidos

        evento.nome = request.data.get("nome")
        evento.descricao = request.data.get("descricao")
        evento.data = request.data.get("data")
        evento.valorIngresso = valorIngresso
        evento.local = request.data.get("local")
        evento.publico = request.data.get("publico")
        evento.idadeMinima = request.data.get("idadeMinima")
        evento.save()
        serializer = EventoSerializer(evento)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @action(detail=True, methods=["get"], permission_classes = [permissions.IsAuthenticated, EhOrganizador])
    def vendas(self, request, pk):
        evento = get_object_or_404(Evento, id = pk)
        vendas = Compra.objects.filter(evento=evento)
        serializer = CompraSerializer(vendas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=False, methods=["get"], permission_classes = [permissions.IsAuthenticated, EhOrganizador])
    def meusEventos(self, request):
        max = request.query_params.get('max', None)
        if max is not None: max = int(max)

        queryset = Evento.objects.filter(
            organizador=request.user.organizador).order_by("data")[:max]
        serializer = EventoSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=False, methods=["get"], permission_classes = [permissions.IsAuthenticated, EhOrganizador])
    def meusEventosHoje(self, request):
        dataAtual = timezone.localtime().date() # Data atual da máquina
        dataTempoAtual = timezone.make_aware(datetime.datetime.combine(dataAtual, datetime.time.min)) # Data atual em formato de fuso horário do projeto
        queryset = Evento.objects.filter(organizador=request.user.organizador, data__date=dataTempoAtual.date())
        serializer = EventoSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=False, methods=["get"], permission_classes=[permissions.IsAuthenticated])
    def eventosPopulares(self, request):
        queryset = Evento.objects.order_by(
            F("ingressoTotal") - F("ingressoDisponivel")).reverse()[:5]
        serializer = EventoSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CategoriaViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class CompraViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Compra.objects.all()
    serializer_class = CompraSerializer

    permission_classes = [EhCliente]
    def create(self, request):  
        qtdIngresso = int(request.data.get("qtdIngresso"))
        evento = get_object_or_404(Evento, id=request.data.get("evento"))

        if (qtdIngresso <= evento.ingressoDisponivel):
            venda = Compra.objects.create(
                qtdIngresso=qtdIngresso,
                valorTotal=qtdIngresso * evento.valorIngresso,
                data=timezone.now(),
                cliente=get_object_or_404(
                    Cliente, id=request.data.get("cliente")),
                evento=evento
            )

            evento.ingressoDisponivel -= venda.qtdIngresso
            evento.vendidos += qtdIngresso
            evento.save()
            serializer = CompraSerializer(venda)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response({"Erro": "Ingressos insuficientes"}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=["get"], permission_classes=[permissions.IsAuthenticated, EhCliente])
    def minhasCompras(self, request):
            queryset = Compra.objects.filter(
                cliente=request.user.cliente).order_by("data")
            serializer = CompraSerializer(queryset, many = True)
            return Response(serializer.data, status=status.HTTP_200_OK)