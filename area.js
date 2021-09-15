const inputs = document.querySelectorAll(".inputs")
const btn = document.querySelector("#btn")
const outputArea = document.querySelector("#output-area")

function ipProduct(a,b){
    const product = a*b
    return product 
}

function calcArea(){
    const productRes = ipProduct(Number(inputs[0].value), Number(inputs[1].value));
    const areaofTriangle= (productRes/2);
    outputArea.innerText = "Area of the triangle is "+ areaofTriangle;
    // console.log(areaofTriangle)
}

btn.addEventListener("click", calcArea)