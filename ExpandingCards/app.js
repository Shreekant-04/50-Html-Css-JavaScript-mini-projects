const imgUrl = {
  img1: "https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  img2: "https://images.unsplash.com/photo-1496046744122-2328018d60b6?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  img3: "https://images.unsplash.com/photo-1615412704911-55d589229864?q=80&w=1582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  img4: "https://images.unsplash.com/photo-1611918126831-0a8352d6196f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  img5: "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
const divs = document.querySelectorAll("div");
const body = document.querySelector("body");
body.style.backgroundImage = `url(${imgUrl.img3})`;
divs.forEach((element) => {
  console.log(element);
  element.addEventListener("click", () => {
    divs.forEach((el) => {
      el.classList.remove("active");
    });
    element.classList.add("active");
    body.style.backgroundImage = ` url(${imgUrl[element.classList[0]]})`;
  });
});
