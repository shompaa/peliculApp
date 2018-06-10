import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  buscar = '';

  constructor(public ps: PeliculasService, public ar: ActivatedRoute) {
    this.ar.params.subscribe(p => {
      if (p['texto']) {
        this.buscar = p['texto'];
        this.buscarPelicula();
      }
    });
  }

  ngOnInit() {
  }

  buscarPelicula() {
    if (this.buscar.length === 0) {
      return;
    }

    this.ps.buscarPelicula(this.buscar)
      .subscribe();
  }

}
