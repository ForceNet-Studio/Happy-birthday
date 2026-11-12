const openButton = document.getElementById("openVideo");
const modal = document.getElementById("videoModal");
const closeButton = document.getElementById("closeVideo");
const video = document.getElementById("birthdayVideo");

function openVideo() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  video.play().catch(() => {});
}

function closeVideo() {
  video.pause();
  video.currentTime = 0;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openButton.addEventListener("click", openVideo);
closeButton.addEventListener("click", closeVideo);
modal.addEventListener("click", event => {
  if (event.target === modal) closeVideo();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeVideo();
});
