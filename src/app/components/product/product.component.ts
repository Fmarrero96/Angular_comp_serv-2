import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product: Product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    description: '',
    category: ''
  }

  @Output() addedProduct = new EventEmitter<Product>;

  onAddToCart(){
    this.addedProduct.emit(this.product); // preparando en el hijo para que el padre escuche
  }

}
