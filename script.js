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

//2 задание

const basket = {

    goods: [
        {
            idProduct: 111,
            productName: "Платье",
            price: 2000,
            amount: 2
        },
        {
            idProduct: 222,
            productName: "Юбка",
            price: 1500,
            amount: 2
        },
        {
            idProduct: 333,
            productName: "Футболка",
            price: 500,
            amount: 2
        },
        {
            idProduct: 444,
            productName: "Штаны",
            price: 2000,
            amount: 2
        },
        {
            idProduct: 555,
            productName: "Жакет",
            price: 1500,
            amount: 2
        }
    ],

    basketPrice() {
        return this.goods.reduce(function(sum, current) {
                return sum + current.price * current.amount;
              }, 0);
    },

};

let count = basket.goods.length;

alert("В корзине " + count + " товаров " + " на сумму " +  basket.basketPrice());

//3 задание

const catalog = {
    
    men: [
            {clothes: {"Джинсы": {
                    price: 2000,
                    idProduct: 111,
                    color: ['белый','черный','синий']
                    },
                    "Футболка": {},
                    "Куртка": {}
                    }
            },
            {shoes: {}
            },
            {accesories: {}
            }
        ],

    women: [
        {clothes: {}
    },
        {shoes: {}
    },
        {accesories: {}
    }
],
}