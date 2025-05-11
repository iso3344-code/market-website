const words = ["e-shop", "landing", "magazine", "website", "portfolio"];
let index = 0;
const wordEl = document.querySelector(".changing-word");

setInterval(() => {
  wordEl.classList.remove("fade-in");
  wordEl.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % words.length;
    wordEl.textContent = words[index];
    wordEl.classList.remove("fade-out");
    wordEl.classList.add("fade-in");
  }, 500);
}, 3000);

document.getElementById("showMoreBtn").addEventListener("click", function() {
    const hiddenImages = document.querySelectorAll(".image.hidden");
    hiddenImages.forEach(image => {
      image.classList.remove("hidden");
      image.classList.add("visible");
    });
   
    this.style.display = "none";
  });
