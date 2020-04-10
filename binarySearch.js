function binarySearch (arr, val){
    var start = 0
    var end = arr.length -1
    var half = (start-end/2)
    while(arr[half] != val){
        half = (start-end/2)
        if(val > arr[half]){
            start = half;
        }
        else if(val < arr[half]){
            end = half;
        }
        else if(half == 0 || half == arr.length -1){
            return false
        }
    }
    return true
}