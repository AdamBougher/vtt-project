from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import CharacterSheet
from .serializers import CharacterSheetSerializer
import logging

logger = logging.getLogger(__name__)

### GET and POST Character ###

@api_view(['GET', 'POST'])
def get_characters(request):
    if request.method == 'GET':
        logger.info("get_characters view called")
        characters = CharacterSheet.objects.all()
        serializer = CharacterSheetSerializer(characters, many=True)
        logger.info(f"Serialized data: {serializer.data}")
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = CharacterSheetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info(f"Character saved: {serializer.data}")
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        logger.error(f"Error saving character: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "PUT", "DELETE"])
def character_detail(request, character_id):
    try:
        character = CharacterSheet.objects.get(id=character_id)
    except CharacterSheet.DoesNotExist:
        return Response({"error": "Character not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = CharacterSheetSerializer(character)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = CharacterSheetSerializer(character, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        character.delete()
        return Response({"message": "Character deleted successfully"}, status=status.HTTP_204_NO_CONTENT)

## API Home View ##
@api_view(["GET"])
def api_home(request):
    return Response({"message": "API is working!"})
