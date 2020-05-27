var p = document.getElementById("res");

function appendScreen(op, isNum){           
    p.appendChild(document.createTextNode(op));    
}

function clearScreen(){
    p.innerHTML = "";    
}

function calcScreen(){
    //Split String in P
    let tempString = p.innerHTML;
    let stringArray = tempString.split(/(\d+)/)

    let num1 = parseInt(stringArray[1],2);
    console.log(num1);
    let operator = stringArray[2];
    console.log(operator);
    let num2 = parseInt(stringArray[3],2);
    console.log(num2);
    
    let result = 0;
    
    if(operator === "+"){
        result = num1 + num2;           
    }
    else if(operator === "-"){
        result = num1 - num2;
    }
    else if(operator === "*"){
        result = num1 * num2;
    }
    else{
        result = num1 / num2;
    }
    
    p.innerHTML = result.toString(2); 
}
