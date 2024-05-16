
const sec=document.querySelectorAll(".boxes section")
sec.forEach((element) => {
    element.addEventListener("click", () => {
      sec.forEach((el) => {
        el.classList.remove("new-height");
      });
      element.classList.add("new-height");
    });
  });