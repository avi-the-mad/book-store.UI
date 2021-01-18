import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<user[]> {
    return this.http.get<user[]>(this.baseURL+'users');
  }

}
