from django.urls import path
from . import views

urlpatterns = [
    path('characters/', views.get_characters, name='character_list'),
    path('characters/<str:character_id>/', views.character_detail, name='character_detail'),
    path('', views.api_home, name='api_home'),
]