"use strict";(self.webpackChunkchilling_chronicles_of_hydes_creepers=self.webpackChunkchilling_chronicles_of_hydes_creepers||[]).push([[7400],{"./src/components/molecules/AccordionItem/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/.pnpm/next@13.4.12_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/dist/compiled/react/index.js"),Sprites=__webpack_require__("./src/components/ions/Sprites/index.tsx"),Icon=__webpack_require__("./src/components/atoms/Icon/index.tsx"),Text=__webpack_require__("./src/components/atoms/Text/index.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.34_typescript@5.1.6_webpack@5.90.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.90.1/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/components/molecules/AccordionItem/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.c,options);const AccordionItem_styles_module=styles_module.c&&styles_module.c.locals?styles_module.c.locals:void 0;var __jsx=react.createElement,AccordionItem=function AccordionItem(_ref){var title=_ref.title,content=_ref.content,_useState=(0,react.useState)(!1),expanded=_useState[0],setExpanded=_useState[1],handleToggleAccordion=function handleToggleAccordion(){setExpanded((function(prevExpanded){return!prevExpanded}))},icon=expanded?"minus":"plus",fillColor=expanded?"#765BA8":"#000706";return __jsx("article",{className:"".concat(AccordionItem_styles_module.accordionItem," ").concat(expanded?AccordionItem_styles_module.accordionItem__expanded:"")},__jsx("div",{onClick:handleToggleAccordion,onKeyDown:function handleKeyDown(event){"Enter"!==event.key&&" "!==event.key||handleToggleAccordion()},role:"button",tabIndex:0,"aria-expanded":expanded,className:AccordionItem_styles_module.accordionItem__toggle},__jsx(Text.a,{align:"left",children:title,color:expanded?"purple":"black",weight:"600-hover"}),__jsx(Icon.G,{icon,fill:fillColor,className:AccordionItem_styles_module.accordionItem__icon})),expanded&&__jsx("div",{className:AccordionItem_styles_module.accordionItem__answer},__jsx(Text.a,{align:"left",children:content,color:"black"})))};AccordionItem.displayName="AccordionItem";try{AccordionItem.displayName="AccordionItem",AccordionItem.__docgenInfo={description:"",displayName:"AccordionItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/AccordionItem/index.tsx#AccordionItem"]={docgenInfo:AccordionItem.__docgenInfo,name:"AccordionItem",path:"src/components/molecules/AccordionItem/index.tsx#AccordionItem"})}catch(__react_docgen_typescript_loader_error){}var index_stories_jsx=react.createElement;const index_stories={component:AccordionItem,title:"Molecules/AccordionItem",tags:["autodocs"],parameters:{layout:"padded"},args:{title:"ISBN",content:"R341-IIT1"},decorators:[function(Story){return index_stories_jsx("div",null,index_stories_jsx(Sprites.g,null),index_stories_jsx(Story,null))}]};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/atoms/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>Icon});var __jsx=__webpack_require__("./node_modules/.pnpm/next@13.4.12_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/dist/compiled/react/index.js").createElement,Icon=function Icon(_ref){var icon=_ref.icon,className=_ref.className,fill=_ref.fill;return __jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill,className},__jsx("use",{href:"#".concat(icon),xlinkHref:"#".concat(icon)}))};Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/atoms/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/Text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Text});var react=__webpack_require__("./node_modules/.pnpm/next@13.4.12_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.34_typescript@5.1.6_webpack@5.90.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.90.1/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/components/atoms/Text/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.c,options);const Text_styles_module=styles_module.c&&styles_module.c.locals?styles_module.c.locals:void 0;var __jsx=react.createElement,Text=function Text(_ref){var align=_ref.align,children=_ref.children,color=_ref.color,weight=_ref.weight,size=_ref.size,classList=[Text_styles_module.text,Text_styles_module["text--".concat(align)],Text_styles_module["text--".concat(color)],Text_styles_module["text--".concat(weight)],Text_styles_module["text--".concat(size)]].join(" ");return __jsx("p",{className:classList},children)};Text.displayName="Text";try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{align:{defaultValue:null,description:"",name:"align",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Text/index.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/atoms/Text/index.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.34_typescript@5.1.6_webpack@5.90.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.90.1/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/components/atoms/Text/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".styles_text__kWvBH{font-weight:300;font-size:1.6rem;line-height:160%}.styles_text__kWvBH::selection{background-color:#765ba8;color:#fdffff}@media(min-width: 744px){.styles_text__kWvBH{font-size:2rem;line-height:170%}}@media(min-width: 1200px){.styles_text__kWvBH{font-size:2.4rem;line-height:180%}}.styles_text--black__IY5V_{color:#000706}.styles_text--white__fsyNN{color:#fdffff}.styles_text--gray__8Yy4F{color:#373435}.styles_text--light-gray__mlexf{color:#f5f7fa}.styles_text--burgundy__FG_F7{color:#1d060d}.styles_text--purple__Vla3t{color:#765ba8}.styles_text--light-purple__IRls4{color:#d0d0ff}.styles_text--left__HnnTH{text-align:left}.styles_text--right__PWVpY{text-align:right}.styles_text--center__S47xP{text-align:center}.styles_text--600__c8a7U{font-weight:600}.styles_text--600-hover__JB2yt{font-weight:600}.styles_text--600-hover__JB2yt:hover{color:#765ba8}.styles_text--small__prwZg{font-weight:300;font-size:1rem;line-height:160%}@media(min-width: 744px){.styles_text--small__prwZg{font-size:1.1rem}}@media(min-width: 1200px){.styles_text--small__prwZg{font-size:1.2rem}}","",{version:3,sources:["webpack://./src/components/atoms/Text/styles.module.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/_breakpoints.scss"],names:[],mappings:"AACA,oBAAA,eAAA,CCCE,gBAAA,CACA,gBAAA,CDDA,+BACE,wBEMK,CFLL,aEHI,CCWJ,yBHXJ,oBCKI,cAAA,CACA,gBAAA,CAAA,CEKA,0BHXJ,oBCUI,gBAAA,CACA,gBAAA,CAAA,CAKF,2BACE,aClBI,CDqBN,2BACE,aCrBI,CDwBN,0BACE,aCtBG,CDyBL,gCACE,aCzBS,CD4BX,8BACE,aC3BO,CD8BT,4BACE,aC7BK,CDgCP,kCACE,aChCW,CDqCb,0BACE,eAAA,CAGF,2BACE,gBAAA,CAGF,4BACE,iBAAA,CAKF,yBACE,eAAA,CAGF,+BACE,eAAA,CACA,qCACE,aC3DG,CDiEP,2BACE,eAAA,CACA,cAAA,CACA,gBAAA,CEjEA,yBF8DF,2BAMI,gBAAA,CAAA,CEpEF,0BF8DF,2BAUI,gBAAA,CAAA",sourcesContent:['@import "./src/styles/index.scss";\n.text {\n  &::selection {\n    background-color: $purple;\n    color: $white;\n  }\n  @include text();\n\n  @include colors();\n\n  @include align();\n\n  @include weight();\n\n  @include size();\n}\n',"@mixin text() {\n  font-weight: 300;\n  font-size: 1.6rem;\n  line-height: 160%;\n\n  @include screen-size('tablet') {\n    font-size: 2rem;\n    line-height: 170%;\n  }\n\n  @include screen-size('desktop') {\n    font-size: 2.4rem;\n    line-height: 180%;\n  }\n}\n\n@mixin colors() {\n  &--black {\n    color: $black;\n  }\n\n  &--white {\n    color: $white;\n  }\n\n  &--gray {\n    color: $gray;\n  }\n\n  &--light-gray {\n    color: $light-gray;\n  }\n\n  &--burgundy {\n    color: $burgundy;\n  }\n\n  &--purple {\n    color: $purple;\n  }\n\n  &--light-purple {\n    color: $light-purple;\n  }\n}\n\n@mixin align() {\n  &--left {\n    text-align: left;\n  }\n\n  &--right {\n    text-align: right;\n  }\n\n  &--center {\n    text-align: center;\n  }\n}\n\n@mixin weight() {\n  &--600 {\n    font-weight: 600;\n  }\n\n  &--600-hover {\n    font-weight: 600;\n    &:hover {\n      color: $purple;\n    }\n  }\n}\n\n@mixin size() {\n  &--small {\n    font-weight: 300;\n    font-size: 1rem;\n    line-height: 160%;\n\n    @include screen-size('tablet') {\n      font-size: 1.1rem;\n    }\n\n    @include screen-size('desktop') {\n      font-size: 1.2rem;\n    }\n  }\n}\n\n@mixin layout() {\n  background: linear-gradient(180deg, #c4c2ff 0%, #e5e5e5 100%);\n}\n\n@mixin container-cards() {\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n  transition: all 0.8s ease-in-out;\n\n  @include screen-size('tablet') {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1.8rem;\n  }\n}\n","$black: #000706;\n$white: #fdffff;\n\n$dark-gray: #1e1e1e;\n$gray: #373435;\n$light-gray: #f5f7fa;\n\n$burgundy: #1d060d;\n\n$purple: #765ba8;\n$light-purple: #d0d0ff;\n\n$linear-purple: linear-gradient(\n  180deg,\n  rgba(196, 194, 255, 0.81) 0%,\n  rgba(196, 194, 255, 0) 100%\n);\n$linear-purple-02: linear-gradient(180deg, #c4c2ff 0%, #e5e5e5 100%);\n$linear: linear-gradient(\n  154deg,\n  rgba(46, 9, 22, 0.97) 0%,\n  rgba(32, 10, 43, 0.69) 100%\n);\n","$breakpoints: (\n  'mobile': 375px,\n  'tablet': 744px,\n  'desktop': 1200px,\n  'desktop-lg': 1440px,\n  'desktop-4k': 2560px,\n);\n\n@mixin screen-size($breakpoint) {\n  $breakpoint-value: map-get($breakpoints, $breakpoint);\n\n  @if $breakpoint-value {\n    @media (min-width: $breakpoint-value) {\n      @content;\n    }\n  } @else {\n    @error \"Breakpoint '#{$breakpoint}' not found in the global breakpoints map.\";\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={text:"styles_text__kWvBH","text--black":"styles_text--black__IY5V_","text--white":"styles_text--white__fsyNN","text--gray":"styles_text--gray__8Yy4F","text--light-gray":"styles_text--light-gray__mlexf","text--burgundy":"styles_text--burgundy__FG_F7","text--purple":"styles_text--purple__Vla3t","text--light-purple":"styles_text--light-purple__IRls4","text--left":"styles_text--left__HnnTH","text--right":"styles_text--right__PWVpY","text--center":"styles_text--center__S47xP","text--600":"styles_text--600__c8a7U","text--600-hover":"styles_text--600-hover__JB2yt","text--small":"styles_text--small__prwZg"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.34_typescript@5.1.6_webpack@5.90.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.90.1/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/components/molecules/AccordionItem/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".styles_accordionItem__ea7Do{padding:2.4rem;transition:fill .3s ease}.styles_accordionItem__expanded__d_0RO{border-radius:.8rem;border:2px solid #765ba8}.styles_accordionItem__toggle__fLyVI{display:flex;align-items:center;justify-content:space-between;font-weight:600;cursor:pointer}.styles_accordionItem__answer__lS_st{padding-top:1.6rem}.styles_accordionItem__icon__OI0QQ:hover{fill:#765ba8}","",{version:3,sources:["webpack://./src/components/molecules/AccordionItem/styles.module.scss","webpack://./src/styles/_variables.scss"],names:[],mappings:"AACA,6BACE,cAAA,CACA,wBAAA,CAEA,uCACE,mBAAA,CACA,wBAAA,CAGF,qCACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,eAAA,CACA,cAAA,CAGF,qCACE,kBAAA,CAIA,yCACE,YCfG",sourcesContent:['@import "./src/styles/index.scss";\n.accordionItem {\n  padding: 2.4rem;\n  transition: fill 0.3s ease;\n\n  &__expanded {\n    border-radius: 0.8rem;\n    border: 2px solid $purple;\n  }\n\n  &__toggle {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-weight: 600;\n    cursor: pointer;\n  }\n\n  &__answer {\n    padding-top: 1.6rem;\n  }\n\n  &__icon {\n    &:hover {\n      fill: $purple;\n    }\n  }\n}\n',"$black: #000706;\n$white: #fdffff;\n\n$dark-gray: #1e1e1e;\n$gray: #373435;\n$light-gray: #f5f7fa;\n\n$burgundy: #1d060d;\n\n$purple: #765ba8;\n$light-purple: #d0d0ff;\n\n$linear-purple: linear-gradient(\n  180deg,\n  rgba(196, 194, 255, 0.81) 0%,\n  rgba(196, 194, 255, 0) 100%\n);\n$linear-purple-02: linear-gradient(180deg, #c4c2ff 0%, #e5e5e5 100%);\n$linear: linear-gradient(\n  154deg,\n  rgba(46, 9, 22, 0.97) 0%,\n  rgba(32, 10, 43, 0.69) 100%\n);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={accordionItem:"styles_accordionItem__ea7Do",accordionItem__expanded:"styles_accordionItem__expanded__d_0RO",accordionItem__toggle:"styles_accordionItem__toggle__fLyVI",accordionItem__answer:"styles_accordionItem__answer__lS_st",accordionItem__icon:"styles_accordionItem__icon__OI0QQ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);