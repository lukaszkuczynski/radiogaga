exports.play = function(station) {
    console.log('playing station '+station)
    const FIFO = require('fifo-js')
    let fifo = new FIFO('/tmp/mplayer_fifo')
    fifo.write('loadfile http://gr-relay-1.gaduradio.pl/76')
    fifo.close()
}

exports.stop = function() {
    console.log('stopping')
    const FIFO = require('fifo-js')
    let fifo = new FIFO('/tmp/mplayer_fifo')
    fifo.write('stop')
    fifo.close()
}
