import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://coronavirusapi-france.vercel.app/AllLiveData";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "Unknown error!";
    if(error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `ERROR : ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error code : ${error.status}\nMessage : ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage)
  }


  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER).pipe(catchError(this.handleError));
  }
}
