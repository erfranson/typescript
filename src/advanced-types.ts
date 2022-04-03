//intersection Types 
//close to interface inheritance 
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Ethan',
    privileges: ['created-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = boolean | Date

type Universal = Combinable | Numeric;

const bob: Universal = true

//function Overloads 
function add(a: number, b: number): number;
function add(a: string, b: string ): string;
function add(a: Combinable, b: Combinable) {
    //this is a type guard
    if(typeof a == 'string' || typeof b == 'string'){
        return a.toString()  + b.toString();
    }
    return a + b
}


//overload type from the add function to 
add(1,5);


//type Guards
type UnknownEmployee = Employee | Admin;


function printEmployeeInfo(emp: UnknownEmployee){
    console.log(`Name: ${emp.name}`)
    if('privileges' in emp){
        console.log(`Privileges: ${emp.privileges}`)
    }
    if('startDate' in emp) {
        console.log(`StartDate: ${emp.startDate}`)
    }
    
}

printEmployeeInfo(e1)


class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...')
    }
    loadCargo(amount: number){
        console.log(`Loading cargo... ${amount}lbs`)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(Vehicle: Vehicle){
    Vehicle.drive()
    if(Vehicle instanceof Truck){
        Vehicle.loadCargo(115);
    }
}

useVehicle(v1)
useVehicle(v2)

//Discrimiated Unions  common property in each object that describes our union 
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'
    runningSpeed: number;
}

type Animal = Bird | Horse;

const birdy: Animal = {
    type: 'bird',
    flyingSpeed: 60
}

const horsey: Animal = {
    type: 'horse',
    runningSpeed: 50
}

function moveSpeed(animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(`Moving with speed of ${speed}`)
}

moveSpeed(horsey)

// Type Casting 
const paragraph = document.getElementById('message-output');
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
//better for react
//! is used to say it will not return null
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// you can also use it this way to if it might return null
const userInputElement = document.getElementById('user-input');

if(userInputElement){
    (userInputElement as HTMLInputElement).value = "hi there"
}

//Index Properties 
//good for figuring out unknown properties in an object but want the same message
interface ErrorContainer { 
    id: string;
    //can't have any types that are not the same as the prop
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    id: 'errros!',
    email: 'Not a valid email',
    username: 'Must Start with a capital Character',
}

//Optional chaining
//good if you don't know if a property is set like for fetching data
const fetchedUserData = {
    id: 'u1',
    name: 'Ethan',
    job: { title: 'CEO', description: 'My own company'}
}

console.log(fetchedUserData?.job?.title)

//Nullish Coalescing
//  ?? if this is null or undefined we will use the fall back 
const userInputElem = '';
const storedData = userInputElem ?? 'Default';

console.log(storedData)

export {}