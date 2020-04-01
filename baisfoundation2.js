//Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  
//Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeItBig(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i]>0){
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(makeItBig([-1,3,5,-5]));

//Print Low, Return High - Create a function that takes in an array of numbers.  
//The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(arr){
    max = 0;
    main = 0;
    for (var i =0;  i < arr.length; i++){
        if (arr[i]> max){
            max = arr[i];
        }
        if (arr[i]<min){
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}
console.log(printLowReturnHigh([0,9,8,100]));

//Print One, Return Another - Build a function that takes in an array of numbers.  
//The function should print the second-to-last value in the array, and return the first odd value in the array.
function printReturn(arr){
    console.log(arr[arr.length-2]);
for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2  !== 0){
        return arr[i];
        break;
    }
}
}
console.log(printReturn([4,3,7,19,10]));

//Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where 
//each value in the original array has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function doubleArr(arr){
    newarr = [];
    for (var i =0 ; i < arr.length; i++){
        arr[i]*= arr[i];
        newarr.push(arr[i]);
    }
    return newarr;
}

//Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  
//Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countPositive(arr){
    count = 0;
    for (var i = 0; i<arr.length; i++){
        if (arr[i]>0){
            count++;
        }
    }
    arr.pop();
    arr.push(count);
    return arr;
}

//Evens and Odds - Create a function that accepts an array. 
// Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function evenOdd (arr){
    countEven = 0;
    countOdd = 0;
    for (var i = 0; i < arr.length; i++){

        if (countEven <= 3){
            if (arr[i] % 2 === 0){
                countOdd = 0;
                countEven++;
               if (countEven === 3){
                console.log("Even more so!");
                countEven=0;
                }
            }
        }
        if (countOdd <= 3){
            if (arr[i] %2 !== 0){
                countEven = 0;
                countOdd++;
                if (countOdd === 3){
                    console.log("That's odd!");
                    countOdd = 0;
                }
            }
        }
    }
}
evenOdd([2,3,5,4,4,8,6])

//Increment the Seconds - Given an array of numbers arr, add 1 to every other element,
// specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function incrementSec (arr) {
    for (var i = 1; i < arr.length; i+=2){
        arr[i]+=1;
        console.log(arr[i]);
    }
    return arr;
}
console.log(incrementSec([1,2,3,4,5,6]));

//Previous Lengths - You are passed an array containing strings. Working within that same array, replace each string with a number
// - the length of the string at the previous array index - and return the array.  
//For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function previousLengths (arr) {
    for(var i = arr.length-1; i > 0; i--){
        arr [i] = arr[i-1].length;
    }
    return arr;
}
console.log(previousLengths(["coding", "dojo", "ninja"]));

//Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.
// Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addSeven (arr){
    newarr = [];
    for (var i = 0; i < arr.length;i++){
        newarr.push(arr[i]+7);
    }
    return newarr;
}
console.log(addSeven([3,4,5,6]));

//Reverse Array - Given an array, write a function that reverses its values, in-place.  
//Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  
//Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
    function reverseArray (arr){
        for (var i = 0; i <arr.length/2; i++){
            temp = arr[i];
            arr[i] = arr[arr.length-i-1];
            arr[arr.length-i-1] = temp;
        }
    return arr;
    }
//Outlook: Negative - Given an array, create and return a new one containing all the values of the original array,
// but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function negative (arr) {
    newarr = [];
    for (var i = 0; i < arr.length; i++){
      
      if (arr[i]>0){
        newarr.push( arr[i]= 0 -arr[i]);
      }else 
        {
          newarr.push(arr[i]);
        }
    }
   return newarr;
}
console.log(negative([1,2,3,-4]))

//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". 
// If no array values are "food", then print "I'm hungry" once.

function alwaysHungry(arr){
    var hasNotSeenFood = true;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            hasNotSeenFood = false;
        }
    }
    if(hasNotSeenFood){
        console.log("I'm hungry");
    }
}
alwaysHungry([1,"food", "food", 2]);
alwaysHungry([1,2,3,4]);

//Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  
//Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true]. 
// swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapCenter(arr) {
       var temp = arr[0];
        arr[0] = arr[arr.length-1];
        arr[arr.length-1] = temp;

        temp = arr[2];
        arr[2] = arr[arr.length-3];
        arr[arr.length-3] = temp;
 console.log (arr);
}
swapCenter([true,42,"Ada",2,"pizza"])
swapCenter([1,2,3,4,5,6]);

//Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num,
// and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleArray(arr, num){
    for (var i = 0; i <arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
}
scaleArray([1,2,3], 3);