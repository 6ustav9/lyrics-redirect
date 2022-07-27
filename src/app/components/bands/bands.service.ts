
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, retry, throwError } from 'rxjs';

// Import Interface
import { Band } from './band';


@Injectable()
export class BandsService {
  
  urlAPI = 'https://json-database-lyrics-redirect.herokuapp.com';

  constructor(private http: HttpClient) {
    
  }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getBands(): Observable<Band[]> {
    return this.http.get<Band[]>(`${this.urlAPI}/bands`)
  } 


}
