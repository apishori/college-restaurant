from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            return
            #can do something with data 
            #return redirect()
    else:
        form = UserCreationForm()
    return render(request, 'users/register.html', {'form': form})
