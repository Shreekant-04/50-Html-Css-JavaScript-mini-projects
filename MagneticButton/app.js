console.log("hello");
let btn = document.querySelectorAll(".btn");
btn.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    let rect = el.getBoundingClientRect();

    let x = e.clientX - (rect.left + rect.width / 2);
    let y = e.clientY - (rect.top + rect.height / 2);
    console.log(x, y);
    if (Math.abs(x) < 90 && Math.abs(y) < 50) {
      el.style.transform = `translate(${x}px, ${y}px)`;
    } else {
      el.style.transform = `translate(0,0)`;
    }
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = `translate(0,0)`;
  });
});
