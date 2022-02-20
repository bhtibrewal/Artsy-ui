const modal = document.querySelector(".modal-overlay")
const closeFunc = (e) => {
    e.parentElement.style.display = "none";
}

const openModal=()=>{
    modal.style.display = "flex";
}