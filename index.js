/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let input= document.getElementById("foi")

let btn= document.getElementById("btn")

   
btn.addEventListener("click",function(){
     let basevalue=input.value
    if(basevalue==""){
       let p= prompt("Enter a valid number","10")
       basevalue=p
      input.setAttribute("value", basevalue)
    }
    
    
    document.getElementById("l").innerText=`${basevalue} meter = ${(basevalue*3.281).toFixed(3)} feet | ${basevalue} feet = ${(basevalue/3.281).toFixed(3)} meter`

    document.getElementById("v").innerText=`${basevalue} liter = ${(basevalue*0.264).toFixed(3)} gallon | ${basevalue} gallon = ${(basevalue/0.264).toFixed(3)} liter`

    document.getElementById("m").innerText=`${basevalue} kg = ${(2.204*basevalue).toFixed(3)} pound | ${basevalue} pound = ${(2.204*basevalue).toFixed(3)} kg`

     
})