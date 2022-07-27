import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, catchError, retry, throwError } from 'rxjs';

// Import Interface
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  urlAPI = 'https://json-database-lyrics-redirect.herokuapp.com';

  constructor(private http: HttpClient) {
    
  }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getSongs(bandParam: any): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.urlAPI}/songs?bandParam=${bandParam}`)
  } 
}





