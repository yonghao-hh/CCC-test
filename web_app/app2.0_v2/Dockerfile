FROM python:3

ADD  . /

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["gunicorn", "run:app", "-c", "./gunicorn.conf.py"]