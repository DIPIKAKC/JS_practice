// //reference types => array, object, functions

const personName =['ram', 'shyam', 'hari', 'mina'];
// console.log(personName[0]);

// //CRUD
// personName[0] = 'rita';
console.log(personName)

// //pop - delete from back; shift - delete from front; push - add to back; unshift - add to front (in void context)
// personName.unshift('hi')
// console.log(personName)

// personName.shift()
// console.log(personName)

// personName.pop()
// console.log(personName)

// personName.push('hi')
// console.log(personName)


// //splicing => removing by index (in void context) 
personName.splice(1, 1) //1 index bata suru bhayera yeuta delete huncha
console.log(personName)
personName.splice(2, 1)
console.log(personName)


// //includes (in return context)
console.log(personName.includes('hi'))

//spread operator=> for joining array
console.log([...personName, 'hi', ...personName])


// //array loop
// //FOR OF => iteration according to the array size

let sumEven=0;
let sumOdd=0;
let totalSum=0;
const nums= [1,2,3,4,5,6,7];
for (let n of nums){
    if (n%2==0) {
        sumEven=sumEven+n;
    } else if(n %2 ==1){
        sumOdd=sumOdd+n;
    }
    totalSum= totalSum+n;
}
console.log(`sum of even numbers: ${sumEven}`)
console.log(`sum of odd numbers: ${sumOdd}`)
console.log(`sum of all numbers: ${totalSum}`)

// //
let total=0;
for (let n of nums) {
  total += n;
}
console.log(total / nums.length);


// //FOR IN => for position extraction
for (let n in nums){
    console.log(n)
}


// //slice => (starting index, one index high than ending index)
console.log(nums.slice(2,6)) 

// //copywithin => index starts from 1; prints upto assigned index then repeats the array if any place left
console.log(nums.copyWithin(3)) 

