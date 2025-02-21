document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    // 获取用户输入
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var printElement = document.getElementById("print");
    
    // 使用正则表达式验证密码安全度
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        printElement.textContent = "密码必须包含至少一个字母和一个数字且长度至少为8位";
    }
    if (password !== confirmPassword) {
        printElement.textContent = "密码和确认密码不匹配";
    }else{
        register();
    }

    // 简单的输入验证
    async function register() {
        fetch("http://localhost:7070/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                printElement.textContent = data.message;
                if (data.success == '注册成功') {
                    setTimeout(function () {
                        window.location.href = "login.html";
                    }, 3000);
                }
            }
        })
    }
});
