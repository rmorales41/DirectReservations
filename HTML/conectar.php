<?php
include_once('base_datos.php');

// se recibe los datos de ingreso 
$Usuario=$_POST['Usuario'];
$Contrasena=$_POSTt['Contrasena'];

echo "Revisa info <br>";
echo "$Usuario,$Contrasena <br>";

$conectar=conn(); // ejecta conexion
if (!$conn)
{
    die("No hay Conexion".mysqcli_connect_error());
}

$sql="select * from usuarios where Usuario = '".$Usuario"' and Clave = '".$Contrasena."'";
$result = mysqli_query($conectar,$sql) or trigger_error("Query Failed! Sql - Error".mysqli_error($conectar),E_User_error);

echo "$sql";

if ($result==1)
{
    // ingreso 
    echo ="Ingreso".$usuario ;

}
else if($nr==0)
{
    
    (header("location:login.html"))
    
    
}

?>