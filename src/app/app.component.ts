import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div *appCustomif="true">
    merhaba
  </div>
  <ul>
    <li *appCustomfor="names; let name ; let index = index">
    {{index}} - {{name}}
    </li>
  </ul>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proje5-structural-directive';
  names: string[]=["ahmet","mehmet","arzu","adem","bilal"];
}
