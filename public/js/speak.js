function speak(var msgTxt) {
	var msg = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();
	msg.voice = voices[10]; // Note: some voices don't support altering params
	msg.voiceURI = 'native';
	msg.volume = 1; // 0 to 1
	msg.rate = 0.8; // 0.1 to 10
	msg.pitch = 1; //0 to 2
	msg.text = msgTxt;
	msg.lang = 'en-US';

	msg.onend = function(e) {
	  console.log('Finished in ' + event.elapsedTime + ' seconds.');
	};
	speechSynthesis.speak(msg);
}
function speak(var msgTxt, var msgVolume, var msgSpeed, var msgPitch) {
	var msg = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();
	msg.voice = voices[10]; // Note: some voices don't support altering params
	msg.voiceURI = 'native';
	msg.volume = msgVolume; // 0 to 1
	msg.rate = msgSpeed; // 0.1 to 10
	msg.pitch = msgPitch; //0 to 2
	msg.text = msgTxt;
	msg.lang = 'en-US';

	msg.onend = function(e) {
	  console.log('Finished in ' + event.elapsedTime + ' seconds.');
	};
	speechSynthesis.speak(msg);
}