#!/bin/bash
rm m2mserver.jar 
cp /home/gangqiangsun/MYPROJECT/BACKEND/m2m-core-ensaas/leshan-mqtt-server-demo/target/leshan-mqtt-server-demo-1.0.0-ADV-jar-with-dependencies.jar m2mserver.jar
ls -al
rm -r ./androidDM/*
cp -r /home/gangqiangsun/MYPROJECT/FRONTEND/m2mlink-ensaas/dist/* ./androidDM/
ls -al ./androidDM/
