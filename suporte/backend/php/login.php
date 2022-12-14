<?php
include "database/conectDB.php";

$email = $_POST["email"];
$password = $_POST["Hash"];
$sql_code = mysqli_query($conect, "SELECT 'user_name', 'user_password' FROM DBsupport.TBusers WHERE user_email = '$email' AND user_password = '$password'");




if(mysqli_num_rows($sql_code) != 1 OR empty($_POST['email']) OR empty($_POST['Hash'])){
    echo json_encode("Login Ou senha incorreto");
    
   
  }else{
    session_start();
    $_SESSION['email'] = $email;
    $_SESSION['session_id'] = session_id();
    $_SESSION['session_name'] =  session_name("WEBsession");
    $_SESSION['data_criacao'] = time();
    $_SESSION['data_exp'] = $_SESSION['data_criacao'] + 3600;
    echo json_encode("Success");
  }
  
?>