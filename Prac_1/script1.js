
const btn1 = document.getElementById("clickme")
const main = document.querySelector(".main")
const text=document.getElementById("haha")
const btn2=document.getElementById("nepal")
const btn3=document.getElementById("china")
const n1=document.getElementById("num1")
const n2=document.getElementById("num2")

i = 0;
let colors = ['Red','Yellow','blue','purple','orange','gray']
btn1.addEventListener("click",()=>{
    console.log("clicked")
    main.style.backgroundColor = colors[i];
    i++;
    // console.log(i)
    let listy = ["Dipika","Saurav","Krish","Mansa"]
    for(i=0;i<listy.length;i++){
        console.log(listy[i])
    }
})

//ask user to enter two num // show the sum of result either in console or webpage
// function sum(a,b){
//     c=eval(a+b)
//     console.log(c) 
    
// }
// sum(a,b)


btn2.addEventListener("click",()=>{
    let v=eval(n1.value)+eval(n2.value);
    text.textContent=v;
})

btn3.addEventListener("click",()=>{
   let c=eval(n1.value)-eval(n2.value);
   text.textcontent=c;
   console.log("clicked")
})

// setInterval(()=>{
//     krish.textContent= Date()
// },1000)
 


