  // Selecciona todas las cards
const cards = document.querySelectorAll(".card");

// Recorre cada card y le asigna su modal correspondiente
cards.forEach(card => {
    card.addEventListener("click", () => {
        const modal = card.nextElementSibling; // El modal está justo después de la card

        if (modal && modal.classList.contains("modal")) {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";

            // Cerrar modal al hacer clic en la X
            const closeBtn = modal.querySelector(".close");
            closeBtn.addEventListener("click", () => closeModal(modal));
        }
    });
});

// Función para cerrar el modal
function closeModal(modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}
