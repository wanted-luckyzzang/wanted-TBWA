import CLASS_NAME from '../constants';

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
				<div id=${CLASS_NAME.gnb}>
				</div>
			</header>
			<section>
			<div id=${CLASS_NAME.youtube}>
			</div>
			<div id=${CLASS_NAME.carousel}>
			</div>
			<div id=${CLASS_NAME.doubleImg}>
			</div>
			</section>
			<footer>
			<div id=${CLASS_NAME.pageInfo}>
			</div>
			</footer>
		`;
  }
}
