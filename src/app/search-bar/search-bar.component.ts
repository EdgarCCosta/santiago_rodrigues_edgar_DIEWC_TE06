import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';
  searchResults: any[] = []; // Asegúrate de que searchResults tenga el tipo adecuado para los animes

  constructor(private apiService: ApiService) {}

  onInputChange(event: any) {
    this.searchTerm = event.target.value;
    this.search();
  }

  search() {
    if (this.searchTerm.trim() !== '') {
      this.apiService.searchAnime(this.searchTerm).subscribe(
        (results: any[]) => {
          this.searchResults = results;
        },
        (error) => {
          console.error('Error al buscar animes:', error);
          // Manejar el error aquí
        }
      );
    } else {
      this.searchResults = [];
    }
  }
}
