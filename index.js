function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function divide(a,b){
    return a / b;
}
function multiply(a,b){
    return a * b;
}
let number = 10
function add5(){
    return (number += 5);
}
function divideBy3(){
    return (number /= 3);
}
function increment(n){
   n++;
    return ( n )
}

function decrement(n){
    n--;
    return n
}
parseInt("2", 10);
parseInt("2.2222", 10);
parseInt("nonsense!", 10);

// function makeInt(n){
//     //makeint is suppose analyze n as an intenger and returns the analyzed integer
//     // assumes base 10 
//     // returns Not a number as a appropriate
//     // parseint looks for numerals in strings ... "3.3"
// }

// function means im declaring/ defining a new function
// After function comes the function name , here i can name my new function
// after function name i declare parameters by using parens and varibles 
// after parameters comes the code block
// code blocks holds a set of intructions for the parameter
function makeInt(n){
  let result = parseInt(n, 10)
    return result
}
function preserveDecimal(n){
    let result = parseFloat(n)
    return result
}

