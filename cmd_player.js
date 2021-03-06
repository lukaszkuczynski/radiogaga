var execFile = require('child_process').execFile;
var fs = require('fs');
var killer = require('./killer')

var _this = this;


exports.play = function(station) {
    console.log('playing station '+station)
    const FIFO = require('fifo-js')
    let fifo = new FIFO('/tmp/mplayer_fifo')
    fifo.write('loadfile http://gr-relay-1.gaduradio.pl/76')
    fifo.close()
}

exports.play_gg_relay = function(gg_id) {
    _this.stop();

    let url = 'http://gr-relay-1.gaduradio.pl/'+gg_id    
    console.log('playing station by url '+url)

    let command = "omxplayer"
    let args = [url]
    let child = execFile(command, args, function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('execFile error: ' + error);
      }
    });

    savePid(child.pid);
}

exports.stop = function() {
  killer.kill_by_name('omxplayer');
  console.log('stopping - kill')    
}

const PID_FILE = 'gaga.pid';

function savePid(pid) {
  console.log('saving pid ' + pid);
  fs.writeFile(PID_FILE, pid);
}
