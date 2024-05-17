import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';
  @Output() searchResultsChanged: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor(private apiService: ApiService, private router: Router) {}

  search(): void {
    this.apiService.searchAnime(this.searchTerm).subscribe(
      (response: any) => {
        const results = response.data.Page.media;
        this.searchResultsChanged.emit(results);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }
  goHome(): void {
    this.searchResultsChanged.emit([]);
    this.router.navigate(['/']);
  }
}
