"use strict";(self.webpackChunkchilling_chronicles_of_hydes_creepers=self.webpackChunkchilling_chronicles_of_hydes_creepers||[]).push([[1848],{"./src/components/organisms/Contact/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_stories});var defineProperty=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Sprites=__webpack_require__("./src/components/ions/Sprites/index.tsx"),Button=__webpack_require__("./src/components/atoms/Button/index.tsx"),Headings=__webpack_require__("./src/components/atoms/Headings/index.tsx"),Text=__webpack_require__("./src/components/atoms/Text/index.tsx"),next_image=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@7.4.0_@swc+core@1.3.72_@types+react-dom@18.2.7_@types+react@18.2.17_esbuild_z43njpwd422je5by42how7yyni/node_modules/@storybook/nextjs/dist/images/next-image.mjs");const esm_useEffectOnce=function(effect){(0,react.useEffect)(effect,[])};const esm_useUnmount=function(fn){var fnRef=(0,react.useRef)(fn);fnRef.current=fn,esm_useEffectOnce((function(){return function(){return fnRef.current()}}))};const esm_useRafState=function(initialState){var frame=(0,react.useRef)(0),_a=(0,react.useState)(initialState),state=_a[0],setState=_a[1],setRafState=(0,react.useCallback)((function(value){cancelAnimationFrame(frame.current),frame.current=requestAnimationFrame((function(){setState(value)}))}),[]);return esm_useUnmount((function(){cancelAnimationFrame(frame.current)})),[state,setRafState]};var isBrowser="undefined"!=typeof window;const esm_useWindowSize=function(initialWidth,initialHeight){void 0===initialWidth&&(initialWidth=1/0),void 0===initialHeight&&(initialHeight=1/0);var _a=esm_useRafState({width:isBrowser?window.innerWidth:initialWidth,height:isBrowser?window.innerHeight:initialHeight}),state=_a[0],setState=_a[1];return(0,react.useEffect)((function(){if(isBrowser){var handler_1=function(){setState({width:window.innerWidth,height:window.innerHeight})};return function on(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.addEventListener&&obj.addEventListener.apply(obj,args)}(window,"resize",handler_1),function(){!function off(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.removeEventListener&&obj.removeEventListener.apply(obj,args)}(window,"resize",handler_1)}}}),[]),state};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.27_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/organisms/Contact/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const Contact_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;var _Default$parameters,_Default$parameters2,__jsx=react.createElement,Contact=function Contact(_ref){var image=_ref.image,windowWidth=esm_useWindowSize().width,_useState=(0,react.useState)(""),headingsColor=_useState[0],setHeadingsColor=_useState[1],_useState2=(0,react.useState)(""),buttonLevel=_useState2[0],setButtonLevel=_useState2[1],_useState3=(0,react.useState)({}),backgroundStyle=_useState3[0],setBackgroundStyle=_useState3[1];return(0,react.useEffect)((function(){windowWidth<744?(setHeadingsColor("white"),setButtonLevel("tertiary"),setBackgroundStyle({backgroundImage:"url(".concat(image,")")})):(setHeadingsColor("black"),setButtonLevel("secondary"),setBackgroundStyle({}))}),[windowWidth,image]),__jsx("section",{className:Contact_styles_module.contact},__jsx("article",{className:Contact_styles_module.contact__container,style:backgroundStyle},__jsx(Headings.O,{align:"left",children:"Creepy reviews in your inbox",color:headingsColor,level:"4"}),__jsx(Text.x,{align:"left",children:"Unleash your darkest questions or eerie curiosities by communing with our spectral agents",color:headingsColor}),__jsx(Button.z,{href:"/summon-us",isButton:!1,label:"Summon us",level:buttonLevel,target:"_self"})),__jsx(next_image.Z,{src:image,alt:"",width:1920,height:1500,className:Contact_styles_module.contact__image}))};Contact.displayName="Contact",Contact.__docgenInfo={description:"",methods:[],displayName:"Contact",props:{image:{required:!0,tsType:{name:"string"},description:""}}};try{Contact.displayName="Contact",Contact.__docgenInfo={description:"",displayName:"Contact",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Contact/index.tsx#Contact"]={docgenInfo:Contact.__docgenInfo,name:"Contact",path:"src/components/organisms/Contact/index.tsx#Contact"})}catch(__react_docgen_typescript_loader_error){}var index_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const index_stories={component:Contact,title:"Organisms/Contact",tags:["autodocs"],args:{image:"https://amyscrypt.com/wp-content/uploads/2019/06/RockingChairFree.jpg"},argTypes:{image:{table:{disable:!0}}},decorators:[function(Story){return index_stories_jsx("div",null,index_stories_jsx(Sprites.A,null),index_stories_jsx(Story,null))}]};var Default={};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/components/atoms/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Icon=__webpack_require__("./src/components/atoms/Icon/index.tsx"),next_link=__webpack_require__("./node_modules/.pnpm/next@13.4.12_@babel+core@7.22.9_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.27_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/atoms/Button/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const Button_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;var __jsx=react.createElement,Button=function Button(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,href=_ref.href,_ref$isButton=_ref.isButton,isButton=void 0===_ref$isButton||_ref$isButton,_ref$hasIcon=_ref.hasIcon,hasIcon=void 0!==_ref$hasIcon&&_ref$hasIcon,icon=_ref.icon,label=_ref.label,level=_ref.level,onClick=_ref.onClick,target=_ref.target,classList=[Button_styles_module.button,Button_styles_module["button--".concat(level)],hasIcon?Button_styles_module.button__icon:"",className].join(" ");return __jsx(react.Fragment,null,isButton?__jsx("button",{onClick,className:classList},hasIcon&&__jsx(Icon.J,{icon}),label):__jsx(link_default(),{href:href||"",target,className:classList},hasIcon&&__jsx(Icon.J,{icon}),label))};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{defaultValue:{value:"''",computed:!1},required:!1,tsType:{name:"string"},description:""},isButton:{defaultValue:{value:"true",computed:!1},required:!1,tsType:{name:"boolean"},description:""},hasIcon:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},href:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},level:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},target:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:""}}};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},isButton:{defaultValue:{value:"true"},description:"",name:"isButton",required:!1,type:{name:"boolean"}},hasIcon:{defaultValue:{value:"false"},description:"",name:"hasIcon",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},level:{defaultValue:null,description:"",name:"level",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/atoms/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Icon});var __jsx=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js").createElement,Icon=function Icon(_ref){var icon=_ref.icon,className=_ref.className,fill=_ref.fill;return __jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill,className},__jsx("use",{href:"#".concat(icon),xlinkHref:"#".concat(icon)}))};Icon.displayName="Icon",Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{icon:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},fill:{required:!1,tsType:{name:"string"},description:""}}};try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/atoms/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.27_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/atoms/Button/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.styles_button__td6Xf{border-radius:.8rem;font-size:2rem;font-weight:600;font-family:"Open Sans",sans-serif;line-height:normal;transition:all .3s ease;text-transform:capitalize;width:-webkit-fill-available;height:6rem;cursor:pointer}.styles_button__td6Xf:hover,.styles_button__td6Xf:focus{background-color:#1d060d;color:#fdffff;border:none}.styles_button__td6Xf:active{background-color:#1d060d;color:#fdffff;border:2px solid #fdffff}.styles_button__icon__r_VFN,.styles_button--tertiary__74Hj3,.styles_button--secondary__WWRYz,.styles_button--primary__wYW8s{display:grid;align-items:center;justify-content:center;grid-template-columns:repeat(2, auto);gap:1rem;fill:#765ba8;width:-webkit-fill-available;transition:all .3s ease,border .3s ease}.styles_button__icon__r_VFN:hover,.styles_button--tertiary__74Hj3:hover,.styles_button--secondary__WWRYz:hover,.styles_button--primary__wYW8s:hover,.styles_button__icon__r_VFN:focus,.styles_button--tertiary__74Hj3:focus,.styles_button--secondary__WWRYz:focus,.styles_button--primary__wYW8s:focus{fill:#fdffff}.styles_button--primary__wYW8s{border:2px solid #765ba8;background-color:rgba(0,0,0,0);color:#765ba8}.styles_button--secondary__WWRYz{border:2px solid #000706;background-color:rgba(0,0,0,0);color:#000706;fill:#000706}.styles_button--tertiary__74Hj3{border:2px solid #fdffff;background-color:rgba(0,0,0,0);color:#fdffff;fill:#fdffff}',"",{version:3,sources:["webpack://./src/components/atoms/Button/styles.module.scss","webpack://./src/styles/_variables.scss"],names:[],mappings:"AACA,sBACE,mBAAA,CACA,cAAA,CACA,eAAA,CACA,kCAAA,CACA,kBAAA,CACA,uBAAA,CACA,yBAAA,CACA,4BAAA,CACA,WAAA,CACA,cAAA,CAEA,wDAEE,wBCRO,CDSP,aCfI,CDgBJ,WAAA,CAGF,6BACE,wBCdO,CDeP,aCrBI,CDsBJ,wBAAA,CAGF,4HACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,qCAAA,CACA,QAAA,CAEA,YCxBK,CDyBL,4BAAA,CACA,uCAAA,CAEA,wSAEE,YCtCE,CD0CN,+BACE,wBAAA,CACA,8BAAA,CACA,aCrCK,CDyCP,iCACE,wBAAA,CACA,8BAAA,CACA,aCrDI,CDuDJ,YCvDI,CD0DN,gCACE,wBAAA,CACA,8BAAA,CACA,aC5DI,CD8DJ,YC9DI",sourcesContent:["@import \"./src/styles/index.scss\";\n.button {\n  border-radius: 0.8rem;\n  font-size: 2rem;\n  font-weight: 600;\n  font-family: 'Open Sans', sans-serif;\n  line-height: normal;\n  transition: all 0.3s ease;\n  text-transform: capitalize;\n  width: -webkit-fill-available;\n  height: 6rem;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: $burgundy;\n    color: $white;\n    border: none;\n  }\n\n  &:active {\n    background-color: $burgundy;\n    color: $white;\n    border: 2px solid $white;\n  }\n\n  &__icon {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    grid-template-columns: repeat(2, auto);\n    gap: 1rem;\n    \n    fill: $purple;\n    width: -webkit-fill-available;\n    transition: all 0.3s ease,\n      border 0.3s ease;\n    &:hover,\n    &:focus {\n      fill: $white;\n    }\n  }\n\n  &--primary {\n    border: 2px solid $purple;\n    background-color: transparent;\n    color: $purple;\n    @extend .button__icon;\n  }\n\n  &--secondary {\n    border: 2px solid $black;\n    background-color: transparent;\n    color: $black;\n    @extend .button__icon;\n    fill: $black;\n  }\n\n  &--tertiary {\n    border: 2px solid $white;\n    background-color: transparent;\n    color: $white;\n    @extend .button__icon;\n    fill: $white;\n  }\n}\n","$black: #000706;\n$white: #fdffff;\n\n$dark-gray: #1e1e1e;\n$gray: #373435;\n$light-gray: #f5f7fa;\n\n$burgundy: #1d060d;\n\n$purple: #765ba8;\n$light-purple: #d0d0ff;\n\n$linear-purple: linear-gradient(\n  180deg,\n  rgba(196, 194, 255, 0.81) 0%,\n  rgba(196, 194, 255, 0) 100%\n);\n$linear-purple-02: linear-gradient(180deg, #c4c2ff 0%, #e5e5e5 100%);\n$linear: linear-gradient(\n  154deg,\n  rgba(46, 9, 22, 0.97) 0%,\n  rgba(32, 10, 43, 0.69) 100%\n);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"styles_button__td6Xf",button__icon:"styles_button__icon__r_VFN","button--tertiary":"styles_button--tertiary__74Hj3","button--secondary":"styles_button--secondary__WWRYz","button--primary":"styles_button--primary__wYW8s"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.27_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/organisms/Contact/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media(min-width: 744px){.styles_contact__JMkx_{display:grid;grid-template-columns:repeat(2, 1fr);justify-items:center;align-items:center;padding:2.3rem;max-width:144rem;margin:0 auto;background-image:none}}@media(min-width: 1200px){.styles_contact__JMkx_{padding:7rem}}.styles_contact__container__Eu34K{display:flex;flex-direction:column;gap:4rem;padding:17rem 1.7rem 14rem;min-height:55rem;background:center/cover no-repeat}@media(min-width: 744px){.styles_contact__container__Eu34K{background-image:none}}.styles_contact__image___U3rt{display:none}@media(min-width: 744px){.styles_contact__image___U3rt{display:flex;width:100%;height:45rem;object-fit:cover;border-radius:.8rem}}@media(min-width: 1200px){.styles_contact__image___U3rt{max-width:65rem;height:65rem}}","",{version:3,sources:["webpack://./src/styles/_breakpoints.scss","webpack://./src/components/organisms/Contact/styles.module.scss"],names:[],mappings:"AAYI,yBCXJ,uBAEI,YAAA,CACA,oCAAA,CACA,oBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,aAAA,CACA,qBAAA,CAAA,CDEA,0BCXJ,uBAaI,YAAA,CAAA,CAGF,kCACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,0BAAA,CACA,gBAAA,CACA,iCAAA,CDXA,yBCKF,kCASI,qBAAA,CAAA,CAIJ,8BACE,YAAA,CDnBA,yBCkBF,8BAGI,YAAA,CACA,UAAA,CACA,YAAA,CACA,gBAAA,CACA,mBAAA,CAAA,CDzBF,0BCkBF,8BAWI,eAAA,CACA,YAAA,CAAA",sourcesContent:["$breakpoints: (\n  'mobile': 375px,\n  'tablet': 744px,\n  'desktop': 1200px,\n  'desktop-lg': 1440px,\n  'desktop-4k': 2560px,\n);\n\n@mixin screen-size($breakpoint) {\n  $breakpoint-value: map-get($breakpoints, $breakpoint);\n\n  @if $breakpoint-value {\n    @media (min-width: $breakpoint-value) {\n      @content;\n    }\n  } @else {\n    @error \"Breakpoint '#{$breakpoint}' not found in the global breakpoints map.\";\n  }\n}\n","@import \"./src/styles/index.scss\";\n.contact {\n  @include screen-size('tablet') {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n    align-items: center;\n    padding: 2.3rem;\n    max-width: 144rem;\n    margin: 0 auto;\n    background-image: none;\n  }\n\n  @include screen-size('desktop') {\n    padding: 7rem;\n  }\n\n  &__container {\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n    padding: 17rem 1.7rem 14rem;\n    min-height: 55rem;\n    background: center/cover no-repeat;\n\n    @include screen-size('tablet') {\n      background-image: none;\n    }\n  }\n\n  &__image {\n    display: none;\n    @include screen-size('tablet') {\n      display: flex;\n      width: 100%;\n      height: 45rem;\n      object-fit: cover;\n      border-radius: 0.8rem;\n    }\n\n    @include screen-size('desktop') {\n      max-width: 65rem;\n      height: 65rem;\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={contact:"styles_contact__JMkx_",contact__container:"styles_contact__container__Eu34K",contact__image:"styles_contact__image___U3rt"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);