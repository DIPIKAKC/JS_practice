const m=document.querySelector(".main")
const T=document.getElementById("text")

const btn1=document.getElementById("red")
const btn2=document.getElementById("pink")
const btn3=document.getElementById("blue")
const btn4=document.getElementById("violet")
const btn5=document.getElementById("clear")

btn1.addEventListener("click",()=>{
    m.style.backgroundColor ='red';
    T.textContent="The background color is now red."
})

btn2.addEventListener("click",()=>{
    m.style.backgroundColor = 'pink';
    T.textContent="The background color is now pink."
})

btn3.addEventListener("click",()=>{
    m.style.backgroundColor = 'blue';
    T.textContent="The background color is now blue."
})

btn4.addEventListener("click",()=>{
    m.style.backgroundColor = 'blueviolet';
    T.textContent="The background color is now violet."
})

btn5.addEventListener("click",()=>{
    m.style.backgroundColor = 'whitesmoke';
    T.textContent="The background has no color:("
})

















