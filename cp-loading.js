import CpBaseElement from 'cp-base-element/dist/compiled/cp-base-element';

const template = `
  <style>
    :host {
      display: block
    }

    .spinner {
      -webkit-animation: rotation 0.6s infinite linear;
      -o-animation: rotation 0.6s infinite linear;
      animation: rotation 0.6s infinite linear;
      border-bottom: 4px solid rgba(0,0,0,0.25);
      border-left: 4px solid rgba(0,0,0,0.25);
      border-right: 4px solid rgba(0,0,0,0.25);
      border-top: 4px solid rgba(0,0,0,0.75);
      -moz-border-radius: 100%;
      -webkit-border-radius: 100%;
      border-radius: 100%;
      margin: 0 auto;
      position: relative;
      display: block;
      height: 32px;
      height: 2rem;
      width: 32px;
      width: 2rem
    }

    .spinner.spinner-inline {
      display: inline-block;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg)
      }

      to {
        transform: rotate(359deg)
      }
    }
  </style>

  <div class="spinner spinner-inline">
    <span class="sr-only">Loading…</span>
  </div>
`;

class CpLoading extends CpBaseElement {
  constructor() {
    super('cp-loading', template);
  }
}

customElements.define('cp-loading', CpLoading);
