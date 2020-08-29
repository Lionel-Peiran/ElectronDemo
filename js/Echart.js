//Echart设置
const myEchartOption = {
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

class Echart {
    constructor() {
        this.myChart = echarts.init(document.querySelector(".chart"));
        this.option = myEchartOption;
    }
    initChart()
}