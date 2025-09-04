function greet(){
    console.log('namaste')
}
greet()

// //fat arrow
const greet1 = () =>{
    console.log('alwida')
}
greet1()

const tea = () =>{
    console.log('--------------------------------------------------------------')
    console.log('Yummy Tea Recipe')
    console.log('--------------------------------------------------------------')
    console.log('take a tea kettle');
    console.log('pour 3/4 cup of milk and 1/4 cup of water in the kettle ');
    console.log('place it in the stove and turn on the gas')
    console.log('add spices to your taste')
    console.log('let it boil for 5 minutes')
    console.log('turn off the gas')
    console.log('your tea is ready to serve')
}
tea()



// // parameters => defining, similar to variable
// // arguments => passing the value while function calling

const personalInfo = (name, age) =>{
    console.log(`i am ${name} and i am ${age}`)
}
personalInfo('dipika',20)


// //add
const add = (a,b) =>{
    console.log(a+b);
}
add(2,3)


// //sum of numbers
let sum=0;
const sumOfNumber = (array) =>{
    for(let i of array) {
        sum+=i;
    }
    console.log(sum);
}
sumOfNumber([1,2,3,4,5,6]);

// // functions are not type sensetive
// // void function => returns nothing
// // return function => returns some value


// //
const returnFxn = () => {
    return 'this is a return function';
}

const result=returnFxn();
console.log(result)

// //
const greet2 = (personName) => {
  return `hello ${personName}`;
}
const m = greet2('ram');
console.log(m);

// // odd or even
const oddEven = (num) =>{
    if (num%2==0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
oddEven(3);


// // // 🔹 Basic Function Tasks (No Parameters)

// //1. Write a function that prints "Hello, World!" to the console.
// //2. Write a function that returns the string "Welcome to JavaScript!".
// //3. Write a function that prints your name.


// // // 🔹 Function with Parameters

// //4. Write a function that takes a name as a parameter and prints `"Hello, <name>!"`.
// //5. Write a function that takes two numbers and returns their sum.
// //6. Write a function that takes two numbers and returns the larger one.
// //7. Write a function that takes a number and returns `true` if it's even, otherwise `false`.


// // // 🔹 Function with Conditions and Loops

// //8. Write a function that takes a number `n` and prints numbers from 1 to `n`.
// //9. Write a function that takes a number and returns `"Positive"`, `"Negative"`, or `"Zero"`.
// //10. Write a function that takes a string and returns the number of vowels in it.


// // // 🔹 Function with Array

// //11. Write a function that takes an array of numbers and returns their average.
// //12. Write a function that returns the first and last element of an array.
// //13. Write a function that checks if a given value exists in an array.


// // // 🔹 Function with String

// //14. Write a function that takes a string and returns it in reverse.
// //15. Write a function that takes a string and returns it in uppercase.
// //16. Write a function that checks if a string is a palindrome.