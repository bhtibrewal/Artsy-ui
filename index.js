const modeBtn = document.querySelector('.mode-toggle');
const rootDoc = document.querySelector(':root');


const darkmode = () => {
  modeBtn.classList.remove("fa-moon");
  modeBtn.classList.add("fa-sun");

}
const lightmode = () => {
  modeBtn.classList.remove("fa-sun");
  modeBtn.classList.add("fa-moon");
}

modeBtn.addEventListener("click", () => {
  if (modeBtn.classList.contains("fa-moon")) {
    darkmode();
  }
  else {
    lightmode();
  }
}
)