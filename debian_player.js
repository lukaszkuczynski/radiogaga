exports.play = function(station) {
    console.log('playing station '+station)

    spawn = require( 'child_process' ).spawn,
    cmd = spawn('mplayer', ['http://gr-relay-1.gaduradio.pl/76'])

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