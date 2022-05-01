
FROM python:3

COPY . /

# Install dependencies
# Install gdal for Fiona installation
RUN sudo apt-get install build-essential \
    && sudo apt install libpq-dev \
    && sudo apt install gdal-bin \
    && sudo apt install libgdal-dev \
    && pip install pygdal==3.0.4.10 

# FROM osgeo/gdal:ubuntu-full-3.0.4
# Install other packages
# RUN pip install --no-cache-dir --disable-pip-version-check -r requirements.txt
RUN pip install -r requirements.txt
# Run twitter harvester
CMD [ "python", "./main.py"]