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
    if(basevalue!=""){
        basevalue=p
        input.setAttribute("value", basevalue)
    
    document.getElementById("l").innerText=`${basevalue} meter = ${basevalue*3.281.toFixed(2)} feet`

    document.getElementById("v").innerText=`${basevalue} liter = ${basevalue*0.264.toFixed(2)} gallon`

    document.getElementById("m").innerText=`${basevalue} kilogram = ${basevalue*2.204.toFixed(2)} pound`

     }
})