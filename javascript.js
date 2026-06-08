document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    // Your Swiper configuration options here
  });
  window.mySwiper = swiper;

  var videoContainer = document.getElementById("video-container");
  var videoPlayer = document.getElementById("video-player");
  var videoSource = document.getElementById("video-source");
  var closeBtn = document.getElementById("close-btn");

  swiper.on("slideChange", function () {
    // Pause video of previously active slide
    var previousSlide = swiper.slides[swiper.previousIndex];
    var previousVideo = previousSlide.querySelector("video");
    if (previousVideo) {
      previousVideo.pause();
    }

    // Play video of current active slide
    var activeSlide = swiper.slides[swiper.activeIndex];
    var video = activeSlide.querySelector("video");
    if (video) {
      video.play();
    }
  });

  swiper.on("slideChangeTransitionEnd", function () {
    // Show video container if active slide is clicked
    var activeSlide = swiper.slides[swiper.activeIndex];
    var videoPath = activeSlide.getAttribute("data-video");
    if (videoPath) {
      videoSource.setAttribute("src", videoPath);
      videoPlayer.load();
      videoContainer.style.display = "block";
      videoPlayer.play();
    }
  });

  closeBtn.addEventListener("click", function () {
    // Hide video container and pause video when close button is clicked
    videoContainer.style.display = "none";
    videoPlayer.pause();
  });

  swiper.on('click', function () {
    // Show video container and play video when the current slide is clicked
    var activeSlide = swiper.slides[swiper.activeIndex];
    var videoPath = activeSlide.getAttribute("data-video");
    if (videoPath) {
      videoSource.setAttribute("src", videoPath);
      videoPlayer.load();
      videoContainer.style.display = "block";
      videoPlayer.play();
    }
  });
});




function toggleClasses(id1, id2) {
  var oiu = document.getElementById(id1);
  var oiu1 = document.getElementById(id2);
  oiu.classList.toggle('active');
  oiu.classList.toggle('inactive');
  oiu1.classList.toggle('active');
  oiu1.classList.toggle('inactive');
}
function change() {
  toggleClasses('homepng', 'homepng1');
}
function chang() {
  toggleClasses('searchpng', 'searchpng1');
}
function chan() {
  toggleClasses('explorepng', 'explorepng1');
}
function cha() {
  toggleClasses('shortpng', 'shortpng1');
}
function ch() {
  toggleClasses('messagepng', 'messagepng1');
}
function c() {
  toggleClasses('heart', 'heart1');
}
function poll() {
  toggleClasses('heartfor', 'heartfor1');
}
function pol() {
  toggleClasses('speachingfor', 'speachingfor1');
}

function po() {
  toggleClasses('sendfor', 'sendfor1');
}

function p() {
  toggleClasses('bookinfor', 'bookinfor1');
}
function pa() {
  toggleClasses('volumefor', 'volumefor1');
}
function a() {
  toggleClasses('h1', 'h11');
}
function ab() {
  toggleClasses('s1', 's11');
}
function abc() {
  toggleClasses('se1', 'se11');
}
function abcd() {
  toggleClasses('b1', 'b11');
}
function abcda() {
  toggleClasses('v1', 'v11');
}
function aa1() {
  toggleClasses('h2', 'h12');
}
function aa2() {
  toggleClasses('s2', 's12');
}
function aa3() {
  toggleClasses('se2', 'se12');
}
function aa4() {
  toggleClasses('b2', 'b12');
}
function aa5() {
  toggleClasses('v2', 'v12');
}
function aa6() {
  toggleClasses('h3', 'h13');
}
function aa7() {
  toggleClasses('s3', 's13');
}
function aa8() {
  toggleClasses('se3', 'se13');
}
function aa9() {
  toggleClasses('b3', 'b13');
}
function aa10() {
  toggleClasses('v3', 'v13');
}
function aa11() {
  toggleClasses('h4', 'h14');
}
function aa12() {
  toggleClasses('s4', 's14');
}
function aa13() {
  toggleClasses('se4', 'se14');
}
function aa14() {
  toggleClasses('b4', 'b14');
}
function aa15() {
  toggleClasses('v4', 'v14');
}
function aa16() {
  toggleClasses('h5', 'h15');
}
function aa17() {
  toggleClasses('s5', 's15');
}
function aa18() {
  toggleClasses('se5', 'se15');
}
function aa19() {
  toggleClasses('b5', 'b15');
}
function aa20() {
  toggleClasses('v5', 'v15');
}
function aa21() {
  toggleClasses('h6', 'h16');
}
function aa22() {
  toggleClasses('s6', 's16');
}
function aa23() {
  toggleClasses('se6', 'se16');
}
function aa24() {
  toggleClasses('b6', 'b16');
}
function aa25() {
  toggleClasses('v6', 'v16');
}
function aa26() {
  toggleClasses('h7', 'h17');
}
function aa27() {
  toggleClasses('s7', 's17');
}
function aa28() {
  toggleClasses('se7', 'se17');
}
function aa29() {
  toggleClasses('b7', 'b17');
}
function aa30() {
  toggleClasses('v7', 'v17');
}
function aa31() {
  toggleClasses('h8', 'h18');
}
function aa32() {
  toggleClasses('s8', 's18');
}
function aa33() {
  toggleClasses('se8', 'se18');
}
function aa34() {
  toggleClasses('b8', 'b18');
}
function aa35() {
  toggleClasses('v8', 'v18');
}
function aa36() {
  toggleClasses('AAA1', 'BBB1');
}
function aa37() {
  toggleClasses('AAA2', 'BBB2');
}
function aa38() {
  toggleClasses('AAA3', 'BBB3');
}
function aa39() {
  toggleClasses('AAA4', 'BBB4');
}
function aa40() {
  toggleClasses('AAA5', 'BBB5');
}
function aa41() {
  toggleClasses('AAA6', 'BBB6');
}
function forkeyboard() {
  var Keypt = document.getElementById("bgKeyboard1");
  var inpo = document.querySelector(".inpo");
  var guo = document.querySelector(".guo");
  var slide = document.querySelector(".slide");
  var footer = document.querySelector(".custom-footer");

  if (!Keypt) return;
  
  // If keyboard is currently open, we close it, otherwise we open it
  const isClosing = Keypt.classList.contains('Monster');
  
  if (isClosing) {
    Keypt.classList.remove('Monster');
    if (inpo) { inpo.style.opacity = '1'; inpo.style.pointerEvents = 'auto'; }
    if (guo) { guo.style.opacity = '1'; guo.style.pointerEvents = 'auto'; }
    if (slide) { slide.style.opacity = '1'; }
    if (footer) { footer.style.opacity = '1'; footer.style.pointerEvents = 'auto'; }
  } else {
    Keypt.classList.add('Monster');
    if (inpo) { inpo.style.opacity = '0'; inpo.style.pointerEvents = 'none'; }
    if (guo) { guo.style.opacity = '0'; guo.style.pointerEvents = 'none'; }
    if (slide) { slide.style.opacity = '0'; }
    if (footer) { footer.style.opacity = '0'; footer.style.pointerEvents = 'none'; }
  }
}

// Zen Sidebar, Theme Engine, and Web Audio Synth Engine
let audioCtx = null;
let zenNode = null;
let isPlayingZen = false;

function toggleMoreSidebar() {
  var sidebar = document.getElementById("moreSidebar");
  sidebar.classList.toggle("open");
}

function initAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function startLofiBeats() {
  initAudioContext();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  let dest = audioCtx.destination;

  // Vinyl crackle noise
  let bufferSize = audioCtx.sampleRate * 2;
  let noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  let output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    let rand = Math.random();
    if (rand > 0.9997) {
      output[i] = rand * 0.35;
    } else {
      output[i] = rand * 0.003;
    }
  }

  let crackleSource = audioCtx.createBufferSource();
  crackleSource.buffer = noiseBuffer;
  crackleSource.loop = true;

  let crackleGain = audioCtx.createGain();
  crackleGain.gain.value = 0.06;

  // Oscillators for soft chords (A min 7 / C maj 7 vibe)
  let osc1 = audioCtx.createOscillator();
  let osc2 = audioCtx.createOscillator();
  let filter = audioCtx.createBiquadFilter();
  let oscGain = audioCtx.createGain();

  osc1.type = 'triangle';
  osc2.type = 'sine';

  osc1.frequency.value = 220;
  osc2.frequency.value = 261.63;

  filter.type = 'lowpass';
  filter.frequency.value = 450;

  let lfo = audioCtx.createOscillator();
  let lfoGain = audioCtx.createGain();
  lfo.frequency.value = 0.12;
  lfoGain.gain.value = 90;

  lfo.connect(lfoGain);
  lfoGain.connect(filter.frequency);

  oscGain.gain.value = 0.1;

  osc1.connect(filter);
  osc2.connect(filter);
  filter.connect(oscGain);

  crackleSource.connect(crackleGain);
  crackleGain.connect(dest);
  oscGain.connect(dest);

  osc1.start();
  osc2.start();
  lfo.start();
  crackleSource.start();

  return {
    stop: function () {
      try { osc1.stop(); } catch (e) { }
      try { osc2.stop(); } catch (e) { }
      try { lfo.stop(); } catch (e) { }
      try { crackleSource.stop(); } catch (e) { }
    }
  };
}

