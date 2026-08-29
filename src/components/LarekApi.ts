import {
  IApi,
  IOrderRequest,
  IOrderResponse,
  IProductsResponse,
} from '../types';

export class LarekApi {
  constructor(private api: IApi) {}
  getProductsList(): Promise<IProductsResponse> {
    return this.api.get<IProductsResponse>('/product/');
  }
  sendOrder(order: IOrderRequest): Promise<IOrderResponse> {
    return this.api.post<IOrderResponse>('/order/', order);
  }
}
