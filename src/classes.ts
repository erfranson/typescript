// Code goes here!
// const userName = 'Ethan';

// let age = 30

// age = 29;
// var result;

// function add(a: number, b: number) {
//     result = a + b;
//     return result
// }



const add = (a: number, b: number) => a + b;

console.log(add(99, 102030))

const printOutput = (output: string | number ) => {
    console.log(output)
}

printOutput(add(99, 33))

const ages: number[] = [1,2,3,4,5,6]
//spread operator
const money: number[] = [13,4, ...ages]


//rest parameters
let addNumbers = (...numbers: number[]):void => {
    let result = numbers.reduce((preValue: number, curValue: number) => {
        return preValue + curValue;
    },21)
    console.log(result)
} 

addNumbers(...ages)
console.log(money)

// destructuring

//array example
const [ethan, tavia, ...other] = ages

const people = {
    Fred: 'cool',
    Bob: 'dumb'
}
//object example
const {Fred, Bob} = people
console.log(ethan, tavia, other, Fred, Bob)

//classes 
//abstract classes cant be instanciated 
abstract class Department {
    //private and protected and public only in typescript
    //private readonly id: string
    //private name: string;
    // private employees: string[] = [];
    //protected allows classes that extend the class to use that property
    protected employees: string[] = [];

    //cant access this in our non static parts 
    static fiscalYear: number = 2022;
    //shorthand the fields
    constructor(protected readonly id: string, public name: string){
        // this.name = n;

    }
    static createEmpoyee(name: string) {
        return { name: name}
    }
    //make every class that extends the base class to create on version of this method
    abstract describe(this: Department): void;

    addEmployee(...employee: string[]){  
        employee.forEach(employee => this.employees.push(employee));
    }
    printEmployeesInfo(this: Department){
        console.log(this.employees)
    }
}

//class inheriance
class ITDepartment extends Department{
    constructor(id: string, public admins: string[]){
            super(id, 'IT');
    }
    describe() {
        console.log(`IT Department - ID: ${this.id}`)
    }
    addEmployee(employee: string){
        if(employee !== 'max'){
            this.employees.push(employee)
        }
    }
}

class AccountingDepartment extends Department{
    private lastReport: string;
    //how to access private constructor
    private static instance: AccountingDepartment;
    //getter example 
    get getRecentReport() {
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error('No Report Found')
    }

    //setter example
    set setRecentReport(value: string){
        if(!value){
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value)
    }
    // you can use private constructors if you want to functionally program with static methods called the singleton pattern
    private constructor(id: string, private reports: string[ ]){
        super(id, 'Report');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(this.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log(`Accounting Department - ID: ${this.id}`)
    }

    addReport(report: string){
        this.reports.push(report);
        this.lastReport = report;
    }

    reviewReports(){
        console.log(this.reports)
    }
}

//static class so you dont have to use new keyword all the time
const employee1 = Department.createEmpoyee('elliot')

const it = new ITDepartment('IT', ['Ethan', 'Tavia']);
const accounting = AccountingDepartment.getInstance()
const accounting2 = AccountingDepartment.getInstance()



accounting.addReport('tsp')

//in the singleton pattern you get the same instance of the class 
console.log( accounting, accounting2)
console.log(it, accounting)
accounting.setRecentReport = 'Mister Report',
console.log(accounting.getRecentReport)
console.log(employee1)
it.describe()

export{};
