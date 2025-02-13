// Love Letter Effect
const loveMessage = "My love, every moment with you is magical. I promise to cherish every kiss, every hug, and every second spent with you. You are my heart, my happiness, and my forever. 💖";
let i = 0;

document.getElementById('start-writing').addEventListener('click', function() {
    let messageBox = document.getElementById('love-message');
    messageBox.innerHTML = "";
    let interval = setInterval(() => {
        if (i < loveMessage.length) {
            messageBox.innerHTML += loveMessage[i];
            i++;
        } else {
            clearInterval(interval);
        }
    }, 100);
});

// Play/Pause Background Music
document.getElementById('play-song').addEventListener('click', function() {
    let music = document.getElementById('background-music');
    if (music.paused) {
        music.play();
        this.textContent = "⏸ Pause Song";
    } else {
        music.pause();
        this.textContent = "🎵 Play Song";
    }
});
