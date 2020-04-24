FROM nginx
MAINTAINER "androidDM"<gangqiang@advantech.com.cn>
COPY nginx.conf /etc/nginx/conf.d/default.conf
ADD ./video_player /usr/share/nginx/html/video_player
ADD ./light_control /usr/share/nginx/html/light_control
ADD ./power_control /usr/share/nginx/html/power_control
ADD ./scan_barcode /usr/share/nginx/html/scan_barcode

EXPOSE 80
