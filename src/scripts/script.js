/* ------------------------------- Coloque sua lógica aqui ------------------------------- */

openModal()

closeModal()

arrowDirection()

// Modal
function openModal() {
    const dialog = document.querySelector(".modal")
    const btnsToOpenModal = document.querySelectorAll(".open-modal")

    btnsToOpenModal.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.showModal()
        })
    })
}

function closeModal() {
    const dialog = document.querySelector(".modal")
    dialog.close()
}
//Arrow Direction FAQ
function arrowDirection(){
const arrows = document.querySelectorAll(".main__forth-summary")

arrows.forEach(arrow =>{
    arrow.addEventListener("click", () =>{
        arrow.classList.toggle("main__forth-summary--open")
    })
})

}



