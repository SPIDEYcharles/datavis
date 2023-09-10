/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let input= document.getElementById("foi")

let btn= document.getElementById("btn")

function length(){
    
    document.getElementById("l").innerText=`${input.value} meter = ${input.value*3.281.toFixed(2)} feet`
}
function volume(){
    
    document.getElementById("v").innerText=`${input.value} liter = ${input.value*0.264.toFixed(2)} gallon`
}
function mass(){
    
document.getElementById("m").innerText=`${input.value} kilogram = ${input.value*2.204.toFixed(2)} pound`
}

btn.addEventListener("click",function(){
    
    length()
    volume()
    mass()
    
    
})