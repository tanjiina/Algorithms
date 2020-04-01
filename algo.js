// a = 35;
// console.log(a);
// function hello (a) {
//     a = 50;
//     console.log(a);
//      return 20;
// }
// console.log(a);
// hello(a);

// function multiply(x,y){
//     console.log(x);
//     console.log(y);
// }
// b = multiply(2,3);
// console.log(b);


// var x=15;
// console.log(x);
// function awesome(){
//     var x=10;
//     console.log(x);
// }
// console.log(x);
// awesome();
// console.log(x);

function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
           x[i] = 'Coding';
      }
      if(x[i] < 0){
         x[i] = 'Dojo';
      }
    }
    return x;
}

console.log(a([5,7,-1,4]));