# Requests

Foydalanuvchi tomonidan viewga murojaat qilinganda murojaat bo'yicha qo'shimcha ma'lumotlar ham keladi.

Masalan

```python {6}
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view()
def example(request):
    data = request.data
    return Response(data)
```

`.data` atributida foydalanuvchi tomonidan yuborilgan ma'lumotlar keladi.

Yoki bo'lmasam

```python {6}
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view()
def example(request):
    method = request.method
    return Response(method)
```

`.method` atributida foydalanuvchi qaysi metod bilan murojaat qilayotgani haqida ma'lumot keladi. Masalan (GET,
POST va boshqalar)

Yuqorida asosiy atributlar uchun misol keltirildi. Ularning to'liq ro'yxati
bilan [bu yerda](../api-reference/requests/index.md) tanishib chiqishingiz mumkin.

Original source [here](https://www.django-rest-framework.org/api-guide/requests/)
