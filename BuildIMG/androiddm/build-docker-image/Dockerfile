FROM openjdk:8-jdk-alpine
MAINTAINER "androidDM"<gangqiang@advantech.com.cn>
ADD m2mserver.jar /root/adv/m2mserver.jar
ADD server.conf /root/adv/server.conf
ADD models /root/adv/models
ADD run.sh /root/adv/run.sh 
ADD androidDM /root/adv/androidDM
EXPOSE 8080
ENTRYPOINT ["/root/adv/run.sh"]
