const sides = document.querySelectorAll('.side-input')
const btn = document.querySelector('#hypo-btn')
const output = document.querySelector("#hypo-output")

function calcSumofSqr(a,b){
    const sumOfSquare = a*a +b*b;
    return sumOfSquare;
}

function calcHypo(){
    const sumofSquare = calcSumofSqr(Number(sides[0].value),Number(sides[1].value))
    const lengthOfHypo = Math.sqrt(sumofSquare).toFixed(2)
    output.innerText = "Length of Hypotenuse is "+lengthOfHypo
}

btn.addEventListener("click", calcHypo);