// primitive dtypes => str, num, undefined, null, bool

let personName = "Dipika" ;
let age=50;
let me = 'she her her hers';
let job;
// console.log(personName);
// console.log(job); // undefined and the variable is declared but not initialized

let surname = "KC";
// console.log(personName.concat(surname));
// console.log(personName.includes('w'));
// console.log(personName.repeat(2));
// console.log(me.replace('her', 'dipika'));
// console.log(personName.substring(1,4));
// console.log(me.replaceAll('her', 'dipika'));
console.log(personName.concat(age));

// template string
var info = `reply 1988 ${me}`;
console.log(info);
console.log(info.endsWith('s'));

let temperature =20;
let value=4;
let food1="pizza";
let food2="pasta";

const sentence1= `the temperature is ${temperature}C`;
const add= `${value} plus ${value} is ${value+value}`;
const likes = `i like ${food1} and ${food2}`;
console.log(`the temperature is ${temperature}C`)
console.log(`${value} plus ${value} is ${value+value}`)
console.log(`i like ${food1} and ${food2}`)

let product = '2000';
let price =Number(product)
console.log(`one product is for ${price} and 5 of them are for ${5*price}`)


//is NaN
const amt = 2000;
console.log(Number.isNaN(amt));
console.log(Number.isInteger(amt));