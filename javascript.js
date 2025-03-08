document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
      // Your Swiper configuration options here
    });
  
    var videoContainer = document.getElementById("video-container");
    var videoPlayer = document.getElementById("video-player");
    var videoSource = document.getElementById("video-source");
    var closeBtn = document.getElementById("close-btn");
  
    swiper.on("slideChange", function() {
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
    
    swiper.on("slideChangeTransitionEnd", function() {
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
  
    closeBtn.addEventListener("click", function() {
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
      function forkeyboard(){
        var Timepassboyhood = document.getElementById("Timepassboyhood");
        var Keypt = document.getElementById("bgKeyboard1");
        Keypt.classList.toggle('Monster');
      }