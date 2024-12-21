<?php
$db_host = "localhost";
$db_user = "root";
$db_pass = "1qaz0plm";
$db_name = "users";
$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if (!$conn){
    echo "连接失败问题在".mysqli_connect_error();
}