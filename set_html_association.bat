@echo off
echo Setting HTML file associations...

REM This will open the Windows settings for choosing default apps by file type
start ms-settings:defaultapps

echo Please select your preferred browser for HTML files in the settings window that opens.
echo After selecting, close the settings window and return here.
pause

echo HTML file associations have been updated!
pause 