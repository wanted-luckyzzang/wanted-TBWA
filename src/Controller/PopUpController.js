import PopUpModel from '../Model/PopUpModel';
import PopUpView from '../View/PopUpView';

export default class PopUpController {
  constructor() {
    this.popUpObject = new PopUpModel();
    this.PopUpView = new PopUpView(this.popUpObject);
    this.PopUpView.render();
    this.bindingEvent();
  }

  bindingEvent() {
    document.body.addEventListener('click', (e) => {
      const eClass = e.target.className;
      switch (eClass) {
        case 'checkbox-input':
          this.handleEvent();
          break;
        case 'x-icon':
          this.handleEvent();
          break;
        default:
      }
    });
  }

  handleEvent() {
    if (this.popUpObject.modal) this.popUpObject.modalClose();
    else this.popUpObject.modalOpen();
    this.PopUpView.render(this.popUpObject);
  }
}
