//2 урок
//3 задание
let a = -2;
let b = 5;

if (a >= 0 && b >= 0) {
    alert(a - b);
}    else if (a < 0 && b < 0){
        alert(a * b);
} else {
        alert(a + b);
    }

// 4 задание   
let number = +prompt('Введите число от 1 до 15');
switch (number) {
  case 1:
    alert(number++);
  case 2:
    alert(number++);
  case 3:
    alert(number++);
  case 4:
    alert(number++);
  case 5:
    alert(number++);
  case 6:
    alert(number++);
  case 7:
    alert(number++);
  case 8:
    alert(number++);
  case 9:
    alert(number++);
  case 10:
    alert(number++);
  case 11:
    alert(number++);
  case 12:
    alert(number++);
  case 13:
    alert(number++);
  case 14:
    alert(number++);
  case 15:
    alert(number);
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

function mathOperation(a, b, operation) {
   switch(operation) {
       case addition: return addition(a, b);
       case subtraction: return subtraction(a, b);
       case division: return division(a, b);
       case multiplication: return multiplication(a, b);
   }
   return operation;
}
let result = mathOperation(4, 5, multiplication);
alert(result);
