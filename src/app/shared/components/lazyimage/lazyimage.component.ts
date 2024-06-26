import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  templateUrl: './lazyimage.component.html',
  styleUrls: ['./lazyimage.component.css']
})
export class LazyimageComponent implements OnInit {


  @Input()
  public url!:string;

  @Input()
  public alt :string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) {
      throw new Error('Url property is required');
    }
  }
  public onLoad(): void {
    setTimeout(() => {

      this.hasLoaded = true;
    }, 1000);
  }

}
