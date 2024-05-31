let button = document.getElementsByTagName('button')[0]
// let input1 = document.getElementsByTagName('input')
// [0]
let input1 = document.querySelectorAll('[type="text"]')[0]
let price1 = document.getElementsByClassName('price1')[0]
let price2 = document.getElementsByClassName('price2')[0]
let input2 = document.querySelectorAll('[type="text"]')[1]
let total1 = document.getElementsByClassName('total1')[0]
let total2 = document.getElementsByClassName('total2')[0]
let mainTotal = document.getElementsByClassName('total')[0]

button.addEventListener('click', ()=>{
    total1.innerText =  eval(`${input1.value}*${price1.innerText}`).toFixed(2)
    total2.innerText =  eval(`${input2.value}*${price2.innerText}`).toFixed(2)
    mainTotal.textContent =  'R' + eval(`${total1.innerText} + ${total2.innerText}`).toFixed(2)
    event.preventDefault()
})


// input1.onchange = function (total1) {}
// function calcTota1() {
//     total1.textContent = eval (`${price1.innerText} *${input1.value}`)
// }
