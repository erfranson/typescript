let userInput: unknown;
let userName: string;
// you can use any type 
userInput = 5;
userInput = 'Ethan';
//cant set unkown to a value with a set type since it can't guarantee to be that value you have to check first 
// use unknown over any
if(typeof userInput === "string"){
    userName = userInput
}

// never type never returns anything good for error messages since it crashes runtime
function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code};
}

const result = generateError('An Error Occurred', 500);

console.log(result)