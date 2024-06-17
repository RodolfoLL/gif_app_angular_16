import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
//cuando el providedIn es 'root' se inyecta en toda la aplicacion
export class GifsService {
  //se pone en privado para que solo se pueda modificar desde esta clase
  private _tagHistory: string[] = [];
  constructor() { }

  get tagHistory(): string[] {
    //se manda la referencia del tagHistory
    return [...this._tagHistory];
  }

  public searchTag(tag: string): void {
    //se agrega al inicio del array el tag
    this._tagHistory.unshift(tag);
  }

}
