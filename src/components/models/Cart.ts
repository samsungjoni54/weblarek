import { IProduct } from '../../types';

export class Cart {
  private products: IProduct[] = [];
  // Добавить товар в корзину
  addProduct(product: IProduct): void {
    this.products.push(product);
  }
  //   Получить все товары
  getProducts(): IProduct[] {
    return this.products;
  }
  //   Удалить товар из корзины
  deleteProduct(id: string): void {
    this.products = this.products.filter(item => item.id !== id);
  }
  //   Очистить корзину
  clearCart(): void {
    this.products = [];
  }
  //   Получить общую стоимость
  getTotalPrice(): number {
    return this.products.reduce((acc, cur) => {
      return (acc += cur.price || 0);
    }, 0);
  }
  //   Получить общее кол-во товаров в корзине
  getAmountProductInCart(): number {
    return this.products.length;
  }
  //   Проверить есть ли выбранный товар в корзине
  isProductInCart(id: string): boolean {
    return this.products.some(item => item.id === id);
  }
}
