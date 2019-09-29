module.exports = function GmDetector(dispatch) {
	const command = dispatch.command || dispatch.require.command;
	dispatch.hook('S_SPAWN_USER', 15, event => {
        if (event.gm) {
            let message = '[GM] ' + event.name + ' Detected!';
            if (event.gmInvisible) message += ' (Invisible)';           
            
            // send messages to notice and proxy chat
			dispatch.toClient('S_CHAT', 3, { channel: 21, name: 'GM-Detector', message: message});
            command.message(msg);
            
            // show hidden GMs?
            event.gmInvisible = false;
            return true;
        }
    });
}