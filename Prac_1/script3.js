const main = document.querySelector(".main")
const toshow=document.getElementById("text")

const btn1 = document.getElementById("minus")
const btn2=document.getElementById("add")
const n1=document.getElementById("num1")
const n2=document.getElementById("num2")

btn1.addEventListener("click",()=>{
    let v=eval(n1.value)-eval(n2.value);
    toshow.textContent=v;
    n1.value="";
    n2.value="";
})

btn2.addEventListener("click",()=>{
    let c=Number(n1.value)+Number(n2.value);
    toshow.textContent=c;
    console.log("clicked")
    n1.value="";
    n2.value="";
 })
 