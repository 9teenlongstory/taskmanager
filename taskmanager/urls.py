from django.contrib import admin
from django.urls import path, include
from django.shortcuts import render
from .views import homepage, new_content

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('account.urls')),
    path('', homepage, name='homepage'),  # Старый контент
    path('new-content/', new_content, name='new_content'),

]   
