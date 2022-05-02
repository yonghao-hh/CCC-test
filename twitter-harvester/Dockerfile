
FROM python:3

COPY . /

# Install dependencies
# Install gdal for Fiona installation
# RUN apt-get update \
#     && aptitude install build-essential \
#     && apt install libpq-dev \
#     && apt install gdal-bin \
#     && apt install libgdal-dev \
#     && install pygdal==3.0.4.10 

RUN apt update \
    && apt install -y software-properties-common \
    && apt update \
    && add-apt-repository -r ppa:ubuntugis/ppa \
    && apt update -q\
    && apt install -y gdal-bin python3-gdal libgdal-dev build-essential python3-dev python3-numpy \
    && apt update gcc

# FROM osgeo/gdal:ubuntu-full-3.0.4
# Install other packages
# RUN pip install --no-cache-dir --disable-pip-version-check -r requirements.txt
RUN pip install -r requirements.txt
# Run twitter harvester
CMD [ "python", "./main.py"]