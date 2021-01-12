import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
    isOn: boolean = false;

    toggleNavigation() {
      this.isOn = !this.isOn;
    }
}
