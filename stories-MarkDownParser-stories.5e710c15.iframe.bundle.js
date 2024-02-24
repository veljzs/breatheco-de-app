"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7581],{"./node_modules/@chakra-ui/image/dist/chunk-QBIO4VEB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>NativeImage});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),NativeImage=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function NativeImage2(props,ref){const{htmlWidth,htmlHeight,alt,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{width:htmlWidth,height:htmlHeight,ref,alt,...rest})}));NativeImage.displayName="NativeImage"},"./src/stories/MarkDownParser.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BeforeAfter:()=>BeforeAfter,Checkbox:()=>Checkbox,Default:()=>Default,Onlyfor:()=>Onlyfor,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_BeforeAfter$paramete,_BeforeAfter$paramete2,_Checkbox$parameters,_Checkbox$parameters2,_Onlyfor$parameters,_Onlyfor$parameters2,_home_runner_work_breatheco_de_app_breatheco_de_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_common_components_MarkDownParser__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/components/MarkDownParser/index.jsx"),_utils_variables__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/variables.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_breatheco_de_app_breatheco_de_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var frontMatter={title:"CSS Layouts: Create and Build Layouts with CSS",subtitle:"Building layouts is the most painful process when coding HTML & CSS. Learn the CSS layout rules: Display, Position, Float and Flex; and place any element anywhere you want.",cover_local:"".concat(_utils_variables__WEBPACK_IMPORTED_MODULE_3__.vi,"/_next/image?url=https%3A%2F%2Fgithub.com%2Fbreatheco-de%2Fexercise-starwars-api%2Fblob%2Fmain%2F.learn%2Fassets%2Fpreview.png%3Fraw%3Dtrue&w=1920&q=100"),textColor:"white",date:"2020-10-19T16:36:31+00:00",tags:["box-model","CSS","HTML","layouts"],status:"published"};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/MarkDownParser",component:_common_components_MarkDownParser__WEBPACK_IMPORTED_MODULE_2__.Z,argTypes:{permission:{options:["Get my certificate","Add code reviews","Join mentorship"],control:"select"}}};var Component=function Component(args){var renderCodeName=function renderCodeName(){return"Add code reviews"==args.permission?"add_code_review":null===(_args$permission=args.permission)||void 0===_args$permission?void 0:_args$permission.toLowerCase().split(" ").join("_");var _args$permission};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var _JSON$parse,data=JSON.stringify({permissions:[{name:args.permission,codename:renderCodeName()}],permissionsSlug:[renderCodeName()]}),permissionLocalStorage=null===(_JSON$parse=JSON.parse(localStorage.getItem("profile")))||void 0===_JSON$parse?void 0:_JSON$parse.permissions[0].name;args.permission!=permissionLocalStorage&&localStorage.setItem("profile",data)}),[args.permission]),__jsx(_common_components_MarkDownParser__WEBPACK_IMPORTED_MODULE_2__.Z,args)};Component.displayName="Component";var Default=Component.bind({});Default.args={withToc:!1,frontMatter,content:'\n  ## The box-sizing property\n\n  This important property is connected to box model and it defines how the height and width of the element are calculated: should include the border, padding and margin or not. \n\n  + If the value is **content-box**, width and height will only be applied to the content of the element.\n  + If the value is **border-box**, width and height apply to all parts of the elements: content, padding and borders. \n\n\n  <iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/zvL6aet3/2/embed/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>\n\n  <div align="right"><small><a href="https://jsfiddle.net/BreatheCode/zvL6aet3/">Click here to open demo in a new window</a></small></div>\n\n\n\n\n  # Width and Height\n\n\n  Every box has width and height.  You can set these properties to be relative to their parent content (another box or even the body), but, in some cases, we have to set their value manually.\n\n\n\n  Ok, now… to understand what we just explained, there is no other choice but… Practice!\n\n\n  <iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/kevomsyq/2/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>\n'};var BeforeAfter=Component.bind({});BeforeAfter.args={content:'\n  ## Before and After\n\n  + Make sure you add image url for before and after\n  <before-after before="https://picsum.photos/id/237/700" after="https://picsum.photos/id/238/700"/>  \n'};var Checkbox=Component.bind({});Checkbox.args={content:"\n  ## Checkbox\n  \n  - [ ] example checkbox1  \n  - [ ] example checkbox2  \n  - [ ] example checkbox3  \n"};var Onlyfor=Component.bind({});Onlyfor.args={content:'\n  ## OnlyFor \n<div class="onlyfor">\n<h3>Select permission on dropdown, and then refresh page to see result</h3>\n  <onlyfor  permission="join_mentorship" >If this text shows, assisant role has access to this permission</onlyfor>\n  <onlyfor  permission="get_my_certificate" >If this text shows, student role has access to this permission</onlyfor>\n  <onlyfor  permission="add_code_review" >If this text shows, teacher role has access to this permission</onlyfor>\n</div>\n\n'},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'args => {\n  const renderCodeName = () => {\n    if (args.permission == "Add code reviews") return "add_code_review";else {\n      return args.permission?.toLowerCase().split(" ").join("_");\n    }\n  };\n  useEffect(() => {\n    let data = JSON.stringify({\n      permissions: [{\n        name: args.permission,\n        codename: renderCodeName()\n      }],\n      permissionsSlug: [renderCodeName()]\n    });\n    let permissionLocalStorage = JSON.parse(localStorage.getItem("profile"))?.permissions[0].name;\n    if (args.permission != permissionLocalStorage) {\n      localStorage.setItem("profile", data);\n    }\n  }, [args.permission]);\n  return <MarkDownParser {...args} />;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),BeforeAfter.parameters=_objectSpread(_objectSpread({},BeforeAfter.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BeforeAfter$paramete=BeforeAfter.parameters)||void 0===_BeforeAfter$paramete?void 0:_BeforeAfter$paramete.docs),{},{source:_objectSpread({originalSource:'args => {\n  const renderCodeName = () => {\n    if (args.permission == "Add code reviews") return "add_code_review";else {\n      return args.permission?.toLowerCase().split(" ").join("_");\n    }\n  };\n  useEffect(() => {\n    let data = JSON.stringify({\n      permissions: [{\n        name: args.permission,\n        codename: renderCodeName()\n      }],\n      permissionsSlug: [renderCodeName()]\n    });\n    let permissionLocalStorage = JSON.parse(localStorage.getItem("profile"))?.permissions[0].name;\n    if (args.permission != permissionLocalStorage) {\n      localStorage.setItem("profile", data);\n    }\n  }, [args.permission]);\n  return <MarkDownParser {...args} />;\n}'},null===(_BeforeAfter$paramete2=BeforeAfter.parameters)||void 0===_BeforeAfter$paramete2||null===(_BeforeAfter$paramete2=_BeforeAfter$paramete2.docs)||void 0===_BeforeAfter$paramete2?void 0:_BeforeAfter$paramete2.source)})}),Checkbox.parameters=_objectSpread(_objectSpread({},Checkbox.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Checkbox$parameters=Checkbox.parameters)||void 0===_Checkbox$parameters?void 0:_Checkbox$parameters.docs),{},{source:_objectSpread({originalSource:'args => {\n  const renderCodeName = () => {\n    if (args.permission == "Add code reviews") return "add_code_review";else {\n      return args.permission?.toLowerCase().split(" ").join("_");\n    }\n  };\n  useEffect(() => {\n    let data = JSON.stringify({\n      permissions: [{\n        name: args.permission,\n        codename: renderCodeName()\n      }],\n      permissionsSlug: [renderCodeName()]\n    });\n    let permissionLocalStorage = JSON.parse(localStorage.getItem("profile"))?.permissions[0].name;\n    if (args.permission != permissionLocalStorage) {\n      localStorage.setItem("profile", data);\n    }\n  }, [args.permission]);\n  return <MarkDownParser {...args} />;\n}'},null===(_Checkbox$parameters2=Checkbox.parameters)||void 0===_Checkbox$parameters2||null===(_Checkbox$parameters2=_Checkbox$parameters2.docs)||void 0===_Checkbox$parameters2?void 0:_Checkbox$parameters2.source)})}),Onlyfor.parameters=_objectSpread(_objectSpread({},Onlyfor.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Onlyfor$parameters=Onlyfor.parameters)||void 0===_Onlyfor$parameters?void 0:_Onlyfor$parameters.docs),{},{source:_objectSpread({originalSource:'args => {\n  const renderCodeName = () => {\n    if (args.permission == "Add code reviews") return "add_code_review";else {\n      return args.permission?.toLowerCase().split(" ").join("_");\n    }\n  };\n  useEffect(() => {\n    let data = JSON.stringify({\n      permissions: [{\n        name: args.permission,\n        codename: renderCodeName()\n      }],\n      permissionsSlug: [renderCodeName()]\n    });\n    let permissionLocalStorage = JSON.parse(localStorage.getItem("profile"))?.permissions[0].name;\n    if (args.permission != permissionLocalStorage) {\n      localStorage.setItem("profile", data);\n    }\n  }, [args.permission]);\n  return <MarkDownParser {...args} />;\n}'},null===(_Onlyfor$parameters2=Onlyfor.parameters)||void 0===_Onlyfor$parameters2||null===(_Onlyfor$parameters2=_Onlyfor$parameters2.docs)||void 0===_Onlyfor$parameters2?void 0:_Onlyfor$parameters2.source)})})}}]);