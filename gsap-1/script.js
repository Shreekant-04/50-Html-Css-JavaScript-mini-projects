document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".first-word",
    { translateX: -1200 },
    { translateX: 0, duration: 3, delay: 1 }
  );
  gsap.fromTo(
    ".second-word",
    { translateX: 1200 },
    { translateX: 250, duration: 3, delay: 1 }
  );
  gsap.to(".flower-svg", { rotateX: 0, duration: 1, delay: 4 });

});

gsap.fromTo(
  "svg",
  { rotate: 0 },
  { rotate: 180, duration: 0.8, repeat: -1, repeatDelay: 1, delay: 5 }
);

gsap.fromTo(
  ".t",
  { rotateX: 0 },
  { rotateX: 360, duration: 0.8, delay: 6, repeat: -1, repeatDelay: 3 }
);
gsap.fromTo(
  ".i",
  { rotateX: 0 },
  { rotateX: 360, duration: 1, delay: 7, repeat: -1, repeatDelay: 4 }
);

const spans = document.querySelectorAll("span");

spans.forEach((span) => {
  span.addEventListener("mouseenter", () => {
    console.log("success");
    gsap.fromTo(span, { rotateX: 0 }, { rotateX: 180, duration: 0.5 });
  });
  span.addEventListener("mouseleave", () => {
    gsap.fromTo(span, { rotateX: 180 }, { rotateX: 0, duration: 0.5 });
  });
});
