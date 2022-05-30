#!/bin/bash
rm m2mserver.jar 
cp /home/gangqiangsun/MYPROJECT/BACKEND/DeviceLink-ensaas-merge/leshan-mqtt-server-demo/target/leshan-mqtt-server-demo-1.0.0-ADV-jar-with-dependencies.jar m2mserver.jar
ls -al
rm -r ./androidDM/*
cp -r /home/gangqiangsun/MYPROJECT/FRONTEND/devicelink-ensaas-merge/dist/* ./androidDM/
ls -al ./androidDM/
