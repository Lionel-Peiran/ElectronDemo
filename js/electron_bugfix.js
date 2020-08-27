var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf(' electron/') > -1) {
    const { dialog } = require('electron').remote;//修改默认对话框，修复electron弹出默认对话框后页面失去焦点的bug
    alert = function (str) {
        var options = {
            type: 'warning',
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
            type: 'warning',
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