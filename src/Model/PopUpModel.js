export default class PopUpModel {
  constructor() {
    this.modal = 1;
  }

  modalClose() {
    this.modal = 0;
  }

  modalOpen() {
    this.modal = 1;
  }
}
