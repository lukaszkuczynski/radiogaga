var exec = require('child_process').exec;


exports.play = function(station) {
    console.log('playing station '+station)
}

exports.play_gg_relay = function(gg_id) {
    let url = 'http://gr-relay-1.gaduradio.pl/'+gg_id    
    console.log('playing station by url '+url)

    let command = "loopwin.bat "+ url
    let child = exec(command,
   function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('exec error: ' + error);
      }
   });

        console.log(child.pid);    
    }

exports.stop = function() {
    console.log('stopping - kill')
    process.kill(pid);
}

