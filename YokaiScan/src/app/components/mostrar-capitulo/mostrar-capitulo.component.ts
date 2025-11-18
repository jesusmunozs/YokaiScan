import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonCard, IonImg, IonButton, IonFooter } from '@ionic/angular/standalone';
import { DbzService } from 'src/services/dbz-service';

@Component({
  selector: 'app-mostrar-capitulo',
  templateUrl: './mostrar-capitulo.component.html',
  styleUrls: ['./mostrar-capitulo.component.scss'],
  standalone: true,
  imports: [IonFooter, IonButton, IonCard, IonImg, CommonModule],
})
export class MostrarCapituloComponent  implements OnInit {
  pagina: string = "";
  paginas:any[] = [];

  constructor() { }

  onCharacters() {
    this.cargarPersonajes();
  }

  onPlanets() {
    this.cargarPlanetas();
  }

  ngOnInit() {this.cargarPersonajes(); }

  private personajesService = inject(DbzService);

  async cargarPersonajes() {
    const personajes = await this.personajesService.obtenerPersonajes();
    console.log(personajes.items);
    this.paginas = personajes.items;

    console.log(this.paginas[0].name);
    
  }

  async cargarPlanetas() {
    const personajes = await this.personajesService.obtenerPlanetas();
    console.log(personajes.items);
    this.paginas = personajes.items;

    console.log(this.paginas[0].name);
    
  }
}
