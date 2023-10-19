"use strict";(self.webpackChunkchilling_chronicles_of_hydes_creepers=self.webpackChunkchilling_chronicles_of_hydes_creepers||[]).push([[6811],{"./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/organisms/BannerQuote/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_stories});var defineProperty=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Sprites=__webpack_require__("./src/components/ions/Sprites/index.tsx"),Icon=__webpack_require__("./src/components/atoms/Icon/index.tsx"),Tag=__webpack_require__("./src/components/atoms/Tag/index.tsx"),Text=__webpack_require__("./src/components/atoms/Text/index.tsx");const quotes_namespaceObject=JSON.parse('[{"quote":"What an excellent day for an exorcism","author":"Pazuzu"},{"quote":"Dead doesn\'t mean gone. So you don\'t need to be sad","author":"Flora Wingrave"},{"quote":"I\'m Scared To Close My Eyes, I\'m Scared To Open Them! We\'re Going To Die Out Here!","author":"Heather Donahue"},{"quote":"A ghost can be a lot of things. A memory, a daydream, a secret. Grief, anger, guilt. But in my experience, most times they\'re just what we want to see","author":"Steven Crain"},{"quote":"Black Phillip, I conjure thee to speak to me. Speak as thou dost speak to Jonas and Mercy. Dost thou understand my English tongue? Answer me.","author":"Thomasin"},{"quote":"Wouldst thou like to live deliciously?","author":"Black Phillip"},{"quote":"No live organism can continue for long to exist sanely under conditions of absolute reality","author":"Shirley Jackson"},{"quote":"You should never say \'who\'s there?\' Don\'t you watch scary movies? It\'s a death wish. You might as well come out here to investigate a strange noise or something","author":"Ghostface"},{"quote":"When we die we turn into stories. And every time someone tells one of those stories, it\'s like we\'re still here for them. We\'re all stories in the end","author":"Olivia Crain"},{"quote":"How can you dream if you don\'t have a soul?","author":"Jennifer McMahon"}]');var injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.27_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/organisms/BannerQuote/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const BannerQuote_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;var _Default$parameters,_Default$parameters2,__jsx=react.createElement,BannerQuote=function BannerQuote(_ref){var image=_ref.image,_useState=(0,react.useState)(0),currentQuoteIndex=_useState[0],setCurrentQuoteIndex=_useState[1],totalQuotes=quotes_namespaceObject.length,currentQuote=quotes_namespaceObject[currentQuoteIndex],background={backgroundImage:"url(".concat(image,")")};return __jsx("section",{className:BannerQuote_styles_module.quote,style:background},__jsx("article",null,__jsx("button",{className:BannerQuote_styles_module.quote__button,onClick:function handlePrevQuote(){setCurrentQuoteIndex((function(prevIndex){return 0===prevIndex?totalQuotes-1:prevIndex-1}))},"aria-label":"Previous Quote"},__jsx(Icon.J,{icon:"left"}))),__jsx("article",{className:BannerQuote_styles_module.quote__container},__jsx(Icon.J,{icon:"quote-02"}),__jsx("div",{className:BannerQuote_styles_module.quote__text},__jsx(Text.x,{align:"center",children:currentQuote.quote,color:"black"})),__jsx(Tag.V,{author:currentQuote.author})),__jsx("article",null,__jsx("button",{className:BannerQuote_styles_module.quote__button,onClick:function handleNextQuote(){setCurrentQuoteIndex((function(prevIndex){return prevIndex===totalQuotes-1?0:prevIndex+1}))},"aria-label":"Next Quote"},__jsx(Icon.J,{icon:"right"}))))};BannerQuote.displayName="BannerQuote",BannerQuote.__docgenInfo={description:"",methods:[],displayName:"BannerQuote",props:{image:{required:!0,tsType:{name:"string"},description:""}}};try{BannerQuote.displayName="BannerQuote",BannerQuote.__docgenInfo={description:"",displayName:"BannerQuote",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/organisms/BannerQuote/index.tsx#BannerQuote"]={docgenInfo:BannerQuote.__docgenInfo,name:"BannerQuote",path:"src/components/organisms/BannerQuote/index.tsx#BannerQuote"})}catch(__react_docgen_typescript_loader_error){}var index_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const index_stories={component:BannerQuote,title:"Organisms/BannerQuote",tags:["autodocs"],args:{image:"/bg.png"},argTypes:{image:{table:{disable:!0}}},decorators:[function(Story){return index_stories_jsx("div",null,index_stories_jsx(Sprites.A,null),index_stories_jsx(Story,null))}]};var Default={};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/components/atoms/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Icon});var __jsx=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js").createElement,Icon=function Icon(_ref){var icon=_ref.icon,className=_ref.className,fill=_ref.fill;return __jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill,className},__jsx("use",{href:"#".concat(icon),xlinkHref:"#".concat(icon)}))};Icon.displayName="Icon",Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{icon:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},fill:{required:!1,tsType:{name:"string"},description:""}}};try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/atoms/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/Tag/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Tag});var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.27_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/atoms/Tag/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const Tag_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;var __jsx=react.createElement,Tag=function Tag(_ref){var author=_ref.author;return __jsx("div",{className:Tag_styles_module.tag},__jsx("p",{className:Tag_styles_module.tag__author},author))};Tag.displayName="Tag",Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{author:{required:!0,tsType:{name:"string"},description:""}}};try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Tag/index.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/components/atoms/Tag/index.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/Text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.27_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/atoms/Text/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const Text_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;var __jsx=react.createElement,Text=function Text(_ref){var align=_ref.align,children=_ref.children,color=_ref.color,weight=_ref.weight,size=_ref.size,classList=[Text_styles_module.text,Text_styles_module["text--".concat(align)],Text_styles_module["text--".concat(color)],Text_styles_module["text--".concat(weight)],Text_styles_module["text--".concat(size)]].join(" ");return __jsx("p",{className:classList},children)};Text.displayName="Text",Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{align:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},weight:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"string"},description:""}}};try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{align:{defaultValue:null,description:"",name:"align",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Text/index.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/atoms/Text/index.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.27_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/atoms/Tag/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".styles_tag__CXzDC{border-radius:.8rem;background:#373435;padding:.5rem 1rem}.styles_tag__author__q5kCY{color:#fdffff;text-transform:capitalize;text-align:center;font-size:1.6rem}@media(min-width: 744px){.styles_tag__author__q5kCY{font-size:2rem}}@media(min-width: 1200px){.styles_tag__author__q5kCY{font-size:2.4rem}}.styles_tag__author__q5kCY::selection{background-color:#765ba8;color:#fdffff}","",{version:3,sources:["webpack://./src/components/atoms/Tag/styles.module.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/_breakpoints.scss"],names:[],mappings:"AACA,mBACE,mBAAA,CACA,kBCCK,CAAA,kBAAA,CDEL,2BACE,aCNI,CDOJ,yBAAA,CACA,iBAAA,CACA,gBAAA,CEEA,yBFNF,2BAOI,cAAA,CAAA,CEDF,0BFNF,2BAWI,gBAAA,CAAA,CAGF,sCACE,wBCZG,CDaH,aCrBE",sourcesContent:["@import \"./src/styles/index.scss\";\n.tag {\n  border-radius: 0.8rem;\n  background: $gray;\n  padding: 0.5rem 1rem;\n\n  &__author {\n    color: $white;\n    text-transform: capitalize;\n    text-align: center;\n    font-size: 1.6rem;\n\n    @include screen-size('tablet') {\n      font-size: 2rem;\n    }\n\n    @include screen-size('desktop') {\n      font-size: 2.4rem;\n    }\n\n    &::selection {\n      background-color: $purple;\n      color: $white;\n    }\n  }\n}\n","$black: #000706;\n$white: #fdffff;\n\n$dark-gray: #1e1e1e;\n$gray: #373435;\n$light-gray: #f5f7fa;\n\n$burgundy: #1d060d;\n\n$purple: #765ba8;\n$light-purple: #d0d0ff;\n\n$linear-purple: linear-gradient(\n  180deg,\n  rgba(196, 194, 255, 0.81) 0%,\n  rgba(196, 194, 255, 0) 100%\n);\n$linear-purple-02: linear-gradient(180deg, #c4c2ff 0%, #e5e5e5 100%);\n$linear: linear-gradient(\n  154deg,\n  rgba(46, 9, 22, 0.97) 0%,\n  rgba(32, 10, 43, 0.69) 100%\n);\n","$breakpoints: (\n  'mobile': 375px,\n  'tablet': 744px,\n  'desktop': 1200px,\n  'desktop-lg': 1440px,\n  'desktop-4k': 2560px,\n);\n\n@mixin screen-size($breakpoint) {\n  $breakpoint-value: map-get($breakpoints, $breakpoint);\n\n  @if $breakpoint-value {\n    @media (min-width: $breakpoint-value) {\n      @content;\n    }\n  } @else {\n    @error \"Breakpoint '#{$breakpoint}' not found in the global breakpoints map.\";\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={tag:"styles_tag__CXzDC",tag__author:"styles_tag__author__q5kCY"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.27_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/atoms/Text/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".styles_text__kWvBH{font-weight:300;font-size:1.6rem;line-height:160%}.styles_text__kWvBH::selection{background-color:#765ba8;color:#fdffff}@media(min-width: 744px){.styles_text__kWvBH{font-size:2rem;line-height:170%}}@media(min-width: 1200px){.styles_text__kWvBH{font-size:2.4rem;line-height:180%}}.styles_text--black__IY5V_{color:#000706}.styles_text--white__fsyNN{color:#fdffff}.styles_text--gray__8Yy4F{color:#373435}.styles_text--light-gray__mlexf{color:#f5f7fa}.styles_text--burgundy__FG_F7{color:#1d060d}.styles_text--purple__Vla3t{color:#765ba8}.styles_text--light-purple__IRls4{color:#d0d0ff}.styles_text--left__HnnTH{text-align:left}.styles_text--right__PWVpY{text-align:right}.styles_text--center__S47xP{text-align:center}.styles_text--600__c8a7U{font-weight:600}.styles_text--600-hover__JB2yt{font-weight:600}.styles_text--600-hover__JB2yt:hover{color:#765ba8}.styles_text--small__prwZg{font-weight:300;font-size:1rem;line-height:160%}@media(min-width: 744px){.styles_text--small__prwZg{font-size:1.1rem}}@media(min-width: 1200px){.styles_text--small__prwZg{font-size:1.2rem}}","",{version:3,sources:["webpack://./src/components/atoms/Text/styles.module.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/_breakpoints.scss"],names:[],mappings:"AACA,oBAAA,eAAA,CCCE,gBAAA,CACA,gBAAA,CDDA,+BACE,wBEMK,CFLL,aEHI,CCWJ,yBHXJ,oBCKI,cAAA,CACA,gBAAA,CAAA,CEKA,0BHXJ,oBCUI,gBAAA,CACA,gBAAA,CAAA,CAKF,2BACE,aClBI,CDqBN,2BACE,aCrBI,CDwBN,0BACE,aCtBG,CDyBL,gCACE,aCzBS,CD4BX,8BACE,aC3BO,CD8BT,4BACE,aC7BK,CDgCP,kCACE,aChCW,CDqCb,0BACE,eAAA,CAGF,2BACE,gBAAA,CAGF,4BACE,iBAAA,CAKF,yBACE,eAAA,CAGF,+BACE,eAAA,CACA,qCACE,aC3DG,CDiEP,2BACE,eAAA,CACA,cAAA,CACA,gBAAA,CEjEA,yBF8DF,2BAMI,gBAAA,CAAA,CEpEF,0BF8DF,2BAUI,gBAAA,CAAA",sourcesContent:['@import "./src/styles/index.scss";\n.text {\n  &::selection {\n    background-color: $purple;\n    color: $white;\n  }\n  @include text();\n\n  @include colors();\n\n  @include align();\n\n  @include weight();\n\n  @include size();\n}\n',"@mixin text() {\n  font-weight: 300;\n  font-size: 1.6rem;\n  line-height: 160%;\n\n  @include screen-size('tablet') {\n    font-size: 2rem;\n    line-height: 170%;\n  }\n\n  @include screen-size('desktop') {\n    font-size: 2.4rem;\n    line-height: 180%;\n  }\n}\n\n@mixin colors() {\n  &--black {\n    color: $black;\n  }\n\n  &--white {\n    color: $white;\n  }\n\n  &--gray {\n    color: $gray;\n  }\n\n  &--light-gray {\n    color: $light-gray;\n  }\n\n  &--burgundy {\n    color: $burgundy;\n  }\n\n  &--purple {\n    color: $purple;\n  }\n\n  &--light-purple {\n    color: $light-purple;\n  }\n}\n\n@mixin align() {\n  &--left {\n    text-align: left;\n  }\n\n  &--right {\n    text-align: right;\n  }\n\n  &--center {\n    text-align: center;\n  }\n}\n\n@mixin weight() {\n  &--600 {\n    font-weight: 600;\n  }\n\n  &--600-hover {\n    font-weight: 600;\n    &:hover {\n      color: $purple;\n    }\n  }\n}\n\n@mixin size() {\n  &--small {\n    font-weight: 300;\n    font-size: 1rem;\n    line-height: 160%;\n\n    @include screen-size('tablet') {\n      font-size: 1.1rem;\n    }\n\n    @include screen-size('desktop') {\n      font-size: 1.2rem;\n    }\n  }\n}\n\n@mixin layout() {\n  background: linear-gradient(180deg, #c4c2ff 0%, #e5e5e5 100%);\n}\n\n@mixin container-cards() {\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n  transition: all 0.8s ease-in-out;\n\n  @include screen-size('tablet') {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1.8rem;\n  }\n}\n","$black: #000706;\n$white: #fdffff;\n\n$dark-gray: #1e1e1e;\n$gray: #373435;\n$light-gray: #f5f7fa;\n\n$burgundy: #1d060d;\n\n$purple: #765ba8;\n$light-purple: #d0d0ff;\n\n$linear-purple: linear-gradient(\n  180deg,\n  rgba(196, 194, 255, 0.81) 0%,\n  rgba(196, 194, 255, 0) 100%\n);\n$linear-purple-02: linear-gradient(180deg, #c4c2ff 0%, #e5e5e5 100%);\n$linear: linear-gradient(\n  154deg,\n  rgba(46, 9, 22, 0.97) 0%,\n  rgba(32, 10, 43, 0.69) 100%\n);\n","$breakpoints: (\n  'mobile': 375px,\n  'tablet': 744px,\n  'desktop': 1200px,\n  'desktop-lg': 1440px,\n  'desktop-4k': 2560px,\n);\n\n@mixin screen-size($breakpoint) {\n  $breakpoint-value: map-get($breakpoints, $breakpoint);\n\n  @if $breakpoint-value {\n    @media (min-width: $breakpoint-value) {\n      @content;\n    }\n  } @else {\n    @error \"Breakpoint '#{$breakpoint}' not found in the global breakpoints map.\";\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={text:"styles_text__kWvBH","text--black":"styles_text--black__IY5V_","text--white":"styles_text--white__fsyNN","text--gray":"styles_text--gray__8Yy4F","text--light-gray":"styles_text--light-gray__mlexf","text--burgundy":"styles_text--burgundy__FG_F7","text--purple":"styles_text--purple__Vla3t","text--light-purple":"styles_text--light-purple__IRls4","text--left":"styles_text--left__HnnTH","text--right":"styles_text--right__PWVpY","text--center":"styles_text--center__S47xP","text--600":"styles_text--600__c8a7U","text--600-hover":"styles_text--600-hover__JB2yt","text--small":"styles_text--small__prwZg"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.27_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/organisms/BannerQuote/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".styles_quote__uXaDb{display:grid;grid-template-columns:repeat(3, auto);align-items:center;justify-content:space-around;margin:0 auto;height:50rem;background:center/cover no-repeat}.styles_quote__button__bAU6k{opacity:80%;cursor:pointer}.styles_quote__button__bAU6k svg{padding:1rem;background-color:#f5f7fa;border-radius:50%;width:4rem;height:4rem}.styles_quote__container__s7dqR{display:flex;flex-direction:column;gap:2rem;width:16rem}@media(min-width: 744px){.styles_quote__container__s7dqR{width:34rem}}@media(min-width: 1200px){.styles_quote__container__s7dqR{width:41.7rem}}@media(min-width: 1440px){.styles_quote__container__s7dqR{width:64rem}}.styles_quote__text__Kw8_5{background-color:#f5f7fa;opacity:70%;border-radius:3rem 0;padding:1rem}.styles_quote__uXaDb svg{fill:#1d060d}.styles_quote__uXaDb svg:hover,.styles_quote__uXaDb svg:focus{fill:#765ba8}","",{version:3,sources:["webpack://./src/components/organisms/BannerQuote/styles.module.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/_breakpoints.scss"],names:[],mappings:"AACA,qBACE,YAAA,CACA,qCAAA,CACA,kBAAA,CACA,4BAAA,CACA,aAAA,CACA,YAAA,CACA,iCAAA,CAEA,6BACE,WAAA,CACA,cAAA,CACA,iCACE,YAAA,CACA,wBCVO,CDWP,iBAAA,CAEA,UAAA,CACA,WAAA,CAIJ,gCACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,WAAA,CEfA,yBFWF,gCAOI,WAAA,CAAA,CElBF,0BFWF,gCAWI,aAAA,CAAA,CEtBF,0BFWF,gCAeI,WAAA,CAAA,CAIJ,2BACE,wBCtCS,CDuCT,WAAA,CACA,oBAAA,CACA,YAAA,CAGF,yBACE,YC3CO,CD6CP,8DAEE,YC7CG",sourcesContent:["@import \"./src/styles/index.scss\";\n.quote {\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  align-items: center;\n  justify-content: space-around;\n  margin: 0 auto;\n  height: 50rem;\n  background: center/cover no-repeat;\n\n  &__button {\n    opacity: 80%;\n    cursor: pointer;\n    svg {\n      padding: 1rem;\n      background-color: $light-gray;\n      border-radius: 50%;\n\n      width: 4rem;\n      height: 4rem;\n    }\n  }\n\n  &__container {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    width: 16rem;\n\n    @include screen-size('tablet') {\n      width: 34rem;\n    }\n\n    @include screen-size('desktop') {\n      width: 41.7rem;\n    }\n\n    @include screen-size('desktop-lg') {\n      width: 64rem;\n    }\n  }\n\n  &__text {\n    background-color: $light-gray;\n    opacity: 70%;\n    border-radius: 3rem 0;\n    padding: 1rem;\n  }\n\n  svg {\n    fill: $burgundy;\n\n    &:hover,\n    &:focus {\n      fill: $purple;\n    }\n  }\n}\n","$black: #000706;\n$white: #fdffff;\n\n$dark-gray: #1e1e1e;\n$gray: #373435;\n$light-gray: #f5f7fa;\n\n$burgundy: #1d060d;\n\n$purple: #765ba8;\n$light-purple: #d0d0ff;\n\n$linear-purple: linear-gradient(\n  180deg,\n  rgba(196, 194, 255, 0.81) 0%,\n  rgba(196, 194, 255, 0) 100%\n);\n$linear-purple-02: linear-gradient(180deg, #c4c2ff 0%, #e5e5e5 100%);\n$linear: linear-gradient(\n  154deg,\n  rgba(46, 9, 22, 0.97) 0%,\n  rgba(32, 10, 43, 0.69) 100%\n);\n","$breakpoints: (\n  'mobile': 375px,\n  'tablet': 744px,\n  'desktop': 1200px,\n  'desktop-lg': 1440px,\n  'desktop-4k': 2560px,\n);\n\n@mixin screen-size($breakpoint) {\n  $breakpoint-value: map-get($breakpoints, $breakpoint);\n\n  @if $breakpoint-value {\n    @media (min-width: $breakpoint-value) {\n      @content;\n    }\n  } @else {\n    @error \"Breakpoint '#{$breakpoint}' not found in the global breakpoints map.\";\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={quote:"styles_quote__uXaDb",quote__button:"styles_quote__button__bAU6k",quote__container:"styles_quote__container__s7dqR",quote__text:"styles_quote__text__Kw8_5"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);