function startRainSound() {
  initAudioContext();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  let dest = audioCtx.destination;
  let bufferSize = audioCtx.sampleRate * 2;
  let noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  let output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  let whiteNoise = audioCtx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;

  let filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 550;

  let gain = audioCtx.createGain();
  gain.gain.value = 0.12;

  whiteNoise.connect(filter);
  filter.connect(gain);
  gain.connect(dest);

  whiteNoise.start();

  return {
    stop: function () {
      try { whiteNoise.stop(); } catch (e) { }
    }
  };
}

function startCafeSound() {
  initAudioContext();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  let dest = audioCtx.destination;
  let bufferSize = audioCtx.sampleRate * 2;
  let noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  let output = noiseBuffer.getChannelData(0);
  let lastOut = 0.0;
  for (let i = 0; i < bufferSize; i++) {
    let white = Math.random() * 2 - 1;
    output[i] = (lastOut + (0.02 * white)) / 1.02;
    lastOut = output[i];
    output[i] *= 3.0;
  }

  let brownNoise = audioCtx.createBufferSource();
  brownNoise.buffer = noiseBuffer;
  brownNoise.loop = true;

  let filter = audioCtx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 320;
  filter.Q.value = 0.8;

  let bufferSizeClink = audioCtx.sampleRate * 1.5;
  let clinkBuffer = audioCtx.createBuffer(1, bufferSizeClink, audioCtx.sampleRate);
  let clinkOut = clinkBuffer.getChannelData(0);
  for (let i = 0; i < bufferSizeClink; i++) {
    if (i === 500) {
      for (let j = 0; j < 800; j++) {
        if (i + j < bufferSizeClink) {
          clinkOut[i + j] = Math.sin(j * 0.48) * Math.exp(-j * 0.012);
        }
      }
    }
  }

  let clinkSource = audioCtx.createBufferSource();
  clinkSource.buffer = clinkBuffer;
  clinkSource.loop = true;

  let clinkGain = audioCtx.createGain();
  clinkGain.gain.value = 0.012;

  let gain = audioCtx.createGain();
  gain.gain.value = 0.25;

  brownNoise.connect(filter);
  filter.connect(gain);
  gain.connect(dest);

  clinkSource.connect(clinkGain);
  clinkGain.connect(dest);

  brownNoise.start();
  clinkSource.start();

  return {
    stop: function () {
      try { brownNoise.stop(); } catch (e) { }
      try { clinkSource.stop(); } catch (e) { }
    }
  };
}

function toggleZenPlayback() {
  var playBtn = document.getElementById("playBtn");
  var statusText = document.getElementById("zenTrackStatus");
  var visualizer = document.getElementById("visualizer");
  var trackName = document.getElementById("zenTrackName");

  if (isPlayingZen) {
    if (zenNode) {
      zenNode.stop();
      zenNode = null;
    }
    isPlayingZen = false;
    playBtn.innerText = "Play";
    statusText.innerText = "Paused";
    statusText.style.color = "#888";
    visualizer.classList.remove("playing");
  } else {
    var selectVal = document.getElementById("soundSelect").value;
    if (selectVal === "lofi") {
      zenNode = startLofiBeats();
      trackName.innerText = "Ambient Lofi Chill";
    } else if (selectVal === "rain") {
      zenNode = startRainSound();
      trackName.innerText = "Soft Rain Loop";
    } else if (selectVal === "cafe") {
      zenNode = startCafeSound();
      trackName.innerText = "Vibrant Cafe Murmur";
    }
    isPlayingZen = true;
    playBtn.innerText = "Pause";
    statusText.innerText = "Playing";
    statusText.style.color = "#ff4d6d";
    visualizer.classList.add("playing");
  }
}

function changeZenSound() {
  if (isPlayingZen) {
    if (zenNode) {
      zenNode.stop();
    }
    var selectVal = document.getElementById("soundSelect").value;
    var trackName = document.getElementById("zenTrackName");
    if (selectVal === "lofi") {
      zenNode = startLofiBeats();
      trackName.innerText = "Ambient Lofi Chill";
    } else if (selectVal === "rain") {
      zenNode = startRainSound();
      trackName.innerText = "Soft Rain Loop";
    } else if (selectVal === "cafe") {
      zenNode = startCafeSound();
      trackName.innerText = "Vibrant Cafe Murmur";
    }
  }
}

function changeVibe(vibeName) {
  var html = document.documentElement;
  var navVibe = document.getElementById("navVibeText");
  var vibeDot = document.querySelector(".vibe-dot");

  document.querySelectorAll('.vibe-btn').forEach(function (btn) {
    btn.classList.remove('active');
  });

  if (vibeName === 'default') document.getElementById('btn-vibe-default').classList.add('active');
  if (vibeName === 'chill') document.getElementById('btn-vibe-chill').classList.add('active');
  if (vibeName === 'sunrise') document.getElementById('btn-vibe-sunrise').classList.add('active');
  if (vibeName === 'twilight') document.getElementById('btn-vibe-twilight').classList.add('active');
  if (vibeName === 'dark-space') document.getElementById('btn-vibe-dark').classList.add('active');

  if (vibeName === 'default') {
    if (navVibe) navVibe.innerText = "Vibe: Original";
    if (vibeDot) vibeDot.style.backgroundColor = "#ff4d6d";
    html.style.setProperty('--vibeColor', '#ff4d6d');
    html.style.setProperty('--globalVibeColor', '#ff4d6d');
    html.style.setProperty('--textColor', '#001f3f');
    html.style.setProperty('--textColorOpposite', '#e0e0e0');
    html.style.setProperty('--baseColor', '#e0e0e0');
    html.style.setProperty('--firstGradientColor', '#f0f0f0');
    html.style.setProperty('--secondGradientColor', '#cacaca');
    html.style.setProperty('--darkColor', '#bebebe');
  } else if (vibeName === 'chill') {
    if (navVibe) navVibe.innerText = "Vibe: Mint Chill";
    if (vibeDot) vibeDot.style.backgroundColor = "#00cc66";
    html.style.setProperty('--vibeColor', '#00cc66');
    html.style.setProperty('--globalVibeColor', '#00cc66');
    html.style.setProperty('--textColor', '#0f3a24');
    html.style.setProperty('--textColorOpposite', '#e2f0e9');
    html.style.setProperty('--baseColor', '#e2f0e9');
    html.style.setProperty('--firstGradientColor', '#ebf5f0');
    html.style.setProperty('--secondGradientColor', '#c8e2d4');
    html.style.setProperty('--darkColor', '#a2cdb6');
  } else if (vibeName === 'sunrise') {
    if (navVibe) navVibe.innerText = "Vibe: Sunset Gold";
    if (vibeDot) vibeDot.style.backgroundColor = "#ff9900";
    html.style.setProperty('--vibeColor', '#ff9900');
    html.style.setProperty('--globalVibeColor', '#ff9900');
    html.style.setProperty('--textColor', '#4a2c00');
    html.style.setProperty('--textColorOpposite', '#faf2e6');
    html.style.setProperty('--baseColor', '#faf2e6');
    html.style.setProperty('--firstGradientColor', '#fdfbf7');
    html.style.setProperty('--secondGradientColor', '#f5e3cd');
    html.style.setProperty('--darkColor', '#e2c098');
  } else if (vibeName === 'twilight') {
    if (navVibe) navVibe.innerText = "Vibe: Rose Twilight";
    if (vibeDot) vibeDot.style.backgroundColor = "#ff3399";
    html.style.setProperty('--vibeColor', '#ff3399');
    html.style.setProperty('--globalVibeColor', '#ff3399');
    html.style.setProperty('--textColor', '#3f001f');
    html.style.setProperty('--textColorOpposite', '#fcf0f5');
    html.style.setProperty('--baseColor', '#fcf0f5');
    html.style.setProperty('--firstGradientColor', '#fef8fa');
    html.style.setProperty('--secondGradientColor', '#f8dbe7');
    html.style.setProperty('--darkColor', '#ebafc9');
  } else if (vibeName === 'dark-space') {
    if (navVibe) navVibe.innerText = "Vibe: Dark Space";
    if (vibeDot) vibeDot.style.backgroundColor = "#9933ff";
    html.style.setProperty('--vibeColor', '#9933ff');
    html.style.setProperty('--globalVibeColor', '#9933ff');
    html.style.setProperty('--textColor', '#e0e0e0');
    html.style.setProperty('--textColorOpposite', '#0d0e15');
    html.style.setProperty('--baseColor', '#0d0e15');
    html.style.setProperty('--firstGradientColor', '#151724');
    html.style.setProperty('--secondGradientColor', '#0a0a0f');
    html.style.setProperty('--darkColor', '#222538');
  }
}

