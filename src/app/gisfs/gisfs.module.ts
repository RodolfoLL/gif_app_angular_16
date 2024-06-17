import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { CardGifComponent } from './components/card-gif/card-gif.component';
import { ListCardGifsComponent } from './components/list-card-gifs/list-card-gifs.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchboxComponent,
    CardGifComponent,
    ListCardGifsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GisfsModule { }
