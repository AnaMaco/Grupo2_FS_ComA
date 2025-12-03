const formRegistro = document.getElementById('form-registro');

formRegistro.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = formRegistro.nombres.value.trim();
    const apellido = formRegistro.apellidos.value.trim();
    const email = formRegistro.email.value.trim();
    const password = formRegistro.clave.value.trim();

    const result = authManager.register({
        nombre,
        apellido,
        email,
        password
    });

    if (result.success) {
        Toast.success("Usuario registrado correctamente", "¡Éxito!");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    } else {
        Toast.error(result.message, "Error");
    }
});


