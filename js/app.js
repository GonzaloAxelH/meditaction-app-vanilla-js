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
    const video = document.querySelector('.app__clock-video')
    //time display
    const timedisplay = document.querySelector('.app__clock-time');
    const outlineLength = outline.getTotalLength();


    sound1.addEventListener('click', () => {
        audio.setAttribute('src', './sounds/rain.mp3')
        video.setAttribute('src', './video/rain.mp4')
        audio.play();


    })

    sound2.addEventListener('click', () => {
        audio.setAttribute('src', './sounds/beach.mp3')
        video.setAttribute('src', './video/beach.mp4')
        audio.play();
    })



    let fakeDuration = 600;

    btn2.addEventListener('click', () => {
        audio.currentTime = 0;
        fakeDuration = 120;
        let el = fakeDuration - audio.currentTime;
        let sec = Math.floor(el % 60);
        let min = Math.floor(el / 60);
        timedisplay.textContent = `${min}:${sec}`;
    });
    btn5.addEventListener('click', () => {
        fakeDuration = 300
        audio.currentTime = 0;
        let el = fakeDuration - audio.currentTime;
        let sec = Math.floor(el % 60);
        let min = Math.floor(el / 60);
        timedisplay.textContent = `${min}:${sec}`;
    });
    btn10.addEventListener('click', () => {
        fakeDuration = 600
        audio.currentTime = 0;
        let el = fakeDuration - audio.currentTime;
        let sec = Math.floor(el % 60);
        let min = Math.floor(el / 60);
        timedisplay.textContent = `${min}:${sec}`;

    });

    outline.style.strokeDasharray = outlineLength;

    outline.style.strokeDashoffset = outlineLength;
    let togglePlayPause = true;

    playBtn.addEventListener('click', () => {
        togglePlayPause = !togglePlayPause;
        changeStatePlay(togglePlayPause);
    })

    function changeStatePlay(condition) {
        if (condition) {
            audio.pause();
            document.querySelector('.app__clock-play').setAttribute('src', './svg/play.svg');
        } else {
            audio.play();
            document.querySelector('.app__clock-play').setAttribute('src', './svg/pause.svg');

        }

        //event time _> tiempo actual  o currenttime
        audio.addEventListener("timeupdate", (e) => {
            let currentTime = audio.currentTime;
            let elapsed = fakeDuration - currentTime;
            let seconds = Math.floor(elapsed % 60);
            let minutes = Math.floor(elapsed / 60);
            let barraProgress = outlineLength - (currentTime / fakeDuration) * outlineLength;
            outline.style.strokeDashoffset = barraProgress + 1;
            timedisplay.textContent = `${minutes}:${seconds}`;
            console.log(barraProgress)
            if (barraProgress <= 0) {
                barraProgress = 0;
                audio.pause();
                audio.currentTime = 0;
                document.querySelector('.app__clock-play').setAttribute('src', './svg/replay.svg')

            }
        })
    }
}
app();