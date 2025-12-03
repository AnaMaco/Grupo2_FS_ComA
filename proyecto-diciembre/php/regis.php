<?php
require_once 'db.php';
session_start();

// Solo aceptamos POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Si alguien entra por GET, lo redirigimos al formulario de registro
    header('Location: /proyecto-final/proyecto-diciembre/html/registro.html');
    exit;
}

// Obtener y sanitizar datos de POST (evita warnings si no existe)
$nombres  = trim(filter_input(INPUT_POST, 'nombres', FILTER_SANITIZE_FULL_SPECIAL_CHARS) ?? '');
$apellidos = trim(filter_input(INPUT_POST, 'apellidos', FILTER_SANITIZE_FULL_SPECIAL_CHARS) ?? '');
$email    = trim(filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL) ?? '');
$clave    = trim($_POST['clave'] ?? ''); // contraseña no la "filtramos" con FILTER_SANITIZE

// Validación básica
if (empty($nombres) || empty($apellidos) || empty($email) || empty($clave)) {
    // Volvemos al formulario con mensaje (podés cambiar por una redirección o mostrar un HTML)
    echo "<script>alert('Faltan datos. Complete todos los campos.'); window.location='/proyecto-final/proyecto-diciembre/html/registro.html';</script>";
    exit;
}

$con = conn();

// Verificar si el email ya existe
$stmt = $con->prepare("SELECT id FROM usuarios WHERE email = ? LIMIT 1");
$stmt->bind_param("s", $email);
$stmt->execute();
$res = $stmt->get_result();
if ($res && $res->num_rows > 0) {
    echo "<script>alert('El correo ya está registrado.'); window.location='/proyecto-final/proyecto-diciembre/html/registro.html';</script>";
    $stmt->close();
    $con->close();
    exit;
}
$stmt->close();

// Hashear la contraseña
$hash = password_hash($clave, PASSWORD_DEFAULT);

// Insertar nuevo usuario
$stmt = $con->prepare("INSERT INTO usuarios (nombres, apellidos, email, clave) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nombres, $apellidos, $email, $hash);

if ($stmt->execute()) {
    // Registro ok -> enviamos al login
    echo "<script>alert('Registro exitoso. Ya podés iniciar sesión.'); window.location='/proyecto-final/proyecto-diciembre/html/login.html';</script>";
} else {
    // Mostrar error (en desarrollo). En producción no mostrar $stmt->error directamente.
    echo "Error al registrar: " . $stmt->error;
}

$stmt->close();
$con->close();
?>
