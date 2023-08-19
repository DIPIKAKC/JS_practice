const page=document.querySelector(".fullpage")


const main=document.querySelector(".main")
const display1=document.getElementById("todisplay")
const btn1=document.getElementById("fahrenheit")

btn1.addEventListener("click",()=>{
    const C=document.getElementById("temperature1")
    let F= (C.value * 9/5) + 32
    display1.textContent=(`${C.value}°C in fahrenheit is ${F}°F`);
    C.value="";
})


const main1=document.querySelector(".main1")
const display2=document.getElementById("displayvalue")
const btn2=document.getElementById("celsius")

btn2.addEventListener("click",()=>{
    const Fahrenheit=document.getElementById("temperature2")
    let Celsius= (Fahrenheit.value -32) *5/9
    display2.textContent=(`${Fahrenheit.value}°F in fahrenheit is ${Celsius}°C`);
    Fahrenheit.value="";
})