const container = document.getElementById("container");
const musicTitle = document.getElementById("musicTitle");

const prevBtn = document.getElementById("prevBtn");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");

const song = document.getElementById("song");
const progressBar = document.getElementById("progressBar");
const lineProgress = document.getElementById("lineProgress");
//..............................................................
//Título das Músicas
const songTitle = ["imagine-dragons-thunder","coldplay-paradise","imagine-dragons-believer"];
var songIndex = 0;

//Funcao para proxima musica
function nextSong(){
    songIndex++;
    if(songIndex > 0){
        songIndex = songIndex;
    }
    var atual = song.src = `./audio/${songTitle[songIndex]}.mp3`;
    console.log(atual);
    song.play();
}

//Funcao para musica anterior
function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songIndex;
    }
    var atual = song.src = `./audio/${songTitle[songIndex]}.mp3`;
    console.log(atual);
    song.play();
}
 //Play
function pauseMusic(){
    container.classList.remove("play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    song.pause();
}

//Pause
function playMusic(){
    container.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");
    song.play();
}

//Play Song
playBtn.addEventListener('click', () => {
    const isPlaying = container.classList.contains('play');
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
    console.log(isPlaying);
});

//Voltar Musica
prevBtn.addEventListener('click', prevSong);
//Adianta musica
nextBtn.addEventListener('click', nextSong);