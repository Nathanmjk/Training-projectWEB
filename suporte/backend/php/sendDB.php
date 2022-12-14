<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 'On');
    include_once "database/conectDB.php";
    session_start();

    $name = $_POST['name'];
    $sector = $_POST['sector'];
    $category = $_POST['category'];
    $file =  $_POST['file'];
    $commentary = $_POST['commentary'];
    $email = $_SESSION['email'];
    $sql_code = mysqli_query($conect, "INSERT INTO TBsupport(user_name, sector, category, commentary, user_email) VALUES ('$name', '$sector', '$category', '$commentary', '$email')");

    echo json_encode("Success");
?>