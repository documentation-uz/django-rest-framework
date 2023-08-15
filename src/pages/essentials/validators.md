# Validators

Validatorlar biror cheklov yoki cheklovlar qo'yish uchun ishlatiladi.

Masalan `UniqueValidator`:

```python {1,6}
from rest_framework.validators import UniqueValidator

class CategorySerializer(serializers.ModelSerializer):
    slug = SlugField(
        max_length=100,
        validators=[UniqueValidator(queryset=Category.objects.all())]
    )
    
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']
```

Bu yerda `slug` fieldiga kiritiladigan qiymat ko'rsatilgan `queryset`da yagona bo'lishi kerakligi belgilangan.

Yana biri bu `UniqueTogetherValidator`:

```python {1,7-12}
from rest_framework.validators import UniqueTogetherValidator

class ExampleSerializer(serializers.Serializer):
    class Meta:
        model = Example
        fields = ['id', 'name', 'content', 'color']
        validators = [
            UniqueTogetherValidator(
                queryset=Example.objects.all(),
                fields=['name', 'color']
            )
        ]
```

Bu yerda `name` va `color` juftligi ko'rsatilgan `queryset` uchun yagona bo'lishi kerakligi belgilangan.

Yana boshqa validatorlar va ularning atributlari haqida ma'lumotlarni [bu yerda](../api-reference/validators/index.md)
topishingiz mumkin.
