//constructor: it is a function and when called, it creates an object
//for extracting the values to the new object, we should use 'this' keyword inside the constructor and assign to the parameters

function Person(name,age){
    this.personName = name;
    this.personAge = age;
}
const pers= new Person('ram',20);
const pers2= new Person('shyam',20);
console.log(pers);


function Bank(name,branch,estd){
    this.bankName = name;
    this.bankBranch = branch;
    this.bankEstd = estd;
}
const bank1= new Bank('HBL','Swoyambhu', 1990);
const bank2= new Bank('NIC','ThuloBharyang',1999);
console.log(bank1);