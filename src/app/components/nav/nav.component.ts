import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  activeMenu = false;
  counter = 0;
  activeShopping = false; 
  myShopping: Product [] = [];

  constructor(
    private storeService : StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => { this.counter = products.length}); //con el subscribe puedo leer el myCart, comunicacion por medio de reactividad
    this.myShopping = this.storeService.getShoppingCart();
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

  toggleMenuShopping(){
    this.activeShopping = !this.activeShopping;
  }

}
