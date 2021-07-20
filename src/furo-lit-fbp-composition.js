// eslint-disable-next-line max-classes-per-file
import {FBP} from '@furo/fbp/src/fbp.js';
import {LitElement, html, css} from 'lit-element';

/**
 * `furo-lit-fbp`
 *
 *  Custom element to create an instant web component and allow using furo-fbp's  features.
 *
 *  You can use the component anywhere in your html or in other components.
 *
 *  Keep in mind that the component is encapsulated.
 *
 *```html
 *
 *  <!-- Use them even before the definition -->
 *  <my-component></my-component>
 *  <other-component></other-component>
 *
 *    <!-- define the component -->
 *    <furo-fbp name="my-component">
 *      <template>
 *        <button @-click="--btnClicked" ƒ-remove="--btnClicked">sender</button>
 *      </template>
 *    </furo-fbp>
 *```
 *  ## Attributes
 *  ### **name** (string)
 *
 *  Set the name of the component to generate, must be a valid web-component name and unique. The name is MANDATORY.
 *
 *  ### **expose** (string)
 *  Define methods that you want to expose as comma separated string.
 *
 *  ### **attributes** (string)
 *  Define attributes that you want to expose and to use insde as comma separated string.
 *
 *  *example*
 *
 *  `expose="delete,removeAll"`
 *   - delete will trigger the wire `|--delete`
 *   - removeAll will trigger the wire `|--removeAll`
 *
 * `attributes="icon,title"`
 * can be used in the template as ${icon} and ${title}
 *
 * ```html
 * <labeled-icon title="test" icon="mail"></labeled-icon>
 *
 * <furo-lit-fbp name="labeled-icon" expose="play,pause,rewind,setSource" attributes="icon,title">
 *  <template>
 *    <furo-icon title="${title}" icon="${icon}"></furo-icon>
 *    <span>${icon}</span>
 *  </template>
 * </furo-lit-fbp>
 *
 *
 * ```
 *
 *
 * @customElement
 * @mixes FBP
 * @summary instant web component with fbp
 */
class FuroLitFbpComposition extends FBP(HTMLElement) {
  constructor() {
    super();

    // eslint-disable-next-line wc/no-constructor-attributes
    const t = this.querySelector('template');

    // extract the exposed wires
    // eslint-disable-next-line wc/no-constructor-attributes
    const ex = this.getAttribute("expose");
    let exposedMethods = [];
    if (ex !== null) {
      exposedMethods = ex.split(",");
    }

    let props =   {}

    const attrs = this.getAttribute("attributes");
    attrs.split(",").forEach((attr)=>{
      props[attr] = {}
    })

    class InstantComponent extends FBP(LitElement) {
      constructor() {
        super();
        // attach the exposed wires
        exposedMethods.forEach((m) => {
          this[m] = (d) => {
            this._FBPTriggerWire(`|--${m}`, d)
          }
        });


        this.render = () => {
          const str = t.innerHTML.split(/\${[^}]*}/gm);
          const matches = t.innerHTML.matchAll(/\${([^}]*)/g)
          const vals = []
          for (const v of matches) {
           vals.push(this[(v[1])])
          }

          return html(str, ...vals)
        }

      }

      static get properties() {
        return props;
      }
    }

    const as = this.getAttribute("name");
    window.customElements.define(as, InstantComponent);

  }
}

window.customElements.define('furo-lit-fbp-composition', FuroLitFbpComposition);
