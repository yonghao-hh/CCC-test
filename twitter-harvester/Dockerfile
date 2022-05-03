
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
RUN pip install -r requirements.txt
# FROM osgeo/gdal:ubuntu-full-3.0.4
# Install other packages
# RUN pip install --no-cache-dir --disable-pip-version-check -r requirements.txt
# RUN pip install -r requirements.txt
# Run twitter harvester
CMD [ "python", "./main.py"]