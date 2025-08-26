//key-value pair

const person ={
    name: "dipika",
    age: 20,
    occupation: "Developer"
}

const house = {
    location: "Baosepati",
    area: "24bhk",
    price: "1 lakh"
}

const car = {
    company: 'porsche',
    year: 2024,
    country: "Iceland"
}

console.log(person)
console.log(person.occupation)
console.log(house)
console.log(house.location)
console.log(car)
console.log(car.company)

//math fxns
const rating =5.6;
console.log(Math.sqrt(81));
console.log(Math.floor(rating));
console.log(Math.ceil(rating));
console.log(Math.round(rating));
console.log(Math.pow(2,5));


// const Random = Math.floor(Math.random()*5);
const Random = Math.random()*9; //* pachadi j diyo tyo samma ta yeuta random value dincha
console.log(Random);


//split
const image = "http://image.com";
console.log(image.split('')) //sablau chuttaidincha
console.log(image.split('.')); //jata '.' cha tya bata matra chuttaucha

//undefined= declare garera rakhne pachi use huna sakcha
//null= value aaucha pachi bhane
let d;
const i=null;
console.log(d)
console.log(i)