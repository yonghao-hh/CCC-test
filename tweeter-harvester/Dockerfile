#
# Cluster and Cloud Computing - Team 2 
# 
# Authors: 
#
#  * Yi Yang (Student ID: 1074365)
#  * Claire Zhang (Student ID: 1080915)
#  * Hengzhi Qiu (Student ID: 1253748)
#  * Terry (Student ID: 955797)
#  * Yonghao Hu (Student ID: 1049814)
#

FROM python:3

ADD . /

# Install dependencies
RUN pip install -r requirements.txt

CMD [ "python", "./searcher.py"]