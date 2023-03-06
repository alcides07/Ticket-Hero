Use python ou python3 para os comandos conforme necessário.

#### Passo 1:
```
cd backend
```

#### Passo 2:
```
python -m venv venv
```

#### Passo 3.1 (Linux):
```
. venv/bin/activate
```

#### Passo 3.2 (Windows):
```
venv/Scripts/activate
```

#### Passo 4:
```
pip install -r requirements.txt
```

#### Passo 5:
```
cd api
```

#### Passo 6:
```
python manage.py makemigrations
```

#### Passo 7:
```
python manage.py migrate
```

#### Passo 8:
```
python manage.py runserver
```
