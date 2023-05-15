from django.contrib.auth.models import User
from django.db import models


class Organizador(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nomeCompleto = models.CharField(max_length=200)
    nascimento = models.DateField()
    instagram = models.CharField(max_length=100, blank=True, null=True)
    cpf = models.CharField(max_length=11, blank=True, null=True)
    rg = models.CharField(max_length=9, blank=True, null=True)

    def __str__(self):
        return self.nomeCompleto

    class Meta:
        verbose_name_plural = "Organizadores"


class Cliente(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nomeCompleto = models.CharField(max_length=200)
    nascimento = models.DateField()

    def __str__(self):
        return self.nomeCompleto


class Categoria(models.Model):
    nome = models.CharField(max_length=200)
    descricao = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nome


def upload_image_evento(instance, filename):
    return f"eventos/{filename}"


class Evento(models.Model):
    nome = models.CharField(max_length=300)
    descricao = models.TextField()
    data = models.DateTimeField()
    pathImg = models.TextField(blank=True, null=True)
    imagem = models.ImageField(blank=True, null=True,
                               upload_to=upload_image_evento)
    publico = models.BooleanField()
    local = models.CharField(max_length=200)
    idadeMinima = models.PositiveIntegerField()
    organizador = models.ForeignKey(
        Organizador, on_delete=models.SET_NULL, null=True)
    categoria = models.ForeignKey(
        Categoria, on_delete=models.SET_NULL, null=True)
    valorIngresso = models.FloatField()
    ingressoTotal = models.PositiveIntegerField()
    ingressoDisponivel = models.PositiveIntegerField()
    vendidos = models.PositiveIntegerField()

    def __str__(self):
        return self.nome


class Compra(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.SET_NULL, null=True)
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE)
    qtdIngresso = models.PositiveIntegerField()
    valorTotal = models.FloatField()
    data = models.DateTimeField()

    def __str__(self):
        return f"{self.cliente} - {self.evento} ({self.data})"
