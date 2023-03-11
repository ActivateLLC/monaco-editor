/*! For license information please see monaco.contribution.js.LICENSE.txt */
var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(e,a,t,r)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let n of __getOwnPropNames(a))__hasOwnProp.call(e,n)||n===t||__defProp(e,n,{get:()=>a[n],enumerable:!(r=__getOwnPropDesc(a,n))||r.enumerable});return e},__reExport=(e,a,t)=>(__copyProps(e,a,"default"),t&&__copyProps(t,a,"default")),monaco_editor_core_exports={};__reExport(monaco_editor_core_exports,monaco_editor_core_star);import*as monaco_editor_core_star from"monaco-editor-core";var LanguageServiceDefaultsImpl=class{_onDidChange=new monaco_editor_core_exports.Emitter;_options;_modeConfiguration;_languageId;constructor(e,a,t){this._languageId=e,this.setOptions(a),this.setModeConfiguration(t)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get options(){return this._options}get modeConfiguration(){return this._modeConfiguration}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}},formatDefaults={tabSize:4,insertSpaces:!1,wrapLineLength:120,unformatted:'default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var',contentUnformatted:"pre",indentInnerHtml:!1,preserveNewLines:!0,maxPreserveNewLines:void 0,indentHandlebars:!1,endWithNewline:!1,extraLiners:"head, body, /html",wrapAttributes:"auto"},optionsDefault={format:formatDefaults,suggest:{},data:{useDefaultDataProvider:!0}};function getConfigurationDefault(e){return{completionItems:!0,hovers:!0,documentSymbols:!0,links:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,selectionRanges:!0,diagnostics:e===htmlLanguageId,documentFormattingEdits:e===htmlLanguageId,documentRangeFormattingEdits:e===htmlLanguageId}}var htmlLanguageId="html",handlebarsLanguageId="handlebars",razorLanguageId="razor",htmlLanguageService=registerHTMLLanguageService(htmlLanguageId,optionsDefault,getConfigurationDefault(htmlLanguageId)),htmlDefaults=htmlLanguageService.defaults,handlebarLanguageService=registerHTMLLanguageService(handlebarsLanguageId,optionsDefault,getConfigurationDefault(handlebarsLanguageId)),handlebarDefaults=handlebarLanguageService.defaults,razorLanguageService=registerHTMLLanguageService(razorLanguageId,optionsDefault,getConfigurationDefault(razorLanguageId)),razorDefaults=razorLanguageService.defaults;function getMode(){return import("./htmlMode")}function registerHTMLLanguageService(e,a=optionsDefault,t=getConfigurationDefault(e)){const r=new LanguageServiceDefaultsImpl(e,a,t);let n;const o=monaco_editor_core_exports.languages.onLanguage(e,(async()=>{n=(await getMode()).setupMode(r)}));return{defaults:r,dispose(){o.dispose(),n?.dispose(),n=void 0}}}monaco_editor_core_exports.languages.html={htmlDefaults,razorDefaults,handlebarDefaults,htmlLanguageService,handlebarLanguageService,razorLanguageService,registerHTMLLanguageService};export{handlebarDefaults,handlebarLanguageService,htmlDefaults,htmlLanguageService,razorDefaults,razorLanguageService,registerHTMLLanguageService};