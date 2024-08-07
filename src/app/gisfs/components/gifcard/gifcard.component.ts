import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gif-gifcard',
  templateUrl: './gifcard.component.html',
  styleUrls: ['./gifcard.component.css']
})
export class GifcardComponent implements OnInit {

  /**
   * @gif propiedad que recibe informacion del list card gif
   */
  @Input()
  public gif !:Gif;

  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Gif property is required');
    }
  }

}
