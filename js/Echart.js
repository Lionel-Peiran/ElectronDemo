//Echart 配置全局使用
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

//Echart类定义
class Echart {
    //目前js对于私有属性的支持还不到位，暂时使用python命名规则
    //以 _ 开始的属性均为私有属性
    constructor() {
        this._delay = 1000;//默认值
        this._databox = new DataBox();
        myChart.setOption(option);
    }
    Sort(data, delay, choice) {
        this.initChart(data, delay);
        if (choice == 4) {
            this._databox.QuickSort();
        }
        this.ShowProcess();
    }
    //初始化图表
    initChart(cur_data, delay) {
        this._delay = delay;
        this._databox.Data = cur_data;
        option.animationDurationUpdate = delay * 0.8;
        option.xAxis[0].data = cur_data;
        option.series[0].data = cur_data;
        myChart.setOption(option);
    }
    //更新图表
    updateChart(cur_data) {
        option.xAxis[0].data = cur_data;
        option.series[0].data = cur_data;
        document.getElementById("data_out").innerHTML = "当前排列情况：" + cur_data;
        myChart.setOption(option);
    }

    //显示排序过程
    ShowProcess() {
        var SortSequence = this._databox.ChartData;
        var i = 0;//计数器
        document.getElementById("start").disabled = true;
        //js没有阻塞函数，因此使用排列任务表的方式完成延迟动画
        for (i = 0; i < SortSequence.length; i++) {
            setTimeout(this.updateChart, this._delay * (i + 1.5), SortSequence[i]);
            console.log(this._delay * (i + 2));
        }
        setTimeout(function () {
            sequence.length = 0;
            alert("排序完成！");
            document.getElementById("start").disabled = false;
            console.log("clear");
        }, (i + 1.5) * delay);
    }
    //跟随页面变动变化大小
}