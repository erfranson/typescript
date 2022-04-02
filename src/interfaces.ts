//Interfaces basically a blueprint of what our objects/classes should look like 

//function type example probably more common
// type AddFn = (a: number, b: number) => number;
//interface function version
interface AddFn{
    (a: number, b:number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

console.log(add(3,7))

interface Named {
    readonly name?: string;
    //optional name property
    outputName?: string;
}

//you can extend to multiple intefaces seprated by a comma
interface Greetable extends Named {
    //you can use readonly property
    greet(phrase: string): void;
}
//using interface in class you can add other interfaces seperated by a comma
class Person implements Greetable {
    
    constructor(public name?: string) {
    }

    greet(phrase: string): void {
        console.log(`${phrase}${this.name ? ` ${this.name}` : ''}`)
    }
}

let user1: Greetable;

// user1 = {
//     name: "Ethan",
//     greet(phrase: string){
//         console.log(`${phrase} ${this.name}`)
//     }
// };
// user1.greet('what up');

user1 = new Person('Bill');
user1.greet('What up')

export {};