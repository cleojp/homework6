var video = document.getElementById(myVideo);

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	vol = document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = (document.querySelector("#volumeSlider").value)/100;
	vol = document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log(document.querySelector("#volume").innerHTML);
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .90;
	console.log("The updated speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .90;
	console.log("The updated speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 5.0;
	if (video.currentTime > video.duration){
		video.currentTime = 0.0;}
	console.log("The current location is " + video.currentTime);}
	);

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
	if (video.muted == false){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Muted");}
	else{
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmuted");}
});