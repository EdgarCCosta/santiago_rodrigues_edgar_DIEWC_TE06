import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { CreateComponent } from './create/create.component';  
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'anime/:id', component: AnimeDetailComponent },
  { path: 'anime-list', component: AnimeListComponent },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
