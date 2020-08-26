var running = false;
var count = 0;
var choice = 4;//默认选择快排
var running = false;
var data = [];

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

document.getElementById("start").onclick = function () {
    var temp = document.getElementById("data").value.split(/\s+/);
    console.log(temp);
    if (!check_data(temp)) {
        alert("您输入的数据有误，请保证您的输入仅包含数字，且数量大于1");
        document.getElementById("data").value = "";
    }
    else {
        data = StringToFloat(temp);
        console.log(data);
        var choices = document.getElementsByName("sort_method");
        for (i = 0; i < choices.length; i++) {
            if (choices[i].checked) {
                running = confirm("您选择了" + choices[i].value + "，按确定开始");
                break;
            }
        }
        if (running) {
            document.getElementById("test").innerHTML = data;

        }
    }
}