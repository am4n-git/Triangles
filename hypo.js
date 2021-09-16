const sides = document.querySelectorAll('.side-input')
const btn = document.querySelector('#hypo-btn')
const output = document.querySelector("#hypo-output")

function calcSumofSqr(a,b){
    const sumOfSquare = a*a +b*b;
    return sumOfSquare;
}

function calcHypo(){
    if((Number(sides[0].value))>0 && (Number(sides[1].value))>0){
        const sumofSquare = calcSumofSqr(Number(sides[0].value),Number(sides[1].value))
        const lengthOfHypo = Math.sqrt(sumofSquare).toFixed(2)
        output.innerText = "Length of Hypotenuse is "+lengthOfHypo
    }
    else if((Number(sides[0].value))<0 || (Number(sides[1].value))<0){
        output.innerText = "Triangle sides can't be a negative value "
    }
    else{
        output.innerText = "Enter the sides of triangle";
    }

}

btn.addEventListener("click", calcHypo);