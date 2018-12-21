var play = document.querySelector("#Play"),
	pause = document.querySelector("#Pause"),
	video = document.querySelector("#mainVideo"),
	progress = document.querySelector("#Progress"),
	volume = document.querySelector("#Volume");


play.addEventListener('click',function(){
	video.play();
});

pause.addEventListener('click',function(){
	video.pause();
});

video.addEventListener('timeupdate',function(){
	progress.value = video.currentTime / video.duration;
});

volume.addEventListener('change',function(e){
	video.volume = e.currentTarget.value / 100;
});