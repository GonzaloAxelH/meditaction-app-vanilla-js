const app = () => {
    //buttons duratio
    const btn2 = document.querySelector('.btn-2');
    const btn5 = document.querySelector('.btn-5');
    const btn10 = document.querySelector('.btn-10');
    //play and puse btn
    const playBtn = document.querySelector('.app__clock-play');
    //outline circle
    const outline = document.querySelector('.moving-outline');
    //sounds
    const sound1 = document.querySelector('.sound-1');
    const sound2 = document.querySelector('.sound-2');
    //audio
    const audio = document.querySelector('.app__clock-audio');
    //time display
    const timedisplay = document.querySelector('.app__clock-time');

    const outlineLength = outline.getTotalLength();

    let fakeDuration = 600;
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;
    console.log(outlineLength);
    playBtn.addEventListener('click', () => {
        audio.play();
    })

    //event time _> tiempo actual  o currenttime
    audio.addEventListener("timeupdate", () => {
        let currentTime = audio.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);
        //animate the circle
        console.log(minutes);
        let barraProgress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = barraProgress;
        timedisplay.textContent = `${minutes}:${seconds}`;

    })
}
app();