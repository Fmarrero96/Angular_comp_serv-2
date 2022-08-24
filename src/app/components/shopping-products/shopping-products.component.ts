import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-shopping-products',
  templateUrl: './shopping-products.component.html',
  styleUrls: ['./shopping-products.component.scss']
})
export class ShoppingProductsComponent implements OnInit {
  myShopping: Product [] = [];  
  total = 0;
  constructor(private storeService: StoreService) {this.myShopping = this.storeService.getShoppingCart(); }
  
  ngOnInit(): void {
    this.storeService.total$.subscribe(tot => { this.total = tot}); //con el subscribe puedo leer el total, comunicacion por medio de reactividad
  }


}
