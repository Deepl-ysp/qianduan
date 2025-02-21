document.getElementById("button1").onclick = function () {
    window.location.href = "../index.html";
}
//阻止表单默认事件
document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    
    var identifier = document.getElementById("identifier").value; // 用于接收邮箱或用户名
    var password = document.getElementById("password").value;
    
});