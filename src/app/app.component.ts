import { Component } from '@angular/core';
import { Product } from '../app/models/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = ''; //https://www.w3schools.com/howto/img_avatar.png

  onLoaded(img: string){
    console.log ('padre',img);
  }

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


}
