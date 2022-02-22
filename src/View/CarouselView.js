import CLASS_NAME from '../constants';
import '../SCSS/Crousel.scss';

export default class CarouselView {
  constructor(CarouselObj) {
    this.CarouselObj = CarouselObj;
    this.$carousel = document.getElementById(CLASS_NAME.carousel);
    this.data = this.CarouselObj.carouselRotation;
  }

  render() {
    this.template();
  }

  template() {
    const keyArray = Object.keys(this.data);
    const dataArray = keyArray.map((key) => CarouselView.Frame(this.data[key]));

    this.$carousel.innerHTML = ` 

    <div class="all">
        <div class="container">
            <div class="prev">
                    <
            </div>
            <div class="slider">
                <div class="wrapper" style="transform:translate(-${
                  this.CarouselObj.slideIndex * 1120
                }px)">
                    ${dataArray.join(' ')}
                </div>
            </div>
            <div class="next">
                    >
            </div>
        </div>
    </div>

     
    `;
  }

  static Frame(props) {
    return `
          <div class="frame">
            <div class="bigImg" style="background-image: url(${
              props[0].imageUrl
            })">    
                <div class="bigImageInfo">
                    <div class="bigDecs">${props[0].decs}</div>
                    <div class="bigName">${
                      props[0].productName.split('(')[0]
                    } 클래스 자세히 보기 ></div>
                </div>
            </div>
            <div class="smallImgSection">
                <div class="smallImg">
                    <div class="photo" style="background-image: url(${
                      props[1].imageUrl
                    })">
                    </div>
                    <div class="productInfo">
                        <div class="productName">${props[1].productName}</div>
                        <div class="productPrice">${props[1].productPrice}</div>
                        <div class="tagList">
                            ${props[1].shopTag
                              .map((el) => `<div>${el}</div>`)
                              .join(' ')}
                        </div>
                    </div>
                </div>
                <div class="line" ></div>
                <div class="smallImg">
                    <div class="photo" style="background-image: url(${
                      props[2].imageUrl
                    })"></div>
                    <div class="productInfo">
                        <div class="productName">${props[2].productName}</div>
                        <div class="productPrice">${props[2].productPrice}</div>
                        <div class="tagList">
                            ${props[2].shopTag
                              .map((el) => `<div>${el}</div>`)
                              .join(' ')}
                        </div>
                    </div>
                </div>
            </div>
          </div>
        `;
  }
}
