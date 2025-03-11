# Generated by Django 5.1.7 on 2025-03-11 05:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CharacterSheet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('race', models.CharField(max_length=50)),
                ('class_type', models.CharField(max_length=50)),
                ('level', models.IntegerField(default=1)),
                ('stats', models.JSONField()),
            ],
        ),
    ]
