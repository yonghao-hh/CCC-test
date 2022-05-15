FROM python:3

ADD  . /

RUN pip install -r requirements.txt

CMD ["gunicorn", "run:app", "-c", "./gunicorn.conf.py"]