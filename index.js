/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let lenghtEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let convertBtn = document.getElementById("btn-el")
let inputEl = document.getElementById("input-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204



function lengthConversion(){
    let baseValue = inputEl.value 
    lenghtEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | 
    ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
}

function volumeConversion(){
    let baseValue = inputEl.value
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | 
    ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`
}

function massConversion(){
    let baseValue = inputEl.value
    massEl.textContent = `${baseValue} kilograms = ${(baseValue * kiloToPound).toFixed(3)} pounds | 
    ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilograms`
}


convertBtn.addEventListener("click", function(){
    lengthConversion();
    volumeConversion();
    massConversion();
    })
