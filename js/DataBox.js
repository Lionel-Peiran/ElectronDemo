class DataBox {
    constructor() {
        //目前js对于私有属性的支持还不到位，暂时使用python命名规则
        this._Data = []; //私有属性
        this._ChartSequence = [];//私有属性，不希望被访问
    }
    set Data(data) {
        this._Data = data;
    }//set 访问器，写私有属性_Data
    get ChartData() {
        return this._ChartSequence;
    }//get 访问器，读取私有属性_ChartSequence

    //直接插入排序
    DirectInsertionSort() {
        var temp = 0;
        for (var i = 0; i < this._Data.length; i++) {
            if (this._Data[i] < this._Data[i - 1]) {
                temp = this._Data[i];
                for (var j = i; j >= 0; j--) {
                    if (j > 0 && this._Data[j - 1] > temp) {
                        this._Data[j] = this._Data[j - 1];
                    } else {
                        this._Data[j] = temp;
                        var b = [].concat(this._Data);
                        this._ChartSequence.push(b);
                        break;
                    }
                }
            }
        }
    }
    //直接插入排序结束
    //折半插入排序部分
    BinaryInsertSort() {
        var low, high, m, temp, i, j;
        for (i = 1; i < this._Data.length; i++) {
            //折半查找应该插入的位置
            low = 0;
            high = i - 1;
            while (low <= high) {
                m = parseInt((low + high) / 2);
                if (this._Data[m] > this._Data[i])
                    high = m - 1;
                else
                    low = m + 1;
            }
            //统一移动元素，然后将这个元素插入到正确的位置
            temp = this._Data[i];
            for (j = i; j > high + 1; j--) {
                this._Data[j] = this._Data[j - 1];
            }
            this._Data[high + 1] = temp;
            var b = [].concat(this._Data);
            this._ChartSequence.push(b);
        }
    }
    //折半插入排序结束
    //希尔排序开始
    ShellSort() {
        var d = this._Data.length;
        while (d > 1) {
            d = parseInt(d / 2);
            for (var x = 0; x < d; x++) {
                for (var i = x + d; i < this._Data.length; i = i + d) {
                    var temp = this._Data[i];
                    var j;
                    for (j = i - d; j >= 0 && this._Data[j] > temp; j = j - d) {
                        this._Data[j + d] = this._Data[j];
                    }
                    //避免数值相同浪费时间
                    if (this._Data[j + d] != temp) {
                        this._Data[j + d] = temp;
                        var b = [].concat(this._Data);
                        this._ChartSequence.push(b);
                    }
                }
            }
        }
    }
    //希尔排序结束
    //冒泡排序开始
    BubbleSort() {
        var i, j;
        for (i = 0; i < this._Data.length - 1; i++) {
            for (j = 0; j < this._Data.length - i - 1; j++) {   // 这里说明为什么需要-1
                if (this._Data[j] > this._Data[j + 1]) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
    //冒泡排序结束
    //快速排序部分
    QuickSort() {
        this.quicksort(0, this._Data.length - 1);
    }
    quicksort(left, right) {
        if (left < right) {
            var pivot = right;
            var partitionIndex = this.partition(pivot, left, right);
            this.quicksort(left, partitionIndex - 1);
            this.quicksort(partitionIndex + 1, right);
        }
    }
    partition(pivot, left, right) {
        var pivotValue = this._Data[pivot],
            partitionIndex = left;
        for (var i = left; i < right; i++) {
            if (this._Data[i] < pivotValue) {
                this.swap(i, partitionIndex);
                partitionIndex++;
            }
        }
        this.swap(right, partitionIndex);
        return partitionIndex;
    }
    //快排结束
    //简单选择排序开始
    SimpleSelectSort() {
        console.log("begin");
        var i, j;
        for (i = 0; i < this._Data.length - 1; i++) {
            var min = i; // 记录最小元素位置
            for (j = i + 1; j < this._Data.length; j++) {
                if (this._Data[j] < this._Data[min]) {
                    min = j; // 更换最小元素位置
                }
            }
            if (min != i) {
                this.swap(i, min); // 与第i个位置进行交换
            }
        }

    }
    //简单选择排序结束
    swap(i, j) {
        var temp = this._Data[i];
        this._Data[i] = this._Data[j];
        this._Data[j] = temp;
        if (this._Data[i] != this._Data[j]) {
            var b = [].concat(this._Data);
            this._ChartSequence.push(b);
        }
    }
};
