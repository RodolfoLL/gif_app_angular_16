import { Component, Output } from '@angular/core';
import { GifsService } from 'src/app/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  //injectamos el servicio gifsService
  constructor(private gifsService: GifsService) { }

  //obtenemos los tags de la variable tagHistory del gifservice
  get tagsHistory(): string[] {
    return this.gifsService.tagHistory;
  }
}
