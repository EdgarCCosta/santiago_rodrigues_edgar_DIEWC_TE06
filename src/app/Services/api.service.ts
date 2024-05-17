import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'https://graphql.anilist.co';

  constructor(private http: HttpClient) {}

  // Método existente para buscar anime
  searchAnime(query: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      query: `
        query ($search: String) {
          Page {
            media(search: $search, type: ANIME) {
              id
              title {
                romaji
                english
              }
              description
              coverImage {
                large
              }
              averageScore
            }
          }
        }
      `,
      variables: {
        search: query
      }
    };

    return this.http.post<any>(this.baseUrl, body, { headers });
  }

  // Método existente para obtener anime por ID
  getAnimeById(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      query: `
      query ($id: Int) {
        Media (id: $id, type: ANIME) {
          id
          title {
            romaji
            english
          }
          description
          startDate {
            year
            month
            day
          }
          endDate {
            year
            month
            day
          }
          season
          status
          episodes
          isLicensed
          source
          hashtag
          trailer {
            id
            site
            thumbnail
          }
          updatedAt
          coverImage {
            large
            extraLarge
          }
          bannerImage
          averageScore
          genres
          characters (role: MAIN){
            edges {
              node {
                name {
                  full
                }
              }
            }
          }
          studios {
            edges {
              isMain
              node {
                name
              }
            }
          }
          recommendations(perPage: 5, sort: RATING_DESC) {
            edges {
              node {
                mediaRecommendation {
                  title {
                    romaji
                    english
                  }
                }
              }
            }
          }
        }
      }
      
      `,
      variables: {
        id: id
      }
    };

    return this.http.post<any>(this.baseUrl, body, { headers: headers });
  }
}
