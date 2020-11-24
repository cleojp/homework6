var video = document.getElementById(myVideo);

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	vol = document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = (document.querySelector("#volumeSlider").value)/100;
	console.log(document.querySelector("#volumeSlider").value)/100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log(document.querySelector("#volume").innerHTML);
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .90;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .90;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 5.0;
	if (video.currentTime >= video.duration){
		video.currentTime = 0.00;
	console.log(video.currentTime);}
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	var element = document.getElementById("myVideo");
	element.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	var element = document.getElementById("myVideo");
	element.classList.remove("oldTime");
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = true;
		document.getElementById("mute").InnerHTML = "Mute";
		console.log("Unmuted");}
	else{
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Muted");
	}
});