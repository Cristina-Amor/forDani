let myAudio = new Audio("https://screenapp.io/app/#/shared/lM9n5ibCXJ?embed=true"); // Create an Audio object with the file 'Ceylon.mp3'

window.onload = function() {
    setInterval(GameLoop, 1000 / 10); // Start the game loop when the window is loaded
};

function GameLoop() {
    if (myAudio.paused) { // Check if the audio is paused
        myAudio.play(); // If paused, play the audio
    }
}

