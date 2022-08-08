import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Input() img: string = 'valor init'; // asi se especifica que va a ser un valor input osea que va a recibir unicamente
  @Output() loaded = new EventEmitter<string>(); // valor output envia al padre datos  en EventEmitter<string> aclaro que envio un string
  imageDefault = './assets/img/default.png';
  constructor() { }

  ngOnInit(): void {
  }

  imgError (){
    this.img = this.imageDefault;
  }

  imgLoaded (){
    console.log('hijo');
    this.loaded.emit(this.img);
  }
}
