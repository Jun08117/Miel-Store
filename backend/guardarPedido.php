<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $ciudad = $_POST['ciudad'];
    $codigoPostal = $_POST['codigoPostal'];
    $cantidad = $_POST['cantidad'];
    $producto = $_POST['producto'];

    // Conexión a la base de datos
    $conn = new mysqli("localhost", "boss", "Sierra117", "mielstore");

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    $sql = "INSERT INTO pedidos (nombre, direccion, ciudad, codigo_postal, cantidad, producto) 
            VALUES ('$nombre', '$direccion', '$ciudad', '$codigoPostal', $cantidad, '$producto')";

    if ($conn->query($sql) === TRUE) {
        echo "Pedido guardado con éxito";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>