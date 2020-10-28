from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    username = models.CharField(max_length=15, blank=False, null=False, unique=True)
    email = models.EmailField(max_length=255, blank=False, null=False, unique=True)
    first_name = models.CharField(max_length=255, blank=False, null=False)
    last_name = models.CharField(max_length=255, blank=False, null=False)

    @property
    def full_name(self):
        return f'{self.first_name} {self.last_name}'