// ==========================================================================
// STATUS/STORIES EXPLORER WINDOW DRAGGING, RESIZING, AND LIGHTBOX VIEW ENGINE
// ==========================================================================
const SVGS = {
  smile: `<svg class="smiley-svg" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="smiley-face" cx="50" cy="50" r="45" fill="#ffcc33" stroke="#0f3a24" stroke-width="4.5"/>
                  <circle class="smiley-eye eye-left" cx="35" cy="40" r="6" fill="#0f3a24"/>
                  <circle class="smiley-eye eye-right" cx="65" cy="40" r="6" fill="#0f3a24"/>
                  <path class="smiley-mouth" d="M30 60 C 40 75, 60 75, 70 60" fill="none" stroke="#0f3a24" stroke-width="5" stroke-linecap="round"/>
                </svg>`,
  blush: `<svg class="smiley-svg" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="smiley-face" cx="50" cy="50" r="45" fill="#ffcc33" stroke="#0f3a24" stroke-width="4.5"/>
                  <path class="smiley-eye eye-left" d="M28 42 C 32 36, 38 36, 42 42" fill="none" stroke="#0f3a24" stroke-width="4.5" stroke-linecap="round"/>
                  <path class="smiley-eye eye-right" d="M58 42 C 62 36, 68 36, 72 42" fill="none" stroke="#0f3a24" stroke-width="4.5" stroke-linecap="round"/>
                  <circle class="smiley-cheek cheek-left" cx="26" cy="52" r="8" fill="#ff66b2" opacity="0.8"/>
                  <circle class="smiley-cheek cheek-right" cx="74" cy="52" r="8" fill="#ff66b2" opacity="0.8"/>
                  <path class="smiley-mouth" d="M32 60 C 40 72, 60 72, 68 60" fill="none" stroke="#0f3a24" stroke-width="4.5" stroke-linecap="round"/>
                </svg>`,
  laugh: `<svg class="smiley-svg" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="smiley-face" cx="50" cy="50" r="45" fill="#ffcc33" stroke="#0f3a24" stroke-width="4.5"/>
                  <circle class="smiley-eye eye-left" cx="34" cy="40" r="6.5" fill="#0f3a24"/>
                  <circle class="smiley-eye eye-right" cx="66" cy="40" r="6.5" fill="#0f3a24"/>
                  <path class="smiley-mouth" d="M28 56 C 28 56, 50 82, 72 56 Z" fill="#ffffff" stroke="#0f3a24" stroke-width="4.5" stroke-linejoin="round"/>
                  <path class="smiley-mouth-tongue" d="M28 56 C 35 60, 65 60, 72 56" fill="none" stroke="#0f3a24" stroke-width="4"/>
                </svg>`
};

const storiesData = [
  { creator: "@alex_creative", avatar: "images/user.png", time: "1h ago", text: "Working on a new glassmorphic web dashboard! 💻✨", gradientClass: "card-bg-gradient-1", svgType: "smile" },
  { creator: "@happy_mind", avatar: "images/user (1).png", time: "2h ago", text: "Always look for the positive side of life! ☀️🌻", gradientClass: "card-bg-gradient-2", svgType: "blush" },
  { creator: "@motion_graphics", avatar: "images/user (2).png", time: "4h ago", text: "Render finished! Dynamic color simulations are ready. 🎨🌀", gradientClass: "card-bg-gradient-3", svgType: "laugh" },
  { creator: "@travel_pulse", avatar: "images/user (3).png", time: "6h ago", text: "Watching the sun slide under the horizon in Bali. 🌅✈️", gradientClass: "card-bg-gradient-4", svgType: "smile" },
  { creator: "@antigravity_dev", avatar: "images/happiness.png", time: "8h ago", text: "New standalone popup works perfectly! 🦾🌌", gradientClass: "card-bg-gradient-5", svgType: "blush" },
  { creator: "@happy_bunny", avatar: "images/happy.png", time: "12h ago", text: "Smiles are contagious! Keep spreading joy. 😁🎈", gradientClass: "card-bg-gradient-6", svgType: "laugh" }
];

let windowThemeIndex = 0;
const windowThemes = ['theme-frosted', 'theme-light', 'theme-dark'];

let activeStoryIndex = 0;
let storyProgressInterval = null;
let storyProgressVal = 0;
let isStoryPaused = false;
const STORY_DURATION = 5000;

function openStoriesExplorer() {
  var win = document.getElementById("storiesExplorer");
  var minBar = document.getElementById("storiesMinimizedBar");

  if (minBar) minBar.style.display = "none";

  if (win) {
    win.style.display = "flex";
    setTimeout(function () {
      win.classList.add("open");
    }, 10);
  }

  renderStoriesGrid(storiesData);
  setupDraggableStoriesWindow();
  setupResizableStoriesWindow();
}

function renderStoriesGrid(data) {
  var grid = document.getElementById("storiesGridContainer");
  if (!grid) return;

  grid.innerHTML = "";

  if (data.length === 0) {
    grid.innerHTML = "<div style='grid-column: 1/-1; text-align: center; font-family: Inter, sans-serif; font-size: 11px; padding: 40px; color: #888;'>No statuses found...</div>";
    return;
  }

  data.forEach(function (item, idx) {
    var card = document.createElement("div");
    card.className = "stories-grid-card " + item.gradientClass;
    card.onclick = function () {
      openStoryLightbox(idx);
    };

    card.innerHTML = `
            <div class="time-badge">${item.time}</div>
            <div class="smiley-svg-wrapper">
              ${SVGS[item.svgType]}
            </div>
            <div class="card-overlay">
              <span class="card-username">${item.creator}</span>
              <span class="card-caption">${item.text}</span>
            </div>
          `;

    grid.appendChild(card);
  });
}

function filterStoriesGrid() {
  var query = document.getElementById("storiesSearchInput").value.toLowerCase();
  var filtered = storiesData.filter(function (item) {
    return item.creator.toLowerCase().includes(query) ||
      item.text.toLowerCase().includes(query);
  });
  renderStoriesGrid(filtered);
}

function toggleGridColumns(cols) {
  var grid = document.getElementById("storiesGridContainer");
  var btn2 = document.getElementById("btn-cols-2");
  var btn3 = document.getElementById("btn-cols-3");

  if (!grid) return;

  if (cols === 2) {
    grid.classList.remove("grid-3-cols");
    grid.classList.add("grid-2-cols");
    if (btn2) btn2.classList.add("active");
    if (btn3) btn3.classList.remove("active");
  } else {
    grid.classList.remove("grid-2-cols");
    grid.classList.add("grid-3-cols");
    if (btn2) btn2.classList.remove("active");
    if (btn3) btn3.classList.add("active");
  }
}

function toggleWindowTheme() {
  var win = document.getElementById("storiesExplorer");
  if (!win) return;

  win.classList.remove(windowThemes[windowThemeIndex]);
  windowThemeIndex = (windowThemeIndex + 1) % windowThemes.length;
  win.classList.add(windowThemes[windowThemeIndex]);
}

function minimizeStories() {
  var win = document.getElementById("storiesExplorer");
  var minBar = document.getElementById("storiesMinimizedBar");

  if (win) {
    win.classList.remove("open");
    setTimeout(function () {
      win.style.display = "none";
      if (minBar) minBar.style.display = "flex";
    }, 300);
  }
}

