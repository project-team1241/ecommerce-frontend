import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  template: ` <app-header /> `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
