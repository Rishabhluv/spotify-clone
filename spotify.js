console.log("SPOTIFY CLONE");
let songindex = 0;
let audioelement = new Audio('1.mp3');
let masterplay = document.getElementById("masterplay");
let progressbar = document.getElementById("progressbar");
let mastersongname = document.getElementById("mastersongname");
let song = [
    { songname: "Godzila", filepath: "1.mp3", coverpath: "Cover/1.jpg" },
    { songname: "All Girl Same", filepath: "2.mp3", coverpath: "Cover/1.jpg" },
    { songname: "Lucid Dream", filepath: "3.mp3", coverpath: "Cover/1.jpg" },
    { songname: "Roberry", filepath: "4.mp3", coverpath: "Cover/1.jpg" },
    { songname: "Life a MSS", filepath: "5.mp3", coverpath: "Cover/1.jpg" },
    { songname: "Goosebumps", filepath: "6.mp3", coverpath: "Cover/1.jpg" },
    { songname: "Suicidal", filepath: "7.mp3", coverpath: "Cover/1.jpg" },
    { songname: "Industry baby", filepath: "8.mp3", coverpath: "Cover/1.jpg" },
    { songname: "Without Me", filepath: "9.mp3", coverpath: "Cover/1.jpg" },

]
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    } else {
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
})
audioelement.addEventListener('timeupdate', () => {
    console.log("progression");
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    console.log(progress);
    progressbar.value = progress;
})
progressbar.addEventListener('change', () => {
    audioelement.currentTime = progressbar.value * audioelement.duration / 100;
})
const makeallplay = () => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
let playofsong = Array.from(document.getElementsByClassName("songitemplay"));
playofsong.forEach((element) => {
    element.addEventListener('click', (e) => {

        makeallplay();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src = songindex + '.mp3';
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        mastersongname.innerText = song[songindex - 1].songname;

    })
})

document.getElementById('next').addEventListener('click', () => {
    console.log("ii");
    if (songindex == 9) {
        songindex = 1;
    }
    else {
        songindex += 1;
    }
    mastersongname.innerText = song[songindex - 1].songname;
    audioelement.src = songindex + '.mp3';
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
document.getElementById('back').addEventListener('click', () => {
    if (songindex <= 1) {
        songindex = 9;
    }
    else {
        songindex--;
    }
    mastersongname.innerText = song[songindex - 1].songname;
    audioelement.src = songindex + '.mp3';
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})