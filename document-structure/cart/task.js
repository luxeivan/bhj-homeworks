class Shop {
    constructor() {
        this.products = document.querySelectorAll('.product');
        this.cartProducts = document.querySelector('.cart__products');
        this.addEventOnButton();
    }
    addEventOnButton() {
        for (const product of this.products) {
            //Уменьшение количества
            product.querySelector('.product__quantity-control_dec').addEventListener('click', event => {
                //Условие чтобы кол-во не было меньше одного
                if (event.target.closest('.product').querySelector('.product__quantity-value').innerText != 1) {
                    event.target.closest('.product').querySelector('.product__quantity-value').innerText -= 1;
                }
            });

            //Увеличение количества
            product.querySelector('.product__quantity-control_inc').addEventListener('click', event => {
                event.target.closest('.product').querySelector('.product__quantity-value').innerText = Number(event.target.closest('.product').querySelector('.product__quantity-value').innerText) + 1;
            });

            //Кнопка добавить в корзину
            product.querySelector('.product__add').addEventListener('click', event => {
                //Выбираем все продукты которые есть в корзине
                const arrayCartProduct = this.cartProducts.querySelectorAll('.cart__product');
                //Ставим метку был ли добавлен продукт ранее
                const added = true;
                //Проверяем был ли продукт добавлен в ранее в корзину               
                for (const cartProduct of arrayCartProduct) {
                    if (cartProduct.dataset.id == event.target.closest('.product').dataset.id) {
                        cartProduct.querySelector('.cart__product-count').innerText = Number(cartProduct.querySelector('.cart__product-count').innerText) + Number(event.target.closest('.product').querySelector('.product__quantity-value').innerText);
                        added = false;
                    }
                }
                //Если продукт не был добавлен то добавляем
                if (added) {
                    this.cartProducts.insertAdjacentHTML('beforeEnd', `
                    <div class="cart__product" data-id="${event.target.closest('.product').dataset.id}">
                        <img class="cart__product-image" src="${event.target.closest('.product').querySelector('.product__image').getAttribute('src')}">
                        <div class="cart__product-count">${event.target.closest('.product').querySelector('.product__quantity-value').innerText}</div>
                    </div>`);
                }

            });
        }
    }
}
new Shop();