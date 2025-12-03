function showToast(message, type = "info") {

    // --- Crear contenedor si no existe ---
    let container = document.querySelector(".toast-container");
    if (!container) {
        container = document.createElement("div");
        container.classList.add("toast-container");
        document.body.appendChild(container);
    }

    // --- Crear elemento toast ---
    const toast = document.createElement("div");
    toast.classList.add("toast", type);

    // Iconos
    const icons = {
        success: "✔️",
        error: "❌",
        warning: "⚠️",
        info: "ℹ️"
    };

    toast.innerHTML = `
        <div class="toast-icon">${icons[type] || "ℹ️"}</div>

        <div class="toast-content">
            <div class="toast-title">${type.toUpperCase()}</div>
            <div class="toast-message">${message}</div>
        </div>

        <button class="toast-close">&times;</button>

        <div class="toast-progress"></div>
    `;

    container.appendChild(toast);

    // --- Cierre manual ---
    toast.querySelector(".toast-close").addEventListener("click", () => removeToast(toast));

    // --- Cierre automático ---
    setTimeout(() => removeToast(toast), 3000);
}


// --- Animación de salida ---
function removeToast(toast) {
    toast.classList.add("removing");

    setTimeout(() => {
        toast.remove();
    }, 300);
}
