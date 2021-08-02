'use strict'

// 1 задание
// Первый вариант
// const board = {
    
//     containerElement: document.getElementById('game'),
//     cellElement: [],

//     initCells() {
//         this.containerElement.innerHTML = ' ';
//         this.cellElement = [];

//         const rowCount = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
//         const colCount = [0,'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',0];
    
//         for (let row = 0; row < rowCount.length; row++) {
//             const tr = document.createElement('tr');
//             this.containerElement.appendChild(tr);

//             for (let col = 0; col < colCount.length; col++) {
//                 const td = document.createElement('td');
//                 tr.appendChild(td);

//                 this.cellElement.push(td);

//             if (rowCount[row] === 0 && colCount[col] !== 0) {
//                 td.innerHTML = colCount[col];
//             } else if (colCount[col] === 0 && rowCount[row] !== 0) {
//                 td.innerHTML = rowCount[row].toString();
//             }
//             if (this.cellBlack(row, col)) {
//                 td.style.background = 'grey';
//             }

//             }
//         }
//     },

//     cellBlack(rowNum, colNum) {
//         if (rowNum === 0 || colNum === 0 || rowNum === 9 || colNum === 9) {
//             return false;
//         }
//         return (rowNum % 2 === 1 && colNum % 2 === 0) || (rowNum % 2 === 0 && colNum % 2 === 1);
//     },

// };

// board.initCells()

// //2 задание

const cart = {
    generate(product) {
        return `<div class = "good">
        <div>Наименование: ${product.productName}</div>
        <div>Цена: ${product.price}</div>
        <div>Количество: ${product.amount}</div>
        <div>Стоимость: ${product.price * product.amount}</div>
        </div>`
    }
}


const basket = {
    basketProduct: null,
    basketButton: null,
    cart,

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


    init() {
        this.basketProduct = document.querySelector('.basket');
        this.basketButton = document.querySelector('.basket_btn');
        this.basketButton.addEventListener('click', () => this.clearbasket);
        //Событие очищения корзины

        this.generate();
    },

    clearbasket() { //Очищение
        this.goods = [];
        this.generate();
    },

    generate() {
        if (this.goods.length) {
            this.goods.forEach(product => {
                this.basketProduct.insertAdjacentHTML('beforeend', this.cart.generate(product));
            });
            this.basketProduct.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} товаров на сумму ${this.basketPrice()}`);
        } else {
            this.basketProduct.textContent = 'Корзина пуста';
        }
    },

    basketPrice() {
        return this.goods.reduce(function(sum, current) {
                return sum + current.price * current.amount;
              }, 0);
    },

};
basket.init();





// let count = basket.goods.length;
// alert("В корзине " + count + " товаров " + " на сумму " +  basket.basketPrice());


