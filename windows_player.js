exports.play = function(station) {
    console.log('playing station '+station)

    spawn = require( 'child_process' ).spawn,
    cmd = spawn('powershell', ['-c', '(New-Object Media.SoundPlayer "C:\\Windows\\Media\\notify.wav").PlaySync();'])

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