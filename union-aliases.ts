
//type Aliases 
type Combinable = number | string;
type ConversionOptions = 'as-number' | 'as-string'
//union types 
function combine(
    input1: Combinable,
    input2: Combinable,
    //using literal types with a union
    resultConversion: ConversionOptions
) {
    let result 
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    } else  {
        result = input1.toString() + input2.toString()
    }

    return result;

    // if(resultConversion === 'as-number'){
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges)

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Ethan', 'Tavia', 'as-string');
console.log(combineNames)