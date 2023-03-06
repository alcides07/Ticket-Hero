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
    descricao = models.TextField()

    def __str__(self):
        return self.nome

class Evento(models.Model):
    nome = models.CharField(max_length=300)
    descricao = models.TextField()
    data = models.DateTimeField()
    organizador = models.ForeignKey(Organizador, on_delete=models.SET_NULL, null=True)
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True)
    valorIngresso = models.FloatField()
    ingressoTotal = models.IntegerField()
    ingressoDisponivel = models.IntegerField()

    def __str__(self):
        return self.nome

class Compra(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.SET_NULL, null=True)
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE)
    qtdIngresso = models.IntegerField()
    valorTotal = models.FloatField()
    data = models.DateTimeField()

    def __str__(self):
        return f"{self.cliente} - {self.evento} ({self.data})"