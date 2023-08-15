# Filtering

Qidirish, tartiblab chiqarish va shunga o'xshash holatlar filterlash deyiladi.

```python {1,6-7}
from rest_framework.filters import SearchFilter

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    filter_backends = [SearchFilter]
    search_fields = ['name', 'description']
```

Browserda yozish

```text
http://127.0.0.0.1:8000/product/list/?search=tel
```

`name` yoki `description` fieldlarining qiymatlarida `tel` satri qatnashgan obyektlar filterlanadi.

Boshqa filterlash klasslari bo'yicha ma'lumotni [bu yerda](../api-reference/filtering/index.md) topishingiz mumkin.
