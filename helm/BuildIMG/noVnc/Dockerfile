FROM jfloff/alpine-python
MAINTAINER "androidDM"<gangqiang@advantech.com.cn>
ADD run.sh /root/adv/run.sh
ADD noVNC /root/adv/noVNC
ADD vnctoken /root/adv/vnctoken
ADD vncrepeater /root/adv/vncrepeater
ADD log /root/adv/log

EXPOSE 5901
EXPOSE 5500

EXPOSE 9191
ENTRYPOINT ["/root/adv/run.sh"]
