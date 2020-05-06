FROM openjdk:8-jdk-alpine
MAINTAINER "androidDM"<gangqiang@advantech.com.cn>
ADD astore.jar /root/adv/astore.jar
ADD application.properties /root/adv/application.properties
ADD run.sh /root/adv/run.sh

EXPOSE 30001
ENTRYPOINT ["/root/adv/run.sh"]
