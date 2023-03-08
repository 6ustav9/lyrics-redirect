
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, retry, throwError, of } from 'rxjs';

// Import Interface
import { Band } from './band';


@Injectable()
export class BandsService {
  
  urlAPI = 'https://json-server-lyrics-redirect-ftlhrr8jc-6ustav9.vercel.app/db.json';

  
  constructor(private http: HttpClient) {
    
  }
  
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  getBands(): Observable<Band[]> {
    return this.http.get<any>(`${this.urlAPI}`).pipe(
      map(response => response.bands)
    );
  } 
  
  
}
