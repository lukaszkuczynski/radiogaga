cd /root/radiogaga
mkfifo /tmp/mplayer_fifo
mplayer -slave -quiet -input file=/tmp/mplayer_fifo -idle &
npm start
