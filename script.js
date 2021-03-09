const keys = document.querySelectorAll(".key"),
    note = document.querySelector(".nowplaying"),
    hints = document.querySelectorAll(".hints");

function playNote(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
        key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // not to play sound if another key pressed
    if (!key) return;

    // get note name
    const keyNote = key.getAttribute("data-note");

    // add pressed key animation
    key.classList.add("playing");
    // show note name
    note.innerHTML = keyNote;

    audio.currentTime = 0;
    audio.play();
}

// removes pressed key animation
function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

// shows hints
function hintsOn(e, index) {
    // transition delay depends on key position
    e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);