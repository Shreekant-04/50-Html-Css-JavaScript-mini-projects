const image = document.querySelectorAll("img");
function slide() {
  image.forEach((el) => {
    const slideAt = window.scrollY + window.innerHeight + el.height /2;
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

slide();
window.addEventListener("scroll", slide);
