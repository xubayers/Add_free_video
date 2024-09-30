let video = document.getElementById("vidio");

const search = document.getElementById("search");
const inp_URL = document.getElementById("url");

let worning = document.getElementById("warning-msg");

search.addEventListener("click", function () {
  let url = inp_URL.value;

  if (url.slice(0, 16) !== "https://youtu.be") {
    worning.innerText = "invalid yt url";
    worning.classList.remove("overflow-hidden");
    return;
  } else {
    worning.classList.add("overflow-hidden");
  }

  video.setAttribute("src", `https://www.youtube.com/embed/${url.slice(17)}`);
});
