from django.db import models
from django_mongodb_backend.fields import ObjectIdAutoField

class CharacterSheet(models.Model):
    system              = models.CharField(max_length=50)
    name                = models.CharField(max_length=100)
    race                = models.CharField(max_length=50)
    level               = models.IntegerField(default=1)
    class_type          = models.CharField(max_length=50)
    stats               = models.JSONField(null=True, blank=True)
    

    def __str__(self):
        return self.name