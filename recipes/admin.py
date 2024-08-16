from django.contrib import admin
from .models import Category, Recipe

class RecipeAdmin(admin.ModelAdmin):
    list_display = ('dish_name', 'category', 'image')
    fields = ('dish_name', 'description', 'ingredients', 'cooking_method', 'image', 'category')

admin.site.register(Category)
admin.site.register(Recipe, RecipeAdmin)
