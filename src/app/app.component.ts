import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
    isOn: boolean = true;
    marg: number = 160;
    username: string = "avithemad";
    title: string = "THE BOOK STORE";

    toggleNavigation() {
      this.isOn = !this.isOn;
      const mainbod = document.getElementById('main-bod');
      if (mainbod)
        mainbod.style.marginLeft=document.getElementById('main-bod')?.style.marginLeft=="0px"?"160px":"0px";
    }
}
