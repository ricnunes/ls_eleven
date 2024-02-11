document.addEventListener('DOMContentLoaded', videoLoader, false);


function videoLoader() {
  const LSVideo = document.getElementsByTagName('video')[0];
  const LSSource = document.createElement('source');
  let w = window.matchMedia("(max-width: 768px)");

  LSSource.id = "hvid"
  LSSource.setAttribute("type", "video/mp4");
  LSVideo.setAttribute("poster", LSVideo.dataset.desktopPoster);
  LSVideo.appendChild(LSSource);

  if (w.matches) {
    LSVideo.pause();
    LSSource.removeAttribute("src");
    LSSource.setAttribute("src", LSVideo.dataset.mobileMp4);
    LSVideo.removeAttribute("poster");
    LSVideo.setAttribute("poster", LSVideo.dataset.mobilePoster);
    LSVideo.load();
    LSVideo.play();
  } else {
    LSVideo.pause();
    LSSource.removeAttribute("src");
    LSSource.setAttribute("src", LSVideo.dataset.desktopMp4);
    LSVideo.removeAttribute("poster");
    LSVideo.setAttribute("poster", LSVideo.dataset.desktopPoster);
    LSVideo.load();
    LSVideo.play();
  }

  window.addEventListener("resize", function() {
    let w = window.matchMedia("(max-width: 768px)");
    const LSSourceExisting = document.getElementById("hvid");

    if (w.matches) {
      LSVideo.pause();
      LSSourceExisting.src = LSVideo.dataset.mobileMp4;
      LSVideo.setAttribute("poster", LSVideo.dataset.mobilePoster)
      LSVideo.load();
      LSVideo.play();
    } else {
      LSVideo.pause();
      LSSourceExisting.src = LSVideo.dataset.desktopMp4;
      LSVideo.setAttribute("poster", LSVideo.dataset.desktopPoster)
      LSVideo.load();
      LSVideo.play();
    }
  })
}