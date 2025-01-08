<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新UI测试文件</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
    <header>
        <h1>前端开发指南</h1>
        <ul>
            <li><a href="./php/LoginAndEnroll/enroll.php">登录注册</a></li>
            <li><a href="">技术交流</a></li>
            <li><a href="">支持一下</a></li>
        </ul>
    </header>
    <div class="box-max">
        <div class="boxmin1">
            <ul class="left-ul">
                <li class="items1"><button class="active" id="button-jichuyvyan">基础语言</button></li>
                <li class="items1"><button id="button-qianduankuangjia">前端框架</button></li>
                <li class="items1"><button id="button-jinjieyuyan">进阶语言</button></li>
                <li class="items1"><button id="button-shizhanxiangmu">实战项目</button></li>
            </ul>
        </div>
        <div class="index-box">
             <div calss="index-box1">
                <ul calss="index-box-ul">
                    <li calss="index-box-items JCYY"><button id="html"><img src="img/JCYY/html.png" calss="index-box-img"><span calss="index-box-span">HTML</span></button></li>
                    <li calss="index-box-items JCYY"><button id="css"><img src="img/JCYY/css.png" calss="index-box-img"><span calss="index-box-span">CSS</span></button></li>
                    <li calss="index-box-items JCYY"><button id="javascript"><img src="img/JCYY/javascript.png" calss="index-box-img"><span calss="index-box-span">javascript</span></button></li>
                </ul>
             </div>
        </div>
    </div>
    <!-- <button id="test-button">测试专用</button>
    <div id="test-box" style="color: black;">
        测试专用
    </div> -->
    <div class="bottom">
        <h1>站点信息</h1>
        <hr style="background-color: #fff; border: #fff solid 1px;">
        <h2>站长：老橙子ACK</h2>
        <h3>邮箱：yspydys@163.com</h3>
        <h3>QQ：1417278970</h3>
        <h3>微信：rbgayl1084</h3>
        <h2>站点技术：MySQL、PHP、HTML、CSS、JavaScript</h2>
        <h2>站点源码下载：<a href="https://github.com/Deepl-ysp/qianduan.git">https://github.com/Deepl-ysp/qianduan.git</a></h2>
    </div>
    <script src="./js/index.js"></script>
</body>
</html>
<?php
include '../Connect/connect_mysql_users.php';
// 开启session
session_start();

if(isset($_SESSION['username'])){
    $username = $_SESSION['username'];
    echo "<script>alert('欢迎,$username');</script>";
    include '';
}
?>