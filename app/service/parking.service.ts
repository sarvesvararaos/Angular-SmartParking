import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable,of} from 'rxjs';
import {map,catchError, tap} from 'rxjs/operators';
import { Model } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  user:Model[];
  private _baseUrl : string = "http://localhost:53246/api/Registers";
  constructor(private _http: HttpClient) { }
  getProduct(){
    return this._http.get(this._baseUrl).pipe(map(this.extractData),catchError(this.handleError<any>('Registration Get Failed')));
  } 
  extractData(res: Response)
{
  let body=res; 
  console.log(body);
  return body || {};
}
AddProduct(abc:any):Observable<any>{
  return this._http.post<any>(this._baseUrl,abc).
  pipe(tap(abc),catchError(this.handleError<any>('Product Add Failed')));
}
private handleError<T> (operation = 'operation' , result ?: T){
  return (error:any):Observable<T> =>{
    console.error(error);
 
    console.log(`${operation} failed: ${error.message}`);

    
    return of(result as T);
  }
}
}
