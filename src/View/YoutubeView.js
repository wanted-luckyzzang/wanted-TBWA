import ID_NAME from '../constants';
import '../SCSS/Youtube.scss';

export default class YoutubeView {
  constructor() {
    this.$youtube = document.getElementById(ID_NAME.youtube);
  }

  render() {
    this.template();
  }

  template() {
    this.$youtube.innerHTML = `
    <div class='container'>
		  <iframe width="1100" height="420" src="https://www.youtube.com/embed/4-eFPCvI1yk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
		`;
  }
}
