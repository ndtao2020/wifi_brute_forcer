@echo off

netsh wlan add profile filename=importwifi_test.xml
netsh wlan connect name="BapNu TV" ssid="24:43:e2:9b:64:88" interface="Wi-Fi"
netsh wlan delete profile name="BapNu TV" interface="Wi-Fi"

pause
