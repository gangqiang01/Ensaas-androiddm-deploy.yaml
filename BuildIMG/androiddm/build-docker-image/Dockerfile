FROM openjdk:8-jre-slim
MAINTAINER "advantech"<yao.kang@advantech.com.cn>
RUN apt-get update && apt-get install -y bash
RUN sed -i "s/deb.debian.org/mirrors.ustc.edu.cn/g" /etc/apt/sources.list
RUN apt-get update && apt-get install -y locales
RUN sed -ri "s/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/g" /etc/locale.gen
RUN mkdir -p /root/adv
RUN mkdir -p /root/adv/conf
RUN mkdir -p /root/adv/models
RUN mkdir -p /root/adv/androidDM
ADD ./run.sh /root/adv/
ADD ./server.conf /root/adv/
COPY ./m2mserver.jar /root/adv/
COPY ./models/ /root/adv/models
COPY ./androidDM/ /root/adv/androidDM
COPY ./usb.ids /root/adv/
RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8
EXPOSE 8080
ENTRYPOINT ["/root/adv/run.sh"]
