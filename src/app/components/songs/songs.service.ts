import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, catchError, retry, throwError } from 'rxjs';

// Import Interface
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  urlAPI = 'https://json-server-lyrics-redirect.vercel.app/db.json';

  constructor(private http: HttpClient) {
    
  }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // getSongs(bandParam: any): Observable<Song[]> {
  //   // return this.http.get<Song[]>(`${this.urlAPI}/songs?bandParam=${bandParam}`)
  //   return this.http.get<any>(`${this.urlAPI}`).pipe(
  //     map(response => response.songs)
  //   );
  // } 

  getSongs(bandParam: any): Observable<Song[]> {
    return this.http.get<any>(`${this.urlAPI}`).pipe(
      map(response => {
        let songs = response.songs;
        if (bandParam) {
          songs = songs.filter((song: Song) => song.bandParam === bandParam);
          console.log(songs)
        }
        return songs;
      })
    );
  }
}





