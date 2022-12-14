<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 'On');
    
    session_start();

    session_destroy();
    setcookie(session_name("WEBsession"), "", 0, "/");
    echo json_encode("Success");

?>