var video;
const mutebtn = document.querySelector("#mute");
const slider = document.getElementById("slider");

window.addEventListener("load", function() {
	video = this.document.querySelector(".video");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	if (mutebtn.innerHTML == "Mute") {
		video.volume = slider.value / 100;
	}
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
	if (mutebtn.innerHTML == "Mute") {
		video.volume = 0;
		mutebtn.innerHTML = "Unmute";
	}
	else {
		mutebtn.innerHTML = "Mute";
		video.volume = document.getElementById("slider").value / 100;
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	if (mutebtn.innerHTML == "Mute") {
		video.volume = slider.value / 100;
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});

