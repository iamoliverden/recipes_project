# models.py

from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Recipe(models.Model):
    dish_name = models.CharField(max_length=100, null=False)
    description = models.TextField(max_length=500, null=False)
    ingredients = models.TextField(max_length=2000, null=False)
    cooking_method = models.TextField(max_length=5000, null=False)
    image = models.ImageField(upload_to='recipes/', null=True, blank=True)
    category = models.ForeignKey(Category, related_name='recipes', on_delete=models.CASCADE)

    def __str__(self):
        return self.dish_name
