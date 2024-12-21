<?php
//连接至用户数据库
include '../Connect/connect_mysql_users.php';

//获取前端发送的数据+
$username = $_POST["username"];
$password = $_POST["password"];
$email = $_POST['email'];

//将前端获取的username与数据库中的username索引的所有数据比对
$res = $mysqli->query("select * from users"); //查询所有数据
while ($row = $res->fetch_assoc()) {
    if ($row['username'] == $username) {
        echo "用户名已存在";
        exit();
    }
}

//将前端获取的password转换为哈希值
$password = md5($password);

//将前端获取的email与数据库中的email索引的所有数据比对
$res = $mysqli->query("select * from users"); //查询所有数据
while ($row = $res->fetch_assoc()) {
    if ($row['email'] == $email) {
        echo "邮箱已存在";
        exit();
    }
}

//将前端获取的email转换为哈希值
$email = md5($email);

//将用户信息插入数据库
$mysqli->query("insert into users (username,password,email) values ('$username','$password','$email')");
echo "注册成功";

//关闭数据库
$mysqli->close();
?>


