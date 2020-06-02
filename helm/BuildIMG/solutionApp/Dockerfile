FROM nginx
MAINTAINER "androidDM"<gangqiang@advantech.com.cn>
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ./video_player /usr/share/nginx/html/video_player
COPY ./light_control /usr/share/nginx/html/light_control
COPY ./power_control /usr/share/nginx/html/power_control
COPY ./scan_barcode /usr/share/nginx/html/scan_barcode

EXPOSE 80
