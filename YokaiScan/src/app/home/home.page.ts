import { Component } from '@angular/core';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MostrarCapituloComponent } from '../components/mostrar-capitulo/mostrar-capitulo.component';
import { IonContent, IonToolbar, IonFooter, IonHeader  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonFooter, IonToolbar ,NavComponent, IonContent, FooterComponent, MostrarCapituloComponent],
})
export class HomePage {
  constructor() {}
}
