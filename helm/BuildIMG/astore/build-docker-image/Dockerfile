FROM openjdk:8-jre-slim
MAINTAINER "androidDM"<gangqiang@advantech.com.cn>
RUN apt-get update
RUN apt-get install -y vim
COPY astore.jar /root/adv/astore.jar
COPY application.properties /root/adv/application.properties
COPY run.sh /root/adv/run.sh

EXPOSE 30001
ENTRYPOINT ["/root/adv/run.sh"]
