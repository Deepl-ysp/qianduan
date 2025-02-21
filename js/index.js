var quryLeftButton = document.querySelectorAll('.items1 button');
quryLeftButton.forEach(button => {
    button.addEventListener('click', function () {
        quryLeftButton.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        clearAndAddElements(this.id);
    });
});
function updateTime() {
    let timeData = GetTime();
    document.getElementById("time").innerHTML = `当前时间:${timeData.year}年 ${timeData.month}月 ${timeData.day}日 ${timeData.week} ${timeData.hour}:${timeData.minute}:${timeData.second}`;
}
setInterval(updateTime, 1000);
getUserIP().then(ip => {
document.getElementById("ip").innerHTML = `用户IP:${ip}`;
});
var userlogin = getUserLoginStatus();
var users = userlogin.user;
if(userlogin.user.login==true){
    document.getElementById("user").innerHTML = `<a href="html/user.html">${users.username}</a>`;
}
function clearAndAddElements(buttonId) {
    const quryIndexBox1 = document.querySelectorAll('.index-box1');
    quryIndexBox1.forEach(box => {
        box.innerHTML = '';
    });
    let newContent = '';
    switch (buttonId) {
        case 'button-jichuyvyan':
            newContent = box.jcyy;
            break;
        case 'button-qianduankuangjia':
            newContent = box.qdkj;
            break;
        case 'button-shizhanlianxi':
            newContent = box.szlx;
            break;
        case 'button-shizhanxiangmu':
            newContent = box.szxm;
            break;
        default:
            newContent = '<p>暂无内容</p>';
    }
    quryIndexBox1.forEach(box => {
        box.innerHTML = newContent;
    });
    const buttons = document.querySelectorAll('.index-box-ul .index-box-items button');
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const id = this.id;
            window.location.href = "html/course/" + id + ".html";
        });
    });
}
document.getElementById("html").addEventListener("click", function () {
    window.location.href = "html/course/html.html";
})
document.getElementById("css").addEventListener("click", function () {
    window.location.href = "html/course/css.html";
})
document.getElementById("javascript").addEventListener("click", function () {
    window.location.href = "html/course/javascript.html";
})