class SortSequence {
    constructor(data) {
        this.Data = data;
        this.ChartSequence = [];
    }
    QuickSort() {
        this.quicksort(0, this.Data.length - 1);
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
        var pivotValue = this.Data[pivot],
            partitionIndex = left;
        for (var i = left; i < right; i++) {
            if (this.Data[i] < pivotValue) {
                this.swap(i, partitionIndex);
                partitionIndex++;
            }
        }
        this.swap(right, partitionIndex);
        return partitionIndex;
    }
    swap(i, j) {
        var temp = this.Data[i];
        this.Data[i] = this.Data[j];
        this.Data[j] = temp;
        if (this.Data[i] != this.Data[j]) {
            var b = [].concat(this.Data);
            this.ChartSequence.push(b);
        }
    }
};

var Sort = SortSequence([1, 5, 6, 9]);

Sort.QuickSort();

console.log(Sort.Data);
