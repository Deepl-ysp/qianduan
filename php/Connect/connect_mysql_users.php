<?php
    $servername = 'localhost';
    $dbusername = 'root';
    $dbpassword = '1qaz0plm';
    $dbname = 'users';
    $connect = mysqli_connect($servername, $dbusername, $dbpassword, $dbname);
    // Check connection
    if (!$connect) {
        die('Connection failed: ' . mysqli_connect_error());
    }
?>