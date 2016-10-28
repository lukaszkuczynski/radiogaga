@echo off
goto actual
set /a loopcount=0
:actual
set /a loopcount=%loopcount% + 1
echo %random% %random% %random% %random%
sleep 1 
if %loopcount%== 100 goto stop
goto actual
:stop
