#!/bin/sh
adduser --disabled-password uvncrep

/root/adv/vncrepeater/repeater /root/adv/vncrepeater/uvncrepeater.ini &
/root/adv/noVNC/utils/websockify/websockify.py --web /root/adv/noVNC/ --target-config=/root/adv/vnctoken/  --log-file=/root/adv/log/info.log --cert /root/adv/noVNC/self.pem  9191
