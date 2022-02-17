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
