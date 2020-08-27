var myChart = echarts.init(document.querySelector(".chart"));
var option = {
    color: ['#3398DB'],
    title: [{
        text: "数据视图，每次交换一对数据",

    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '数据值',
            type: 'bar',
            barWidth: '80%',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]
        }
    ],
    animationDurationUpdate: 500
};

function initChart(delay, cur_data) {
    option.animationDurationUpdate = delay * 0.8;
    option.xAxis[0].data = cur_data;
    option.series[0].data = cur_data;
    myChart.setOption(option);
}

function updateChart(cur_data) {
    console.log("update");
    option.xAxis[0].data = cur_data;
    option.series[0].data = cur_data;
    document.getElementById("data_out").innerHTML = "当前排列情况：" + cur_data;
    myChart.setOption(option);
    console.log(cur_data);
}

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
})