function restoreStories() {
  var win = document.getElementById("storiesExplorer");
  var minBar = document.getElementById("storiesMinimizedBar");

  if (minBar) minBar.style.display = "none";
  if (win) {
    win.style.display = "flex";
    setTimeout(function () {
      win.classList.add("open");
    }, 10);
  }
}

function closeStories() {
  var win = document.getElementById("storiesExplorer");
  var minBar = document.getElementById("storiesMinimizedBar");

  if (win) win.classList.remove("open");
  setTimeout(function () {
    if (win) win.style.display = "none";
    if (minBar) minBar.style.display = "none";
  }, 300);
}

function popoutStories() {
  window.open("stories-popout.html", "_blank", "width=960,height=720,resizable=yes,scrollbars=yes");
}

// Story Lightbox logic
function openStoryLightbox(index) {
  activeStoryIndex = index;
  var lightbox = document.getElementById("storyLightbox");
  if (lightbox) lightbox.classList.add("open");
  loadStorySlide(activeStoryIndex);
}

function closeStoryLightbox() {
  var lightbox = document.getElementById("storyLightbox");
  if (lightbox) lightbox.classList.remove("open");
  clearInterval(storyProgressInterval);
}

function loadStorySlide(index) {
  clearInterval(storyProgressInterval);
  var item = storiesData[index];
  if (!item) return;

  var avatar = document.getElementById("lightboxAvatar");
  var username = document.getElementById("lightboxUsername");
  var time = document.getElementById("lightboxTime");
  var body = document.getElementById("lightboxBody");
  var container = document.querySelector("#storyLightbox .lightbox-container");

  if (avatar) avatar.src = item.avatar;
  if (username) username.innerText = item.creator;
  if (time) time.innerText = item.time;
  if (container) container.className = "lightbox-container " + item.gradientClass;

  if (body) {
    body.innerHTML = `
            <div class="smiley-svg-wrapper" style="width: 150px; height: 150px; margin-bottom: 24px;">
              ${SVGS[item.svgType]}
            </div>
            <div class="lightbox-status-text">${item.text}</div>
          `;
  }

  var progressContainer = document.getElementById("lightboxProgressBar");
  if (progressContainer) {
    progressContainer.innerHTML = "";
    storiesData.forEach(function (_, sIdx) {
      var segment = document.createElement("div");
      segment.className = "progress-segment";
      var fill = document.createElement("div");
      fill.className = "progress-fill";
      fill.id = "lightbox-fill-" + sIdx;
      if (sIdx < index) {
        fill.style.width = "100%";
      }
      segment.appendChild(fill);
      progressContainer.appendChild(segment);
    });
  }

  storyProgressVal = 0;
  isStoryPaused = false;

  var steps = 100;
  var tickRate = STORY_DURATION / steps;

  storyProgressInterval = setInterval(function () {
    if (!isStoryPaused) {
      storyProgressVal += 1;
      var fillEl = document.getElementById("lightbox-fill-" + index);
      if (fillEl) fillEl.style.width = storyProgressVal + "%";

      if (storyProgressVal >= 100) {
        nextStory();
      }
    }
  }, tickRate);
}

function nextStory() {
  if (activeStoryIndex < storiesData.length - 1) {
    activeStoryIndex++;
    loadStorySlide(activeStoryIndex);
  } else {
    closeStoryLightbox();
  }
}

function prevStory() {
  if (activeStoryIndex > 0) {
    activeStoryIndex--;
    loadStorySlide(activeStoryIndex);
  } else {
    loadStorySlide(activeStoryIndex);
  }
}

function pauseStoryTimer() {
  isStoryPaused = true;
}

function resumeStoryTimer() {
  isStoryPaused = false;
}

