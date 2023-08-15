# View in DRF

Djangodan farqli ravishda viewni yozish biroz farq qiladi.

Djangoda view

```python
from django.http import HttpResponse
from django.views import View

class ExampleView(View):
    def get(self, request):
        return HttpResponse("Success")
```

DRFda view

```python
from rest_framework.response import Response
from rest_framework.views import APIView

class ExampleView(APIView):
    def get(self, request):
        return Response("Success")
```
