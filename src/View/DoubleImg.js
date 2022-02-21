import ID_NAME from '../constants';
import DoubleImgModel from '../Model/DoubleImgModel';
import "../SCSS/DoubleImg.scss";

export default class DoubleImg {
  constructor() {
    this.$doubleImg = document.getElementById(ID_NAME.doubleImg);
    this.doubleObj = new DoubleImgModel();
    console.log(this.doubleObj.LeftSideText[6]);
  }

  render() {
    this.template();
  }

  template() {
    this.$doubleImg.innerHTML = `
      <div class="owl-carousel owl-loaded owl-drag">
        <div class="owl-stage-outer">
          <div class="owl-stage">
            <div class="owl-item active" style="width: 50%; height: 165px">
              <div class="item">
                <a href="https://kukka.kr/brand/story/" class="link">
                  <img class="pc" src='${this.doubleObj.LeftSideText[6]}'/>
                  <span class="real_img pc" style="background-image: url(${this.doubleObj.LeftSideText[5]})">
                  </span>
                  <strong class="name">${this.doubleObj.LeftSideText[0]}</strong>
                  <b class="desc">
                  ${this.doubleObj.LeftSideText[1]}
                  <br>
                  ${this.doubleObj.LeftSideText[2]}
                  <span class="more">${this.doubleObj.LeftSideText[3]}</span>
                  </b>
                </a>
              </div>
            </div>
            <div class="owl-item active" style="width: 50%; height: 165px">
              <div class="item">
                <a href="https://kukka.kr/brand/showroom/" class="link">
                  <img class="pc" src='${this.doubleObj.RightSideText[5]}'/>
                  <span class="real_img pc" style="background-image: url(${this.doubleObj.RightSideText[4]})">
                  </span>
                  <strong class="name">${this.doubleObj.RightSideText[0]}</strong>
                  <b class="desc">
                  ${this.doubleObj.RightSideText[1]}
                  <br>
                  ${this.doubleObj.RightSideText[2]}
                  <span class="more">${this.doubleObj.RightSideText[3]}</span>
                  </b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}