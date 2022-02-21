import CLASS_NAME from '../constants';
import "../SCSS/PageInfo.scss";

export default class PageInfoView {
  constructor() {
    this.$pageInfo = document.getElementById(CLASS_NAME.pageInfo);
  }

  render() {
    this.template();
  }

  template() {
    this.$pageInfo.innerHTML = `
      <div class="footer_wrap">
        <div class="footer_inner">
          <nav class="sect_sns">
            <a class="sns_f" href="https://ko-kr.facebook.com/kukka.kr/" target="_blank">
              <span class="blind">
              </span>
            </a>
            <a class="sns_i" href="https://www.instagram.com/kukkakorea/">
              <span class="blind">
              </span>
            </a>
            <a class="sns_y" href="https://www.youtube.com/channel/UC_zQakXCUPvjcfsU067zyCQ?view_as=subscriber" target="_blank">
              <span class="blind">
              </span>
            </a>
          </nav>
          <dl class="contact">
            <dt>꾸까 고객센터</dt>
            <dd class="f">
              <span class="blind">유선전화번호 : </span>
              1661-1031
            </dd>
            <dd class="s">
              <span class="blind">운영시간 안내 : </span>
              (평일 10:00 - 13:00, 14:00 - 18:00 / 주말 & 공휴일 제외)
            </dd>
            <dd class="add_partner_tel">기업제휴 문의 : 070-4238-8251</dd>
          </dl>
          <nav class="faq">
            <a href="https://kukka.kr/faq/">꾸까 고객센터 > </a>
          </nav>
          <dl class="about">
            <dt class="logo">
              <span class="blind">꾸까</span>
            </dt>
            <dd>상호명: 꾸까(kukka)</dd>
            <dd>사업자 등록번호: 264-81-32594</dd>
            <dd class="end">대표자: 박춘화</dd>
            <br class="only_pc">
            <dd>
              <address>소재지: 서울시 서초구 남부순환로333길 10 kukka</address>
            </dd>
            <dd>
              <a href="https://kukka.kr/disclosure/?next=/">기업공시</a>
            </dd>
            <dd class="end">통신판매신고번호 2018-서울서초-1692</dd>
            <br class="only_pc">
            <dd>
              <copy>© 2014-2021 kukka, Inc. All rights reserved.</copy>
            </dd>
          </dl>
          <nav class="tems">
            <a class="link" href="https://kukka.kr/agreement/?next=/">이용약관</a>
            <a class="link" href="https://kukka.kr/privacy/?next=/">개인정보 처리방침</a>
            <a class="link" href="https://partners.kukka.kr/">제휴안내</a>
          </nav>
        </div>
      </div>
      
    `
  }
}

