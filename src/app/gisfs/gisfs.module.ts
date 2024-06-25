import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { ListCardGifsComponent } from './components/list-card-gifs/list-card-gifs.component';
import { GifcardComponent } from './components/gifcard/gifcard.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchboxComponent,
    ListCardGifsComponent,
    GifcardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GisfsModule { }
