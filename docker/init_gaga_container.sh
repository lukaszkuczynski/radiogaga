mkfifo /tmp/mplayer_fifo
mplayer -slave -input file=/tmp/mplayer_fifo
cd /radiogaga
npm start
