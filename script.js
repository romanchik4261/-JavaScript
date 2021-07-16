//2 урок
//3 задание
let a = -2;
let b = 5;

if (a > 0 && b > 0) {
    alert(a - b);
}    else if(a < 0 && b < 0) {
        alert(a * b);
    } else if (a < 0 && b > 0) {
        alert(a + b);
    }

// 4 задание    
let number = 1;
let numbermax = 16;
switch (number) {
    case number || number != numbermax:
    alert(number + 1);
    case number + 1 || number != numbermax:
    alert(number + 2);
    case number + 2 || number != numbermax:
    alert(number + 3);
    case number + 3 || number != numbermax:
    alert(number + 4);
    case number + 4 || number != numbermax:
    alert(number + 5);
    case number + 5 || number != numbermax:
    alert(number + 6);
    case number + 6 || number != numbermax:
    alert(number + 7);
    case number + 7 || number != numbermax:
    alert(number + 8);
    case number + 8 || number != numbermax:
    alert(number + 9);
    case number + 9 || number != numbermax:
    alert(number + 10);
    case number + 10 || number != numbermax:
    alert(number + 11);
    case number + 11 || number != numbermax:
    alert(number + 12);
    case number + 12 || number != numbermax:
    alert(number + 13);
    case number + 13 || number != numbermax:
    alert(number + 14);
    default:
        alert("Максимальное значение достигнуто");
}

//5,6 задание

function addition(a, b) {
    c = a + b;
    return c;
}

function subtraction(a, b) {
    c = a - b;
    return c;
}

function division(a, b) {
    c = a / b;
    return c;
}

function multiplication(a, b) {
    c = a * b;
    return c;
}

function mathOperation(arg1, arg2, operation) {
   switch(operation()) {
       case operation: return(addition(a, b));
       brake;
       case operation: return(subtraction(a, b));
       brake;
       case operation: return(division(a, b));
       brake;
       case operation: return(multiplication(a, b));
       brake;
   }
   return operation;
}
let result = mathOperation(4, 5, multiplication);
alert(result);
