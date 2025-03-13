function playSound(audio) {
    var sound = new Audio(`sounds/${audio}.mp3`);
    sound.play();
};

function playCustSound() {
    var soundFile = document.getElementById("soundFile").files[0];
    var soundPlayer = document.getElementById("soundPlayer");
    soundPlayer.src = URL.createObjectURL(soundFile);
    soundPlayer.play();
  }