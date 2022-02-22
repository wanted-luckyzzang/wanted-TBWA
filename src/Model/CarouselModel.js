export default class CarouselModel {
  constructor() {
    this.slideIndex = 1;
    this.craouselData = [
      {
        productName: '클래식 핸드타이드(2/28~3/6)',
        productPrice: '79,000원',
        shopTag: ['잠실점', '월계점', '구로점', '송파점', '부산동래점'],
        imageUrl:
          'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/107/img_%ED%81%B4%EB%9E%98%EC%8B%9D-%ED%95%B8%EB%93%9C%ED%83%80%EC%9D%B4%EB%93%9C.jpg',
        href: 'https://kukka.kr/class/contents/408/',
        decs: '화형이 또렷한 꽃으로 연출하는',
      },
      {
        productName: '틴케이스 센터피스(3/7~3/13)',
        productPrice: '79,000원',
        shopTag: ['잠실점', '월계점', '구로점', '송파점', '부산동래점'],
        imageUrl:
          'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/108/220209_%ED%81%B4%EB%9E%98%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%A0%84_img_3%EC%9B%941%EC%A3%BC%EC%B0%A8.jpg',
        href: 'https://kukka.kr/class/contents/410/',
        decs: '살랑이는 봄 향기로 채우는',
      },
      {
        productName: '워플라워 핸드타이드(3/14~3/20)',
        productPrice: '79,000원',
        shopTag: ['잠실점', '월계점', '구로점', '송파점', '부산동래점'],
        imageUrl:
          'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/109/220216_%ED%81%B4%EB%9E%98%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%A0%84_img_2%EC%9B%943%EC%A3%BC%EC%B0%A8.jpg',
        href: 'https://kukka.kr/class/contents/416/',
        decs: '봄을 머금은 튤립으로 연출하는',
      },
    ];
    this.carouselRotation = {
      rotation1: [
        this.craouselData[2],
        this.craouselData[0],
        this.craouselData[1],
      ],
      rotation2: [
        this.craouselData[0],
        this.craouselData[1],
        this.craouselData[2],
      ],
      rotation3: [
        this.craouselData[1],
        this.craouselData[2],
        this.craouselData[0],
      ],
      rotation4: [
        this.craouselData[2],
        this.craouselData[0],
        this.craouselData[1],
      ],
      rotation5: [
        this.craouselData[0],
        this.craouselData[1],
        this.craouselData[2],
      ],
    };
  }

  prevClick() {
    if (this.slideIndex === 1) {
      this.slideIndex += 2;
    } else {
      this.slideIndex -= 1;
    }
  }

  nextClick() {
    if (this.slideIndex === 3) {
      this.slideIndex -= 2;
    } else {
      this.slideIndex += 1;
    }
  }
}
