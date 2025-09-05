//key value pair
// in object function== method; 

const person={
    name: 'dipika',
    address: 'swoyambhu',
    dob: 2061
}

const car={
    name:'toyota',
    company: 'toyota',
    country: 'nepal'
}

const bank={
    name:'HBL',
    branch: 'durbarmarg',
    estd:2000
}

const laptop={
    name:'acer',
    windows: 11,
    core: 'i7'
}

const house={
    address: 'swoyambhu',
    color: 'pink',
    area: '9aana'
}

console.log('------------------------')
console.log('CRUD');
console.log('------------------------')
//read
console.log(person.dob);
console.log(person['address'])
//updtae
person.name= 'maya';
console.log(person.name)
//add
person.salary=200000;
console.log(person.salary)

//delete
delete person.dob;
console.log(person.dob)




console.log('------------------------')
console.log('DESTRUCT')
console.log('------------------------')
const num=[1,2,3,4,5,6];
const [a,b,c,d] = num; // assigning at once instead of assigning eaxh index value to a variable
console.log(d)

//for object
const {name,address} = person;
console.log(name)
console.log(address)

const product={
    title: 'sari',
    color:['pink', 'blue', 'yellow'],
    brand:{
        b1:'woof',
        b2:'roar'
    }
}
const {title,color,brand} = product;

//nested destructuring
const {color:[c1,c2,c3], brand:{b1,b2}}=product;
// console.log(color);
console.log(c1);
console.log(b1); 