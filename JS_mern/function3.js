//Array => Foreach, map, filter, find, reduce

const numbers = [1,2,3,4,5,6,7];
let sum=0;
let evenSum=0;
let oddSum=0;

console.log('--------------------------------------------')
console.log('FOREACH')
console.log('--------------------------------------------')
numbers.forEach((n)=>{ //For each takes two parameters=> first:content, second:position
    console.log(n);
    if (n%2==0) {
        evenSum+=n;
    } else if(n%2==1) {
        oddSum+=n;
    }
    sum+=n;
})
console.log(`sum of even numbers: ${evenSum}`)
console.log(`sum of odd numbers: ${oddSum}`)
console.log(`sum of all numbers: ${sum}`)

let newArray=[];
numbers.forEach((n,i)=>{
   if (i>=3){
    newArray.push(n);
   }
})
console.log(newArray)


// //MAP => FORMATTING, OPERATING AND EXTRACTING DATA TO UI
console.log('--------------------------------------------')
console.log('MAP')
console.log('--------------------------------------------')
const array2 = numbers.map((n,i)=>{
    return n*2;
})
console.log(array2);

const array3 = numbers.map((n,i)=>{
    return n==7? 14: n;
})
console.log(array3);

const personName= ['ram','hari', 'shyam'];
const capitalName = personName.map((n,i)=>{
    return n.toLocaleUpperCase();
})
console.log(capitalName);



// //FILTER => FOR EXTRACTION OF MULTIPLE DATA
console.log('--------------------------------------------')
console.log('FILTER')
console.log('--------------------------------------------')
const m = numbers.filter((n) => n > 6);
console.log(m);

//FIND => TO FIND SPECFIC DATA/ CONTENT IN A ARRAY
console.log('--------------------------------------------')
console.log('FIND')
console.log('--------------------------------------------')
const n = numbers.find((n) => n ==2 );
console.log(n);


//REDUCE => returns first two content first then, takes the return value as first content and others as second
console.log('--------------------------------------------')
console.log('REDUCE')
console.log('--------------------------------------------')
const n1= numbers.reduce((a,b)=>{
    console.log(a,b)
    console.log(a+b)
    return 9;
})
console.log(n1)

console.log('max num')
const n2= numbers.reduce((a,b)=>{
    return a>b ? a:b;
    //1>2 ? 1:2
    //2>3 ?2:3
})
console.log(n2)