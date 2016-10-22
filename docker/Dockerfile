FROM linkerlab/rpi-omxplayer 
MAINTAINER pishon <kuczynskilukasz@gmail.com>

RUN apt-get update && apt-get install curl

RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

RUN apt install -y nodejs

RUN apt-get install git

WORKDIR /root
RUN git clone https://github.com/pishon/radiogaga.git
WORKDIR /root/radiogaga
RUN npm install

ENTRYPOINT ["/bin/sh", "/root/radiogaga/docker/pull_and_start.sh"]



