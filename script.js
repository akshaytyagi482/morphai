var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
  const button = document.querySelector("button");
const nav = document.querySelector(".lol")
let isExpanded = button.getAttribute("aria-expanded") === "true";

function open() {
  button.setAttribute("aria-expanded", "true");
  nav.style.top = "0";
  nav.style.opacity = "100";
  isExpanded = true;
}

function close() {
  button.setAttribute("aria-expanded", "false");
  nav.style.top = "-100%";
  nav.style.opacity = "0";
  isExpanded = false;
}

function toggle() {
  isExpanded ? close() : open();
}

button.addEventListener("click", toggle);
