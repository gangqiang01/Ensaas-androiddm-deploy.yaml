#!/bin/bash
rm -r ./light_control/*
rm -r ./power_control/*
rm -r ./scan_barcode/*
rm -r ./video_player/*

cp -r /home/gangqiangsun/MYPROJECT/FRONTEND/solutionApp/videoPlayer-ensaas/dist/* ./video_player/
cp -r /home/gangqiangsun/MYPROJECT/FRONTEND/solutionApp/scanBarcode-ensaas/dist/* ./scan_barcode/
cp -r /home/gangqiangsun/MYPROJECT/FRONTEND/solutionApp/powerControl-ensaas/dist/* ./power_control/
cp -r /home/gangqiangsun/MYPROJECT/FRONTEND/solutionApp/lightControl-ensaas/dist/* ./light_control/

ls -al ./light_control/
ls -al ./power_control/
ls -al ./scan_barcode/
ls -al ./video_player/
