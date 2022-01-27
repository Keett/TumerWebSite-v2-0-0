import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { TalentSolution } from '../index/TalentSolution';

@Injectable()
export class TalentSolutionService {

  constructor(private http:HttpClient) { }
  pathTalentSolution = "http://localhost:3000/talentSolutions";
  
  getTalentSolutionData():Observable<TalentSolution[]>{
    return this.http.get<TalentSolution[]>(this.pathTalentSolution).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
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
