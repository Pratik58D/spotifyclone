console.log("welcome to spotify clone");
//intialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    { songName: "fairtrade", filePath: "songs/1.mp3", coverPath: "cover/cover1.jpg" },
    { songName: "make you way", filePath: "songs/2.mp3", coverPath: "cover/cover2.webp" },
    { songName: "i am kid bella", filePath: "songs/3.mp3", coverPath: "cover/cover3.webp" },
    { songName: "rapper raga", filePath: "songs/4.mp3", coverPath: "cover/cover4.jpg" },
    { songName: "mmm sedhe-mauth", filePath: "songs/5.mp3", coverPath: "cover/cover5.jpg" },
    { songName: "mc insane brother", filePath: "songs/6.mp3", coverPath: "cover/cover6.jpg" },
    { songName: "pehla pyaar", filePath: "songs/7.mp3", coverPath: "cover/cover7.png" },
    { songName: "mood-swing", filePath: "songs/8.mp3", coverPath: "cover/cover8.jpg" },
    { songName: "toota dil", filePath: "songs/9.mp3", coverPath: "cover/cover9.jpg" },
    { songName: "unlock national", filePath: "songs/10.mp3", coverPath: "cover/cover10.jpg" },

]
songItems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


});



//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})

//listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');


    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    //  console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


//to play all on thier repective item

const makesAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');    //yedi naya song play gare
        element.classList.add('fa-play-circle');


    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        //  console.log(e.target);
        makesAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
