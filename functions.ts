function add(n1: number, n2: number){
    return n1 + n2
}

function printResult(num: number){
    console.log('Result:' + num)
}


function addAndHandle(n1: number, n2: number, cb: (num: number) => void ) {
    const result = n1 + n2
    cb(result)
}

// function type you can define the type of function if and give it the parameters you are expection and what it should return
let combineValues: (a: number, b: number) => number; 
combineValues = add;
//below will be a type function but any function
// let combineValues: Function; 
// combineValues = printResult;

//if you dont define combineValues it will be an any type which can cause runtime errors, if you change from a function to a value such as:
// combineValues = add;
// combineValues = 5

console.log(combineValues(8 , 8))

printResult(add(4,4));

addAndHandle(10, 20, (result) =>{
    console.log(result)
 })