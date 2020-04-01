//Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  
//Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function rSigma(num){
    if (num ==1){
        return 1;
    }
return num + rSigma(num-1);
}
console.log(rSigma(4));
////-----------------------\\\\
function rSigma(num){
    var sum = 0;
    for (i = 0; i <=num; i++){
        sum+=i;
    }
    return sum;
}
console.log(rSigma(4));
////-----------------------\\\\
function sigma (num){
    var sum = 0;
    while (num >0){
        sum +=num--;
        num--;
    }
    return sum;
}
console.log(sigma(5));

//Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) 
//of all positive integers from 1 up to the given number (inclusive). 
// For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial (num){
    product = 1;
    for (var i = 1; i < num; i++){
        product *= i;
    }
    return product;
}
console.log(factorialNum(5));

//Fibonacci - Create a function to generate Fibonacci numbers. 
// In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. 
// Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 
//4 corresponds to the value four later, etc).  
//Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
//fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), 
//fibonacci(7) = 13 (5+8).  Do this without using recursion first. 
function fib(num){
        var sum = 0;
        if(num < 2){
            console.log(num +" "+ num);
            return num;
        }
        var p1 = 0;
        var p2 = 1;
        for(var i = 2; i <= num; i++){
            sum = p1 + p2;
            p1 = p2;
            p2 = sum;
        }
        console.log(num +" "+ sum);
        return sum;
    }

//Array: Second-to-Last: Return the second-to-last element of an array.
// Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function secondLast (arr) {
    if(arr.length >= 3){
        return arr[arr.length-2];
    }else {
        return null;
    }
}
console.log(secondLast([1,2,3,4]));

//Array: Nth-to-Last: Return the element that is N-from-array's-end.  
//Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function nthLast(arr, n){
    if(arr.length >=n){
        return arr[arr.length-n];
    }else {
        return null;
    }
}

//Array: Second-Largest: Return the second-largest element of an array. 
//Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function secondLargest(arr){
    var max1 = 0;
    var max2 = 0;
    if(arr.length >=2) {
        for(var i = 0; i <arr.length; i++){
            if(arr[i]>max1){
                max2 = max1;
                max1 = arr[i];
                
             } // }else if (arr[i] > max2 && arr[i] != max1) {
            //     max2 = arr[i]; 
            // }    
        } 
      return max2;
    } else {
        return null;
      }
}
console.log(secondLargest([1,2,4]));

//Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order. 
// Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function doubleTrouble(arr){
    var newarr=[];
    for(var i=0;i<=arr.length-1;i++){
        newarr.push(arr[i]);
        newarr.push(arr[i]);
    }
    return newarr;
}
console.log(doubleTrouble([2,3,4,"coding"]));


 