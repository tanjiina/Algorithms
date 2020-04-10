function FizzBuzz (num) {
    if (num < 0 || num == ""){
        console.log("Parameter must be a positive number")
    }
    for(i = 1; i <= 20; i++){
        if (i % 3 == 0 && i % 5 == 0)
            console.log("FizzBuzz")
        else if (i % 3 == 0 && i % 5 != 0)
            console.log("Fizz")
        else if (i % 3 !=0 && i % 5 == 0)
            console.log("Buzz")
        else 
            console.log(i)
    }
    // for (var i=1; i <= 20; i++){
    //     if (i % 15 == 0)
    //         console.log("FizzBuzz");
    //     else if (i % 3 == 0)
    //         console.log("Fizz");
    //     else if (i % 5 == 0)
    //         console.log("Buzz");
    //     else
    //         console.log(i);
    // }  
    return "The parameter was " +num
}

console.log(FizzBuzz(20));


function fizzBuzz(n){
    for(var i = 1; i < n; i++){
        if(i % 15 == 0) console.log("FizzBuzz");
        else if(i % 3 == 0) console.log("Fizz");
        else if(i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
}