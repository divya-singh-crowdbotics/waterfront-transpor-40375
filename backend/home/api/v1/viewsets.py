from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import logout
from rest_framework import serializers, status
from rest_framework.decorators import action
from django.contrib.auth import get_user_model

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)
User = get_user_model()


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})
    

class LogoutViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=['post'])  
    def logout(self,request):
            try:
                token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[-1]
                try:
                    token_obj = Token.objects.get(key=token)
                except Token.DoesNotExist:
                    return Response({'data': 'Log out failed' ,
                                                'status':status.HTTP_400_BAD_REQUEST,
                                                'message':'Token not exists'})
                token_obj.delete()
                try:
                    logout(request)
                except Exception as e:
                    return Response({'data': e,
                                            'status':status.HTTP_400_BAD_REQUEST,
                                            'message':'Logout function Failed'})
                return Response({'data': "User logged out",
                                    'status':status.HTTP_200_OK,
                                    'message':'User logged out'})

              
            except Exception as e:
                return Response({'data': e,
                                    'status':status.HTTP_400_BAD_REQUEST,
                                    'message':'Logout Failed'}) 

