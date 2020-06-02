FROM jfloff/alpine-python
MAINTAINER "androidDM"<gangqiang@advantech.com.cn>
COPY run.sh /root/adv/run.sh
COPY noVNC /root/adv/noVNC
COPY vnctoken /root/adv/vnctoken
COPY vncrepeater /root/adv/vncrepeater
COPY log /root/adv/log

EXPOSE 5901
EXPOSE 5500

EXPOSE 9191
ENTRYPOINT ["/root/adv/run.sh"]
