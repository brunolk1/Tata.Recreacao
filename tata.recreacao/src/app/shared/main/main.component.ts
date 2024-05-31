import { Component } from '@angular/core';
import { SectionSobreComponent } from './section-sobre/section-sobre.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SectionSobreComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
