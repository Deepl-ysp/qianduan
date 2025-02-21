// 获取时间
function GetTime(){
    let Dates = new Date();
    let week = Dates.getDay();
    let days = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    week = days[week];
    let year = Dates.getFullYear();
    let month = Dates.getMonth() + 1;
    let day = Dates.getDate();
    let hour = Dates.getHours();
    let minute = Dates.getMinutes();
    let second = Dates.getSeconds();
    let timestamp = Dates.getTime();
    if(hour.toString().length == 1){
        hour = "0" + hour;
    }
    if(minute.toString().length == 1){
        minute = "0" + minute;
    }
    if(second.toString().length == 1){
        second = "0" + second;
    }
    let dates = {year: year,month: month,day: day,week: week,hour: hour,minute: minute,second: second,timestamp: timestamp}
    return dates;
}
// 获取用户ip
async function getUserIP() {
    try {
        const response = await fetch('https://httpbin.org/ip');
        const data = await response.json();
        return data.origin;
    } catch (error) {
        console.error('IP地址获取失败:', error);
        return null;
    }
}
// 创建文件
async function CreateFile(obj) {
    try {
        let response = await fetch('http://api.czgrzx.cn/CreateFile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        if (!response.ok) {
            throw new Error('网络响应错误:' + response.statusText);
        }
        let responseData = await response.json();
        if (responseData.success) {
            console.log('文件创建成功');
        } else {
            console.error('文件创建失败:', responseData.message);
        }
    } catch (error) {
        console.error('fetch请求失败:', error);
    }
}
// 读取文件
function ReadFile(obj, callback) {
    fetch('http://api.czgrzx.cn/ReadFile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('网络响应错误: ' + response.statusText);
        }
        return response.json();
    })
    .then(responseData => {
        callback(null, responseData);
    })
    .catch(error => {
        callback(error, null);
    });
}
//获取用户登录状态
async function getUserLoginStatus() {
    try {
        const response = await fetch('http://api.czgrzx.cn/user/loginStatus');
        const data = await response.json();
        return data.status;
    } catch (error) {
        console.error('获取用户登录状态失败:', error);
        return null;
    }
    if (status == true) {
        let datas = JSON.parse(status);
        return datas;
    }else{
        return false;
    }
}