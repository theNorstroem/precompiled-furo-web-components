# @furo/precompiled

Use the precompiled components directly in your HTML file.
No build step needed. 

> **Warning** This package was created for our demo systems, so we can use and show our stuff in a HUGO generated page.
The files are very big at the moment, because they are not optimized yet.

## Demo
Run `npm run stard-cdn-sample` to start the cdn based sample.

## Installation 

The version of this package represents the version of @furo/collection

### CDN
Install ALL components including the UI5 components *not recomended*
```html
<script type="module" src="/config/init.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@furo/precompiled@1.4.3/dist/furo-fbp.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@furo/precompiled@1.4.3/dist/framework.js"></script>

<script type="module" src="https://cdn.jsdelivr.net/npm/@furo/precompiled@1.4.3/dist/layout.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@furo/precompiled@1.4.3/dist/app.js"></script>
```

### NPM

```bash
npm i -S @furo/precompiled
```

```html
<script type="module" src="/config/init.js"></script>
<script type="module" src="/node_modules/@furo/precompiled/dist/furo-fbp.js"></script>
<script type="module" src="/node_modules/@furo/precompiled/dist/framework.js"></script>

<script type="module" src="/node_modules/@furo/precompiled/dist/layout.js"></script>
<script type="module" src="/node_modules/@furo/precompiled/dist/app.js"></script>
```


## Init file [optional]
When you want to use the **data** components or want to set the locales or install your translations, define and load the `init.js` from your page.

[*index.html*]
```html
 <!-- init is needed because we use data components -->
  <script type="module" src="/config/init.js"></script>
  <script type="module" src="dist/furo-fbp.js"></script>
```

[*/config/init.js*]
```javascript
import { Init, i18n,  Env } from '/dist/framework.js'
import {Types,Services} from "./data_environment.js";

/**
 * Register resource bundle i18n
 */
import { Translations } from './translations.js';
i18n.registerResBundle(Translations);

/**
 * Register the types and services which was generated by furo
 */
Init.registerApiTypes(Types);
Init.registerApiServices(Services);

/**
 * register the API prefix based on the APPROOT.
 * This information is used for furo-deep-link and furo-reverse-deep-link to resolve the api address.
 *
 * We use /api here, because we do not have a dedicated host like api.xxx.com for the api services
 * @type {string}
 */
Env.api.prefix = `/api`;
Init.applyCustomApiPrefixToServicesAndTypes(Env.api.prefix);


/**
 * Translate static messages in SPEC
 */
let locale = 'de_ch';
if (i18n.resbundle[Env.locale.toLowerCase().replace('-', '_')]) {
  locale = Env.locale.toLowerCase().replace('-', '_');
}
Init.translateStaticTypeMessages(locale);


```

## Compatibility Table
![compat](compat.png)


