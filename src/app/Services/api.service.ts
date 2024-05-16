import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private clientId = '51278da22401faa2ceed489b55b6a2b3';
  constructor(private http: HttpClient) {}

  searchAnime(term: string): Observable<any[]> {
    // Define los encabezados con el cliente ID
    const headers = new HttpHeaders({

      'X-MAL-CLIENT-ID': this.clientId
    });

    // Realiza la solicitud GET para buscar animes en función del término de búsqueda
    return this.http.get<any[]>(`https://api.myanimelist.net/v2/anime?q=${term}`, { headers });
  }
}
