import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  templateUrl: './lazyimage.component.html',
  styleUrls: ['./lazyimage.component.css']
})
export class LazyimageComponent implements OnInit {
/**
 * @url url de la imagen que lo envia el componente gif card
 * @alt texto alternativo de la imagen que lo envia el componente gif card
 * @hasLoaded indica si la imagen ha sido cargada o no
 */
  @Input()
  public url!:string;

  @Input()
  public alt :string = '';

  public hasLoaded: boolean = false;
 //* ngoninit es el primer metodo que se ejecuta al cargar el componente
  ngOnInit(): void {
    if (!this.url) {
      throw new Error('Url property is required');
    }
  }
  public onLoad(): void {
    //funcion que se ejecuta despues de un segundo
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }

}
