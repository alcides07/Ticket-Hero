from rest_framework import permissions

class AllowAny(permissions.BasePermission):
    """
    Permissão para qualquer usuário.
    """

    def has_permission(self, request, view):
        return True