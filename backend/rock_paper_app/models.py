from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.
class AppUser(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [] # Email & Password are required by default.


class Game(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name= 'games')
    
def check_throw(throw):
    if throw not in {'rock', 'paper', 'scissor'}:
        raise ValidationError('Throw is not of valid type.')
        

class Throw(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name= 'throws')
    type = models.CharField(max_length=30,validators= [check_throw] )
    is_player = models.BooleanField(default = False)



