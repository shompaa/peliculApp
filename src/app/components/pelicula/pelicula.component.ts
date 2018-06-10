import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  pagina: string;
  busqueda: string;

  constructor(public ar: ActivatedRoute, public ps: PeliculasService) {
    this.ar.params.subscribe(p => {
      this.pagina = p['pagina'];

      if (p['busqueda']) {
        this.busqueda = p['busqueda'];
      }

      this.ps.getPelicula(p['id'])
        .subscribe(pelicula => {
          this.pelicula = pelicula;
        });
    });
  }

  ngOnInit() {
  }

}
