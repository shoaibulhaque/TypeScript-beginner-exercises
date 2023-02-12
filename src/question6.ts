// Question 6

let operatorArray: Array<string>;
operatorArray = ["+","-","*","/"];
for (let i = 0; i < operatorArray.length; i++){
    if (operatorArray[i] == "+"){
        console.log(5 + 3);
    }
    else if (operatorArray[i] == "-"){
        console.log(11 - 3);
    }
    else if (operatorArray[i] == "*"){
        console.log(2 * 4);

    }
    else{
        console.log(16 / 2);
    }
}