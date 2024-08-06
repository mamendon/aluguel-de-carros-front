import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cadastro', url: '/cadastro', icon: 'person-add' },
    { title: 'Consultar Cliente', url: '/consultar-cliente', icon: 'search' },
  ];
  
  constructor() {}
}
