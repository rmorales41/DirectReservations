<?php
// acceso a base de datos 
function conn(){
    $hostname = "server-ti";
    $usuariodb = "root";
    $passworddb = "";
    $dbnombre = "Usuarios";

    // Genera Conexion
    $conectar = mysqcli_connect($hostname, $usuariodb, $passworddb, $dbnombre);
    return $conectar;
}
?>