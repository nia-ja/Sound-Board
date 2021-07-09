// const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const audioElements = document.querySelectorAll("audio");

let soundsArray = [];

audioElements.forEach(el => {
    soundsArray.push(el.id);
});

soundsArray.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopAudio();

        document.getElementById(sound).play();
    })

    document.getElementById("buttons").appendChild(btn);
})

function stopAudio() {
    soundsArray.forEach(sound => {
        const audio = document.getElementById(sound);

        audio.pause();
        audio.currentTime = 0;
    })
}

document.getElementById("stop-all").addEventListener("click", () => {
    stopAudio();
})