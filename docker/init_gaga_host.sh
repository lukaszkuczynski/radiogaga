mkfifo /tmp/mplayer_fifo
mplayer -slave -input file=/tmp/mplayer_fifo

