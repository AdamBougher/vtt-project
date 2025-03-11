from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import CharacterSheet
from .serializers import CharacterSheetSerializer

### GET and POS T Character ###

@api_view(["GET", "POST"])  # ✅ Now supports both GET and POST
def get_characters(request):
    if request.method == "GET":
        characters = CharacterSheet.objects.all()
        serializer = CharacterSheetSerializer(characters, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = CharacterSheetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(["GET", "PUT", "DELETE"])
def character_detail(request, character_id):
    try:
        character = CharacterSheet.objects.get(id=character_id)
    except CharacterSheet.DoesNotExist:
        return Response({"error": "Character not found"}, status=404)

    if request.method == "GET":
        serializer = CharacterSheetSerializer(character)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = CharacterSheetSerializer(character, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    elif request.method == "DELETE":
        character.delete()
        return Response({"message": "Character deleted successfully"}, status=204)

## API Home View ##
@api_view(["GET"])
def api_home(request):
    return Response({"message": "API is working!"})
