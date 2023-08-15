# Views

## Function based views

Funksiyaga asoslangan viewni yozish uchun DRFda `@api_view` dekoratoridan foydalanamiz.

```python {4}
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view()
def example(request):
    text = "This is example for @api_view"
    return Response(text)
```

Agar viewga murojaat qilinadigan metodlarga cheklov qo'ymoqchi bo'lsak, u holda

```python {4}
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def example(request):
    text = "This is example for @api_view with methods"
    return Response(text)
```

Endi viewga faqat `GET` va `POST` metodlari orqali murojaat qilish mumkin. Yuqoridagi holatda esa viewga istalgan metod
orqali murojaat qilish mumkin.

## Class based views

Klassga asoslangan viewlarda djangodagi `View` o'rniga DRFda `APIView` klassidan foydalanamiz.

```python {4}
from rest_framework.response import Response
from rest_framework.views import APIView

class ExampleView(APIView):
    def get(self, request):
        return Response("This is simple class based view example")
```

Shuningdek DRFdagi klassga asoslangan viewda bir nechta imkoniyatlar mavjud. Masalan viewga murojaat qilish uchun
cheklovlar qo'yish mumkin.

```python {1,6}
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView

class ExampleView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        return Response("You are admin user")
```

Yuqoridagi kodda viewga murojaat qilayotgan foydalanuvchi admin ekanligi tekshiriladi. Agar foydalanuvchi admin
bo'lmasa, huquqi yo'qligi haqida xabar qaytaradi.

::: warning E'tibor bering
Bu holatda admin deganda admin panelga kirish huquqi bor foydalanuvchi nazarda tutilyapti. Super user bo'lishi shart
emas.
:::

Viewga tegishli boshqa o'zgaruvchi va metodlar bilan [bu yerda](../api-reference/views/index.md) tanishishingiz
mumkin.
