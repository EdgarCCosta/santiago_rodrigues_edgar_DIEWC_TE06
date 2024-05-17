import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
  anime: any;
  showAnimeDetail: boolean = false; 
  isFavorite: boolean = false;
  descriptionHtml: SafeHtml | undefined; // Usaremos SafeHtml para asegurar la seguridad del HTML

  constructor(
    private route: ActivatedRoute, 
    private apiService: ApiService, 
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) {
        this.loadAnime(id);
      } else {
        console.error('Invalid anime ID:', id);
      }
    });
  }

  getMainStudio(studios: any[]): string {
    const mainStudio = studios.find(studio => studio.isMain);
    return mainStudio ? mainStudio.node.name : 'Unknown';
  }

  loadAnime(id: number): void {
    this.apiService.getAnimeById(id).subscribe(
      (anime: any) => {
        this.anime = anime.data.Media;
        this.showAnimeDetail = true;
        // Converter las etiquetas <br> en saltos de línea reales
        this.descriptionHtml = this.sanitizer.bypassSecurityTrustHtml(this.anime.description);
      },
      (error: any) => {
        console.error('Error fetching anime:', error);
      }
    );
  }
}

