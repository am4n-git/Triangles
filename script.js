const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle");
const output = document.querySelector("#output");
const clearBtn = document.querySelector("#clear-btn");


function calcSum(angle1, angle2, angle3){
    const sum = angle1+angle2+angle3;
    return sum;
}

function isTriangle(){
    if((Number(inputs[0].value))>0 && (Number(inputs[1].value))>0 && (Number(inputs[2].value))>0){

        const sumofAngles = calcSum(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))
        if(sumofAngles === 180){
            output.innerText="Angles form a triangle"
        }
        else{
            output.innerText="Angles does not form a triangle"
        }

    }
    else if((Number(inputs[0].value))<0 || (Number(inputs[1].value))<0 || (Number(inputs[2].value))<0){
        output.innerText="Invalid Input: Only Positive value allowed";
    }
    else{
        output.innerText="Enter the sides of triangle";
    }

}
function clearHandler(){
    
    inputs[0].value="";
    inputs[1].value="";
    inputs[2].value="";
    output.innerText="";
}

isTriangleBtn.addEventListener("click", isTriangle);
clearBtn.addEventListener("click", clearHandler);