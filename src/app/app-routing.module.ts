import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandsComponent } from './components/bands/bands.component';
import { HomeComponent } from './components/home/home.component';
import { MoreComponent } from './components/more/more.component';
import { SongsComponent } from './components/songs/songs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bands', component: BandsComponent },
  { path: ':bandname/songs', component: SongsComponent },
  { path: 'more', component: MoreComponent },
];

// Utilizado para mapear as rotas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
