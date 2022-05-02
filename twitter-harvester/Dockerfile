
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
    && apt install software-properties-common \
    && add-apt-repository -y ppa:ubuntugis/ppa \
    && apt update \
    && apt upgrade \
    && apt install gdal-bin python-gdal python3-gdal libgdal-dev 

# FROM osgeo/gdal:ubuntu-full-3.0.4
# Install other packages
# RUN pip install --no-cache-dir --disable-pip-version-check -r requirements.txt
RUN pip install -r requirements.txt
# Run twitter harvester
CMD [ "python", "./main.py"]