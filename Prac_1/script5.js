const Maindiv=document.querySelector(".main")
const paragraph=document.getElementById("name")

const btn1=document.getElementById("clickme")

let list=[]
function addHere(){
    const enterval=document.getElementById("enter")
    list.push(enterval.value)
    paragraph.textContent=list;
    enterval.value="";
}


btn1.addEventListener("click",()=>{
  addHere()
})


