// tslint:disable:quotemark
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, tap, filter} from 'rxjs/operators';
import {forkJoin} from "rxjs/observable/forkJoin";

@Injectable()
export class BackendApiService {

  constructor(private http: HttpClient) { }

  getListOfLibrary() {
    return this.http.get<any[]>('api/library')
      .pipe(catchError(this.handleError));
  }

  getLibrarayDetail(libraryID: number) {
    let params = new HttpParams();
    params = params.append('id', libraryID.toString());
    const serverUrl = "api/library/" + libraryID;
    return this.http.get<any>(serverUrl)
    .pipe(catchError(this.handleError));
  }

  getBooksAndMember(libraryID: number) {

    const bookUrl = "api/LibraryBooks/" + libraryID;
    const memberurl = "api/Member";
    const booksApi = this.http.get(bookUrl);
    const memberApi = this.http.get(memberurl);

    let params = new HttpParams();
    params = params.append('id', libraryID.toString());

    return  forkJoin([booksApi, memberApi])
    .pipe(catchError(this.handleError));
  }

  getMembers() {
    return this.http.get<any[]>('api/Member')
    .pipe(catchError(this.handleError));
  }

  private handleError<T>(error: HttpErrorResponse, caught: T) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    return new ErrorObservable(
      {
        hasError: true,
        HttpCode: error.status,
        Message: error.error
      });
  }


}
