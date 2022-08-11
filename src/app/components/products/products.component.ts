import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private storeService: StoreService) { this.myShoppingCart = this.storeService.getShoppingCart(); } //inyeccion de dependencia

  ngOnInit(): void {
  }

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product [] = [{
    id: '1',
    name: 'EL mejor juguete',
    price: 565,
    image: './assets/img/toy.jpg'
  },
  {
    id: '2',
    name: 'Bicicleta casi nueva',
    price: 356,
    image: './assets/img/bike.jpg'
  },
  {
    id: '3',
    name: 'Colleción de albumnes',
    price: 34,
    image: './assets/img/album.jpg'
  },
  {
    id: '4',
    name: 'Mis libros',
    price: 23,
    image: './assets/img/books.jpg'
  },];

  onAddToShoppingCar(product:Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
