import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/services/gif.service';

@Component({
  selector: 'gifs-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent {

  @ViewChild('txtTag')
  // con el simbolo ! hacemos que podamos recibir los not null
  public txtTag !: ElementRef<HTMLInputElement>;

  // injectamos el servicio gifsService
  constructor(private gifsService: GifsService) { }

  //*funcion que se ejecuta al presionar enter
  public searchTag(): void {
    const tag = this.txtTag.nativeElement.value;
    // el tag se envia al servicio gifsService para que realice la peticion http
    this.gifsService.searchTag(tag);
    this.txtTag.nativeElement.value = '';
  }
}
