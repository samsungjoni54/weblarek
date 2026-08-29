import { IProduct } from '../../types';

export class Catalog {
  private product: IProduct | undefined;
  private products: IProduct[] = [];
  // Сохранения массива
  setProducts(items: IProduct[]): void {
    this.products = items;
  }
  //Получение массива
  getProducts(): IProduct[] {
    return this.products;
  }
  //   Получение товара по id
  getProductById(id: string): IProduct | undefined {
    return this.products.find(item => item.id === id);
  }
  //Сохранение выбранного товара
  setSelectedProduct(item: IProduct): void {
    this.product = item;
  }
  //Сохранение выбранного товара
  getSelectedProduct(): IProduct | undefined {
    return this.product;
  }
}
