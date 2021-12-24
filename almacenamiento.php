<?php
$destino= "participantes.txt";
$nombres= $_POST{"Nombre"};
$apellido=$_POST{"Apellido"};
$abre = fopen($destino, "r");
$contenido = "Nombre: " . $nombres . "\nApellido: " . $apellido;
fclose($destino);
if (ingresar) {
 $abre = fopen($destino, "w");
 $destino= fwrite($contenido);
 fclose($abre)
}
header= ("Location=mensaje.html");

?>