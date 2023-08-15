# First serializer

Birinchi model tuzib olamiz.

```python
class Product(models.Model):
    name = models.CharField(max_length=50)
    color = models.CharField(max_length=20)
    price = models.PositiveIntegerField()
```

Endi shu model uchun serializer tuzib olamiz.

```python
from rest_framework import serializers

class ProductListSerializer(serializers.Serializer)
    name = serializers.CharField(max_length=50)
    color = serializers.CharField(max_length=20)
    price = serializers.PositiveIntegerField()
```

viewni yozadigan bo'lsak

```python
class ProductListView(APIView):
    def get(self, request):
        queryset = Product.objects.all()
        serializer = ProductListSerializer(queryset, many=True)
        return Response(serializer.data)
```
