import './scss/styles.scss';
import { apiProducts } from './utils/data';
import { Catalog } from './components/models/Catalog';
import { Cart } from './components/models/Cart';
import { Buyer } from './components/models/Buyer';
import { Api } from './components/base/Api';
import { API_URL } from './utils/constants';
import { LarekApi } from './components/LarekApi';
const buyer = new Buyer();
const cart = new Cart();
const catalog = new Catalog();

// Тестирование работы всех методов
// Каталог
catalog.setProducts(apiProducts.items);
catalog.setSelectedProduct(apiProducts.items[1]);
console.log('Каталог: Получить все товары', catalog.getProducts());
console.log(
  'Каталог: Получить товар по его id',
  catalog.getProductById('854cef69-976d-4c2a-a18c-2aa45046c390')
);
console.log('Каталог: Получить выбранный товар', catalog.getSelectedProduct());

// Корзина
// Добавить товар
cart.addProduct(apiProducts.items[1]);
cart.addProduct(apiProducts.items[2]);
// Получить товары
console.log('Корзина: Получить все товары - ', cart.getProducts());
// Удалить товар по его id
console.log('Удалить товар по его id c101ab44-ed99-4a54-990d-47aa2bb4e7d9');
cart.deleteProduct('c101ab44-ed99-4a54-990d-47aa2bb4e7d9');
console.log('Корзина: Получить все товары - ', cart.getProducts());
// Очистить корзину
console.log('Корзина: Очистить все товары');
cart.clearCart();
console.log('Корзина: Получить все товары - ', cart.getProducts());
// Добавить товар
console.log('Корзина: Добавить товары 2 шт');

cart.addProduct(apiProducts.items[2]);
cart.addProduct(apiProducts.items[3]);
// Получить общую стоимость
console.log('Корзина: Получить общую стоимость - ', cart.getTotalPrice());
// Получить общее кол-во товаров в корзине
console.log(
  'Корзина: Получить общее кол-во товаров в корзине - ',
  cart.getAmountProductInCart()
);

console.log(
  'Проверить есть ли выбранный товар в корзине (должен вернуть true) - ',
  cart.isProductInCart('b06cde61-912f-4663-9751-09956c0eed67')
);
console.log(
  'Проверить есть ли выбранный товар в корзине (должен вернуть false) - ',
  cart.isProductInCart('854cef69-976d-4c2a-a18c-2aa45046c390')
);

// Покупатель
console.log('Покупатель: ошибки ДО заполнения', buyer.validate());
buyer.setPayment('cash');
buyer.setAddress('address 72/3');
console.log('Покупатель: ошибки после 1-го шага формы', buyer.validate());
buyer.setEmail('email@gmail.com');
buyer.setPhone('8-999-999-99-99');
console.log('Покупатель: ошибки после полного заполнения', buyer.validate());
buyer.clearInfo();
console.log('Покупатель: ошибки после очистки', buyer.validate());

const api = new Api(API_URL);
const larek = new LarekApi(api);
larek
  .getProductsList()
  .then(data => {
    catalog.setProducts(data.items);
    console.log('Каталог с сервера:', catalog.getProducts());
  })
  .catch(err => {
    console.error('Запрос к серверу упал:', err);
  });
