var AudioManager = (function () {

    var AUDIO_DIR = './audio/';

    function makeAudio (soundFile) {
        return new Audio(AUDIO_DIR + soundFile);
    }

    var beepSound = makeAudio('beep.ogg');

    return {
        playBounceSound: function () {
            beepSound.play();
        }
    }
})();
