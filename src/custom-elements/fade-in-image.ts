class FadeInImage extends HTMLElement {
  private img: HTMLImageElement | null = null;
  private enable: boolean = false;
  private classes: Record<string, string> = {};

  constructor() {
    super();
    this.img = this.querySelector('img');

    this.classes = {
      loaded: 'loaded',
    };
  }

  connectedCallback() {
    this.enable = this.getAttribute('enable') === 'true';
    if (!this.enable) return;

    if (this.img?.complete) {
      this.handleImageLoad();
    } else {
      this.img?.addEventListener('load', this.handleImageLoad);
    }
  }

  disconnectedCallback() {
    this.img?.removeEventListener('load', this.handleImageLoad);
  }

  handleImageLoad = () => {
    this.img?.classList.add(this.classes.loaded);
  };
}

customElements.define('fade-in-image', FadeInImage);
