import PageInfoView from './View/PageInfoView';
import GnbView from './View/GnbView';
import View from './View/View';
import DoubleImgView from './View/DoubleImgView';
import YoutubeView from './View/YoutubeView';
import CarouselController from './Controller/CarouselController';
import PopUpController from './Controller/PopUpController';

class App {
  static init() {
    new View().render();
    new GnbView().render();
    new DoubleImgView().render();
    new PageInfoView().render();
    new YoutubeView().render();
    new CarouselController().clickEvent();
    new PopUpController().init();
  }
}

App.init();
