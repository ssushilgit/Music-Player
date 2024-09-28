let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");

song.onloadedmetadata =function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause()
        controlIcon.classList.remove("fa-pause")
        controlIcon.classList.add("fa-play")
    }
    else{
        song.play();
        controlIcon.classList.remove("fa-play")
        controlIcon.classList.add("fa-pause")
    }
}

if(song.play()){
     setInterval(()=>{
        progress.value=song.currentTime;
     },250 )
}

progress.onchange = function (){
    song.play();
    song.currentTime = progress.value;
    controlIcon.classList.remove("fa-pause")
    controlIcon.classList.add("fa-play")
}