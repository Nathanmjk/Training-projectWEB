<?php
 session_start();
 
 if(!isset($_SESSION['session_name'])){
    echo json_encode("loggin");
 }else{
    echo json_encode("already logged in");
 }


?>