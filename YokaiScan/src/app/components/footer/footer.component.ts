import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { albums, arrowUpOutline, home } from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [IonicModule],
})
export class FooterComponent  implements OnInit {

  constructor() { 
    addIcons({ arrowUpOutline, home, albums });
  }

  ngOnInit() {}

}
