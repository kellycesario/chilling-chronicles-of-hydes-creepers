"use strict";(self.webpackChunkchilling_chronicles_of_hydes_creepers=self.webpackChunkchilling_chronicles_of_hydes_creepers||[]).push([[4836],{"./src/components/atoms/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>Icon});var __jsx=__webpack_require__("./node_modules/.pnpm/next@13.4.12_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/dist/compiled/react/index.js").createElement,Icon=function Icon(_ref){var icon=_ref.icon,className=_ref.className,fill=_ref.fill;return __jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill,className},__jsx("use",{href:"#".concat(icon),xlinkHref:"#".concat(icon)}))};Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/atoms/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/LinkItem/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>LinkItem});var react=__webpack_require__("./node_modules/.pnpm/next@13.4.12_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/components/atoms/Icon/index.tsx"),next_link=__webpack_require__("./node_modules/.pnpm/next@13.4.12_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),navigation=__webpack_require__("./node_modules/.pnpm/next@13.4.12_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/navigation.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.34_typescript@5.1.6_webpack@5.90.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.90.1/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/components/atoms/LinkItem/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.c,options);const LinkItem_styles_module=styles_module.c&&styles_module.c.locals?styles_module.c.locals:void 0;var __jsx=react.createElement,LinkItem=function LinkItem(_ref){var children=_ref.children,href=_ref.href,hasIcon=_ref.hasIcon,icon=_ref.icon,flexDirection=_ref.flexDirection,role=_ref.role,pathname=(0,navigation.usePathname)(),classList=[LinkItem_styles_module.link,"center"===flexDirection&&LinkItem_styles_module["link--center"],"end"===flexDirection&&LinkItem_styles_module["link--end"]].filter(Boolean).join(" ");return __jsx("li",{className:classList,role},hasIcon?__jsx("a",{href,"aria-label":icon?"Share this on ".concat(icon):void 0,className:LinkItem_styles_module.link__icon},__jsx(Icon.G,{icon,fill:"#000706"}),children):__jsx(link_default(),{href,className:pathname===href?"".concat(LinkItem_styles_module["link--active"]):""},children))};LinkItem.displayName="LinkItem";try{LinkItem.displayName="LinkItem",LinkItem.__docgenInfo={description:"",displayName:"LinkItem",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},hasIcon:{defaultValue:null,description:"",name:"hasIcon",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/LinkItem/index.tsx#LinkItem"]={docgenInfo:LinkItem.__docgenInfo,name:"LinkItem",path:"src/components/atoms/LinkItem/index.tsx#LinkItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ions/Logo/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>Logo});var react=__webpack_require__("./node_modules/.pnpm/next@13.4.12_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/dist/compiled/react/index.js"),next_link=__webpack_require__("./node_modules/.pnpm/next@13.4.12_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),navigation=__webpack_require__("./node_modules/.pnpm/next@13.4.12_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/navigation.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.34_typescript@5.1.6_webpack@5.90.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.90.1/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/components/ions/Logo/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.c,options);const Logo_styles_module=styles_module.c&&styles_module.c.locals?styles_module.c.locals:void 0;var __jsx=react.createElement,Logo=function Logo(){var pathname=(0,navigation.usePathname)();return __jsx(link_default(),{href:"/","aria-label":"homepage"},__jsx("svg",{width:"128",height:"27",viewBox:"0 0 128 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"".concat(Logo_styles_module.logo," ").concat("/"===pathname?Logo_styles_module["logo--active"]:""),"aria-hidden":"true"},__jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.80071 0.623353C12.999 -0.207784 16.3567 -0.207784 19.555 0.623353L20.0872 0.761675C25.6997 2.22017 29.4547 7.49784 28.9928 13.2783L28.8965 14.4828C28.5973 18.2273 26.2206 21.4866 22.7468 22.9162C22.3387 23.0841 21.9958 23.3795 21.7692 23.7582L20.9647 25.103C20.6194 25.6801 20.0718 26.1081 19.4285 26.3038L19.3915 26.315C19.2693 26.3522 19.1417 26.3684 19.014 26.3628C18.4062 26.3364 17.8905 25.908 17.7532 25.3153L17.726 25.1981C17.6067 24.6831 16.8761 24.6754 16.746 25.1878L16.7244 25.2727C16.5644 25.903 16.0338 26.3703 15.3883 26.4495L14.9537 26.5028C14.8043 26.5212 14.6532 26.5212 14.5037 26.5028L14.02 26.4435C13.4042 26.3679 12.8979 25.922 12.7452 25.3207L12.7148 25.2011C12.5907 24.7123 11.8901 24.7305 11.7916 25.2251L11.7759 25.3035C11.6572 25.8992 11.1469 26.3367 10.5401 26.3631C10.4158 26.3685 10.2916 26.3527 10.1726 26.3165L10.1235 26.3016C9.48319 26.1068 8.93391 25.6889 8.5754 25.1237L7.71572 23.7684C7.47149 23.3833 7.10793 23.0888 6.68058 22.9299C2.85868 21.5084 0.254222 17.9429 0.0624803 13.8698L0.0131487 12.8218C-0.248521 7.26319 3.42015 2.28146 8.80606 0.881831L9.80071 0.623353ZM7.34714 14.5074C9.50155 14.5074 11.2481 12.7609 11.2481 10.6064C11.2481 8.45203 9.50155 6.70553 7.34714 6.70553C5.19272 6.70553 3.44622 8.45203 3.44622 10.6064C3.44622 12.7609 5.19272 14.5074 7.34714 14.5074ZM22.0086 14.5074C24.163 14.5074 25.9095 12.7609 25.9095 10.6064C25.9095 8.45203 24.163 6.70553 22.0086 6.70553C19.8541 6.70553 18.1076 8.45203 18.1076 10.6064C18.1076 12.7609 19.8541 14.5074 22.0086 14.5074Z"}),__jsx("path",{d:"M47.2891 10.4297C46.8255 10.4297 46.4141 10.5208 46.0547 10.7031C45.7005 10.8802 45.401 11.138 45.1562 11.4766C44.9167 11.8151 44.7344 12.224 44.6094 12.7031C44.4844 13.1823 44.4219 13.7214 44.4219 14.3203C44.4219 15.1276 44.5208 15.8177 44.7188 16.3906C44.9219 16.9583 45.2344 17.3932 45.6562 17.6953C46.0781 17.9922 46.6224 18.1406 47.2891 18.1406C47.7526 18.1406 48.2161 18.0885 48.6797 17.9844C49.1484 17.8802 49.6562 17.7318 50.2031 17.5391V19.5703C49.6979 19.7786 49.2005 19.9271 48.7109 20.0156C48.2214 20.1094 47.6719 20.1562 47.0625 20.1562C45.8854 20.1562 44.9167 19.9141 44.1562 19.4297C43.401 18.9401 42.8411 18.2578 42.4766 17.3828C42.112 16.5026 41.9297 15.4766 41.9297 14.3047C41.9297 13.4401 42.0469 12.6484 42.2812 11.9297C42.5156 11.2109 42.8594 10.5885 43.3125 10.0625C43.7656 9.53646 44.3255 9.13021 44.9922 8.84375C45.6589 8.55729 46.4245 8.41406 47.2891 8.41406C47.8568 8.41406 48.4245 8.48698 48.9922 8.63281C49.5651 8.77344 50.112 8.96875 50.6328 9.21875L49.8516 11.1875C49.4245 10.9844 48.9948 10.8073 48.5625 10.6562C48.1302 10.5052 47.7057 10.4297 47.2891 10.4297ZM57.2487 8.57812C58.2852 8.57812 59.1394 8.70312 59.8112 8.95312C60.4883 9.20312 60.9909 9.58073 61.3191 10.0859C61.6472 10.5911 61.8112 11.2292 61.8112 12C61.8112 12.5208 61.7123 12.9766 61.5144 13.3672C61.3165 13.7578 61.056 14.0885 60.7331 14.3594C60.4102 14.6302 60.0612 14.8516 59.6862 15.0234L63.0456 20H60.3581L57.6316 15.6172H56.3425V20H53.9206V8.57812H57.2487ZM57.0769 10.5625H56.3425V13.6484H57.1237C57.9258 13.6484 58.4987 13.5156 58.8425 13.25C59.1915 12.9792 59.3659 12.5833 59.3659 12.0625C59.3659 11.5208 59.1784 11.1354 58.8034 10.9062C58.4336 10.6771 57.8581 10.5625 57.0769 10.5625ZM72.3412 20H65.7631V8.57812H72.3412V10.5625H68.185V13.0703H72.0522V15.0547H68.185V18H72.3412V20ZM82.59 20H76.0119V8.57812H82.59V10.5625H78.4338V13.0703H82.3009V15.0547H78.4338V18H82.59V20ZM89.9091 8.57812C91.383 8.57812 92.4585 8.89583 93.1356 9.53125C93.8127 10.1615 94.1512 11.0312 94.1512 12.1406C94.1512 12.6406 94.0757 13.1198 93.9247 13.5781C93.7736 14.0312 93.5262 14.4349 93.1825 14.7891C92.844 15.1432 92.3908 15.4245 91.8231 15.6328C91.2554 15.8359 90.5549 15.9375 89.7216 15.9375H88.6825V20H86.2606V8.57812H89.9091ZM89.7841 10.5625H88.6825V13.9531H89.4794C89.9325 13.9531 90.3257 13.8932 90.6591 13.7734C90.9924 13.6536 91.2502 13.4661 91.4325 13.2109C91.6148 12.9557 91.7059 12.6276 91.7059 12.2266C91.7059 11.6641 91.5497 11.2474 91.2372 10.9766C90.9247 10.7005 90.4403 10.5625 89.7841 10.5625ZM104.166 20H97.5875V8.57812H104.166V10.5625H100.009V13.0703H103.877V15.0547H100.009V18H104.166V20ZM111.164 8.57812C112.201 8.57812 113.055 8.70312 113.727 8.95312C114.404 9.20312 114.907 9.58073 115.235 10.0859C115.563 10.5911 115.727 11.2292 115.727 12C115.727 12.5208 115.628 12.9766 115.43 13.3672C115.232 13.7578 114.972 14.0885 114.649 14.3594C114.326 14.6302 113.977 14.8516 113.602 15.0234L116.961 20H114.274L111.547 15.6172H110.258V20H107.836V8.57812H111.164ZM110.993 10.5625H110.258V13.6484H111.039C111.841 13.6484 112.414 13.5156 112.758 13.25C113.107 12.9792 113.282 12.5833 113.282 12.0625C113.282 11.5208 113.094 11.1354 112.719 10.9062C112.349 10.6771 111.774 10.5625 110.993 10.5625ZM126.421 16.8281C126.421 17.5052 126.257 18.0938 125.929 18.5938C125.601 19.0938 125.121 19.4792 124.491 19.75C123.866 20.0208 123.106 20.1562 122.21 20.1562C121.814 20.1562 121.426 20.1302 121.046 20.0781C120.671 20.026 120.309 19.9505 119.96 19.8516C119.616 19.7474 119.288 19.6198 118.976 19.4688V17.2188C119.517 17.4583 120.08 17.6745 120.663 17.8672C121.246 18.0599 121.825 18.1562 122.397 18.1562C122.793 18.1562 123.111 18.1042 123.351 18C123.595 17.8958 123.772 17.7526 123.882 17.5703C123.991 17.388 124.046 17.1797 124.046 16.9453C124.046 16.6589 123.95 16.4141 123.757 16.2109C123.564 16.0078 123.299 15.8177 122.96 15.6406C122.627 15.4635 122.249 15.2734 121.827 15.0703C121.562 14.9453 121.272 14.7943 120.96 14.6172C120.647 14.4349 120.351 14.2135 120.069 13.9531C119.788 13.6927 119.556 13.3776 119.374 13.0078C119.197 12.6328 119.108 12.1849 119.108 11.6641C119.108 10.9818 119.265 10.3984 119.577 9.91406C119.89 9.42969 120.335 9.0599 120.913 8.80469C121.496 8.54427 122.184 8.41406 122.976 8.41406C123.569 8.41406 124.134 8.48438 124.671 8.625C125.213 8.76042 125.778 8.95833 126.366 9.21875L125.585 11.1016C125.059 10.888 124.588 10.724 124.171 10.6094C123.754 10.4896 123.33 10.4297 122.897 10.4297C122.595 10.4297 122.338 10.4792 122.124 10.5781C121.911 10.6719 121.749 10.8073 121.64 10.9844C121.53 11.1562 121.476 11.3568 121.476 11.5859C121.476 11.8568 121.554 12.0859 121.71 12.2734C121.871 12.4557 122.111 12.6328 122.429 12.8047C122.752 12.9766 123.153 13.1771 123.632 13.4062C124.215 13.6823 124.713 13.9714 125.124 14.2734C125.541 14.5703 125.861 14.9219 126.085 15.3281C126.309 15.7292 126.421 16.2292 126.421 16.8281Z"})))};Logo.displayName="Logo"},"./src/components/molecules/Header/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Header});var react=__webpack_require__("./node_modules/.pnpm/next@13.4.12_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0_sass@1.64.1/node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/components/atoms/Icon/index.tsx"),LinkItem=__webpack_require__("./src/components/atoms/LinkItem/index.tsx"),Logo=__webpack_require__("./src/components/ions/Logo/index.tsx"),navigation=__webpack_require__("./src/data/navigation.json"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.1/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.34_typescript@5.1.6_webpack@5.90.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.90.1/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/components/molecules/Header/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.c,options);const Header_styles_module=styles_module.c&&styles_module.c.locals?styles_module.c.locals:void 0;var __jsx=react.createElement,Header=function Header(_ref){var spacing=_ref.spacing,classList=[Header_styles_module.header,"withPadding"===spacing&&Header_styles_module["header--withPadding"],"noPadding"===spacing&&Header_styles_module["header--noPadding"]].filter(Boolean).join(""),_useState=(0,react.useState)(!1),isMenuOpen=_useState[0],setIsMenuOpen=_useState[1];return(0,react.useEffect)((function(){var handleResize=function handleResize(){window.innerWidth>=1200&&isMenuOpen&&setIsMenuOpen(!1)};return window.addEventListener("resize",handleResize),function(){window.removeEventListener("resize",handleResize)}}),[isMenuOpen]),__jsx("header",{className:classList},!isMenuOpen&&__jsx(Logo.M,null),__jsx("nav",{className:Header_styles_module.header__navigation},__jsx("ul",{className:" ".concat(isMenuOpen?Header_styles_module.header__open:Header_styles_module.header__closed),role:"menu",tabIndex:isMenuOpen?0:-1},navigation.map((function(item,index){return __jsx(LinkItem.K,{key:index,children:item.children,href:item.href,flexDirection:"end",role:"menuitem"})}))),__jsx("button",{className:Header_styles_module.header__toggle,"aria-label":"Toggle Menu","aria-expanded":isMenuOpen,onClick:function toggleMenu(){setIsMenuOpen(!isMenuOpen)}},__jsx(Icon.G,{icon:isMenuOpen?"close":"menu"}))))};Header.displayName="Header";try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/Header/index.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/components/molecules/Header/index.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.34_typescript@5.1.6_webpack@5.90.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.90.1/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/components/atoms/LinkItem/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".styles_link___yuor{display:flex;font-weight:300;font-size:1.6rem;line-height:160%;cursor:pointer;color:#000706}@media(min-width: 744px){.styles_link___yuor{font-size:2rem;line-height:170%}}@media(min-width: 1200px){.styles_link___yuor{font-size:2.4rem;line-height:180%}}.styles_link--center__BXquq{justify-content:center}.styles_link--end__ijqAi{justify-content:flex-end}@media(min-width: 1200px){.styles_link___yuor{width:20rem}}.styles_link__icon__N4ilu{width:fit-content}@media(min-width: 1200px){.styles_link__icon__N4ilu{width:fit-content}}.styles_link--active__paAls{font-weight:600;color:#765ba8}.styles_link___yuor:hover{font-weight:600;color:#765ba8}.styles_link___yuor:hover svg{fill:#765ba8}.styles_link___yuor::selection{background-color:#765ba8;color:#fdffff}","",{version:3,sources:["webpack://./src/components/atoms/LinkItem/styles.module.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/_breakpoints.scss"],names:[],mappings:"AACA,oBACE,YAAA,CCDA,eAAA,CACA,gBAAA,CACA,gBAAA,CDCA,cAAA,CACA,aELM,CCYJ,yBHXJ,oBCKI,cAAA,CACA,gBAAA,CAAA,CEKA,0BHXJ,oBCUI,gBAAA,CACA,gBAAA,CAAA,CDLF,4BACE,sBAAA,CAGF,yBACE,wBAAA,CAAA,0BAXJ,oBAeI,WAAA,CAAA,CAGF,0BACE,iBAAA,CGRA,0BHOF,0BAII,iBAAA,CAAA,CAKJ,4BACE,eAAA,CACA,aErBK,CFwBP,0BACE,eAAA,CACA,aE1BK,CF4BL,8BACE,YE7BG,CFiCP,+BACE,wBElCK,CFmCL,aE3CI",sourcesContent:["@import \"./src/styles/index.scss\";\n.link {\n  display: flex;\n  @include text;\n  cursor: pointer;\n  color: $black;\n  \n  &--center {\n    justify-content: center;\n  }\n\n  &--end {\n    justify-content: flex-end;\n  }\n\n  @include screen-size('desktop') {\n    width: 20rem;\n  }\n\n  &__icon {\n    width: fit-content;\n\n    @include screen-size('desktop') {\n      width: fit-content;\n    }\n  }\n\n  \n  &--active {\n    font-weight: 600;\n    color: $purple;\n  }\n  \n  &:hover {\n    font-weight: 600;\n    color: $purple;\n\n    & svg {\n      fill: $purple;\n    }\n  }\n\n  &::selection {\n    background-color: $purple;\n    color: $white;\n  }\n}\n","@mixin text() {\n  font-weight: 300;\n  font-size: 1.6rem;\n  line-height: 160%;\n\n  @include screen-size('tablet') {\n    font-size: 2rem;\n    line-height: 170%;\n  }\n\n  @include screen-size('desktop') {\n    font-size: 2.4rem;\n    line-height: 180%;\n  }\n}\n\n@mixin colors() {\n  &--black {\n    color: $black;\n  }\n\n  &--white {\n    color: $white;\n  }\n\n  &--gray {\n    color: $gray;\n  }\n\n  &--light-gray {\n    color: $light-gray;\n  }\n\n  &--burgundy {\n    color: $burgundy;\n  }\n\n  &--purple {\n    color: $purple;\n  }\n\n  &--light-purple {\n    color: $light-purple;\n  }\n}\n\n@mixin align() {\n  &--left {\n    text-align: left;\n  }\n\n  &--right {\n    text-align: right;\n  }\n\n  &--center {\n    text-align: center;\n  }\n}\n\n@mixin weight() {\n  &--600 {\n    font-weight: 600;\n  }\n\n  &--600-hover {\n    font-weight: 600;\n    &:hover {\n      color: $purple;\n    }\n  }\n}\n\n@mixin size() {\n  &--small {\n    font-weight: 300;\n    font-size: 1rem;\n    line-height: 160%;\n\n    @include screen-size('tablet') {\n      font-size: 1.1rem;\n    }\n\n    @include screen-size('desktop') {\n      font-size: 1.2rem;\n    }\n  }\n}\n\n@mixin layout() {\n  background: linear-gradient(180deg, #c4c2ff 0%, #e5e5e5 100%);\n}\n\n@mixin container-cards() {\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n  transition: all 0.8s ease-in-out;\n\n  @include screen-size('tablet') {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1.8rem;\n  }\n}\n","$black: #000706;\n$white: #fdffff;\n\n$dark-gray: #1e1e1e;\n$gray: #373435;\n$light-gray: #f5f7fa;\n\n$burgundy: #1d060d;\n\n$purple: #765ba8;\n$light-purple: #d0d0ff;\n\n$linear-purple: linear-gradient(\n  180deg,\n  rgba(196, 194, 255, 0.81) 0%,\n  rgba(196, 194, 255, 0) 100%\n);\n$linear-purple-02: linear-gradient(180deg, #c4c2ff 0%, #e5e5e5 100%);\n$linear: linear-gradient(\n  154deg,\n  rgba(46, 9, 22, 0.97) 0%,\n  rgba(32, 10, 43, 0.69) 100%\n);\n","$breakpoints: (\n  'mobile': 375px,\n  'tablet': 744px,\n  'desktop': 1200px,\n  'desktop-lg': 1440px,\n  'desktop-4k': 2560px,\n);\n\n@mixin screen-size($breakpoint) {\n  $breakpoint-value: map-get($breakpoints, $breakpoint);\n\n  @if $breakpoint-value {\n    @media (min-width: $breakpoint-value) {\n      @content;\n    }\n  } @else {\n    @error \"Breakpoint '#{$breakpoint}' not found in the global breakpoints map.\";\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"styles_link___yuor","link--center":"styles_link--center__BXquq","link--end":"styles_link--end__ijqAi",link__icon:"styles_link__icon__N4ilu","link--active":"styles_link--active__paAls"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.34_typescript@5.1.6_webpack@5.90.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.90.1/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/components/ions/Logo/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".styles_logo__j51a5{fill:#000706}.styles_logo__j51a5:hover,.styles_logo__j51a5:focus{fill:#765ba8}.styles_logo--active__7_pry{fill:#765ba8}","",{version:3,sources:["webpack://./src/components/ions/Logo/styles.module.scss","webpack://./src/styles/_variables.scss"],names:[],mappings:"AACA,oBACE,YCFM,CDIN,oDAEE,YCGK,CAAA,4BDCL,YCDK",sourcesContent:['@import "./src/styles/index.scss";\n.logo {\n  fill: $black;\n\n  &:hover,\n  &:focus {\n    fill: $purple;\n  }\n\n  &--active {\n    fill: $purple;\n  }\n}\n',"$black: #000706;\n$white: #fdffff;\n\n$dark-gray: #1e1e1e;\n$gray: #373435;\n$light-gray: #f5f7fa;\n\n$burgundy: #1d060d;\n\n$purple: #765ba8;\n$light-purple: #d0d0ff;\n\n$linear-purple: linear-gradient(\n  180deg,\n  rgba(196, 194, 255, 0.81) 0%,\n  rgba(196, 194, 255, 0) 100%\n);\n$linear-purple-02: linear-gradient(180deg, #c4c2ff 0%, #e5e5e5 100%);\n$linear: linear-gradient(\n  154deg,\n  rgba(46, 9, 22, 0.97) 0%,\n  rgba(32, 10, 43, 0.69) 100%\n);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={logo:"styles_logo__j51a5","logo--active":"styles_logo--active__7_pry"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.34_typescript@5.1.6_webpack@5.90.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.64.1_webpack@5.90.1/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/components/molecules/Header/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".styles_header--withPadding__1n2jL{padding:4rem 2.3rem;display:flex;justify-content:space-between;align-items:center}@media(min-width: 1200px){.styles_header--withPadding__1n2jL{max-width:144rem;margin:0 auto;padding-inline:7rem}}.styles_header--noPadding__5w5HD{display:flex;justify-content:space-between;align-items:center}@media(min-width: 1200px){.styles_header--noPadding__5w5HD{padding-inline:0;margin:0;max-width:fit-content;gap:15rem}}@media(min-width: 1440px){.styles_header--noPadding__5w5HD{gap:0}}.styles_header__navigation__Ne6Ci{display:contents}.styles_header__open__0ZlOz{display:flex;gap:1rem}@media(min-width: 744px){.styles_header__open__0ZlOz{gap:6rem}}@media(min-width: 1200px){.styles_header__open__0ZlOz{display:none}}.styles_header__open__toggle__sATMc{display:none}@media(min-width: 1200px){.styles_header__open__toggle__sATMc{display:block}}.styles_header__closed__yOFyJ{display:none}@media(min-width: 1200px){.styles_header__closed__yOFyJ{display:flex;justify-content:center;gap:4rem}}@media(min-width: 1440px){.styles_header__closed__yOFyJ{gap:9rem}}.styles_header__toggle__Ws0iT{display:block;fill:#000706}.styles_header__toggle__Ws0iT:hover{fill:#1d060d}@media(min-width: 1200px){.styles_header__toggle__Ws0iT{display:none}}","",{version:3,sources:["webpack://./src/components/molecules/Header/styles.module.scss","webpack://./src/styles/_breakpoints.scss","webpack://./src/styles/_variables.scss"],names:[],mappings:"AAEE,mCACE,mBAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CCMA,0BDVF,mCAOI,gBAAA,CACA,aAAA,CACA,mBAAA,CAAA,CAIJ,iCACE,YAAA,CACA,6BAAA,CACA,kBAAA,CCNA,0BDGF,iCAMI,gBAAA,CACA,QAAA,CACA,qBAAA,CACA,SAAA,CAAA,CCZF,0BDGF,iCAcI,KAAA,CAAA,CAIJ,kCACE,gBAAA,CAGF,4BACE,YAAA,CACA,QAAA,CC3BA,yBDyBF,4BAII,QAAA,CAAA,CC7BF,0BDyBF,4BAOI,YAAA,CAAA,CAGF,oCACE,YAAA,CCpCF,0BDmCA,oCAGI,aAAA,CAAA,CAIN,8BACE,YAAA,CC3CA,0BD0CF,8BAGI,YAAA,CACA,sBAAA,CACA,QAAA,CAAA,CC/CF,0BD0CF,8BASI,QAAA,CAAA,CAIJ,8BACE,aAAA,CACA,YErEI,CFuEJ,oCACE,YEjEK,CDKP,0BDuDF,8BAQI,YAAA,CAAA",sourcesContent:["@import \"./src/styles/index.scss\";\n.header {\n  &--withPadding {\n    padding: 4rem 2.3rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    @include screen-size('desktop') {\n      max-width: 144rem;\n      margin: 0 auto;\n      padding-inline: 7rem;\n    }\n  }\n\n  &--noPadding {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    @include screen-size('desktop') {\n      padding-inline: 0;\n      margin: 0;\n      max-width: fit-content;\n      gap: 15rem;\n    }\n\n    @include screen-size('desktop-lg') {\n\n      gap: 0;\n    }\n  }\n\n  &__navigation {\n    display: contents;\n  }\n\n  &__open {\n    display: flex;\n    gap: 1rem;\n    @include screen-size('tablet') {\n      gap: 6rem;\n    }\n    @include screen-size('desktop') {\n      display: none;\n    }\n\n    &__toggle {\n      display: none;\n      @include screen-size('desktop') {\n        display: block;\n      }\n    }\n  }\n  &__closed {\n    display: none;\n    @include screen-size('desktop') {\n      display: flex;\n      justify-content: center;\n      gap: 4rem;\n    }\n\n    @include screen-size('desktop-lg') {\n      gap: 9rem;\n    }\n  }\n\n  &__toggle {\n    display: block;\n    fill: $black;\n\n    &:hover {\n      fill: $burgundy;\n    }\n    @include screen-size('desktop') {\n      display: none;\n    }\n  }\n}\n","$breakpoints: (\n  'mobile': 375px,\n  'tablet': 744px,\n  'desktop': 1200px,\n  'desktop-lg': 1440px,\n  'desktop-4k': 2560px,\n);\n\n@mixin screen-size($breakpoint) {\n  $breakpoint-value: map-get($breakpoints, $breakpoint);\n\n  @if $breakpoint-value {\n    @media (min-width: $breakpoint-value) {\n      @content;\n    }\n  } @else {\n    @error \"Breakpoint '#{$breakpoint}' not found in the global breakpoints map.\";\n  }\n}\n","$black: #000706;\n$white: #fdffff;\n\n$dark-gray: #1e1e1e;\n$gray: #373435;\n$light-gray: #f5f7fa;\n\n$burgundy: #1d060d;\n\n$purple: #765ba8;\n$light-purple: #d0d0ff;\n\n$linear-purple: linear-gradient(\n  180deg,\n  rgba(196, 194, 255, 0.81) 0%,\n  rgba(196, 194, 255, 0) 100%\n);\n$linear-purple-02: linear-gradient(180deg, #c4c2ff 0%, #e5e5e5 100%);\n$linear: linear-gradient(\n  154deg,\n  rgba(46, 9, 22, 0.97) 0%,\n  rgba(32, 10, 43, 0.69) 100%\n);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"header--withPadding":"styles_header--withPadding__1n2jL","header--noPadding":"styles_header--noPadding__5w5HD",header__navigation:"styles_header__navigation__Ne6Ci",header__open:"styles_header__open__0ZlOz",header__open__toggle:"styles_header__open__toggle__sATMc",header__closed:"styles_header__closed__yOFyJ",header__toggle:"styles_header__toggle__Ws0iT"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/data/navigation.json":module=>{module.exports=JSON.parse('[{"children":"Chilling Blog","href":"/chilling-blog"},{"children":"Summon Us","href":"/summon-us"},{"children":"About Us","href":"/about-us"}]')}}]);