import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
//cuando el providedIn es 'root' se inyecta en toda la aplicacion
export class GifsService {
  //se pone en privado para que solo se pueda modificar desde esta clase
  private _tagHistory: string[] = [];
  private apiKey:string = 'HsWs96UjqER9mTpLHTuP14ApG6aMuTIj';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs/search';

  constructor(private http: HttpClient) { }

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
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag);
    //TODO:FALTA COMPLETAR LA PETICION HTTP
    this.http.get(`${this.serviceUrl}?api_key=${this.apiKey}&q=${tag}&limit=10`).subscribe((resp: any) => {
      console.log(resp.data);
    })
  }

  public organaizedHistory(tag: string): void {
    if (!this.tagHistory.includes(tag)) {
      this._tagHistory.unshift(tag);
    }else{
      this._tagHistory = this.tagHistory.filter((oldTag)=> oldTag !== tag);
      this._tagHistory.unshift(tag);
    }
    //la variable _tag_history solo admite 10 elementos
    if (this.tagHistory.length > 10) {
      this._tagHistory.pop();
    }
  }

}
