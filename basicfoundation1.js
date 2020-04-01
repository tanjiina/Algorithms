//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255
function returnArrofNumbers () {
    var arr = [];
    for (i = 1; i <= 255; i++){
        arr.push(i);
    }
    console.log(arr);
    return arr;
}
a = returnArrofNumbers(); 
console.log(a);

//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000. 
// You may use a modulus operator for this exercise.
function evenSum() {
    var sum = 0
    for (i = 2; i <=1000; i= i+2){
        sum += i;
    }
    console.log(sum);
    return sum;
}
b = evenSum();
console.log(b);

//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. 
//(e.g. 1+3+5+...+4997+4999).
function oddSum() {
    var sum = 0;
    for (i = 1; i <=5000; i = i+3){
        sum+= i;
    }
    console.log(sum);
}
oddSum();

//Iterate an array - Write a function that returns the sum of all the values within an array.
// (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumArray(arr){
    var sum= 0;
    for (i =0; i <arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
a = sumArray([1,2,5]);
console.log(a);
b = sumArray([-5,2,5,12]);
console.log(b);

//Find max - Given an array with multiple values, write a function that returns the maximum number in the array. 
//(e.g. for [-3,3,5,7] max is 7)
function maxValue(arr){
    var max = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i]>max) {
            max = arr[i];
        }
    }
    return max;
}
a = maxValue([-3,3,5,7]);
console.log(a);

//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. 
//(e.g. for [1,3,5,7,20] average is 7.2)
function avgArray(arr) {
    var sum= 0;
    var average = 0;
    for(i = 0; i <arr.length; i++){
        sum+= arr[i];
    }
    average =sum/arr.length;
    return average;
}
a = avgArray([1,3,5,7,20]);
console.log(a);

//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50.
// (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function pushArray() {
    var arr = [];
    for (i = 1; i <=50; i = 1+2){
        arr.push(i);
    }
    return arr;
}
console.log(pushArray());

//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
//For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. 
//(There are two values in the array greater than 3, which are 5, 7).
function greaterThan (arr, y){
    var count = 0;
    for (i = 0; i <arr.length; i++){
        if (arr[i]>y){
            count++
        }
    }
    return count;
}
console.log(greaterThan([1,3,5,7],3));

//Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.
// (e.g. [1,5,10,-2] will become [1,25,100,4])
function squareArray(arr) {
    for (i = 0; i <arr.length; i++){
        arr[i]= arr[i]*arr[i];
    }
    return arr;
}
console.log(squareArray[1,5,10,-2]);


//Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. 
//When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function negArray (arr) {
    for (i = 0; i <arr.length; i++){
        if (arr[i]<0){
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(negArray([1,5,10,-2]));

//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum,
// and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg (arr) {
    newarr = [];
    sum = 0;
    avg = 0;
    max = 0;
    min = 0;
    for ( var i = 0; i <arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
         min = arr[i];
        }
        sum += arr[i];
    }
    avg = sum/arr.length;
    newarr.push(max, min, avg);
    return newarr;
}
console.log(maxMinAvg([1,5,10,-2]));

//Swap Values - Write a function that will swap the first and last values of any given array. 
//The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapValues (arr){
    for ( var i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i]= arr[arr.length -1-i];
        arr[arr.length-1-i]= temp;
    }
    return arr;
}
console.log(swapValues([1,5,10,-2]));

//Number to String - Write a function that takes an array of numbers and replaces any negative values 
//within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function toString (arr){
    for (var i = 0; i < arr.length; i ++){
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(toString([-1,-3,2]));