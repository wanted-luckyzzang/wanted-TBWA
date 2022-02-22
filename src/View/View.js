import ID_NAME from '../constants';
import '../SCSS/View.scss';

export default class View {
  constructor() {
    this.$app = document.getElementById('app');
  }

  render() {
    this.template();
  }

  template() {
    this.$app.innerHTML = `
			<header>
				<div id=${ID_NAME.gnb}></div>
			</header>
			<section>
				<div id=${ID_NAME.youtube}></div>
				<div id=${ID_NAME.carousel}></div>
				<div id=${ID_NAME.doubleImg}></div>
			</section>
			<footer>
				<div id=${ID_NAME.pageInfo}></div>
				<div id=${ID_NAME.popup}></div>
			</footer>
		`;
  }
}
