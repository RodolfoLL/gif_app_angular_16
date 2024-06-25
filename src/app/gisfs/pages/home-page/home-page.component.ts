import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gif.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private gifService: GifsService) { }

  //metodo get para obtener la lista de gifs del gifService
  get gifs() {
    return this.gifService.gifList;
  }

}
