document.addEventListener("DOMContentLoaded", function () {
  const paragraph1 = document.getElementById("paragraph1");
  const paragraph2 = document.getElementById("paragraph2");
  const paragraph3 = document.getElementById("paragraph3");
  const paragraph4 = document.getElementById("paragraph4");
  const paragraph5 = document.getElementById("paragraph5");
  const paragraph6 = document.getElementById("paragraph6");
  const paragraph7 = document.getElementById("paragraph7");
  const paragraph8 = document.getElementById("paragraph8");

  gsap.from(paragraph1, { duration: 0.1, opacity: 0, delay: 0.2 });
  gsap.from(paragraph2, { duration: 0.1, opacity: 0, delay: 2 });
  gsap.from(paragraph3, { duration: 0.1, opacity: 0, delay: 4 });
  gsap.from(paragraph4, { duration: 0.1, opacity: 0, delay: 6 });
  gsap.from(paragraph5, { duration: 0.1, opacity: 0, delay: 8 });
  gsap.from(paragraph6, { duration: 0.1, opacity: 0, delay: 10 });
  gsap.from(paragraph7, { duration: 0.1, opacity: 0, delay: 12 });
  gsap.from(paragraph8, { duration: 0.1, opacity: 0, delay: 14 });
});
