import { IBuyer, TBuyerErrors, TPayment } from '../../types';

export class Buyer {
  private payment: TPayment | '' = '';
  private address: string = '';
  private email: string = '';
  private phone: string = '';

  setPayment(payment: TPayment): void {
    this.payment = payment;
  }
  setAddress(address: string): void {
    this.address = address;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  setPhone(phone: string): void {
    this.phone = phone;
  }
  validate(): TBuyerErrors {
    const errors: TBuyerErrors = {};

    if (!this.payment) {
      errors.payment = 'Не выбран тип оплаты';
    }
    if (!this.address) {
      errors.address = 'Поле адреса должно быть заполнено';
    }
    if (!this.email) {
      errors.email = 'Поле почты должно быть заполнено';
    }
    if (!this.phone) {
      errors.phone = 'Поле телефона должно быть заполнено';
    }
    return errors;
  }
  clearInfo(): void {
    this.payment = '';
    this.address = '';
    this.email = '';
    this.phone = '';
  }
  getData(): IBuyer {
    return {
      payment: this.payment,
      address: this.address,
      email: this.email,
      phone: this.phone,
    };
  }
}
