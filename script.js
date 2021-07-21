import { estrellas,arregloEstrellas } from "./estrellas.js";


document.querySelector(".btn-print").addEventListener("click",()=>{
    const number=document.querySelector(".number").value
    const stars=estrellas(number)
    stars.length==number&&stars&&stars.charCodeAt(1)==42&&typeof(stars)==="string"?
    isValid(number,stars):
        document.querySelector(".print").innerHTML=":) aun no, pero tu puedes revisa bien tu codigo porque hay un error"
})

let isValid =(number,stars)=>{
    document.querySelector(".print").innerHTML=stars
    let buttonNode=document.createElement("button")
    buttonNode.className= "btn-array";
    buttonNode.innerHTML="Dibujar Arreglo"
    let container = document.querySelector('.container')
    container.appendChild(buttonNode)
    document.querySelector(".btn-array").addEventListener("click",()=>{
        const arrayStars = arregloEstrellas(number)
        arrayStars&&typeof(arrayStars)=="object"&&arrayStars[arrayStars.length-1].length==number&&arrayStars.length==number?
        isValidArray(arrayStars)
        :document.querySelector(".print-array").innerHTML=":) si ya pudiste con el primero vamos por el segundo, revisa bien tu codigo porque hay un error"
    })
}

let isValidArray =(arrayStars)=>{
    const printArrayNode =document.querySelector(".print-array")
    arrayStars.forEach(element=>{
        let jump=document.createElement("p")
        jump.innerHTML=element
        printArrayNode.appendChild(jump)
    })
}