import { Component } from '@angular/core';
import { SectionSobreComponent } from './section-sobre/section-sobre.component';
import { SectionOndeComponent } from './section-onde/section-onde.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SectionSobreComponent, SectionOndeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
