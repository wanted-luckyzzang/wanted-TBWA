import CarouselModel from '../Model/CarouselModel';
import '../SCSS/Crousel.scss';
import CarouselView from '../View/CarouselView';

export default class CarouselController {
  constructor() {
    this.prevElem = document.querySelector('.prev');
    this.nextElem = document.querySelector('.next');
    this.CraouselObj = new CarouselModel();
    this.CarouselView = new CarouselView(this.CraouselObj);
    this.CarouselView.render();
  }

  clickEvent() {
    document.body.addEventListener('click', (e) => {
      if (e.target.className === 'prev') {
        this.prevEvent();
      } else if (e.target.className === 'next') {
        this.nextEvent();
      }
    });
  }

  prevEvent() {
    this.CraouselObj.prevClick();
    this.CarouselView.render();
  }

  nextEvent() {
    this.CraouselObj.nextClick();
    this.CarouselView.render();
  }
}
