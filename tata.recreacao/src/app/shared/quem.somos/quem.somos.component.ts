import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'quem-somos',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './quem.somos.component.html',
  styleUrl: './quem.somos.component.scss'
})
export class QuemSomosComponent {

}
