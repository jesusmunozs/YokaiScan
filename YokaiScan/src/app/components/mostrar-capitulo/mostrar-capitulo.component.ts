import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-capitulo',
  templateUrl: './mostrar-capitulo.component.html',
  styleUrls: ['./mostrar-capitulo.component.scss'],
})
export class MostrarCapituloComponent  implements OnInit {
  pagina: string = "";
  paginas: [] = [];

  constructor() { }

  ngOnInit() {}

}
