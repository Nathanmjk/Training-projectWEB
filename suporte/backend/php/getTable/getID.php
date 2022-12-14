<?php
    include_once "../database/conectDB.php";
    $email = $_SESSION['email'];
    $sql_code = mysqli_query($conect, "SELECT call_number from DBsupport.TBsupport WHERE user_email = '$email'");
    echo json_encode($sql_code);

?>