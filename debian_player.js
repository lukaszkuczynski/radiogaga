exports.play = function(station) {
    console.log('playing station '+station)
    const FIFO = require('fifo-js')
    let fifo = new FIFO('/tmp/mplayer_fifo')
    fifo.write('loadfile http://gr-relay-1.gaduradio.pl/76')
    fifo.close()
}

exports.play_gg_relay = function(gg_id) {
    let url = 'http://gr-relay-1.gaduradio.pl/'+gg_id    
    console.log('playing station by url '+url)
    const FIFO = require('fifo-js')
    let fifo = new FIFO('/tmp/mplayer_fifo')
    let line = 'loadfile '+url
    fifo.write(line)
    fifo.close()
}

exports.stop = function() {
    console.log('stopping')
    const FIFO = require('fifo-js')
    let fifo = new FIFO('/tmp/mplayer_fifo')
    fifo.write('stop')
    fifo.close()
}
