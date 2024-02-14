const closeBtns = document.querySelectorAll(".close-btn");
const openBtns = document.querySelectorAll(".open-btn");
const h2Els = document.querySelectorAll("h2");
const details = document.querySelectorAll("p");

h2Els.forEach((h, index) => {
  h.addEventListener("click", (e) => {
    details[index].classList.toggle("hidden");
    closeBtns[index].classList.toggle("hidden");
    openBtns[index].classList.toggle("hidden");
  });
});
