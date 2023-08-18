const main = document.querySelector(".main")

const btn1 = document.getElementById("clickme")
const btn2=document.getElementById("nepal")

const text=document.getElementById("haha")
const n1=document.getElementById("num1")
const n2=document.getElementById("num2")


//to change the background color with each click on btn1
i = 0;
let colors = ['Red','Yellow','blue','purple','orange','gray']
btn1.addEventListener("click",()=>{
    console.log("clicked")
    main.style.backgroundColor = colors[i];
    i++;
    // console.log(i)
})


    //to display a list in a loop
    // let listy = ["Dipika","Saurav","Krish","Mansa"]
    // for(i=0;i<listy.length;i++){
    //     console.log(listy[i])
    // }


//ask user to enter two num // show the sum of result either in console or webpage
// function sum(a,b){
//     c=eval(a+b)
//     console.log(c)  
// }
// sum(a,b)


//to display sum
btn2.addEventListener("click",()=>{
    let v=eval(n1.value)+eval(n2.value);
    text.textContent=v;
})


//to display time in seconds
// setInterval(()=>{
//     krish.textContent= Date()
// },1000)
 


