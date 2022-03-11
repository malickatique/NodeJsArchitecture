// Memory management

const person = {
    age: 20,
    name: 'Ben'
};

const peopleArray = [person, person, person];
peopleArray[1].name = 'Joe';
console.log(peopleArray[0].name);

// Output: ? and why







// How would following code run?  

const myName = 'Jim';

if(myName)
{
    myName = 'Joe';
    let myName = 'Jeff';
}


const myMoney = {
    quarters: 4,
    dimes: 10,
    nickels: 20,
    pennies: 100
}
  
for (const coin of myMoney)
{
    console.log(`${coin}: ${myMoney[coin]}`);
}


// How this code'd execute in NodeJs, JS compilers?
console.log("");


// How to call this function to print xyz?
const concatenator = (originalStr) => 
{
    return (strTwo) => { return `${originalStr} ${strTwo}`; };
}


// What is the putput and why?
const person1 = {
    name: 'Willie',
    address: {
      city: 'Austin',
      state: 'Texas'
    }
};

const person2 = {...person1};

person2.name = 'Waylon';
person2.address.city = 'Fort Worth';

console.log(person1.address.city);


// What's been initialized?
const myColor = 'Purple' || 'Red';


// Optimize this code?
function truthy(x) 
{
    if(5 === x)
    {
        return true;
    }
    else 
    {
        return false;
    }
}
console.log(truthy(6));


// Output?
const obj1 = {a: 1, b: 2};
const obj2 = {b: 1, c: 2};
const obj3 = {c: 1, d: 2};

Object.assign(obj1, obj2, obj3);
console.log(obj1);


console.log(1 && 0 === 1 || 0);