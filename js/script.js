const container = document.getElementById("container");
const musicTitle = document.getElementById("musicTitle");

const prevBtn = document.getElementById("prevBtn");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");

const audio = document.getElementById("song");
const progressBar = document.getElementById("progressBar");
const lineProgress = document.getElementById("lineProgress");

//Titulo das Musicas
const songTitles = ["Imagine Dragond - Thunder","Coldplay - Paradise"];
let songIndex = 0;

//Load musica de inicio
loadSong(songTitles[songIndex]);

//Atualizar Musica
function loadSong(song){
    songTitles.innerText = song;
    audio.src = `audio/${song}.mp3`;
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('playBtn');
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
});

//Funcao playSong
function playSong(){
    musicContainer.classList.add("playBtn");
    playBtn.querySelector('i.fas').classList.remove('fa-play'); 
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.playBtn();
}