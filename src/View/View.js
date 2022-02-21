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
				<div classname=${CLASS_NAME.gnb}>
				</div>
			</header>
			<section>
			<div classname=${CLASS_NAME.youtube}>
			</div>
			<div classname=${CLASS_NAME.carousel}>
			</div>
			<div classname=${CLASS_NAME.doubleImg}>
			</div>
			</section>
			<footer>
			<div classname=${CLASS_NAME.pageInfo}>
			</div>
			</footer>
		`;
  }
}
