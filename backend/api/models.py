from django.db import models
from django_mongodb_backend.fields import ObjectIdAutoField

class CharacterSheet(models.Model):
    id = ObjectIdAutoField(primary_key=True)
    name = models.CharField(max_length=100)
    race = models.CharField(max_length=50)
    class_type = models.CharField(max_length=50)
    level = models.IntegerField(default=1)
    stats = models.JSONField()  # Store attributes like STR, DEX, INT, etc.

    def __str__(self):
        return self.name