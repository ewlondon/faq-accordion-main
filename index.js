const buttons = document.querySelectorAll("button");
const closeBtns = document.querySelectorAll(".close-btn");
const openBtns = document.querySelectorAll(".open-btn");

const details = document.querySelectorAll("p");

buttons.forEach((b, index) => {
  b.addEventListener("click", (e) => {
    details[index].classList.toggle("hidden");
    closeBtns[index].classList.toggle("hidden");
    openBtns[index].classList.toggle("hidden");
  });
});
