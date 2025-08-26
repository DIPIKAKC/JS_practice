const a = 90;
const b = 100;

const c = '1';
const d = 1;

console.log(c === d);

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a !== b);

console.log("------------------------------------")
console.log("logic gates => multiple comparison")
console.log("------------------------------------")
console.log(a>=b || b>c && c===d);

console.log("------------------------------------")
console.log("Ternary operator")
console.log("------------------------------------")
const isSome = a>b ? 'hello' : a<b? 'jello' :'sello';
console.log(isSome);

const age = 99;
const isAge = age>50 ? 'senior' :age<18 ? 'junior': 'regular';
console.log(isAge);

console.log("------------------------------------")
console.log("IF/ ELSE")
console.log("------------------------------------")
//js has truly and falsy value
//falsy => null, undefined, '', false, 0

const i ='';
if (i) {
    console.log('hi dipika')
}else{
    console.log('falsy ')
}

const netSalary =10000;
const expenses = 11000;


if (netSalary > expenses){
    console.log(`You have saved ${netSalary - expenses} this month`); 
}else if (expenses > netSalary){
    console.log(`You have lost ${expenses - netSalary} this month`);
}else{
    console.log('Your balance hasnot changed');
}

if (netSalary%2 == 0) {
    console.log('even');
}else{
    console.log('odd')
}


console.log("------------------------------------")
console.log("Task")
console.log("------------------------------------")

const prompt = require('prompt-sync')({ sigint: true });
// 🔹 Task 1: Positive or Negative Number
const number =prompt("enter a number:")
if(number>0){
    console.log('positive number');
}else if(number<0){
    console.log('negative');
}else{
    console.log('zero');
}

// 🔹 Task 2: Even or Odd

if (number%2 == 0) {
    console.log('even');
}else{
    console.log('odd')
}

// 🔹 Task 3: Age Group

const userAge = prompt("enter your age: ")
if (userAge<13){
    console.log('child');
}else if(userAge>=13 && userAge<=19){
    console.log('Teenager');
}else{
    console.log('Adult');
}

// 🔹 Task 4: Grade Checker

const score = prompt("enter your score: ")
if (score>=90){
    console.log('A');
}else if(score>=80){
    console.log('B');
}else if(score>=70){
    console.log('C');
}else if(score>=60){
    console.log("D");
}else{
    console.log("F");
}


// 🔹 Task 5: Largest of Two Numbers

const num1= prompt("enter first num: ");
const num2= prompt("enter second num: ");
if (num1>num2) {
    console.log('num1 is larger');
} else if(num2>num1){
    console.log("num2 is larger");
}else{
    console.log('Botha re equal');
}

// 🔹 Task 6: Divisible by 5 and 3
 
if(number%5==0){
    console.log('divisible by 5');
}else if (number%3==0) {
    console.log('divisible by 3');
} else if(number%5==0 && number%3==0){
    console.log('divisible by both');
}else{
    console.log('divisible by neither');
}


// 🔹 Task 7: Vowel or Consonant

const character = prompt("enter a character: ");
if (character== 'a' || character== 'e' || character== 'i' || character== 'o' || character== 'u') {
    console.log('Vowel character');
} else {
    console.log("Consonant");
}

