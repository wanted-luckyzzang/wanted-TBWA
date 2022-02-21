const LEFT_URL = "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/2020/12/25/brand_201225_w.png"
const BACK_LEFT_URL = "https://kukka-2-media-123.s3.amazonaws.com/static/kukkart_new/img/kukka/main_brand_story_w.png"
const RIGHT_URL = "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/2020/12/25/offline_201225_w.png"
const BACK_RIGHT_URL = "https://kukka-2-media-123.s3.amazonaws.com/static/kukkart_new/img/kukka/main_brand_story_w.png"

export default class DoubleImgModel {
  constructor() {
    this.LeftSideText = [
      '꾸까 브랜드 이야기',
      '꽃으로 라이프스타일을 만들어가는',
      'kukka의 문화를 소개해요.',
      'Brand story',
      '꾸까 쇼룸 안내',
      LEFT_URL,
      BACK_LEFT_URL,
    ];

    this.RightSideText = [
      '꾸까 오프라인 쇼룸',
      '꽃을 가까이서 만져보고 향기도 맡아보고',
      '꽃 속에서 작은 휴식을 누릴 수 있는 kukka의 오프라인 쇼룸',
      '꾸까 쇼룸 안내',
      RIGHT_URL,
      BACK_RIGHT_URL,
    ];
  }
}
