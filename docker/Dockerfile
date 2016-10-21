FROM hypriot/rpi-node
RUN apt-get update && apt-get install less && apt-get install nano && apt-get install mc
ENV TERM xterm
WORKDIR /root
RUN git clone https://github.com/pishon/radiogaga
RUN cd radiogaga && npm install
EXPOSE 3000
COPY pull_and_start.sh /root/pull_and_start.sh

WORKDIR /root
ENTRYPOINT ["/bin/sh", "./pull_and_start.sh"]
