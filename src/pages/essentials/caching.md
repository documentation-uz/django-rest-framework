# Caching

Biror viewning unga request yuborilganda qaytaradigan javaobini ma'lum vaqtga muzlatib qo'yib, o'sha vaqt mobaynida
faqat bir xil javob qayataradigan qilish uchun caching ishlatiladi.

```python {1-2,5}
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page

class PostView(APIView):
    @method_decorator(cache_page(60*60*2))
    def get(self, request, format=None):
        content = {
            'title': 'Post title',
            'body': 'Post content'
        }
        return Response(content)
```

Bu yerda get metodi qaytaradigan response `60*60*2` sekundga, boshqacha aytganda `2` soatga muzlatildi.

`cache_page` dekoratori faqat `GET` va `HEAD` responselarini 200 holatida keshlaydi.

Ko'proq ma'lumot uchun [bu yerga](../api-reference/caching/index.md) bosing.