function setupDraggableStoriesWindow() {
  var win = document.getElementById("storiesExplorer");
  var header = document.getElementById("storiesDragHeader");
  if (!win || !header) return;

  header.onmousedown = function (e) {
    if (e.target.closest("button")) return;

    e.preventDefault();
    win.classList.add("dragging-active");

    var pos3 = e.clientX;
    var pos4 = e.clientY;

    document.onmousemove = function (e) {
      e.preventDefault();
      var pos1 = pos3 - e.clientX;
      var pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      var newTop = win.offsetTop - pos2;
      var newLeft = win.offsetLeft - pos1;

      if (newTop < 0) newTop = 0;
      if (newLeft < 0) newLeft = 0;
      if (newTop > window.innerHeight - 80) newTop = window.innerHeight - 80;
      if (newLeft > window.innerWidth - 80) newLeft = window.innerWidth - 80;

      win.style.top = newTop + "px";
      win.style.left = newLeft + "px";
    };

    document.onmouseup = function () {
      win.classList.remove("dragging-active");
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
}

function setupResizableStoriesWindow() {
  var win = document.getElementById("storiesExplorer");
  var handle = document.getElementById("storiesResizeHandle");
  if (!win || !handle) return;

  handle.onmousedown = function (e) {
    e.preventDefault();
    win.classList.add("dragging-active");

    var startWidth = win.offsetWidth;
    var startHeight = win.offsetHeight;
    var startX = e.clientX;
    var startY = e.clientY;

    document.onmousemove = function (e) {
      e.preventDefault();
      var newWidth = startWidth + (e.clientX - startX);
      var newHeight = startHeight + (e.clientY - startY);

      if (newWidth >= 350 && newWidth <= window.innerWidth - 50) {
        win.style.width = newWidth + "px";
      }
      if (newHeight >= 300 && newHeight <= window.innerHeight - 50) {
        win.style.height = newHeight + "px";
      }
    };

    document.onmouseup = function () {
      win.classList.remove("dragging-active");
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
}

// ==========================================================================
// HIGH-FIDELITY INTERACTIVE CHATS SYSTEM
// ==========================================================================
const chatsData = {
  "@alex_creative": {
    name: "Alex Creative",
    avatar: "images/user.png",
    vibe: "Sunset Gold",
    vibeColor: "#ff9900",
    status: "online",
    statusText: "Vibe: Sunset Gold • Active",
    time: "12m ago",
    messages: [
      { sender: "contact", text: "Hey! What do you think of the new glassmorphic Status Hub?", time: "1h ago" },
      { sender: "user", text: "It looks absolutely stunning! The squircle cards and live blushing smileys are clean.", time: "45m ago" },
      { sender: "contact", text: "Awesome! The physics-based wiggling and blinking SVG elements are my favorites.", time: "12m ago" }
    ],
    quickReplies: ["Looks clean! ✨", "Show details", "Pairs well with Dark Space! 🌌"],
    botReplies: [
      "We should definitely pair program on it! Try typing 'fire' or 'lol' to see the gravity reaction burster.",
      "Indeed, premium micro-animations are key to establishing visual excellence. Our Status Hub is definitely an inspiration!",
      "I'm drafting some new glass card concepts. I'll send over the design spec sheet as a file shortly!"
    ]
  },
  "@happy_mind": {
    name: "Happy Mind",
    avatar: "images/user (1).png",
    vibe: "Mint Chill",
    vibeColor: "#008f47",
    status: "online",
    statusText: "Vibe: Mint Chill • Meditating",
    time: "48m ago",
    messages: [
      { sender: "contact", text: "Remember: always look for the positive side of life! ☀️🌻", time: "2h ago" },
      { sender: "user", text: "True! A positive mindset makes coding so much better.", time: "1h ago" },
      { sender: "contact", text: "Are you coding in your Zen environment today?", time: "48m ago" }
    ],
    quickReplies: ["Peaceful 🌿", "Super focused! ⚡", "Need a break ☕"],
    botReplies: [
      "Take deep breaths! Flow state is easily activated when your visual styling is harmonic.",
      "Positivity is contagious. Let's make this app spread true delight to everyone!",
      "If you feel stuck, try shifting the ambient music source in the Zen Ambient Player."
    ]
  },
  "@motion_graphics": {
    name: "Motion Graphics",
    avatar: "images/user (2).png",
    vibe: "Rose Twilight",
    vibeColor: "#ff4d6d",
    status: "busy",
    statusText: "Vibe: Rose Twilight • Rendering",
    time: "2h ago",
    messages: [
      { sender: "contact", text: "The Swiper video loops render is fully finished! 🌀🎥", time: "4h ago" },
      { sender: "user", text: "Awesome! How does the framerate look inside the dashboard slides?", time: "3h ago" },
      { sender: "contact", text: "Plays at 60fps with lightweight compression. High fidelity!", time: "2h ago" }
    ],
    quickReplies: ["Send the video clip!", "Looks fast! ⚡", "Which codec?"],
    botReplies: [
      "I used MP4 with optimized H.264 profiles. The browser parses it instantly.",
      "Have you seen the smileys rotate on card hover? It uses custom CSS transition vectors.",
      "Let's render a liquid bubble mockup next. I'll send it as concept art!"
    ]
  },
  "@travel_pulse": {
    name: "Travel Pulse",
    avatar: "images/user (3).png",
    vibe: "Original",
    vibeColor: "#ff4d6d",
    status: "offline",
    statusText: "Vibe: Original • Traveling",
    time: "6h ago",
    messages: [
      { sender: "contact", text: "Watching the sun slide under the horizon in Bali. 🌅✈️", time: "6h ago" },
      { sender: "user", text: "Wow, sounds beautiful! Enjoy the views.", time: "5h ago" }
    ],
    quickReplies: ["Safe travels! ✈️", "Amazing views!", "Collab soon!"],
    botReplies: [
      "It's breathtaking here. The ocean breeze is perfect for refreshing ideas.",
      "I'm capturing some ambient video clips for our Zen Player. I'll post them in the status hub!",
      "Offline for a bit, going to hike Mt. Batur for sunrise! 🌋"
    ]
  },
  "@antigravity_dev": {
    name: "Antigravity Dev",
    avatar: "images/happiness.png",
    vibe: "Dark Space",
    vibeColor: "#9933ff",
    status: "coding",
    statusText: "Vibe: Dark Space • Coding...",
    time: "Just now",
    messages: [
      { sender: "contact", text: "New gravity simulation works perfectly! 🦾🌌", time: "2h ago" },
      { sender: "user", text: "Nice! Did you use requestAnimationFrame?", time: "1h ago" },
      { sender: "contact", text: "Yes, fully non-blocking and responsive.", time: "Just now" }
    ],
    quickReplies: ["Clean code! 🦾", "Fork the repo", "Run tests"],
    botReplies: [
      "It's written in modular Vanilla JS, making it extremely fast and lightweight.",
      "Try dragging the Status Hub window. The velocity vectors scale dynamically!",
      "Type 'fire' in the chat and watch the emojis rise against gravity!"
    ]
  },
  "@happy_bunny": {
    name: "Happy Bunny",
    avatar: "images/happy.png",
    vibe: "Rose Twilight",
    vibeColor: "#ff3399",
    status: "online",
    statusText: "Vibe: Rose Twilight • Spread Joy",
    time: "10h ago",
    messages: [
      { sender: "contact", text: "Smiles are contagious! Keep spreading joy. 😁🎈", time: "10h ago" }
    ],
    quickReplies: ["Keep smiling! 😁", "Super cute!", "Haha, nice!"],
    botReplies: [
      "A smile a day keeps the bugs away! 🐰🌻",
      "I'm drawing some blushing smileys. I'll send a concept draft shortly!",
      "Let's spread some positive vibes to the entire web space today!"
    ]
  }
};

let activeChatHandle = null;
let callTimerInterval = null;
let callDurationSeconds = 0;
let replyTimeout = null;

function renderChatsList(data = chatsData) {
  const container = document.getElementById("chatsListContainer");
  if (!container) return;

  container.innerHTML = "";

  Object.keys(data).forEach(handle => {
    const chat = data[handle];
    const lastMsgObj = chat.messages[chat.messages.length - 1];
    const lastMsgText = lastMsgObj ? lastMsgObj.text : "No messages yet";

    const card = document.createElement("div");
    card.className = `chat-contact-card ${activeChatHandle === handle ? 'active' : ''}`;
    card.onclick = () => selectChat(handle);

    card.innerHTML = `
            <div class="contact-avatar-wrapper">
              <img src="${chat.avatar}" alt="${chat.name}" class="contact-avatar">
              <span class="status-dot ${chat.status}"></span>
            </div>
            <div class="contact-info">
              <span class="contact-name">${chat.name}</span>
              <span class="contact-last-msg">${lastMsgText}</span>
            </div>
            <div class="contact-meta">
              <span class="contact-time">${chat.time}</span>
              <span class="contact-vibe-tag">${chat.vibe}</span>
            </div>
          `;
    container.appendChild(card);
  });
}

function filterChatsContacts() {
  const query = document.getElementById("chatSearchInput").value.toLowerCase();
  const filtered = {};

  Object.keys(chatsData).forEach(handle => {
    const chat = chatsData[handle];
    if (chat.name.toLowerCase().includes(query) || handle.toLowerCase().includes(query)) {
      filtered[handle] = chat;
    }
  });
  renderChatsList(filtered);
}

function selectChat(handle) {
  activeChatHandle = handle;
  renderChatsList();

  const chat = chatsData[handle];

  // Update header details
  const avatarEl = document.getElementById("cdl");
  const nameEl = document.getElementById("cdl1");
  const subEl = document.getElementById("cdlSub");

  if (avatarEl) avatarEl.style.backgroundImage = `url('${chat.avatar}')`;
  if (nameEl) nameEl.innerText = chat.name;
  if (subEl) {
    subEl.innerText = chat.statusText;
    subEl.style.color = chat.vibeColor;
  }

  // Set the CSS vibeColor variable for the specific chat so hovers adapt
  document.documentElement.style.setProperty('--vibeColor', chat.vibeColor);

  // Show back arrow when a chat is selected
  const lineEl = document.querySelector('.mes .yup .line');
  if (lineEl && !document.getElementById('chatBackBtn')) {
    const backBtn = document.createElement('div');
    backBtn.className = 'one chat-back-btn-anim';
    backBtn.id = 'chatBackBtn';
    backBtn.title = 'Back to contacts';
    backBtn.onclick = toggleChatsPanel;
    backBtn.innerHTML = '<img src="images/left-arrow (1).png" alt="Back">';
    lineEl.insertBefore(backBtn, lineEl.firstChild);
  }

  // Shift Conversation Box Vibe Border
  const yupBox = document.getElementById("chatYupBox");
  if (yupBox) {
    yupBox.style.setProperty("--chat-vibe-glow", chat.vibeColor + "33");
    yupBox.style.borderColor = chat.vibeColor + "77";
    yupBox.style.boxShadow = `0 16px 40px rgba(0, 0, 0, 0.06), 
                                    inset 0 0 15px rgba(255, 255, 255, 0.4),
                                    0 0 20px ${chat.vibeColor}33`;
  }

  // Trigger Canvas Ripple from contact card position
  if (typeof rippleCanvas !== 'undefined' && rippleCanvas && rippleCtx) {
    const cardElements = document.querySelectorAll('.chat-contact-card');
    let clickedCard = null;
    cardElements.forEach(card => {
      const nameSpan = card.querySelector('.contact-name');
      if (nameSpan && nameSpan.innerText === chat.name) {
        clickedCard = card;
      }
    });
    if (clickedCard) {
      const shoyRect = rippleCanvas.parentElement.getBoundingClientRect();
      const cardRect = clickedCard.getBoundingClientRect();
      const startX = cardRect.left - shoyRect.left + cardRect.width / 2;
      const startY = cardRect.top - shoyRect.top + cardRect.height / 2;
      triggerVibeRipple(startX, startY, chat.vibeColor);
    }
  }

  // Load messages history
  const viewport = document.getElementById("chatConversationArea");
  if (viewport) {
    viewport.innerHTML = "";
    chat.messages.forEach(msg => {
      appendMessageBubble(msg.sender, msg.text, msg.time, msg.type, msg.fileName, msg.fileSize, msg.duration, msg.timeStr);
    });
    scrollChatToBottom();
  }

  // Load quick replies tags
  const qp = document.getElementById("quickRepliesPanel");
  if (qp) {
    qp.innerHTML = "";
    if (chat.quickReplies && chat.quickReplies.length > 0) {
      qp.style.display = "flex";
      chat.quickReplies.forEach(text => {
        const tag = document.createElement("div");
        tag.className = "quick-reply-tag";
        tag.style.borderColor = chat.vibeColor + "cc";
        tag.style.color = "var(--textColor)";
        tag.style.setProperty('--vibe-color', chat.vibeColor);
        tag.innerText = text;
        tag.onclick = () => sendQuickReply(text);
        qp.appendChild(tag);
      });
    } else {
      qp.style.display = "none";
    }
  }

  // Auto-close attachment panel
  const attachPanel = document.getElementById("mediaAttachmentPanel");
  if (attachPanel) attachPanel.classList.remove("open");

  // Close chats slide-in list on compact views if open
  const folPanel = document.getElementById("chatsFolPanel");
  if (folPanel) folPanel.classList.remove("slide-in");
}

function appendMessageBubble(sender, text, time = "Just now", type = "text", fileName = "", fileSize = "", duration = 0, timeStr = "") {
  const viewport = document.getElementById("chatConversationArea");
  if (!viewport) return;

  const bubble = document.createElement("div");

  if (type === "text") {
    bubble.className = `message-bubble ${sender === "user" ? "user-msg" : "contact-msg"}`;
    if (sender === "user") {
      const receiptId = `receipt-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      bubble.innerHTML = `
              <span>${text}</span>
              <div class="msg-time">
                <span>${time}</span>
                <span class="read-receipt" id="${receiptId}" style="color: rgba(255,255,255,0.5);">✓</span>
              </div>
            `;
      setTimeout(() => {
        const r = document.getElementById(receiptId);
        if (r) r.innerText = "✓✓";
      }, 500);
      setTimeout(() => {
        const r = document.getElementById(receiptId);
        if (r && activeChatHandle) {
          r.style.color = chatsData[activeChatHandle].vibeColor;
        }
      }, 1500);
    } else {
      bubble.innerHTML = `
              <span>${text}</span>
              <span class="msg-time">${time}</span>
            `;
    }
  } else if (type === "link") {
    bubble.className = `message-bubble ${sender === "user" ? "user-msg" : "contact-msg"}`;
    bubble.innerHTML = `
            <span style="text-decoration: underline; cursor: pointer;">🔗 ${text}</span>
            <span class="msg-time">${time}</span>
          `;
  } else if (type === "doc") {
    bubble.className = `message-bubble media-card-msg ${sender === "user" ? "user-msg" : "contact-msg"}`;
    bubble.innerHTML = `
            <div class="media-card-file">
              <span class="media-card-file-icon">📄</span>
              <div class="media-card-file-info">
                <span class="media-card-file-name">${fileName}</span>
                <span class="media-card-file-size">${fileSize}</span>
              </div>
            </div>
            <span class="msg-time">${time}</span>
          `;
  } else if (type === "img") {
    bubble.className = `message-bubble media-card-msg ${sender === "user" ? "user-msg" : "contact-msg"}`;
    bubble.innerHTML = `
            <img src="${text}" alt="Concept Art" class="media-card-img">
            <div class="media-card-file-name" style="padding: 0 4px;">concept_draft.png</div>
            <span class="msg-time">${time}</span>
          `;
  } else if (type === "voice") {
    const uniqueId = `voice-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    bubble.className = `message-bubble voice-msg-bubble ${sender === "user" ? "" : "contact-voice"}`;

    let waveformHTML = "";
    for (let i = 0; i < 16; i++) {
      waveformHTML += `<div class="waveform-bar-sim" id="${uniqueId}-bar-${i}"></div>`;
    }

    bubble.innerHTML = `
            <button class="voice-play-btn" type="button" onclick="playVoiceMessage(this, '${uniqueId}', ${duration})">▶</button>
            <div class="voice-waveform-sim">
                ${waveformHTML}
            </div>
            <span class="voice-duration" id="${uniqueId}-time">${timeStr}</span>
            <span class="msg-time" style="margin-left: 8px;">${time}</span>
          `;
  }

  viewport.appendChild(bubble);
  scrollChatToBottom();
}

function scrollChatToBottom() {
  const viewport = document.getElementById("chatConversationArea");
  if (viewport) {
    viewport.scrollTop = viewport.scrollHeight;
  }
}

function sendUserMessageFromInput() {
  const input = document.getElementById("textArea");
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  input.value = "";
  sendUserMessage(text);
}

function sendUserMessage(text, type = "text", fileName = "", fileSize = "") {
  if (!activeChatHandle) {
    alert("Please select a contact from the Chats list first!");
    return;
  }

  const chat = chatsData[activeChatHandle];
  const msgObj = { sender: "user", text: text, time: "Just now", type: type, fileName: fileName, fileSize: fileSize };
  chat.messages.push(msgObj);

  // Append user bubble
  appendMessageBubble("user", text, "Just now", type, fileName, fileSize);
  renderChatsList();

  // Check for Antigravity Emoji Burst Reactions
  const cleanText = text.toLowerCase();
  if (cleanText.includes("lol") || cleanText.includes("haha") || cleanText.includes("joy")) {
    spawnEmojiParticles("😂");
  } else if (cleanText.includes("love") || cleanText.includes("heart") || cleanText.includes("nice")) {
    spawnEmojiParticles("❤️");
  } else if (cleanText.includes("fire") || cleanText.includes("lit") || cleanText.includes("cool")) {
    spawnEmojiParticles("🔥");
  } else if (cleanText.includes("wow") || cleanText.includes("party") || cleanText.includes("celebrate")) {
    spawnEmojiParticles("🎉");
  } else if (cleanText.includes("star") || cleanText.includes("magic") || cleanText.includes("shine")) {
    spawnEmojiParticles("✨");
  }

  // Queue contact auto-reply
  if (replyTimeout) clearTimeout(replyTimeout);
  showTypingIndicator();

  replyTimeout = setTimeout(() => {
    hideTypingIndicator();

    let botReplyText = "Interesting! Let's build it out.";
    if (chat.botReplies && chat.botReplies.length > 0) {
      // Pick and rotate replies
      botReplyText = chat.botReplies.shift();
      chat.botReplies.push(botReplyText);
    }

    const replyObj = { sender: "contact", text: botReplyText, time: "Just now" };
    chat.messages.push(replyObj);

    appendMessageBubble("contact", botReplyText, "Just now");
    renderChatsList();

    // Play a visual typing/vibration indicator on header
    const subEl = document.getElementById("cdlSub");
    if (subEl) {
      subEl.innerText = "Active • Message Received";
      setTimeout(() => {
        if (activeChatHandle) subEl.innerText = chatsData[activeChatHandle].statusText;
      }, 3000);
    }
  }, 1500 + Math.random() * 1000);
}

function sendQuickReply(text) {
  sendUserMessage(text);
}

function showTypingIndicator() {
  const viewport = document.getElementById("chatConversationArea");
  if (!viewport) return;

  // Check if indicator already exists
  if (document.getElementById("typingBubble")) return;

  const bubble = document.createElement("div");
  bubble.className = "message-bubble typing-bubble";
  bubble.id = "typingBubble";
  bubble.innerHTML = `
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        `;

  viewport.appendChild(bubble);
  scrollChatToBottom();
}

function hideTypingIndicator() {
  const el = document.getElementById("typingBubble");
  if (el) el.remove();
}

function toggleMediaAttachmentPanel(event) {
  if (event) event.stopPropagation();

  const panel = document.getElementById("mediaAttachmentPanel");
  const attachBtn = document.getElementById("btnAttachments");
  if (!panel) return;

  panel.classList.toggle("open");
  const isOpen = panel.classList.contains("open");
  if (attachBtn) {
    if (isOpen) attachBtn.classList.add("toggled");
    else attachBtn.classList.remove("toggled");
  }
}

// Close popups when clicking outside
document.addEventListener("click", (e) => {
  const panel = document.getElementById("mediaAttachmentPanel");
  if (panel) panel.classList.remove("open");
  const attachBtn = document.getElementById("btnAttachments");
  if (attachBtn) attachBtn.classList.remove("toggled");

  // ── Close keyboard when clicking outside .mes area AND outside keyboard ──
  const keyboard = document.getElementById("bgKeyboard1");
  if (keyboard && keyboard.classList.contains("Monster")) {
    const mesArea = document.querySelector(".mes");
    if (mesArea && !mesArea.contains(e.target) && !keyboard.contains(e.target)) {
      forkeyboard(); // Proper close logic that restores UI
    }
  }
});

function sendAttachment(type) {
  if (!activeChatHandle) {
    alert("Select a chat first!");
    return;
  }

  if (type === "link") {
    sendUserMessage("antigravity-hub.org/vibe-space/sunset", "link");
  } else if (type === "doc") {
    let fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".pdf,.doc,.docx,.txt,.csv";
    fileInput.onchange = function(e) {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        const fileSizeStr = (file.size / (1024*1024)).toFixed(1) + " MB";
        sendUserMessage(file.name, "doc", file.name, fileSizeStr);
      }
    };
    fileInput.click();
  } else if (type === "img") {
    let fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*,video/*";
    fileInput.onchange = function(e) {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        sendUserMessage(url, "img");
      }
    };
    fileInput.click();
  }
}

function spawnEmojiParticles(emoji) {
  const container = document.getElementById("emojiParticlesContainer");
  if (!container) return;

  const burstCount = 12 + Math.floor(Math.random() * 8);
  for (let i = 0; i < burstCount; i++) {
    const particle = document.createElement("span");
    particle.className = "emoji-particle";
    particle.innerText = emoji;

    const startX = 20 + Math.random() * 60;
    const offsetLeft = (Math.random() - 0.5) * 60;
    const duration = 1.2 + Math.random() * 1;
    const delay = Math.random() * 0.3;

    particle.style.left = startX + "%";
    particle.style.bottom = "0px";
    particle.style.setProperty("--offsetLeft", offsetLeft + "px");
    particle.style.animationDuration = duration + "s";
    particle.style.animationDelay = delay + "s";

    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, (duration + delay) * 1000);
  }
}

// Video/Voice Calling Screen Simulations
function startMockCall(type) {
  if (!activeChatHandle) {
    alert("Select a chat contact first!");
    return;
  }

  const videoBtn = document.getElementById("btnVideoCall");
  const voiceBtn = document.getElementById("btnVoiceCall");
  if (type === 'video' && videoBtn) videoBtn.classList.add("toggled");
  if (type === 'voice' && voiceBtn) voiceBtn.classList.add("toggled");

  const chat = chatsData[activeChatHandle];
  const modal = document.getElementById("chatCallModal");
  const avatar = document.getElementById("callAvatar");
  const title = document.getElementById("callTitle");
  const status = document.getElementById("callStatus");
  const timer = document.getElementById("callTimer");

  if (!modal || !avatar || !title || !status || !timer) return;

  avatar.src = chat.avatar;
  title.innerText = chat.name;
  status.innerText = `Calling ${type === 'video' ? 'Video' : 'Voice'}...`;
  timer.style.display = "none";
  timer.innerText = "00:00";

  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("open");
  }, 10);

  callDurationSeconds = 0;
  if (callTimerInterval) clearInterval(callTimerInterval);

  setTimeout(() => {
    if (modal.classList.contains("open")) {
      status.innerText = "Connected";
      timer.style.display = "block";

      callTimerInterval = setInterval(() => {
        callDurationSeconds++;
        const mins = String(Math.floor(callDurationSeconds / 60)).padStart(2, '0');
        const secs = String(callDurationSeconds % 60).padStart(2, '0');
        timer.innerText = `${mins}:${secs}`;
      }, 1000);
    }
  }, 2000);
}

function endMockCall() {
  const videoBtn = document.getElementById("btnVideoCall");
  const voiceBtn = document.getElementById("btnVoiceCall");
  if (videoBtn) videoBtn.classList.remove("toggled");
  if (voiceBtn) voiceBtn.classList.remove("toggled");

  const modal = document.getElementById("chatCallModal");
  if (!modal) return;

  modal.classList.remove("open");
  if (callTimerInterval) clearInterval(callTimerInterval);

  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

function toggleCallMute(btn) {
  if (!btn) return;
  if (btn.innerText === "🎤") {
    btn.innerText = "🔇";
    btn.style.background = "rgba(0,0,0,0.6)";
  } else {
    btn.innerText = "🎤";
    btn.style.background = "";
  }
}

function toggleCallVideo(btn) {
  if (!btn) return;
  if (btn.innerText === "📹") {
    btn.innerText = "📷";
    btn.style.background = "rgba(0,0,0,0.6)";
  } else {
    btn.innerText = "📹";
    btn.style.background = "";
  }
}

function focusChatSearch() {
  const searchInput = document.getElementById("chatSearchInput");
  const searchBtn = document.getElementById("btnSearchChat");
  if (searchInput) {
    searchInput.focus();
    if (searchBtn) searchBtn.classList.add("toggled");
  }
}

function showChatInfo() {
  if (!activeChatHandle) return;
  const infoBtn = document.getElementById("btnChatInfo");
  if (infoBtn) {
    infoBtn.classList.add("toggled");
  }

  const chat = chatsData[activeChatHandle];
  alert(`ℹ️ Chat Statistics:\n\nContact: ${chat.name}\nHandle: ${activeChatHandle}\nVibe Theme: ${chat.vibe}\nOnline Status: ${chat.status}\nMessages Exchanged: ${chat.messages.length}`);

  if (infoBtn) {
    setTimeout(() => {
      infoBtn.classList.remove("toggled");
    }, 300);
  }
}

function toggleChatsPanel() {
  const folPanel = document.getElementById("chatsFolPanel");
  if (folPanel) {
    folPanel.classList.toggle("slide-in");
  }
  // If a chat is active, clicking back deselects and shows the empty state
  if (activeChatHandle) {
    deselectChat();
  }
}

function deselectChat() {
  activeChatHandle = null;

  // Reset header
  const avatarEl = document.getElementById("cdl");
  const nameEl = document.getElementById("cdl1");
  const subEl = document.getElementById("cdlSub");
  if (avatarEl) avatarEl.style.backgroundImage = "url('images/user.png')";
  if (nameEl) nameEl.innerText = "Select Contact";
  if (subEl) { subEl.innerText = "Pick someone to start vibing ✦"; subEl.style.color = ""; }

  // Remove back arrow when no chat is active
  const backBtn = document.getElementById('chatBackBtn');
  if (backBtn) backBtn.remove();

  // Reset yup box border
  const yupBox = document.getElementById("chatYupBox");
  if (yupBox) {
    yupBox.style.borderColor = "";
    yupBox.style.boxShadow = "";
  }

  // Show beautiful empty state in chat viewport
  const viewport = document.getElementById("chatConversationArea");
  if (viewport) {
    viewport.innerHTML = `
            <div class="chat-empty-state" id="chatEmptyState">
              <div class="empty-orb-wrap">
                <div class="empty-orb"></div>
                <div class="empty-orb-ring"></div>
                <div class="empty-orb-ring r2"></div>
              </div>
              <div class="empty-state-icon">💬</div>
              <h3 class="empty-state-title">No Conversation Yet</h3>
              <p class="empty-state-desc">
                Pick a creator from your<br>
                <strong>Chats list</strong> to start vibing ✦
              </p>
              <div class="empty-state-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
          `;
  }

  // Hide quick replies panel
  const qp = document.getElementById("quickRepliesPanel");
  if (qp) qp.style.display = "none";

  // Reset chat cards active state
  document.querySelectorAll(".chat-contact-card").forEach(c => c.classList.remove("active"));
}

// Voice Recorder and playable voice messages logic
let isRecordingAudio = false;
let recordingDuration = 0;
let recordingTimer = null;

function toggleVoiceRecord(event) {
  if (event) event.stopPropagation();
  if (!activeChatHandle) {
    alert("Select a chat contact first!");
    return;
  }

  const recordBtn = document.getElementById("btnVoiceRecord");
  const visualizer = document.getElementById("voiceRecordingVisualizer");
  const inputField = document.getElementById("textArea");
  const sendBtn = document.getElementById("chatSendBtn");

  if (!isRecordingAudio) {
    isRecordingAudio = true;
    recordBtn.classList.add("recording");
    recordBtn.innerText = "⏹️";
    visualizer.style.display = "flex";
    inputField.style.display = "none";
    sendBtn.style.display = "none";

    recordingDuration = 0;
    playSynthSound(440, 'triangle', 0.15);

    recordingTimer = setInterval(() => {
      recordingDuration++;
    }, 1000);
  } else {
    isRecordingAudio = false;
    recordBtn.classList.remove("recording");
    recordBtn.innerText = "🎤";
    visualizer.style.display = "none";
    inputField.style.display = "block";
    sendBtn.style.display = "block";

    clearInterval(recordingTimer);
    playSynthSound(330, 'triangle', 0.15);

    if (recordingDuration > 0) {
      sendVoiceMessage(recordingDuration);
    }
  }
}

function sendVoiceMessage(duration) {
  const mins = Math.floor(duration / 60);
  const secs = duration % 60;
  const timeStr = `${mins}:${String(secs).padStart(2, '0')}`;

  const text = `Voice Message (${timeStr})`;
  const chat = chatsData[activeChatHandle];
  const msgObj = {
    sender: "user",
    text: text,
    time: "Just now",
    type: "voice",
    duration: duration,
    timeStr: timeStr
  };
  chat.messages.push(msgObj);

  appendMessageBubble("user", text, "Just now", "voice", "", "", duration, timeStr);
  renderChatsList();

  if (replyTimeout) clearTimeout(replyTimeout);
  showTypingIndicator();

  replyTimeout = setTimeout(() => {
    hideTypingIndicator();

    const botReplies = [
      "Wow! Thanks for the voice memo. That explanation makes total sense.",
      "Awesome voice note! Let's schedule a call tomorrow to sync up.",
      "Got your voice message! Loving the audio quality on these synth visualizers."
    ];
    const botReplyText = botReplies[Math.floor(Math.random() * botReplies.length)];

    const replyObj = { sender: "contact", text: botReplyText, time: "Just now" };
    chat.messages.push(replyObj);

    appendMessageBubble("contact", botReplyText, "Just now");
    renderChatsList();
  }, 2000);
}

let playingVoiceInterval = null;
let playingVoiceId = null;

function playVoiceMessage(btn, bubbleId, duration) {
  if (playingVoiceId) {
    clearInterval(playingVoiceInterval);
    const oldBtn = document.querySelector(`[onclick*="${playingVoiceId}"]`);
    if (oldBtn) oldBtn.innerText = "▶";
    const oldBars = document.querySelectorAll(`[id^="${playingVoiceId}-bar"]`);
    oldBars.forEach(bar => bar.classList.remove('filled'));
    if (playingVoiceId === bubbleId) {
      playingVoiceId = null;
      return;
    }
  }

  playingVoiceId = bubbleId;
  btn.innerText = "⏸";
  playVoiceSynthSweep(duration);

  let currentBar = 0;
  const totalBars = 16;
  const intervalTime = (duration * 1000) / totalBars;

  playingVoiceInterval = setInterval(() => {
    const bar = document.getElementById(`${bubbleId}-bar-${currentBar}`);
    if (bar) {
      bar.classList.add('filled');
    }

    const timerEl = document.getElementById(`${bubbleId}-time`);
    if (timerEl) {
      const currentSecs = Math.ceil(duration - (currentBar * duration / totalBars));
      const mins = Math.floor(currentSecs / 60);
      const secs = currentSecs % 60;
      timerEl.innerText = `${mins}:${String(secs).padStart(2, '0')}`;
    }

    currentBar++;
    if (currentBar >= totalBars) {
      clearInterval(playingVoiceInterval);
      btn.innerText = "▶";
      playingVoiceId = null;
      const finalMins = Math.floor(duration / 60);
      const finalSecs = duration % 60;
      if (timerEl) timerEl.innerText = `${finalMins}:${String(finalSecs).padStart(2, '0')}`;
    }
  }, intervalTime);
}

function playVoiceSynthSweep(duration) {
  try {
    initAudioContext();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'sine';

    osc1.frequency.setValueAtTime(261.63, audioCtx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(523.25, audioCtx.currentTime + duration);

    osc2.frequency.setValueAtTime(329.63, audioCtx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(659.25, audioCtx.currentTime + duration);

    gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(audioCtx.currentTime + duration);
    osc2.stop(audioCtx.currentTime + duration);
  } catch (e) { }
}

// Keyboard click Synthesizer Voice
function playSynthSound(freq = 600, type = 'sine', duration = 0.08) {
  try {
    initAudioContext();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = type;
    osc.frequency.value = freq;

    gainNode.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn('AudioContext not allowed or failed:', e);
  }
}

function initClickableVirtualKeyboard() {
  const keyboardRows = document.querySelectorAll('.keyboard .row div');
  const input = document.getElementById('textArea');
  if (!input) return;

  keyboardRows.forEach(key => {
    key.addEventListener('click', () => {
      const char = key.innerText.trim();
      playSynthSound(500 + Math.random() * 150, 'sine', 0.1);

      const originalBg = key.style.backgroundColor;
      key.style.backgroundColor = 'var(--vibeColor, #ff4d6d)';
      key.style.color = '#ffffff';
      setTimeout(() => {
        key.style.backgroundColor = originalBg;
        key.style.color = '';
      }, 150);

      if (char === 'BACK') {
        input.value = input.value.slice(0, -1);
      } else if (char === 'ENTER') {
        sendUserMessageFromInput();
      } else if (char === 'SPACE') {
        input.value += ' ';
      } else if (char === 'TAB') {
        input.value += '    ';
      } else if (char === 'CAPS' || char === 'SHIFT' || char === 'CTRL' || char === 'FN' || char === 'WIN' || char === 'ALT') {
        // ignore command keys
      } else {
        input.value += char;
      }
      input.focus();
    });
  });
}

// Vibe Ripple Canvas transition wave
let rippleCanvas = null;
let rippleCtx = null;
let ripples = [];

function initRippleCanvas() {
  rippleCanvas = document.getElementById('vibeRippleCanvas');
  if (!rippleCanvas) return;
  rippleCtx = rippleCanvas.getContext('2d');
  resizeRippleCanvas();
  window.addEventListener('resize', resizeRippleCanvas);
}

function resizeRippleCanvas() {
  if (rippleCanvas) {
    rippleCanvas.width = rippleCanvas.parentElement.clientWidth;
    rippleCanvas.height = rippleCanvas.parentElement.clientHeight;
  }
}

function triggerVibeRipple(startX, startY, color) {
  if (!rippleCtx || !rippleCanvas) return;
  ripples.push({
    x: startX,
    y: startY,
    radius: 0,
    maxRadius: Math.max(rippleCanvas.width, rippleCanvas.height) * 1.3,
    color: color,
    opacity: 0.6,
    speed: 20
  });
  if (ripples.length === 1) {
    animateRipples();
  }
}

function animateRipples() {
  if (ripples.length === 0) {
    if (rippleCtx && rippleCanvas) {
      rippleCtx.clearRect(0, 0, rippleCanvas.width, rippleCanvas.height);
    }
    return;
  }

  rippleCtx.clearRect(0, 0, rippleCanvas.width, rippleCanvas.height);

  for (let i = ripples.length - 1; i >= 0; i--) {
    const r = ripples[i];
    r.radius += r.speed;
    r.opacity -= 0.012;

    rippleCtx.beginPath();
    rippleCtx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
    rippleCtx.strokeStyle = `${r.color}${Math.floor(Math.max(0, r.opacity) * 255).toString(16).padStart(2, '0')}`;
    rippleCtx.lineWidth = 14;
    rippleCtx.stroke();

    rippleCtx.beginPath();
    rippleCtx.arc(r.x, r.y, r.radius - 8, 0, Math.PI * 2);
    rippleCtx.fillStyle = `${r.color}${Math.floor(Math.max(0, r.opacity * 0.15) * 255).toString(16).padStart(2, '0')}`;
    rippleCtx.fill();

    if (r.radius >= r.maxRadius || r.opacity <= 0) {
      ripples.splice(i, 1);
    }
  }
  requestAnimationFrame(animateRipples);
}

// Initialize Chats List on load
window.addEventListener("DOMContentLoaded", () => {
  renderChatsList();
  initRippleCanvas();
  initClickableVirtualKeyboard();

  // Dynamic 3D Perspective Hover Tilt on Chat Bubbles
  document.addEventListener('mousemove', (e) => {
    const bubble = e.target.closest('.message-bubble');
    if (!bubble) return;
    const rect = bubble.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;
    bubble.style.setProperty('--rotate-x', `${rotateX}deg`);
    bubble.style.setProperty('--rotate-y', `${rotateY}deg`);
  });

  document.addEventListener('mouseout', (e) => {
    const bubble = e.target.closest('.message-bubble');
    if (bubble) {
      bubble.style.setProperty('--rotate-x', '0deg');
      bubble.style.setProperty('--rotate-y', '0deg');
    }
  });

  // Search Input Focus Blur bindings
  const searchInput = document.getElementById("chatSearchInput");
  if (searchInput) {
    searchInput.addEventListener('blur', () => {
      const searchBtn = document.getElementById("btnSearchChat");
      if (searchBtn) searchBtn.classList.remove("toggled");
    });
  }

  // Sound generator on physical typing
  document.addEventListener('keydown', (e) => {
    const keyboardWrap = document.getElementById('bgKeyboard1');
    if (keyboardWrap && keyboardWrap.classList.contains('Monster')) {
      const freq = e.keyCode === 32 ? 350 : (500 + Math.random() * 150);
      playSynthSound(freq, 'sine', 0.1);
    }
  });

  // Auto-select first chat
  setTimeout(() => {
    selectChat("@alex_creative");
  }, 500);
});