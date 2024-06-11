import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { QuemSomosComponent } from './shared/quem.somos/quem.somos.component';
import { MainComponent } from './shared/main/main.component';
import { BotaoComponent } from './shared/botao/botao.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,QuemSomosComponent, MainComponent, BotaoComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tata.recreacao';
}
