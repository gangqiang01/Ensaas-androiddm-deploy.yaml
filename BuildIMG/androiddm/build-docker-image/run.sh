#!/bin/sh
export PORT=8080
export APPTYPE=m2mlink
export BSP_IMAGE_SERVER=172.21.73.139
cd /root/adv/
java -jar /root/adv/m2mserver.jar
