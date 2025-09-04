const greet = (personName, age) => {
  return `hello ${personName} of age ${age}`;
}
const m = greet('ram', 90);
console.log(m);


// //CALLBACK FUNCTION => calling function inside a function
const fxn1 = () => {
    console.log('hi dipika');
}

const fxn2 = (func) => {
    func(90); //fxn calling
    // console.log(typeof(func));
}
fxn2(fxn1);

//functionName(()=>{})

fxn2((age)=>{
    console.log(age);
})



// Task 2: Math Operation with Callback

// Write a function named calculate that:
// Takes three parameters: num1, num2, and a callback.
// The callback should perform a math operation (like add, subtract, multiply, etc.) on the two numbers.
// 📝 Example Call:

// calculate(10, 5, yourCallbackFunction);


const calculate = (num1, num2, callback) => {
    callback(num1,num2);
}
const operation = (num1, num2) => {
    console.log(num1+num2);
}
calculate(2,3,operation);

