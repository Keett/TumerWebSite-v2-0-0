import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { About } from '../index/About';

@Injectable()
export class AboutService {

  constructor(private http: HttpClient) { }
  pathAbout = "http://localhost:3000/aboutData";

  getAboutData():Observable<About[]>{
    return this.http.get<About[]>(this.pathAbout).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err:HttpErrorResponse){
    let errormessage = "";
    if(err.error instanceof ErrorEvent){
      errormessage = "Bir hata oluştu" + err.error.message;
    }else{
      errormessage = "Sistemsel bir hata oluştu";
    }
    return throwError(errormessage);
  }
}
