# Authentication

Request jo'natgan foydalanuvchini aniqlash uchun `authentication`dan foydalaniladi.

Request jo'natgan foydalanuvchini aniqlash uchun DRFda turli xil authentication klasslari bor.
Bulardan biz `TokenAuthentication`ni ko'rib chiqamiz.

Undan foydalanish uchun `settings.py` faylimizni uni ro'yxatdan o'tkazamiz.

```python
...

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication'
    ]
}
```

Keyin esa `INSTALLED_APPS`ga o'zgartirish kiritamiz.

```python {4}
INSTALLED_APPS = [
    ...,
    'rest_framework',
    'rest_framework.authtoken',
    
    ...
]
```

`rest_framework.authtoken` DRFdagi application bo'lib TokenAuthentication ishlashi ro'yxatdan o'tkazildi.

Oxirgi ro'yxatdan o'tkazilgan application ichida migratsiya fayllari bo'lgani uchun quyidagi komandani ishga tushiramiz.

```bash
./manage.py migrate
```

`rest_framework.authtoken` application ichida `Token` modeli bor. Bu modelda har bir user uchun alohida
takrorlanmaydigan tokenlar saqlanadi.

Biror foydalanuvchi uchun token ajratish:

```python
user = authenticate(username="admin", password="1")

token, _ = Token.objects.get_or_create(user=user)

print(token.key)
```

Request yuborish uchun headersda quyidagi ko'rishda bo'ladi.

```text
Authorization: Token <your_token_key>
```

Masalan

```text
Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b
```

Yana boshqa authentication klasslari haqida ma'lumotni [bu yerda](../api-reference/authentication/index.md) topishingiz
mumkin.
