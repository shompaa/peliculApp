import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'busqueda', component: BusquedaComponent },
    { path: 'busqueda/:texto', component: BusquedaComponent },
    { path: 'pelicula/:id/:pagina/:busqueda', component: PeliculaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
