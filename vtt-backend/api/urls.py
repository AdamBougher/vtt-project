from django.urls import path
from .views import api_home, get_characters, character_detail

urlpatterns = [
    path("", api_home, name="api-home"),  # `/api/`
    path("characters/", get_characters, name="get-characters"),  # `/api/characters/`
    # ✅ Handles single character update/delete
    path("characters/<int:character_id>/", character_detail, name="character-detail"),
]