const person = [
    {id:1, name:'ram', age:11,gender:"male"},
    {id:2, name:'shyam', age:33,gender:"male"},
    {id:3, name:'hari', age:55,gender:"male"},
    {id:4, name:'sita', age:70,gender:"female"}
]

//specific data
const personWithId1 = person.find((p,i)=> p.id===1);
console.log(personWithId1);

//multiple data
const personGenderFemale = person.filter(person => person.gender == 'female');
console.log(personGenderFemale);

//age total
let total=0
person.forEach((p )=> {
    total+=p.age;
});
console.log(total)

//only names
let names= person.map((n,i)=>{
    return n.name;
})
console.log(names)

//even age
const personWithEvenAge =person.filter(person => person.age%2===0)
console.log(personWithEvenAge)

//highest age
const highestAge= person.reduce((a,b)=>{
    return a.age>b.age ? a.age:b.age;
})
console.log(highestAge)

//age average
let totalAge=0;
person.forEach((p,i)=>{
    return totalAge+=p.age;
})
console.log(total/person.length);


//descructing
const destructPerson= person.map(({id,name,age,gender})=>{
    return gender;
})
console.log(destructPerson)


//combining array
const newPersons = [
  {id: 5, name: 'bhajan', age: 70, gender: 'male'}
];

// const newArray = [person.concat(newPersons)];
const newArray = [...person,...newPersons];
console.log(newArray)