"use strict";
//1 задание

function numToObject() {
    
    const num = parseInt(prompt("Введите число от 0 до 999"));
    if (num >= 1000 || num < 0 || !Number.isInteger(num)) {
        console.log("Значение должно быть числом больше 0 и не больше 999. Попробуй ещё раз.");
        return {};
    } 
    
    return {
        units: parseInt(num % 10),
        dozens: parseInt((num % 100)/10),
        hundreds: parseInt((num % 1000)/100)
    }
}

console.log(numToObject());
