document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".buttonhide");
  button.addEventListener("click", function () {
    const hiddenImages = document.querySelectorAll(".image.hidden");
    hiddenImages.forEach(image => {
      image.classList.remove("hidden");
      image.classList.add("visible");
    });
    this.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.slider-track');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // sürət
    slider.scrollLeft = scrollLeft - walk;
  });
});
