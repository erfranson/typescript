const person1: {
  name: string;
  age: number;
  hobbies: string[];
  //tuple def
  role: [number, string];
} = {
  name: 'Ethan',
  age: 32,
  hobbies: ['sports','dancing'],
  role: [0 ,'Admin']
};
  
// this works on a tuple because push is different
// person1.role.push('tom')

//these wont work on a tuple
// person1.role[0] = 'admin'
// person1.role = [0, 'card', 'suss']


//enum example
enum Roles {'ADMIN', 'Read_ONLY', 'AUTHOR'}

const person = {
  name: 'Ethan',
  age: 32,
  hobbies: ['sports','dancing'],
  role: Roles.ADMIN
};


for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
}

//enum example
if(person.role === Roles.ADMIN){
  console.log('is Admin');
}

//any type allows any data type to be considered 
let anyExample: any[];
anyExample = [1, 32, {dog: 'bark'}, 'hey']