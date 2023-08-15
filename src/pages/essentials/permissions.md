# Permissions

Viewga murojaat qilishga huquqi bor yoki yo'qligini tekshirish uchun permission ishlatiladi.

```python
from rest_framework.permissions import IsAuthenticated

class ExampleView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response("You authenticated")
```

Bu viewga faqat autentifikatsiyadan o'tgan (tizimga kirgan) foydalanuvchi murojaat qila oladi. Tizimga kirmagan
foydalanuvchi bu viewga murojaat qilgan huquqi yo'qligi haqida xabar qaytadi.

Yana boshqa permission klasslari haqida ma'lumot olish uchun bu yerga bosing.
