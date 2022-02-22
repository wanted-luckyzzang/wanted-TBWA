import ID_NAME from '../constants';
import '../SCSS/PopUp.scss';
import popupImage from '../Images/popup1.png';

export default class PopUpView {
  constructor(popUpObject) {
    this.$popup = document.getElementById(ID_NAME.popup);
    this.popUpObject = popUpObject;
  }

  render() {
    this.template();
  }

  template() {
    if (this.popUpObject.modal) {
      this.$popup.innerHTML = `
				<div class="container">
					<div>
						<img src=${popupImage} alt='popup'/>
					</div>
					<div class="icon-container">
						<div class="checkbox">
							<input class="checkbox-input"type="checkbox" name="popup" value="open"/>
						</div>
						<div class="text">
							오늘은 더이상 보지 않기
						</div>
						<div class="x-icon"></div>
					</div>
				</div>
			`;
    } else {
      this.$popup.innerHTML = `
    		<div class="container">

    		</div>
    	`;
    }
  }
}
