# radiogaga
internet radio for *pi, dockerized

Tested and developed on my raspberry pi 3.

That is going to be first ever fresh media player with very easy GUI and extremely stupid backend. Just for fun in home, not to see how pretty the Node code is.. Because it isn't.

Docker container is being run. After run it executes `pull-and-run` script taking fresh master from remote and running node server. 
Node's express-driver server listens at default port 3000 that is being forwarded in docker run default `run.sh` script.
To run it you just need to have raspberry with docker installed on it. Docker starting from version 1.12 can work natively on RPi without need of hacking
what is nicely described [here](https://www.raspberrypi.org/blog/docker-comes-to-raspberry-pi/)

That's all folks
