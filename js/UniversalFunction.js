//输入数据处理
function check_data(data) {
    if (data[0] == "" && data.length == 1) {
        return false;
    }
    for (let n of data) {
        if (isNaN(n))
            return false;
    }
    return true;
}

function StringToFloat(data) {
    var temp = [];
    for (i = 0; i < data.length; i++) {
        if ((data[i]) != "") {
            temp.push(parseFloat(data[i]));
        }
    }
    return temp;
}
//electron组件bug修复
var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf(' electron/') > -1) {
    const { dialog } = require('electron').remote;
    alert = function (str) {
        var options = {
            type: 'info',
            buttons: ["确定"],
            defaultId: 0,
            cancelId: 0,
            detail: str,
            message: ''
        }
        dialog.showMessageBoxSync(null, options)
    }
    confirm = function (str) {
        var options = {
            type: 'question',
            buttons: ["确认", "取消"],
            defaultId: 0,
            cancelId: 1,
            detail: '',
            message: str
        }
        var flag = dialog.showMessageBoxSync(null, options);
        if (flag == 0) {
            return true;
        } else {
            return false;
        }
    }
}