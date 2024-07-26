const images = document.querySelectorAll("img");

function slide() {
  images.forEach((el) => {
    const slideAt = window.scrollY + window.innerHeight - el.height / 2;
    const imageBottom = el.offsetTop + el.height;
    const isHalfShown = slideAt > el.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", slide);
slide(); // Run once on page load
