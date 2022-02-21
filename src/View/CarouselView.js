import CLASS_NAME from '../constants';

export default class CarouselView {
  constructor() {
    this.$carousel = document.getElementById(CLASS_NAME.carousel);
  }

  render() {
    this.template();
    console.log(this.$carousel);
  }

  template() {
    this.$carousel.innerHTML = `
        <div>
            test
        </div>
      `;
  }
}
