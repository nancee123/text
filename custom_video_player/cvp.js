var video = document.getElementById('video');
var play = document.getElementById('play');
var replay = document.getElementById('replay');
var progress_start = document.getElementById('progress-start');
var progress = document.getElementById('progress');
function playvideo(){
    if(video.paused){
        video.play();
        play.classList.replace("fa-play","fa-pause");
    }
    else{
        video.pause();
        play.classList.replace("fa-pause","fa-play");
    }
}
video.addEventListener('click',playvideo);
play.onclick = function(e){
    if(video.paused){
        video.play();
        e.target.classList.replace("fa-play","fa-pause");
    }
    else{
        video.pause();
        e.target.classList.replace("fa-pause","fa-play");
    }
}

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}
progress_start.addEventListener('change',setVideoProgress);

replay.onclick = function(e){
    video.currentTime = 0;
    video.pause();
    play.classList.replace("fa-pause","fa-play");
}



function progresstime(){

}