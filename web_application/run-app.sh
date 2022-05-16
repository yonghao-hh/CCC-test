#!/bin/bash

exec python3 ./preprocess_json.py &
exec gunicorn run:app -c ./gunicorn.conf.py