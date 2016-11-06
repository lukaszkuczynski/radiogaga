var exec = require('child_process').exec;

exports.kill_by_name = function(name) {
 

    var cmd = 'pkill '+name;
    console.log( 'will execute pkill for '+name);

    exec(cmd, function(error, stdout, stderr) {
      if (error) {
        console.log(error);
      }
    });


}