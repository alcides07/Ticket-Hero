FROM python:3.10
WORKDIR /backend
COPY requirements.txt /backend/
RUN pip install -r requirements.txt
COPY . . 
EXPOSE 5000
CMD cd api && python3 manage.py migrate && python3 manage.py runserver