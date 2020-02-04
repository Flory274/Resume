const name = document.querySelector('.name');
const text = name.textContent;
const spliText = text.split("");
name.textContent = "";

for (let i = 0; i < spliText.length; i++) {
  name.innerHTML += "<span>" + spliText[i] + "</span>";
}
let char = 0;
let timmer = setInterval(onTick, 50);

function onTick() {
  const span = name.querySelectorAll("span")[char];
  span.classList.add('fade');
  char++;
  if (char === spliText.length) {
    complete();
    return;
  }
  function complete() {
    clearInterval(timmer);
    timmer = null;
  }
}

const year = document.querySelector('.year');
const date = new Date();
year.innerHTML = date.getFullYear() +" ";