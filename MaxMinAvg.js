function MinMaxAvg (arr){
    var sum = 0;
    var avg = 0;
    var max = 0;
    var min = 0;

    for (i = 0; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
         min = arr[i];
        }
        sum += arr[i];
    }
    avg = sum/arr.length;
    return "The minimum is " +min+ ". The maximum is " +max+ ". The average is " +avg
}
a = MinMaxAvg([9,10,56,2])
console.log(a)