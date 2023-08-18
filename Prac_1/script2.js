const btn1=document.getElementById("hidipika")
const hi=document.getElementById("tochange")
const main = document.querySelector(".main")
const btn2=document.getElementById("hikc")


btn1.addEventListener("click",()=>{
    const n1=document.getElementById("name1")
    const n2=document.getElementById("name2")
    hi.textContent=(`My name is ${n1.value} ${n2.value}.`)
    n1.value="";
    n2.value="";
})

btn2.addEventListener("click",()=>{
    main.style.backgroundColor="beige"
})

