from django.db import models
from django_mongodb_backend.fields import ObjectIdAutoField

class CharacterSheet(models.Model):
    id                  = ObjectIdAutoField(primary_key=True)
    system              = models.CharField(max_length=50)
    name                = models.CharField(max_length=100)
    race                = models.CharField(max_length=50)
    level               = models.IntegerField(default=1)
    class_type          = models.CharField(max_length=50)
    sub_class           = models.CharField(max_length=50)
    background          = models.CharField(max_length=50)
    alignment           = models.CharField(max_length=50)
    exp                 = models.IntegerField(default=0)
    armor_class         = models.IntegerField(default=10)
    speed               = models.IntegerField(default=30)
    hit_points          = models.IntegerField(default=0)
    hit_points_max      = models.IntegerField(default=0)
    temp_hit_points     = models.IntegerField(default=0)
    hit_dice            = models.CharField(max_length=10, null=True, blank=True)
    stats               = models.JSONField(null=True, blank=True)
    saving_throws       = models.JSONField(null=True, blank=True)
    skills              = models.JSONField(null=True, blank=True) 
    equipment           = models.JSONField(null=True, blank=True)
    languages           = models.JSONField(null=True, blank=True)
    proficiencies       = models.JSONField(null=True, blank=True)
    features            = models.JSONField(null=True, blank=True)
    spells              = models.JSONField(null=True, blank=True)
    notes               = models.TextField(null=True, blank=True)
    

    def __str__(self):
        return self.name