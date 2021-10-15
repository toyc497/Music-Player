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

//Funcao para atualizar tempo da musica
function setProgress(e){
    const width = this.clientWidth;
    const clickBar = e.offsetX;
    const duration = song.duration;
    song.currentTime = (clickBar/width)*duration;
}

//Funcao updateProgress
function updateProgress(e){
    const {duration,currentTime} = e.srcElement;
    const progressPercent = (currentTime/duration)*100;
    lineProgress.style.width = `${progressPercent}%`;
}

//Funcao para proxima musica
function nextSong(){
    songIndex++;
    if(songIndex > 0){
        songIndex = songIndex;
    }
    song.src = `./audio/${songTitle[songIndex]}.mp3`;
    musicTitle.innerText = `${songTitle[songIndex]}`;
    song.play();
}

//Funcao para musica anterior
function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songIndex;
    }
    song.src = `./audio/${songTitle[songIndex]}.mp3`;
    musicTitle.innerText = `${songTitle[songIndex]}`;
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
    musicTitle.innerText = `${songTitle[songIndex]}`;
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
//ProgressBar update
song.addEventListener("timeupdate",updateProgress);
//Evento ao clicar na barra de progresso
progressBar.addEventListener('click',setProgress);
//Evento para trocar de musica ao acabar
song.addEventListener('ended',nextSong);