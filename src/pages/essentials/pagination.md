# Pagination

Katta hajmdagi querysetni qismlarga ajratib chiqarish uchun paginatsiya ishlatiladi.

Sozlash uchun `settings.py` faylida quyidagi o'zgarishni kiritamiz.

```python
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 12
}
```

Paginatsiya uchun ham bir nechta klasslar mavjud. Yuqorida `PageNumberPagination` klassi misol keltirildi.

Ushbu o'zgartirish qilingandan keyin listga doir generic viewlar paginatsiya bo'lib qaytadi.

https://api.example.org/accounts/ ga murojaat qilinganda dastlabki 12ta ma'lumot qaytadi.

https://api.example.org/accounts/?page=2 ga murojaat qilinganda keyingi 12ta ma'lumot qaytadi.

https://api.example.org/accounts/?page=5 ga murojaat qilinganda beshinchi 12talik ma'lumot qaytadi.

Barcha paginatsiya klasslari haqida ma'lumot olish uchun [bu yerga](../api-reference/pagination/index.md) bosing.
