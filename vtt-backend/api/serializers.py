from rest_framework import serializers
from .models import CharacterSheet

class CharacterSheetSerializer(serializers.ModelSerializer):
    class Meta:
        model = CharacterSheet
        fields = "__all__"  # Serialize all fields
