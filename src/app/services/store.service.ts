import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ // decorador
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Product[] = []; //va como private asi no lo pueden acceder otros
  constructor() { }

  addProduct(product:Product){
    this.myShoppingCart.push(product);
  }

  getShoppingCart (){
    return this.myShoppingCart;
  }

  getTotal(){
    return this.myShoppingCart.reduce((sum, item) => sum + item.price,0);
  }
}
