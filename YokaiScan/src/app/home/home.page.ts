import { Component } from '@angular/core';
import { NavComponent } from '../components/nav/nav.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [NavComponent, IonicModule, FooterComponent],
})
export class HomePage {
  constructor() {}
}
