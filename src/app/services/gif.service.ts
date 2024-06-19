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
    //si el tag es una cadena vacia no se guarda en el arreglo
    if (tag.length === 0 ) {
      return;
    }
    this.organaizedHistory(tag);
  }

  public organaizedHistory(tag: string): void {
    if (!this.tagHistory.includes(tag)) {
      this._tagHistory.unshift(tag);
    }else{
      this._tagHistory = this.tagHistory.filter((value)=> value !== tag);
      this._tagHistory.unshift(tag);
    }
    if (this.tagHistory.length > 10) {
      this._tagHistory.pop();
    }
  }

}
