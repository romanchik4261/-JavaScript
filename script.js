'use strict'

// // // 1 задание
// // Первый вариант
// const board = {
//     rowCount: 8,
//     colCount: 8,
//     containerElement: '',
//     cellElement: [],

//     initCells() {
//         this.cellElement = [];
    
//         for (let row = 0; row < this.rowCount; row++) {
//             const trElem = document.createElement('tr');
//             this.containerElement.appendChild(trElem);

//             for (let col = 0; col < this.colCount; col++) {
//                 const td = document.createElement('td');
//                 trElem.appendChild(td);

//                 this.cellElements.push(td);
//             }
//         }
//     }

// }

// board.initCells()

// // Второй вариант

// const desk = {
//     create: document.getElementById('game'),

//     createDesk() {
//         for (let i = 1; i < 9; i++) {
//             let tr = document.createElement('tr');
//             for (let j = 1; j < 9; j++) {
//                 let td = document.createElement('td');
//                 if (i%2 == j%2) {
//                     td.className = "white";
//                 } else {
//                     td.className = "black";
//                 }
//                 tr.appendChild(td);
//             }
//             this.create.appendChild(tr);
//         }
//     }
// }
//  desk.createDesk();


//2 задание

const basket = {
    element: document.createElement('div'),

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


    create() {
        const div = document.createElement('div');
        this.element.appendChild(div);
    },

    basketPrice() {
        return this.goods.reduce(function(sum, current) {
                return sum + current.price * current.amount;
              }, 0);
    },


};

alert("В корзине товаров на сумму " + basket.basketPrice());


