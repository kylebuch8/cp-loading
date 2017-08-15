import CpBaseElement from 'cp-base-element/dist/compiled/cp-base-element';

const template = `
  <style>
    :host {
      display: block
    }

    .loader,
    .loader:after {
      border-radius: 50%;
      width: 10em;
      height: 10em;
    }

    .loader {
      margin: 60px auto;
      font-size: 10px;
      position: relative;
      text-indent: -9999em;
      border-top: 1.1em solid rgba(255, 255, 255, 0.2);
      border-right: 1.1em solid rgba(255, 255, 255, 0.2);
      border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
      border-left: 1.1em solid #ffffff;
      transform: translateZ(0);
      animation: spin 1.1s infinite linear;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>

  <div class="loader">Loading...</div>
`;

class CpLoading extends CpBaseElement {
  constructor() {
    super('cp-loading', template);
  }
}

customElements.define('cp-loading', CpLoading);
