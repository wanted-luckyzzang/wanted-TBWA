import PageInfoView from './View/PageInfoView';
import GnbView from './View/GnbView';
import View from './View/View';
import DoubleImg from './View/DoubleImg';
import YoutubeView from './View/YoutubeView';

import CarouselController from './Controller/CarouselController';

new View().render();
new GnbView().render();
new DoubleImg().render();
new PageInfoView().render();
new YoutubeView().render();
new CarouselController().clickEvent();
