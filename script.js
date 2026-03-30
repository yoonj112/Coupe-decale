const overlay = document.getElementById("clickOverlay");
const introImage = document.getElementById("introImage");
const video = document.getElementById("introVideo");
const audio = document.getElementById("introAudio");
const fade = document.getElementById("pageFade");

introImage.addEventListener("click", () => {

    introImage.classList.add("zoom");

    setTimeout(() => {

        overlay.style.display = "none";
        video.parentElement.style.display = "block";

        video.currentTime = 0;
        audio.currentTime = 0;

        video.play();
        audio.play();

    }, 900);

});

video.addEventListener("ended", () => {

    fade.classList.add("active");

    setTimeout(() => {

        window.location.href = "nextpage.html";

    }, 1000);

});