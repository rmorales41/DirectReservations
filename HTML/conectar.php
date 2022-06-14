<?php
class Cconexion{
    function Conexiondb(){
        $host       ='server-ti';
        $dbname     ='Usuarios';
        $username   ='root';
        $password    = '';
        $puerto  = '1433';

        try{
            $conn = new PDO ("sqlsrv:Server=$host,$puerto;DataBase=$dbname",)$username,$password);
            echo "Se Conecto a la base de datos "
        }
        cat(PDOException $exp){
            echo ("No se logro conectar correctamente a la base de datos: $dbname ,error: $exp");
        }
        return $conn;
    }
}
?>