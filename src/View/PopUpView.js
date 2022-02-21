import ID_NAME from '../constants';
import '../SCSS/PopUp.scss';
import popupImage from '../Images/popup1.png';

export default class PopUpView {
  constructor() {
    this.$popup = document.getElementById(ID_NAME.popup);
  }

  render() {
    this.template();
  }

  template() {
    this.$popup.innerHTML = `
			<div class="popup">
				<img src=${popupImage} alt='popup'/>
			</div>
		`;
  }
}
