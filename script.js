'use strict'

const catalog = {
    catalogBlock: null,
    basket: null,
    list: [
        {
            idProduct: 111,
            productName: "Платье",
            price: 2000,
        },
        {
            idProduct: 222,
            productName: "Юбка",
            price: 1500,
        },
        {
            idProduct: 444,
            productName: "Штаны",
            price: 2000,
        },
        {
            idProduct: 555,
            productName: "Жакет",
            price: 1500,
        }
    ],

    //Инициализация каталога
    init(catalogBlockClass, basket) {
        this.catalogBlock = document.querySelector (`.${catalogBlockClass}`);
        this.basket = basket;
        this.generate();
        this.addEvent();
    },

    generate() { //Генерируем каталог
        if (this.list.length > 0) {
            this.generateCatalog();
        } else {
            this.clearCatalog();
        }
    },

    generateCatalog() { //Генерируем список товаров
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.generateCatalogItem(item));
        });
    },
    
    generateCatalogItem(item) { //Генерируем товар каталога
        return `<div class = "product">
        <h3>Наименование: ${item.productName}</h3>
        <p>Цена: ${item.price} руб.</p>
        <button class="product_btn" data-idProduct="${item.idProduct}">Добавить в корзину</button>
        </div>`;
    },

    clearCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'Каталог товаров пуст.';
    },

    addEvent() {
        this.catalogBlock.addEventListener('click', event => this.addBasket(event));
    },

    addBasket(event) {
        if (!event.target.classList.contains('product_btn')) return;
        const idProduct = +event.target.dataset.idProduct;
        const addProduct = this.list.find((product) => product.idProduct === idProduct);
        this.basket.addBasket(addProduct);
    },
};

// const cart = {
//     generate(product) {
//         return `<div class = "good">
//         <div>Наименование: ${product.productName}</div>
//         <div>Цена: ${product.price}</div>
//         <div>Количество: ${product.amount}</div>
//         <div>Стоимость: ${product.price * product.amount}</div>
//         </div>`
//     }
// }


const basket = {
    basketBlock: null,
    basketButton: null,
    goods: [
        // {
        //     idProduct: 111,
        //     productName: "Платье",
        //     price: 2000,
        //     amount: 1
        // },
    ],


    init(basketBlockClass, basketButton) {
        this.basketBlock = document.querySelector(`.${basketBlockClass}`);
        this.basketButton = document.querySelector(`.${basketButton}`);

        this.addEvent();
        this.generate();
    },

    addEvent() { //Событие на кнопке
        this.basketButton.addEventListener('click', this.clearbasket.bind(this));
    },

    clearbasket() { //Очищение корзины
        this.goods = [];
        this.generate();
    },

    generate() { //Генерируется корзина
        if (this.goods.length > 0) {
            this.generateBasket();
        } else {
            this.generateClearBasket();
        }
    },

    generateBasket() { //Генерируется список товаров
        this.basketBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.basketBlock.insertAdjacentHTML('beforeend', this.generateProductBasket(item));
        });
    },

    generateProductBasket(item) { //Генерируется товар
        return `<div>
                    <h3>Наименование: ${item.productName}</h3>
                    <p>Цена: ${item.price} руб.</p>
                    <p>Количество: ${item.amount} шт.</p>
                </div>`;
    },

    generateClearBasket() {
        this.basketBlock.innerHTML = '';
        this.basketBlock.textContent = 'Корзина пуста.';
    },

    //Добавляем товар в корзину
    addBasket(product) {
        if (product) {
            const findInBasket = this.goods.find((item) => product.idProduct === item.idProduct);
            if (findInBasket) {
                findInBasket.amount++;
            } else {
                this.goods.push({...product, amount: 1});
            }
            this.generate();
        } else {
            alert('Ошибка добавления!');
        }
    },
};
catalog.init('catalog', basket);
basket.init('basket', 'basket_btn');

// generate() {
//     if (this.goods.length > 0) {
//         this.goods.forEach(product => {
//             this.basketProduct.insertAdjacentHTML('beforeend', this.cart.generate(product));
//         });
//         this.basketProduct.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} товаров на сумму ${this.basketPrice()}`);
//     } else {
//         this.basketProduct.textContent = 'Корзина пуста';
//     }
// },

// basketPrice() {
//     return this.goods.reduce(function(sum, current) {
//             return sum + current.price * current.amount;
//           }, 0);
// },