function procesarPedido() {
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;
    const codigoPostal = document.getElementById("codigoPostal").value;
    const cantidad = document.getElementById("cantidad1").value; // Obtener cantidad del select
    const producto = "Envase de miel - 500ml"; // Por ejemplo, el nombre del producto
    const producto = "Envase de miel - 1Lt"; // Por ejemplo, el nombre del producto

    fetch("C:\Users\JuanC\Desktop\MielStore\backend\guardarPedido.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `nombre=${nombre}&direccion=${direccion}&ciudad=${ciudad}&codigoPostal=${codigoPostal}&cantidad=${cantidad}&producto=${producto}`,
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        cerrarFormulario();
        document.getElementById("formularioEnvio").reset();
    })
    .catch(error => console.error("Error:", error));
}