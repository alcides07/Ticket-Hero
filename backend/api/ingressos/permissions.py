from rest_framework import permissions


class AllowAny(permissions.BasePermission):
    """
    Permissão para qualquer usuário.
    """

    def has_permission(self, request, view):
        return True


class EhOrganizador(permissions.BasePermission):
    """
    Permissão para usuários organizadores.
    """

    def has_permission(self, request, view):
        return request.user.is_authenticated and hasattr(request.user, 'organizador')


class EhCliente(permissions.BasePermission):
    """
    Permissão para usuários clientes.
    """

    def has_permission(self, request, view):
        return request.user.is_authenticated and hasattr(request.user, 'cliente')
