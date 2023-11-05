const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const response = document.getElementById("response");

yesButton.addEventListener("click", () => {
  response.innerText = "Of course, you are. You monkey!";
  response.style.color = "red";
});

noButton.addEventListener("mouseover", () => {
  const viewportWidth = window.innerWidth - noButton.clientWidth;
  const viewportHeight = window.innerHeight - noButton.clientHeight;
  const randomX = Math.floor(Math.random() * viewportWidth);
  const randomY = Math.floor(Math.random() * viewportHeight);

  noButton.style.position = "absolute";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});
