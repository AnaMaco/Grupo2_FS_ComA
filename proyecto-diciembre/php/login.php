<?php
require_once 'db.php';
session_start();

error_reporting(E_ALL);
ini_set('display_errors', 1);

$conectar = conn();

// Recibir datos
$email = strtolower(trim($_POST['email'] ?? ''));
$clave = trim($_POST['clave'] ?? '');

// Validación
if (empty($email) || empty($clave)) {
    echo "<script>alert('Complete todos los campos'); window.location='login.html';</script>";
    exit;
}

// Buscar usuario EXACTO
$stmt = $conectar->prepare("SELECT id, nombres, email, clave FROM usuarios WHERE email = ? LIMIT 1");
$stmt->bind_param("s", $email);
$stmt->execute();
$resultado = $stmt->get_result();

// Mostrar el resultado SQL
echo "<h2>Resultado SQL</h2>";
echo "Filas encontradas: " . $resultado->num_rows . "<br>";

if ($resultado->num_rows === 0) {
    echo "<script>alert('El correo no está registrado'); window.location='login.html';</script>";
    exit;
}

$usuario = $resultado->fetch_assoc();

// Mostrar hash
echo "<pre>";
print_r($usuario);
echo "</pre>";

// CORRECTO:
if (!password_verify($clave, $usuario['clave'])) {
    echo "<script>alert('Contraseña incorrecta'); window.location='login.html';</script>";
    exit;
}

// Iniciar sesión
$_SESSION['usuario_id'] = $usuario['id'];
$_SESSION['usuario_nombres'] = $usuario['nombres'];
$_SESSION['usuario_email'] = $usuario['email'];

// MENSAJE DE BIENVENIDA
$_SESSION['mensaje'] = "¡Bienvenido a nuestra web. Inicio Sesión Exitoso, {$usuario['nombres']}!";

// Redirigir a una página PHP, NO HTML
header("Location:/proyecto-final/proyecto-diciembre/php/index.php");
exit;
?>