## Package Structure
The packages structured and named like the modules from [components.furo.pro](https://components.furo.pro). 
This module contains some additional files like `DOMFBP.js` which is needed when you want the fbp features on `<body>`. 

### Addtional files:
- **fixed-tooltip-display.js** Tooltip display for pages which scrolls the hole page.
- **DOMFBP.js** Append FPB to any dom node, even *body* 
- **light-bulb.js**  A nice example component used in the docs
- **ui5DisplayRegistry.js** A UI5 display registry for the dynamic type renderers.
- **ui5Icons.js** The complete iconset, because we can not expose them individually (sorry) 

### collection.js
This file contains the full set of the precompiled package and is huge.

### app.js

A collection of elements, that can be used to structure your app’s layout.

#### Elements

- [furo-app-bar-top](https://components.furo.pro/?t=FuroAppBarTop) Toolbar to place on top
- [furo-app-drawer](https://components.furo.pro/?t=FuroAppDrawer) Application drawer
- [furo-card](https://components.furo.pro/?t=FuroCard) Material design card element
- [furo-loading-indicator-bar](https://components.furo.pro/?t=FuroLoadingIndicator) An ugly progress bar
- [furo-tooltip](https://components.furo.pro/?t=FuroTooltip) displays a tooltip
- [furo-tooltip-display](https://components.furo.pro/?t=FuroTooltipDisplay) helper component for tooltip


### config.js
Furo config components

#### Elements
- [furo-config](https://components.furo.pro/?t=FuroConfig) access config data
- [furo-config-loader](https://components.furo.pro/?t=FuroConfigLoader) load config files



### data.js

This package contains the furo data components.

### Elements

- [furo-api-fetch](https://components.furo.pro/?t=FuroApiFetch) fetch data from network
- [furo-collection-agent](https://components.furo.pro/?t=FuroCollectionAgent) interface component to handle collection requests
- [furo-custom-method](https://components.furo.pro/?t=FuroCustomMethod) interface component to handle custom methods
- [furo-data-object](https://components.furo.pro/?t=FuroDataObject) Typed data object, the heart of all furo-data related components
- [furo-deep-link](https://components.furo.pro/?t=FuroDeepLink) Resolve deep links HATEOAS based on  query params
- [furo-entity-agent](https://components.furo.pro/?t=FuroEntityAgent) interface component to handle entity requests
- [furo-rel-exists](https://components.furo.pro/?t=FuroRelExists) checks for a specific rel in links
- [furo-reverse-deep-link](https://components.furo.pro/?t=FuroReverseDeepLink) create query param object from HATEOAS
- [furo-sortby-container](https://components.furo.pro/?t=FuroSortbyContainer) create query param object for sort
...

### data-input.js

This package contains the furo data input components.
The @furo/data-input components are mostly wrappers around the @furo/input components with
an API to simplify the work with @furo/data (something like two way data binding) to create Forms and interact with a REST API.

### Elements

- [furo-data-bool-icon](https://components.furo.pro/?t=FuroDataBoolIcon)  Displays a icon/symbol for a boolean value
- [furo-data-checkbox-input](https://components.furo.pro/?t=FuroDataCheckboxInput) binds to a furo data checkbox input element
- [furo-data-collection-dropdown](https://components.furo.pro/?t=FuroDataCollectionDropdown) bindable dropdown
- [furo-data-color-input](https://components.furo.pro/?t=FuroDataColorInput) Binds a entityObject field to a furo-color-input field
- [furo-data-date-input](https://components.furo.pro/?t=FuroDataDateInput) Bind a entityObject.field to a date input
- [furo-data-display](https://components.furo.pro/?t=FuroDataDisplay) Displays a data field
- [furo-data-file-input](https://components.furo.pro/?t=FuroDataFileInput) Binds a entityObject field to a furo-file-input field
- [furo-data-money-input](https://components.furo.pro/?t=FuroDataMoneyInput)  Binds a entityObject field google.type.Money to a furo-number-input and currency dropdown fields
- [furo-data-number-input](https://components.furo.pro/?t=FuroDataNumberInput) Bind a entityObject.field to a number input
- [furo-data-password-input](https://components.furo.pro/?t=FuroDataPasswordInput) Bind a entityObject.field to a password input
- [furo-data-property](https://components.furo.pro/?t=FuroDataProperty) display and bind types of type any
- [furo-data-property-display](https://components.furo.pro/?t=FuroDataPropertyDisplay) helper for furo-data-property
- [furo-data-radio-buton-input](https://components.furo.pro/?t=FuroDataRadioButtonInput) furo data radio-button input element
- [furo-data-range-input](https://components.furo.pro/?t=FuroDataRangeInput) Bind a entityObject.field to a range input
- [furo-data-reference-search](https://components.furo.pro/?t=FuroDataReferenceSearch) autocomplete searcher for referenced types
- [furo-data-repeat](https://components.furo.pro/?t=FuroDataRepeat) automatic display of repeated fields
- [furo-data-search-input](https://components.furo.pro/?t=FuroDataSearchInput) Bind a entityObject.field to a search input
- [furo-data-sign-pad](https://components.furo.pro/?t=FuroDataSignPad) Bind a entityObject.field to a sign-pad input
- [furo-data-text-input](https://components.furo.pro/?t=FuroDataTextInput) Bind a entityObject.field to a text input
- [furo-data-textarea-input](https://components.furo.pro/?t=FuroDataTextareaInput)  Bind a entityObject.field to a textarea input
- [furo-data-time-input](https://components.furo.pro/?t=FuroDataTimeInput)  Bind a entityObject.field to a time input
...


### data-ui.js

UI elements for furo data

### Elements

- [furo-data-context-menu](https://components.furo.pro/?t=FuroDataContextMenu) a context menu
- [furo-data-table](https://components.furo.pro/?t=FuroDataTable) type based data table
- [furo-data-table-toggle](https://components.furo.pro/?t=FuroDataTableToggle) helper for furo-data-table
- [furo-data-hide-content](https://components.furo.pro/?t=FuroDataHideContent) hide content container with boolean fields
- [furo-type-renderer](https://components.furo.pro/?t=FuroTypeRenderer) display component to render fields according of the type
...

### data-util.js
Utility components for data

### Elements

- [furo-append-object](https://components.furo.pro/?t=FuroAppendObject)  append data to object literals


### doc-helper.js

Utils for the documentation system.


### experiments.js

Experimental components. APIs and location of the elements itself can change.

This components does not have any **tests**.

- furo-capture-audio
- furo-capture-video
- furo-catalog
- furo-qr-scanner
- furo-speech-recognition

### form.js

This package contains the furo form components, which are helpers to make the
creation of forms simpler.

### Elements

- [furo-button-bar](https://components.furo.pro/?t=FuroButtonBar) automatic button bar
- [furo-collapsible-box](https://components.furo.pro/?t=FuroCollapsibleBox) collapsible box with head
- [furo-form](https://components.furo.pro/?t=FuroForm) form container
- [furo-form-layouter](https://components.furo.pro/?t=FuroFormLayouter) form auto layouter
- [furo-input-row](https://components.furo.pro/?t=FuroInputRow) *DEPRECATED* label slot layout
...

### framework.js

This package contains the furo "framework" classes.

### Classes


- [Env](https://components.furo.pro/?t=Env) stores your environment data
- **furo.js** Export bundle for all framework classes
- [i18n](https://components.furo.pro/?t=i18n) Base i18n class
- [iconset](https://components.furo.pro/?t=Iconset) Icon set loader
- [Sys](https://components.furo.pro/?t=Sys) Set your locale
- [Init](https://components.furo.pro/?t=Init) App init stuff
- [Theme](https://components.furo.pro/?t=Theme) Theming stuff


### furo-fbp.js
The core furo FBP packages and classes. Read more on [fbp.furo.pro](fbp.furo.pro)

### icon.js
(Material Design)

This package supplies the icons used in the other components of furo.

If you want to create a iconset by your own, look at the examples in the repo.

### Elements

- [furo-icon](https://components.furo.pro/?t=FuroIcon) displays an icon


### input.js

Input components for furo. With this components you can design your form or any other data input for your app.

If you look for input components with data binding, look at the @furo/data-input components. This are the components used there.

### Elements

- [furo-button](https://components.furo.pro/?t=FuroButton) a md button
- [furo-checkbox](https://components.furo.pro/?t=FuroCheckbox) checkbox input box
- [furo-checkbox-input](https://components.furo.pro/?t=FuroCheckboxInput) checkbox input element with label
    - ![checkbox input](https://components.furo.pro/assets/furo-input/checkbox-input.png)
- [furo-chip](https://components.furo.pro/?t=FuroChip) chips
- [furo-color-input](https://components.furo.pro/?t=FuroColorInput) color input element
- [furo-date-input](https://components.furo.pro/?t=FuroDateInput) date input element
- [furo-file-dialog](https://components.furo.pro/?t=FuroFileDialog) file input element
- [furo-file-drop](https://components.furo.pro/?t=FuroFileDrop) dropzone for files
- [furo-icon-button](https://components.furo.pro/?t=FuroIconButton) icon button element
- [furo-input-chip](https://components.furo.pro/?t=FuroInputChip) input chips
- [furo-number-input](https://components.furo.pro/?t=FuroNumberInput) number input element
    - ![number input](https://components.furo.pro/assets/furo-input/number-input.png)
- [furo-password-input](https://components.furo.pro/?t=FuroPasswordInput) password input element
- [furo-radio-button](https://components.furo.pro/?t=FuroRadioButton) radio input circle
- [furo-radio-button-input](https://components.furo.pro/?t=FuroRadioButtonInput) radio input with label
- [furo-range-input](https://components.furo.pro/?t=FuroRangeInput) range slider
- [furo-search-input](https://components.furo.pro/?t=FuroSearchInput) search input element
- [furo-select-input](https://components.furo.pro/?t=FuroSelectInput) select input (dropdown)
- [furo-sign-pad](https://components.furo.pro/?t=FuroSignPad) draw or sign
- [furo-text-input](https://components.furo.pro/?t=FuroTextInput) text input element
- [furo-textarea-input](https://components.furo.pro/?t=FuroTextareaInput) textarea input element
- [furo-time-input](https://components.furo.pro/?t=FuroTimeInput) time input element
...


### layout.js

Layout components. Sometimes it is hard to describe the elements with text.
Just take a look at the demos and you will get the idea.

### Elements

- [furo-snackbar](https://components.furo.pro/?t=FuroSnackbar) a snackbar
- [furo-empty-spacer](https://components.furo.pro/?t=FuroEmptySpacer) fill the space in a furo-xxxx-flex
- [furo-horizontal-flex](https://components.furo.pro/?t=FuroHorizontalFlex) horizontal alignment
- [furo-panel](https://components.furo.pro/?t=FuroPanel) content panel with predefined margins
- [furo-ripple](https://components.furo.pro/?t=FuroRipple) add a ripple effect
- [furo-split-view](https://components.furo.pro/?t=FuroSplitView) splitted layout
- [furo-vertical-flex](https://components.furo.pro/?t=FuroVerticalFlex) vertical alignment of stuff
- [furo-vertical-scroller](https://components.furo.pro/?t=FuroVerticalScroller) vertical scroll
...


### navigation.js

Furo navigation components
 
**needs a furo spec to work**
### Elements

- [furo-panel-coordinator-tabs](https://components.furo.pro/?t=FuroPanelCoordinatorTabs) tab navigation for panel-coordinator
- [furo-panel-head](https://components.furo.pro/?t=FuroPanelHead)  dislay a navigationNode as title
- [furo-tree](https://components.furo.pro/?t=FuroTree)  tree navigation menu


### notification.js

notification components for furo

### Elements

- [furo-snackbar](https://components.furo.pro/?t=FuroSnackbar) a snackbar
- [furo-snackbar-display](https://components.furo.pro/?t=FuroSnackbarDisplay) helper component to show a snackbar
- [furo-banner](https://components.furo.pro/?t=FuroBanner) a banner
- [furo-banner-display](https://components.furo.pro/?t=FuroBannerDisplay) helper component to show a banner
...

### route.js


Furo routing components

### Elements

- [furo-app-flow](https://components.furo.pro/?t=FuroAppFlow)  Application Flow => routing
- [furo-app-flow-router](https://components.furo.pro/?t=FuroAppFlowRouter)  Application Flow => routing
- [furo-location](https://components.furo.pro/?t=FuroLocation) url watcher
- [furo-pages](https://components.furo.pro/?t=FuroPages) Simple content switcher
- [furo-panel-coordinator](https://components.furo.pro/?t=FuroPanelCoordinator) Complex content switcher based on furo-tree
- [furo-qp-changer](https://components.furo.pro/?t=FuroQpChanger) deep linking helper
...


### timing.js

Furo timing related components.

### Elements


- [furo-de-bounce](https://components.furo.pro/?t=FuroDeBounce) event de bouncer
- [furo-interval-pulse](https://components.furo.pro/?t=FuroIntervalPulse) trigger an event in intervals
...

### ui5.js




### util.js

