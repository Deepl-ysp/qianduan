<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登录</title>
</head>
<body>
    <form action="login.php" method="post">
        <input type="text" name="username" placeholder="用户名" required>
        <input type="password" name="password" placeholder="密码" required>
        <input type="submit" name="submit" value="登录">
    </form>
</body>
</html>
<?php
// 引入数据库连接文件
include '../Connect/connect_mysql_users.php';

// 检查是否提交了表单
if (isset($_POST['submit'])) {
    // 获取表单提交的用户名和密码
    $username = $_POST['username'];
    $password = $_POST['password'];

    // 准备SQL语句，防止SQL注入
    $stmt = $connect->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    // 绑定参数到SQL语句
    $stmt->bind_param("ss", $username, $password);
    // 执行SQL语句
    $stmt->execute();
    // 获取查询结果
    $result = $stmt->get_result();

    // 检查查询结果是否有匹配的记录
    if ($result->num_rows > 0) {
        // 启动会话
        session_start();
        // 将用户名存储到会话中
        $_SESSION['username'] = $username;
        // 重定向到主页
        header('Location: http://www.czgrzx.cn//index.php');
        // 终止脚本执行
        exit;
    } else {
        // 如果没有匹配的记录，弹出错误提示
        echo '<script>alert("用户名或密码错误");</script>';
    }

    // 关闭SQL语句
    $stmt->close();
    // 关闭数据库连接
    mysqli_close($connect);
}
?>
