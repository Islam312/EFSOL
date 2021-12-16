window.onload = function () {
  let $ = function (id) {
    return document.getElementById(id);
  };
  let video = $('video');
  video.currentTime = JSON.parse(localStorage['video']);

  $('play').onclick = function (e) {
    video.play();
  };
  $('pause').onclick = function (e) {
    video.pause();
    localStorage.setItem('video', JSON.stringify(video.currentTime));
  };
  $('prev').onclick = function (e) {
    video.currentTime = video.currentTime - 5;
  };
  $('next').onclick = function (e) {
    video.currentTime = video.currentTime + 5;
  };
  $('upVolume').onclick = function (e) {
    video.volume += 0.1;
  };
  $('downVolume').onclick = function (e) {
    video.volume -= 0.1;
  };
};
