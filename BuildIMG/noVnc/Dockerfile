FROM jfloff/alpine-python
MAINTAINER "androidDM"<gangqiang@advantech.com.cn>
COPY run.sh /root/adv/run.sh
COPY noVNC /root/adv/noVNC
COPY vnctoken /root/adv/vnctoken
COPY log /root/adv/log

EXPOSE 9191
ENTRYPOINT ["/root/adv/run.sh"]
