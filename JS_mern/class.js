class Bank {

    //for object values
    constructor (bankName,accNo){
        this.bankName= bankName;
        this.accNo=accNo;
    }

    balance=0;

    // name='NIBL';
    // address='Kathmandu';

    deposit(amount){
        // console.log('hi')
        this.balance+=amount;
    }
    
    withdraw(amount){
        if (this.balance>amount) {  
            this.balance-=amount;
        } else {
            console.log('insufficient balance');
        }
    }
}

const b1= new Bank('NIC',20);
console.log(b1)
b1.deposit(9000);
console.log('after deposit: ',b1.balance);
b1.withdraw(10000);
console.log('after withdrawal: ',b1.balance);


const b2= new Bank('HBL',30);
console.log(b2)

console.log(b1.bankName)





class User{
    constructor(name, age, number){
        this.name=name;
        this.age=age;
        this.number=number;
    }

    //if function inside class=>method, if outside class=>function
    editDetail(newAge, newNum){
        if(newAge || newNum){
            this.age=newAge;
            this.number=newNum;
        }
    }
}

const user1= new User('Dipika', 20, 9860);
console.log(user1);
user1.editDetail(30);
console.log('Updated detail: ',user1.age);



//nested fxn
console.log('--------------------------------------------------')
console.log('NESTED FXN')
console.log('--------------------------------------------------')
const name='aayusha';
const greet= () => {
    const name='dipika';
    // console.log(name);

    //trigerred only when called inside parent
    const child= () => {
        console.log(`accessing parent property(nearest if same variable name): ${name}`)
    }
    child();
}
greet();


//
console.log('--------------------------------------------------')
console.log('--------------------------------------------------')
console.log('FACTORIAL')
console.log('--------------------------------------------------')
const factorial=(n)=>{
    if (n===0) {
        return 1; 
    } else {
        return n*factorial(n-1); //when n reaches 0, it returns 1 and the function stops
    }
}
console.log('Factorial: ',factorial(6))


//callback


