import monstersPic from "../assets/monsters.png";


export function title() {
  const el = document.createElement("h1");
  el.innerText = "Hello title";
  return el;
}

export function subTitle() {
  const el = document.createElement("div")
  el.classList.add('block');
  const text = document.createElement("p")
  text.classList.add('color-salmon');
  text.innerText = "sass-loader styles";
  el.appendChild(text);
  return el;
}

export function img() {
  const el = document.createElement("img");
  el.src = monstersPic;
  return el;
}
