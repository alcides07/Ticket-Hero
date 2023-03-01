from django.contrib.auth.models import User
from django.db import models

class Organizador(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nomeCompleto = models.CharField(max_length=200)
    nascimento = models.DateField()

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
    descricao = models.TextField()

    def __str__(self):
        return self.nome

class Evento(models.Model):
    nome = models.CharField(max_length=300)
    descricao = models.TextField()
    organizador = models.ForeignKey(Organizador, on_delete=models.SET_NULL, null=True)
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True)
    valorIngresso = models.FloatField()
    ingressoTotal = models.IntegerField()
    ingressoDisponivel = models.IntegerField()

    def __str__(self):
        return self.nome

class CompraIngresso(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.SET_NULL, null=True)
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE)
    qtdIngresso = models.IntegerField()
    valorTotal = models.FloatField()
    dataCompra = models.DateTimeField()

    def __str__(self):
        return f"{self.cliente} - {self.evento} ({self.dataCompra})"