import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
   @Input('img') set changeImg (newImg: string){
    this.img = newImg;
    console.log('solo cambio la imagen');
   }
 
  @Input() img: string = 'valor init'; // asi se especifica que va a ser un valor input osea que va a recibir unicamente
  @Output() loaded = new EventEmitter<string>(); // valor output envia al padre datos  en EventEmitter<string> aclaro que envio un string
  imageDefault = './assets/img/default.png';
  counter = 0;
  counterFn : number | undefined;

  constructor() {
    //antes que el render
    //no correr cosas async -- corre solo una vez
    console.log('constructor' , 'imgValue =>', this.img);
   }

   ngOnChanges(changes: SimpleChanges){
    //antes que el render
    //cambio de inputs -- las veces que se actualicen los inputs
     console.log('ngOnChanges', 'imgChange' ,this.img);
     console.log ('changes', changes);
   }

  ngOnInit(): void {
    // antes que el render
    // async - fetch -- cualquier cosa que se necesite esperar un tiempo -- corre una sola vez
    console.log('ngOnInit','imgChange' ,this.img)
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter')
    },1000)
  }

  ngAfterViewInit(): void {
    //despues del render
    //manejo de hijos --
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    //borra el componente de la interfaz (deja de existir)
    console.log ('destroy');
    window.clearInterval(this.counterFn);
  }


  imgError (){
    this.img = this.imageDefault;
  }

  imgLoaded (){
    console.log('hijo');
    this.loaded.emit(this.img);
  }
}
