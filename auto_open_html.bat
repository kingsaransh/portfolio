@echo off
echo Opening HTML files in browser...

REM Start the default browser with the index.html file
start "" "%~dp0index.html"

REM If you want to use a specific browser, uncomment and modify one of these lines:
REM start chrome "%~dp0index.html"
REM start firefox "%~dp0index.html"
REM start msedge "%~dp0index.html"

echo Browser launched successfully!
pause 