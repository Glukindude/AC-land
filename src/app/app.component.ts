import {Component, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(DOCUMENT) document) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 20) {
      let element = document.getElementById('navbar');
      element.classList.add('sticky-header');
    } else {
      let element = document.getElementById('navbar');
      element.classList.remove('sticky-header');
    }
  }
}
