<?php
// acceso a base de datos 
// function conn(){

 //   $hostname = "192.168.10.100";
 //   $usuariodb = "root";
 //   $passworddb = "";
 //   $dbnombre = "Usuarios";
 //   $puerto = '1433';

    // Genera Conexion
   // $conectar = mysqcli_connect($hostname, $usuariodb, $passworddb, $dbnombre);
 //  $conectar = mysql_connect($hostname,$usuariodb,$passworddb,$dbnombre);
 
//}
// modelo de conexion a sql server 

    $hostname   = "SERVER-TI";
    $usuariodb  = "root";
    $passworddb = "";
    $dbnombre   = "Usuarios";

    $conn = sqlsrv_connect($hostname,$usuariodb,$passworddb,$dbnombre);

    if($conn){
        echo "conexion establecida.<br/>";

    }else{
        echo "Conexion no se pudo establecer.<br/>";
        die(print_r(sqlsrv_errors(),true));

    }
?>