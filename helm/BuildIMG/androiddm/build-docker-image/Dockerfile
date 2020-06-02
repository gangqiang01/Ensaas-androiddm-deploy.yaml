FROM openjdk:8-jre-slim
MAINTAINER "androidDM"<gangqiang@advantech.com.cn>
RUN apt-get update
RUN apt-get -y install vim
COPY m2mserver.jar /root/adv/m2mserver.jar
COPY server.conf /root/adv/server.conf
COPY models /root/adv/models
COPY run.sh /root/adv/run.sh 
COPY androidDM /root/adv/androidDM
COPY token /root/adv/token
RUN mkdir /root/adv/solutionAppIcon
EXPOSE 8080
ENTRYPOINT ["/root/adv/run.sh"]
