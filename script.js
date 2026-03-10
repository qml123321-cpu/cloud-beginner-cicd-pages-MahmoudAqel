const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

const messages = [
  "Deployment ready: the workflow can publish updates after each push.",
  "GitHub Actions checked the files successfully.",
  "The website can be updated online after a new commit."
];

let index = 0;

btn.addEventListener("click", () => {
  msg.textContent = messages[index];
  index++;

  if (index >= messages.length) {
    index = 0;
  }
});