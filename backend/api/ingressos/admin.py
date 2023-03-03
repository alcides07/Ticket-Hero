from django.contrib import admin
from .models import (Cliente, Organizador, Evento, Categoria, Compra)

admin.site.register(Cliente)
admin.site.register(Organizador)
admin.site.register(Evento)
admin.site.register(Categoria)
admin.site.register(Compra)