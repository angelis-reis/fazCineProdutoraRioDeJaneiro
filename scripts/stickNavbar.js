const body = document.body;
const triggerMenu = document.querySelector(".page-header-mobile .trigger-menu");
const nav = document.querySelector(".page-header-mobile nav");
const menu = document.querySelector(".page-header-mobile .menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

triggerMenu.addEventListener("click", () => {
  body.classList.toggle("menu-open");
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});
