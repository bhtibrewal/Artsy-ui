const snackbarBtn = document.querySelector(".snackbar-btn");
const snackbar = document.querySelector(".snackbar-2");
snackbarBtn.addEventListener("click", () => {
  snackbar.style.display = "flex";
  setTimeout(() => {
    snackbar.style.display = "none";
  }, 2000);
})

console.log(t.innerText);