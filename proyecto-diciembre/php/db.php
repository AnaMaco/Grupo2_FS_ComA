<?php
// Conexión a MySQL en XAMPP
function conn() {
    $hostname = "localhost";
    $usuariodb = "root";
    $passworddb = "";
    $dbname = "pelisplus";

    $conectar = mysqli_connect($hostname, $usuariodb, $passworddb, $dbname);

    if (!$conectar) {
        die("Error de conexión: " . mysqli_connect_error());
    }

    return $conectar;
}
?>

