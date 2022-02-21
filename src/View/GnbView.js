import ID_NAME from '../constants';
import logo from '../Images/logo.svg';
import GnbModel from '../Model/GnbModel';
import '../SCSS/Gnb.scss';

export default class GnbView {
  constructor() {
    this.$gnb = document.getElementById(ID_NAME.gnb);
    this.gnbObj = new GnbModel();
  }

  render() {
    this.template();
  }

  template() {
    this.$gnb.innerHTML = `
		<div class="container">
			<div class="logo">
				<a href="/">
					<img src=${logo} alt='logoIcon'/>
				</a>
			</div>
			<div>
				<ul class="buttonList">
					${this.gnbObj.buttonText
            .map(
              (e) =>
                `<li class="button">
							<span>
							${e}
							</span>
						</li>`,
            )
            .join(' ')}
				<ul>
			</div>
			<div class="myButton">
				<span class='myPage'></span>
				<span class="empty"></span>
				<span class='cart'></span>
			</div>
		</div>
		`;
  }
}
