<?php
// Conexión a la base de datos

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "formulario_so";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

//FECHAS Y HORA 
date_default_timezone_set('America/Bogota');
$fechaopen = date("Y-m-d H:i:s");

// Check connection
if ($conn->connect_error) {
    die("Falló la conexión a la base de datos: " . $conn->connect_error);
}

// Recibir datos del formulario
$tipodecliente = $_POST["tipodecliente"];
$marca = $_POST["marca"];
$gestor = $_POST["gestor"];
$canaldecontacto = $_POST["canaldecontacto"];
$nombre = $_POST["nombre"];
$cedula = $_POST["cedula"];
$telefono = $_POST["telefono"];
$email = $_POST["email"];
$orden = $_POST["orden"];
$motivo = $_POST["motivo"];
$submotivo = $_POST["submotivo"];
$estadodelcaso = $_POST["estadodelcaso"];
$niveldeimportancia = $_POST["niveldeimportancia"];
$niveldegestion = $_POST["niveldegestion"];
$detalledelagestion = $_POST["detalledelagestion"];
//$fechaopen = $_POST["fechaopen"];
// $fechaclose = $_POST["fechaclose"];



// Validar datos (opcional)

// Insertar datos en la tabla
$sql = "INSERT INTO prueba_user (tipodecliente, marca, gestor, canaldecontacto, 
nombre, cedula, telefono, email, orden, motivo, submotivo, estadodelcaso, 
niveldeimportancia, niveldegestion, detalledelagestion, fechaopen) 
VALUES ('$tipodecliente','$marca','$gestor','$canaldecontacto','$nombre','$cedula',
'$telefono','$email','$orden','$motivo','$submotivo','$estadodelcaso','$niveldeimportancia',
'$niveldegestion','$detalledelagestion','$fechaopen')";

if ($conn->query($sql) === TRUE) {
    echo "Registro guardado exitosamente.";
} else {
    echo "Error al guardar el registro: " . $conn->error;
}

$conn->close();

// Redirigir al usuario a la página de inicio
header("Location: index.html");

//YA REDIRIGUE A EL INDEX Y LIMPIA EL FORMULARIO
//YA REGISTRA LA HORA DEL INGRESO

?>

