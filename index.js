const modeBtn = document.querySelector('.mode-toggle');
const rootDoc = document.querySelector(':root');
const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('.cl-aside');
const main = document.querySelector(".cl-main");
const toTopBtn = document.querySelector('.to-top-btn');

hamburger?.addEventListener("click", () =>
  aside.classList.contains("show") ?
    aside.classList.remove("show") :
    aside.classList.add("show")
)

const darkmode = () => {
  modeBtn.classList.remove("fa-moon");
  modeBtn.classList.add("fa-sun");

  rootDoc.style.setProperty("--light-text", "#242424"); /* secondary-color */
  rootDoc.style.setProperty("--light-bg", "#2e2e2e"); /* primary-text */
  rootDoc.style.setProperty("--primary-text", "#fcfcfc"); /*  light-bg */
  rootDoc.style.setProperty("--secondary-color", "#ed55c2"); /* --secondary-color-lighter */
  rootDoc.style.setProperty("--secondary-text", "#d4d4d4"); /* gray bg */
}

const lightmode = () => {
  modeBtn.classList.remove("fa-sun");
  modeBtn.classList.add("fa-moon");

  rootDoc.style.setProperty("--light-text", "#f1f1f1");
  rootDoc.style.setProperty("--light-bg", "#fcfcfc");
  rootDoc.style.setProperty("--primary-text", "#2e2e2e");
  rootDoc.style.setProperty("--secondary-color", "#80055d");
  rootDoc.style.setProperty("--secondary-text", "#737373");
}

const setLightmode = () => {
  lightmode();
  localStorage.setItem("mode", "lightmode");
}

const setDarkmode = () => {
  darkmode();
  localStorage.setItem("mode", "darkmode");
}

modeBtn.addEventListener("click", () => {
  const mode = localStorage.getItem("mode");//get from local storage
  const isSystemDark = window.matchMedia("(prefers-color-scheme: light)").matches;

  if (mode)
    mode === "lightmode" ? setDarkmode() : setLightmode();
  else
    isSystemDark ? setLightmode() : setDarkmode();
}
)
window.onload = () => {
  const mode = localStorage.getItem("mode");
  const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (mode)
    mode === "lightmode" ? lightmode() : darkmode();
  else
    !isSystemDark ? lightmode() : darkmode();
}

window.onload = () => toTopBtn.style.display = "none";

main.onscroll = () => (main.scrollTop > 100) ?
  toTopBtn.style.display = "block" :
  toTopBtn.style.display = "none";

toTopBtn.onclick = () => main.scrollTo({ top: 0, behavior: 'smooth' });
