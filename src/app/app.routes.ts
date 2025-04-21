import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimarteClubComponent } from './pages/animarte-club/animarte-club.component';
import { AnimartePartyComponent } from './pages/animarte-party/animarte-party.component';
import { AnimarteSportComponent } from './pages/animarte-sport/animarte-sport.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'animarte-sport', component: AnimarteSportComponent },
  { path: 'animarte-party', component: AnimartePartyComponent },
  { path: 'animarte-club', component: AnimarteClubComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: 'home' } 
];
