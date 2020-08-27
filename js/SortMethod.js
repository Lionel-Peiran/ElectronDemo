//delay
//quick sort part
function quicksort(arr, left, right) {
    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);
        quicksort(arr, left, partitionIndex - 1);
        quicksort(arr, partitionIndex + 1, right);
    }
    return arr;
}
function partition(arr, pivot, left, right) {
    var pivotValue = arr[pivot],
        partitionIndex = left;
    for (var i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    if (arr[i] != arr[j]) {
        var b = [].concat(arr);
        sequence.push(b);
    }
}
//quick sort part end