from django.shortcuts import render

def homepage(request):
    return render(request, 'index2.html')

def new_content(request):
    return render(request, 'index.html')