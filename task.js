const textButton = document.getElementById("textButton");
const textParagraph = document.getElementById("textParagraph");

textButton.addEventListener("click", function () {
  textParagraph.textContent = "JavaScript Fundamentals";
});

const buttonMode = document.getElementById("buttonMode");

buttonMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

const toggleBoxBtn = document.getElementById("toggleBoxBtn");
const box = document.getElementById("box");

toggleBoxBtn.addEventListener("click", function () {
  box.classList.toggle("hidden");
  toggleBoxBtn.textContent = box.classList.contains("hidden")
    ? "Show Box"
    : "Hide Box";
});
