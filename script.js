const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle");
const output = document.querySelector("#output");

function calcSum(angle1, angle2, angle3){
    const sum = angle1+angle2+angle3;
    return sum;
}

function isTriangle(){
    const sumofAngles = calcSum(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))
    if(sumofAngles === 180){
        output.innerText="Angles form a triangle"
    }
    else{
        output.innerText="Angles does not form a triangle"
    }
}

isTriangleBtn.addEventListener("click", isTriangle)