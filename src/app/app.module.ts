import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de rutas
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { ApiService } from './services/api.service';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from './services/auth.service';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    AnimeListComponent,
    AnimeDetailComponent,
    LoginFormComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

