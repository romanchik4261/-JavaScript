'use strict'

// 1 задание
// // Первый вариант
// const board = {
//     rowCount: 8,
//     colCount: 8,
//     containerElement: document.getElementById('game'),
//     cellElement: [],

//     initCells() {
//         // this.containerElement.innerHTML = ' ';
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

const cart = {
    generate(product) {
        return `<div class = "good">
        <div>Наименование: ${product.product_name}</div>
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
                this.basketProduct.insertAdjacentHTML('beforeend', this.cart.render(product));
            });
            this.basketProduct.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} товаров на сумму ${this.BasketPrice()}`);
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


