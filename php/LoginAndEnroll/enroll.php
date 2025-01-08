<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>注册</title>
    <link rel="stylesheet" href="http://localhost:6125/css/enroll.css">
</head>
<body>
<form action="enroll.php" method="post" id="registrationForm">
    <!-- 输入用户名 -->
    <input type="text" name="username" placeholder="请输入用户名" required>
    <!-- 输入邮箱 -->
    <input type="email" name="email" placeholder="请输入邮箱" required>
    <!-- 输入密码 -->
    <input type="password" name="password" placeholder="请输入密码" required>
    <!-- 确认密码 -->
    <input type="password" name="confirm_password" placeholder="确认密码" required>
    <!-- 提交按钮 -->
    <input type="submit" value="提交">
</form>

</body>
</html>
<?php
// 引入数据库连接文件
include '../Connect/connect_mysql_users.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['confirm_password'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm_password'];

    // 验证用户名
    if (!preg_match('/^[a-zA-Z0-9]{1,30}$/', $username)) {
        echo '用户名必须为1-30位的字符串且不能包含特殊字符';
        exit;
    }

    // 验证邮箱
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo '请输入合法的邮箱地址';
        exit;
    }

    // 验证密码
    if (!preg_match('/^[a-zA-Z0-9]{6,20}$/', $password)) {
        echo '密码必须为6-20位的字符串且不能包含特殊字符';
        exit;
    }

    // 验证密码一致性
    if ($password !== $confirmPassword) {
        echo '密码不一致';
        exit;
    }

    // 查询数据库中是否存在相同的用户名或邮箱
    $stmt = $connect->prepare("SELECT * FROM users WHERE username = ? OR email = ?");
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // 如果存在相同的用户名或邮箱，则提示用户名或邮箱已存在
    if ($result->num_rows > 0) {
        echo '用户名或邮箱已存在';
    } else {
        // 如果不存在相同的用户名或邮箱，则将密码进行加密后插入数据库
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $connect->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $hashedPassword);

        // 如果插入成功，则将用户信息保存到json文件中，并跳转到登录页面
        if ($stmt->execute()) {
            $userJson = json_encode(['username' => $username, 'password' => $hashedPassword]);
            file_put_contents('D:/phpstudy/phpstudy_pro/WWW/www.czgrzx.cn/userjson/' . $username . '.json', $userJson);
            header('Location: ./login.php');
            exit;
        } else {
            // 如果插入失败，则提示注册失败
            echo '注册失败';
        }
    }

    // 关闭数据库连接
    $stmt->close();
    $connect->close();
}
?>