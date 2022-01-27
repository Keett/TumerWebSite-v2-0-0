import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Reference } from '../index/Reference';

@Injectable()
export class ReferenceService {

  constructor(private http:HttpClient) { }
  pathReference = "http://localhost:3000/references";

  getReferenceData():Observable<Reference[]>{
    return this.http.get<Reference[]>(this.pathReference).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  handleError(err:HttpErrorResponse){
    let errorMessage = "";
    if(err.error instanceof ErrorEvent){
      errorMessage = "Bir hata oluştu" + err.error.message;
    }else{
      errorMessage = "Sistemsel bir hata oluştu";
    }
    return throwError(errorMessage);
  }
}
