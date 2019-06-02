# mediaPlaying
Simple function to detect if a video or audio file is actually playing

Example

<pre>

let video = document.createElement("video");
video.src = "big-buck-bunny.mp4"
video.play();

document.getElementsByTagName("body")[0].appendChild(video);

if(video.playing === false){
  console.log("not playing");
}else{
  console.log("playing");
}

</pre>
