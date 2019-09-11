import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable,of} from 'rxjs';
import {map,catchError, tap} from 'rxjs/operators';
//import { Model } from '../model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  user:any[];
  private _baseUrl : string = "http://localhost:53246/api/Myorders";
  constructor(private _http: HttpClient) { }
  getProduct(){
    return this._http.get(this._baseUrl).
    pipe(map(this.extractData),catchError(this.handleError<any>('Submission Failed')));
  } 
  extractData(res: Response)
{
  let body=res;
  console.log(body);
  return body || {};
}
AddProduct(Product:any):Observable<any>{
  return this._http.post<any>(this._baseUrl,Product).
  pipe(tap(Product),catchError(this.handleError<any>('Product Add Failed')));
}
private handleError<T> (operation = 'operation' , result ?: T){
  return (error:any):Observable<T> =>{
    console.error(error);
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  }
}
}




 