class DataBox {
    constructor() {
        //目前js对于私有属性的支持还不到位，暂时使用python命名规则
        this._Data = []; //私有属性
        this._ChartSequence = [];//私有属性，不希望被访问
        this.QuickSort = function () {
            this.quicksort(0, this._Data.length - 1);
        }
    }
    set Data(data) {
        this._Data = data;
    }//set 访问器，写私有属性_Data
    get ChartData() {
        return this._ChartSequence;
    }//get 访问器，读取私有属性_ChartSequence
    //只允许

    //快速排序部分
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
