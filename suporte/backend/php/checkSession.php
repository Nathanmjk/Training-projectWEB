<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');
session_start();
if(!function_exists("protect")){
    function protect(){
        if(!isset($_SESSION))
        session_start();

        if(!isset($_SESSION['session_name'])){
            echo json_encode("Not authorized");
        }else{
            if (time() > $_SESSION['data_exp'] ) {
                session_destroy();
                setcookie(session_name("WEBsession"), "", 0, "/");
                echo json_encode("Not authenticaded");
            }else{
                echo json_encode("authenticaded");
            }
        }
        


        
    }
}

protect();


?>