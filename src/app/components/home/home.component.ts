import {Component} from '@angular/core';
import {sliderApps} from "../../constants/slider-apps";
import {SliderAppModel} from "../../models/slider-app.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  apps: SliderAppModel[] = sliderApps;
  activeSlideIndex: number = 0;
  activeSlide: SliderAppModel = this.apps[0];


  public nextSlide() {
    this.activeSlideIndex = this.activeSlideIndex < this.apps.length - 1 ? this.activeSlideIndex + 1 : 0;
    this.activeSlide = this.apps[this.activeSlideIndex];
  }

  public prevSlide() {
    this.activeSlideIndex = this.activeSlideIndex === 0 ? this.apps.length - 1 : this.activeSlideIndex - 1;
    this.activeSlide = this.apps[this.activeSlideIndex];
  }

}
