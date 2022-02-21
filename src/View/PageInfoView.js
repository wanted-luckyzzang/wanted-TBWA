import CLASS_NAME from '../constants';
import FaceBookIcon from "../Images/Footer/facebookIcon.png"
import InstaIcon from "../Images/Footer/InstaIcon.png"
import YoutubeIcon from "../Images/Footer/YoutubeIcon.png"

export default class PageInfoView {
  constructor() {
    this.$pageInfo = document.getElementById(CLASS_NAME.pageInfo);
  }

  render() {
    this.template();
  }

  template() {
    this.$pageInfo.innerHTML = `
      <div>
        <div id="icons">
          <span><img src=${FaceBookIcon}/></span>
          <span><img src=${InstaIcon}/></span>
          <span><img src=${YoutubeIcon}/></span>
        </div>
      </div>
    `
  }

  static headerView() {
    return `
      
    `
  }
}

