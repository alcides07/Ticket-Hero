from django.contrib import admin
from .models import (Cliente, Organizador, Evento, Categoria, CompraIngresso)

admin.site.register(Cliente)
admin.site.register(Organizador)
admin.site.register(Evento)
admin.site.register(Categoria)
admin.site.register(CompraIngresso)