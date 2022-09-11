'use strict';
const backToTop = document.querySelector(".top");

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
}

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});

backToTop.addEventListener("click", goToTop);