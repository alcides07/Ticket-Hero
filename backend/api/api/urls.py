from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from ingressos.permissions import AllowAny
from drf_yasg.views import get_schema_view as swagger_get_schema_view
from rest_framework import routers
from ingressos import views

app_name = "ingressos"
router = routers.DefaultRouter()

schema_view = swagger_get_schema_view(
    openapi.Info(
        title = "Ingressos API",
        default_version = '1.0.0',
        description = "API para o projeto Ingressos",
    ),
    public = True,
    permission_classes = (AllowAny,),   
)

router.register(r'cliente', views.ClienteViewSet)
router.register(r'organizador', views.OrganizadorViewSet)
router.register(r'evento', views.EventoViewSet)
router.register(r'categoria', views.CategoriaViewSet)
router.register(r'venda', views.VendaViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]