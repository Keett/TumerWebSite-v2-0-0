import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';
import { CalismaAlanlari } from '../index/CalismaAlanlari';

@Injectable()
export class CalismaAlanlariService {

  constructor(private http:HttpClient) { }
  pathCalismaAlanlari = "http://localhost:3000/calismaAlanlari";

  getCalismaAlanlari(): Observable<CalismaAlanlari[]>{
    return this.http.get<CalismaAlanlari[]>(this.pathCalismaAlanlari).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if(err.error instanceof ErrorEvent){
      errorMessage = "Bir hata oluştu" + err.error.message;
    }else{
      errorMessage = "Sistemsel bir hata oluştu";
    }
    return throwError(errorMessage);
  }

  
}
