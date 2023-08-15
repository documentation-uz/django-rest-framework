# Responses

Djangoda biz `HttpResponse`ni ishlatgan bo'lsak, DRFda uning o'rniga `Response` klassidan foydalanamiz.

```python {7}
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view()
def example(request):
    text = "This is example text for Response"
    return Response(text)
```

Backenddan javob qaytganda status kod ham keladi. Masalan, (`200`, `201`, `404`, `502` va boshqalar)

`Response` klassida status kodni qaytarish uchun `status` atributidan foydalanamiz.

```python {7}
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view()
def example(request):
    text = "This is example text for Response"
    return Response(text, status=200)
```

Masalan ma'lumot qo'shilsa, `status=201` qilib qaytariladi. Yoki ma'lumot o'chirilsa, `status=204` bo'ladi.

Agar hech qanday `status` qiymat belgilanmasa, `200` qiymati qaytadi.

`status` qiymati boshqacha ko'rinishda belgilasa ham bo'ladi.

```python {1,8}
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view()
def example(request):
    text = "This is example text for Response"
    return Response(text, status=status.HTTP_200_OK)
```

Shuningdek, `Response` klassi `HttpResponse` klassining xususiyatlarini ham o'z ichiga oladi.

Yuqorida asosiy atributlar uchun misol keltirildi. Ularning to'liq ro'yxati
bilan [bu yerda](../api-reference/responses/index.md) tanishib chiqishingiz mumkin.
