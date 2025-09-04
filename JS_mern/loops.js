//while, do while, for, for in, for at

// //WHILE

//    let i=0;
//    while(i<20){
//     console.log(i);
//     i++;
//    }

   //odd even
//    let j=0;
//    let sum=0;
//    let evenSum=0;

//    while(j<20){
//     if (j%2==0) {
//         console.log(`${j} is even`)
//         evenSum+=j;
//     } else {
//        console.log(`${j} is odd`) 
//     }
//     sum+=j;
//     j++; //mathi garyo bhane chai 2-20 print garcha, tala garda 1-19
// }
// console.log(`The total sum is ${sum}`);
// console.log(`The sum of even numbers is ${evenSum}`);


//continue: increment > condition > console
// let p=0;
// while(p<=20){
//     p++;
//     if (p==3) {
//         continue;
//     }
//     console.log(p);
// }

// //DO WHILE
// let k=0;
// do{
//     console.log(`${k}: hi dipika`);
//     k++;
// }while(k<20);

//FOR LOOP

let sum=0;
for(let i=0;i<=20;i++){
    if (i===5 || i===7 || i===9) {
        sum=sum+i;
        continue;
    }
}
console.log(`The sum is ${sum}`);

    //reverse
    for (let index = 10; index > 0; index--) {
        console.log(index); 
    } 

    //fizz buzz -interview qn
    for(let i=0; i<=15;i++){
        if (i%3==0 && i%5==0) {
            console.log('fizz buzz');
        } else if(i%3==0) {
            console.log('fizz');
        } else if (i%5==0) {
            console.log('buzz');
        }else{
            console.log(i);
        }
    }