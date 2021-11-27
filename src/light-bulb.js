import {LitElement, html, css} from 'lit';

import {FBP} from "@furo/fbp";

/**
 * `light-bulb`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/light-bulb.html
 * @appliesMixin FBP
 */
class LightBulb extends FBP(LitElement) {

  constructor() {
    super();
    this.off = true;
    this.color = "#fee753"
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      off: {type: Boolean, reflect: true},
      on: {type: Boolean}
    };
  }

  set on(v){
    this.off = !v;
  }

  setColor(color){
    this.color = color;
    this.requestUpdate();
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return  css`
        :host {
            display: inline-block;
        }

        :host([hidden]) {
            display: none;
        }

        :host([off]) furo-icon {
            color: black;
        }

        furo-icon {
            width: 96px;
            height: 96px;
        }



    `
  }

  /**
   * toggles the light bulb on off
   */
  toggle() {
    this.off = !this.off;
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <style>
        :host {
          display: block;
          font-size: 40px;
          color:${this.color}
          
        }
        
      </style>
      ☀
    `;
  }
}

window.customElements.define('light-bulb', LightBulb);
