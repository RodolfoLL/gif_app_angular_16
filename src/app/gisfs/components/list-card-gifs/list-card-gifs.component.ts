import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-list-card-gifs',
  templateUrl: './list-card-gifs.component.html',
  styleUrls: ['./list-card-gifs.component.css']
})
export class ListCardGifsComponent {
   //propiedad que recibe informacion del homepage
   @Input()
   public gifs:Gif[] = [];

}
