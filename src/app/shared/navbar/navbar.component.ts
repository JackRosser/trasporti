import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  toggleBackoffice: boolean = false;

  activateToggle():void {
    this.toggleBackoffice = !this.toggleBackoffice
  }

}
