function playSound(audio) {
    var sound = new Audio(`sounds/${audio}.mp3`);
    sound.play();
};

function playCustSound() {
    var musicFile = document.getElementById("musicFile").files[0];
    var musicPlayer = document.getElementById("musicPlayer");
    musicPlayer.src = URL.createObjectURL(musicFile);
    musicPlayer.play();
  }