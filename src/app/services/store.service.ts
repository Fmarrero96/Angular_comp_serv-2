import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ // decorador
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Product[] = []; //va como private asi no lo pueden acceder otros
  private myCart = new BehaviorSubject<Product[]>([]);
  private total =  new BehaviorSubject<number>(0);

  myCart$ = this.myCart.asObservable();   //se le pone siempre signo peso al final al observable
  total$ = this.total.asObservable();


  constructor() { }

  addProduct(product:Product){
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
    this.total.next (this.getTotal());
  }

  getShoppingCart (){
    return this.myShoppingCart;
  }

  getTotal(){
    return this.myShoppingCart.reduce((sum, item) => sum + item.price,0);
  }
}
