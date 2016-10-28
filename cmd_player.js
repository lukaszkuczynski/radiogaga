var exec = require('child_process').exec;
var fs = require('fs');


exports.play = function(station) {
    console.log('playing station '+station)
    const FIFO = require('fifo-js')
    let fifo = new FIFO('/tmp/mplayer_fifo')
    fifo.write('loadfile http://gr-relay-1.gaduradio.pl/76')
    fifo.close()
}

exports.play_gg_relay = function(gg_id) {
    killByPid();

    let url = 'http://gr-relay-1.gaduradio.pl/'+gg_id    
    console.log('playing station by url '+url)

    let command = "omxplayer "+ url
    let child = exec(command, function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('exec error: ' + error);
      }
    });

    savePid(child.pid);
}

exports.stop = function() {
  killByPid();
  console.log('stopping - kill')
    
}

const PID_FILE = 'gaga.pid';

function savePid(pid) {
  console.log('saving pid ' + pid);
  fs.writeFile(PID_FILE, pid);
}

function killByPid() {
  try {
    var pid = fs.readFileSync(PID_FILE);
    console.log('will kill by pid = '+pid);
    process.kill(pid);
  } catch(e) {
    console.log("error while killing " + e);
  }
}
