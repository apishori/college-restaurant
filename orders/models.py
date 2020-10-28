from django.db import models
from phone_field import PhoneField


class Order(models.Model):
    first_name = models.CharField(max_length=255, blank=False, null=False)
    last_name = models.CharField(max_length=255, blank=False, null=False)
    email = models.EmailField(max_length=255, blank=False, null=False)
    phone = PhoneField(blank=False, null=False)
    # Time order is ready

class Sandwich(models.Model):
    SOURDOUGH = 1
    WHITE = 2
    BROWN = 3
    RYE = 4

    BREAD_CHOICES = ((SOURDOUGH, 'Sourdough'),
                     (WHITE, 'White'), 
                     (BROWN, 'Brown'), 
                     (RYE, 'Rye'))
    
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='sandwiches')
    bread = models.IntegerField(default=0, choices=BREAD_CHOICES)
    toasted = models.BooleanField(default=False, blank=False, null=False)
