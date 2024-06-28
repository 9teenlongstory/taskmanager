from django.urls import path, include
from .views import user_login,registr


urlpatterns = [
    path('login/', user_login, name='login'),
    path('regist/',registr, name='regist')
]
