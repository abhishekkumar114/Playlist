// © 2024. shobhitDev All rights reserved.
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Labon ko",
    name: "Labon pe song for komal",
    source:
      "Labon Ko.mp3",
  },
  {
    title: "Tere mast mast do nain",
    name: "tere mast mast do nain song for komal",
    source:
      "tere mst mst do nain.mp3",
  },
  {
    title: "Tu jaane na",
    name: "tu jaane na song for komal",
    source:
      "tu jaane na.mp3",
  },
  {
    title: "sundar sundar",
    name: "sundar sundar song song for komal",
    source:
      "sundar sundar.mp3",
  },
  {
    title: "mai tumhe bhulunga na",
    name: "mai tumhe bhulunga na song for komal",
    source:
      "mai tujhe bhulunga na.mp3",
  },

  {
    title: "mana apna ishq adhura",
    name: "mana apna ishq adhura song for komal",
    source:
      "mana apna ishq adhura.mp3",
  },
  {
    title: "jamaane lg jaaye",
    name: "jamaane lg jaaye for komal",
    source:
      "jamaane lg jaaye.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
// © 2024. shobhitDev All rights reserved.