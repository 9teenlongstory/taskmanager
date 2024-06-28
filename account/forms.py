from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Login' , 'style': 'text-align: center;' }))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Password', 'style': 'text-align: center;' }))

class SignUpForm(forms.Form):
    username = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Login' , 'style': 'text-align: center;' }))
    email= forms.CharField(widget=forms.EmailInput(attrs={'placeholder': 'Email', 'style': 'text-align: center;' }))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Password', 'style': 'text-align: center;' }))
