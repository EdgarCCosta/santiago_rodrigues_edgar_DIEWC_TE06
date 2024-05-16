import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // Import HTTP_INTERCEPTORS

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { ApiService } from './Services/api.service'; // Adjust the path to your service
import { AuthInterceptor } from './auth/auth.interceptor'; // Import your interceptor

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    AnimeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ApiService, // Provide your service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


