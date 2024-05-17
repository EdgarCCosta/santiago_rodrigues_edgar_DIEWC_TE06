import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService) {} // Inyectar AuthService en el constructor

  title = 'anime-tracker';
  searchResults: any[] = [];

  ngOnInit(): void {
    this.resetSearchResults();
  }

  onSearchResultsChanged(results: any[]): void {
    this.searchResults = results;
  }

  resetSearchResults(): void {
    this.searchResults = [];
  }
}
