const circles = document.querySelectorAll(".circles");
const buttons = document.querySelectorAll(".button");
const rating = document.querySelector("#rating");
const submitButton = document.querySelector(".button__submit");
const content1 = document.querySelector(".content_1");
const content = document.querySelector(".content");

function handleClick(event) {
  const target = event.target;
  const index = Array.from(buttons).indexOf(target);

  circles.forEach((circle, i) => {
    if (i === index) {
      circle.classList.add("focus");
      buttons[i].classList.add("white");
      rating.innerHTML = buttons[i].innerHTML;
    } else {
      circle.classList.remove("focus");
      buttons[i].classList.remove("white");
    }
  });
}

submitButton.addEventListener("click", () => {
  if (rating.innerHTML === "") {
    return false;
  } else {
    content1.classList.remove("hidden");
    content.classList.add("hidden");
  }
});

circles.forEach((circle) => {
  circle.addEventListener("click", handleClick);
});

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
