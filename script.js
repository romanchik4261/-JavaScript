"use strict"

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