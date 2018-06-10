import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  peliculasPopulares: any;
  cartelera: any;
  ninos: any;

  constructor(private ps: PeliculasService) {
    this.ps.getPopulares().subscribe(data => this.peliculasPopulares = data);
    this.ps.getCartelera().subscribe(data => this.cartelera = data);
    this.ps.getPopularesNinos().subscribe(data => this.ninos = data);

  }

  ngOnInit() {
  }

}
