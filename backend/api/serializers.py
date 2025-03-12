from rest_framework import serializers
from .models import CharacterSheet

class CharacterSheetSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)  # ✅

    class Meta:
        model = CharacterSheet
        fields = '__all__'
