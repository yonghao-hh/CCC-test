
FROM python:3

COPY . /

# RUN apt update \
#     && apt install -y software-properties-common \
#     && apt update \
#     && add-apt-repository -r ppa:ubuntugis/ppa \
#     && apt update -q\
#     && pip3 uninstall numpy \
#     && apt update \
#     && apt install -y gcc gdal-bin python3-gdal libgdal-dev build-essential python3-dev fiona\
#     && pip install -r requirements.txt

RUN apt-get -y install libc-dev
RUN apt-get -y install build-essential
RUN pip install -U pip
RUN pip install -r requirements.txt

CMD [ "python", "./main.py"]