exports.play = function(station) {
    console.log('playing station '+station)

    spawn = require( 'child_process' ).spawn,
    cmd = spawn("echo 'loadfile http://gr-relay-1.gaduradio.pl/76' > /tmp/mplayer_fifo")

    cmd.stdout.on( 'data', data => {
        console.log( `stdout: ${data}` );
    });

    cmd.stderr.on( 'data', data => {
        console.log( `stderr: ${data}` );
    });

    cmd.on( 'close', code => {
        console.log( `child process exited with code ${code}` );
    });

}

exports.stop = function() {
    console.log('stopping')

    spawn = require( 'child_process' ).spawn,
    cmd = spawn("echo 'stop' /tmp/mplayer_fifo")

    cmd.stdout.on( 'data', data => {
        console.log( `stdout: ${data}` );
    });

    cmd.stderr.on( 'data', data => {
        console.log( `stderr: ${data}` );
    });

    cmd.on( 'close', code => {
        console.log( `child process exited with code ${code}` );
    });

}