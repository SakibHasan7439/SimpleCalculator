
function calFunction(opr){
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    
    let result;
    switch(opr){
        case "+":
            result = addFunction(num1, num2);
            break;
        case "-":
            result = subFunction(num1, num2);
            break;
        case "*":
            result = mulFunction(num1, num2);
            break;
        case "/":
            result = divFunction(num1, num2);
            break;
        default:
            break;
    }
    document.getElementById("sum").value = result;
}   


function addFunction(num1, num2){
    return num1 + num2;
}

function subFunction(num1, num2){
    return num1 - num2;
}

function mulFunction(num1, num2){
    return num1 * num2;
}

function divFunction(num1, num2){
    return num1 / num2;
}

function resetAll(){
        document.getElementById("myForm").reset(); 
        document.getElementById("secondForm").reset();
}
