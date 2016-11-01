var ps = require('ps-node');

exports.kill_by_name = function(name) {
 
    ps.lookup({
        command: name,
        }, function(err, resultList ) {
        if (err) {
            throw new Error( err );
        }
     
        resultList.forEach(function( pro ){
            if( pro ){
                console.log( 'will kill PID: %s, COMMAND: %s, ARGUMENTS: %s', pro.pid, pro.command, pro.arguments );
                process.kill(pro.pid);

            }
        });
    });
}