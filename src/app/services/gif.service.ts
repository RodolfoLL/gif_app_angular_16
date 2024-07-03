import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif } from '../gisfs/interfaces/gifs.interface';

@Injectable({providedIn: 'root'})
//*cuando el providedIn es 'root' se inyecta en toda la aplicacion
export class GifsService {

  //*se pone en privado para que solo se pueda modificar desde esta clase
  //*recogemos los datos del local storage
  private _tagHistory: string[] =[];
  /**
   *@param gifList almacena la informacion de la peticion
   *@param apiKey es la llave de la api
   *@param serviceUrl es la url de la api
   */
  public gifList:Gif[] = [];
  private apiKey:string = 'HsWs96UjqER9mTpLHTuP14ApG6aMuTIj';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs/search';

  //*en el constructor se inyectan los modulos HttpClient como dependencia
  constructor(private http: HttpClient) {
    //?cargamos la informacion del local storage
    this.loadLocalStorage();
    //?iniciamos una busqueda automatica con el primer tag del taghistory
    this.searchTag(this._tagHistory[0]);
  }

  get tagHistory(): string[] {
    //se manda la referencia del tagHistory
    return [...this._tagHistory];
  }

  public searchTag(tag: string): void {
    //si el tag es una cadena vacia no se guarda en el arreglo y si es null no se mostrara ninguna lista
    if (tag == null || tag.length === 0) {
      return;
    }
    this.organaizedHistory(tag);
    //?el objeto params nos ayuda a definir los parametros que requerimos
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag);
    //*Aqui se realiza la peticion http del modulo httpClient
    this.http.get(`${this.serviceUrl}`,{params}).subscribe((resp: any) => {
      this.gifList = resp.data;
      console.log({gifs:this.gifList});
    })
  }

  public organaizedHistory(tag: string): void {
    if (!this.tagHistory.includes(tag)) {
      this._tagHistory.unshift(tag);
    }else{
      this._tagHistory = this.tagHistory.filter((oldTag)=> oldTag !== tag);
      this._tagHistory.unshift(tag);
    }
    //guardamos los tagHistory en el local storage
    this.saveLocalStorage();
    //la variable _tag_history solo admite 10 elementos
    if (this.tagHistory.length > 10) {
      this._tagHistory.pop();
    }
  }

  private saveLocalStorage(): void {
    //se crea un espacio en el local storage con la llave history
    localStorage.setItem('history',JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage(): void {
    //si no hay historial no se hace nada
    if (!localStorage.getItem('history')) {
      return;
    }
    this._tagHistory = JSON.parse(localStorage.getItem('history')!);
    if ( this._tagHistory.length === 0 ) return;
    this.searchTag( this._tagHistory[0] );
  }

}
