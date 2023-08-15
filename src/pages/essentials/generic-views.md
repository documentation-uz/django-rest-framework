# Generic views

Takrorlanadigan kodlarni oldini olish va dasturchi natijaga oson erishishi uchun generic viewlardan foydalaniladi.

`APIView` orqali ma'lumotlar ro'yxatini olish kodini yozadigan bo'lsak

```python
from rest_framework.response import Response
from rest_framework.views import APIView

from my_app.models import Product
from my_app.serializers import ProductListSerializer

class ProductListView(APIView):
    def get(self, request):
        queryset = Product.objects.all()
        serializer = ProductListSerializer(queryset, many=True)
        return Response(serializer.data)
```

E'tibor bersangiz agar boshqa modelning ma'lumotlari ro'yxatini olish kodini yozadigan bo'lsak, queryset va serializer
klassini o'zgartirish yetarli. Qolgan kodlar esa takrorlanadi. Shuni oldini olish uchun DRFda `ListAPIView` klassi bor.

Ma'lumotlar ro'yxatini `ListAPIView` orqali olish

```python
from rest_framework.generics import ListAPIView
from my_app.serializers import ProductListSerializer

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
```

Faqatgina `queryset` va `serializer_class` qiymatlarini berish orqali Product modelining ma'lumotlarini olish mumkin.

Xuddi shunday endi ma'lumot qo'shish uchun `CreateAPIView`dan foydalaniladi.

```python
from rest_framework.generics import CreateAPIView
from my_app.serializers import ProductCreateSerializer

class ProductCreateView(CreateAPIView):
    serializer_class = ProductCreateSerializer
```

CreateAPIView uchun esa faqat `serializer_class` qiymatini berish yetarli.

Generic viewlar va ularning to'liq ro'yxati bilan [bu yerda](../api-reference/generic-views/index.md) tanishib
chiqishingiz mumkin.
