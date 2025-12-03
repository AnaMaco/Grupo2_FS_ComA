document.getElementById("form-login").addEventListener("submit", function(e) {

    const email = document.getElementById("email").value.trim();
    const clave = document.getElementById("clave").value.trim();

    // Validación: Campos vacíos
    if (email === "" || clave === "") {
        e.preventDefault();
        showToast("Todos los campos son obligatorios");
        return;
    }

    // Validación de email más precisa
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        e.preventDefault();
        showToast("El correo no es válido");
        return;
    }

    // Validación de longitud de clave
    if (clave.length < 6) {
        e.preventDefault();
        showToast("La contraseña debe tener al menos 6 caracteres");
        return;
    }
});

