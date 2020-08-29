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

function show_Charts() {
    var i;
    for (i = 0; i < sequence.length; i++) {
        setTimeout(updateChart, delay * (i + 1), sequence[i]);
        console.log(delay * (i + 1));
    }
    setTimeout(function () {
        sequence.length = 0;
        alert("排序完成！");
        console.log("clear");
    }, (i + 1) * delay);
}

document.getElementById("start").onclick = function () {
    var temp = document.getElementById("data").value.split(/\s+/);
    console.log(temp);
    if (!check_data(temp)) {
        alert("您输入的数据有误，请保证您的输入仅包含数字，且数量大于1");
        //document.getElementById("data").value = "";
    }
    else {
        data = StringToFloat(temp);
        console.log(data);
        var choices = document.getElementsByName("sort_method");
        for (i = 0; i < choices.length; i++) {
            if (choices[i].checked) {
                running = confirm("您选择了" + choices[i].value + "，选择确认开始");
                delay = document.getElementById("delay").value;
                choice = i;
                break;
            }
        }
        if (running) {
            initChart(delay, data);
            var b = [].concat(data);
            sequence.push(b);
            console.log(delay);
            if (choice == 4) {//快速排序
                quicksort(data, 0, data.length - 1);
                console.log("sort_end");
                console.log(sequence);
            }
            show_Charts();

            console.log(sequence);
        }
    }
}