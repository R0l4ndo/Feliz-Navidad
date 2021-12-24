<?php
$destino= "kuenta264@gmail.com";
$nombres= $_POST{"Nombre"};
$apellido=$_POST{"Apellido"};
$contenido = "Nombre: " . $nombres . "\nApellido: " . $apellido;
mail($destino, "Contacto", $contenido);
header("Location:Mensaje.html");
?>