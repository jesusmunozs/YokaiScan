import { Component, OnInit } from '@angular/core';
import { IonHeader, IonImg, IonTitle, IonToolbar } from '@ionic/angular/standalone';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [IonHeader, IonTitle, IonImg, IonToolbar],
})
export class NavComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
