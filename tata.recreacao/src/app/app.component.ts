import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { QuemSomosComponent } from './shared/quem.somos/quem.somos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,QuemSomosComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tata.recreacao';
}
