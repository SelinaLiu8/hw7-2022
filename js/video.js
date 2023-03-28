var video;
const mutebtn = document.querySelector("#mute");
const slider = document.getElementById("slider");

window.addEventListener("load", function() {
	video = this.document.querySelector(".video");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.volume = slider.value / 100;
	if (mutebtn.innerHTML == "Unmute") {
		video.volume = 0;
	}
	document.querySelector("#volume").innerHTML = `${video.volume * 100}%`;
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
		video.play();
	}
	else {
		video.currentTime += 10;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.volume == 0) {
		video.volume = slider.value / 100;
		mutebtn.innerHTML = "Mute";
		console.log('Volume is: ', video.volume);
	}
	else {
		video.volume = 0;
		mutebtn.innerHTML = "Unmute";
		console.log('Volume is: ', video.volume);
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	mutebtn.innerHTML = "Mute";
	video.volume = slider.value / 100;
	document.querySelector("#volume").innerHTML = `${video.volume * 100}%`;
	console.log('Volume changed to:', video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});

