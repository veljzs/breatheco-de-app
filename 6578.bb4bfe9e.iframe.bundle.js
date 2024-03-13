"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6578],{"./src/common/hooks/useAuth.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>hooks_useAuth});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),next_router=__webpack_require__("./node_modules/next/router.js"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),chunk_ENIANY67=__webpack_require__("./node_modules/@chakra-ui/toast/dist/chunk-ENIANY67.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_WPAIWTI3=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-WPAIWTI3.mjs"),breathecode=__webpack_require__("./src/common/services/breathecode.js"),utils=__webpack_require__("./src/utils/index.js"),requests=__webpack_require__("./src/utils/requests.js"),axios=__webpack_require__("./src/axios.js"),usePersistent=__webpack_require__("./src/common/hooks/usePersistent.js"),modifyEnv=__webpack_require__("./modifyEnv.js"),modalInfo=__webpack_require__("./src/js_modules/moduleMap/modalInfo.jsx"),Text=__webpack_require__("./src/common/components/Text.jsx"),SILENT_CODE_EMAIL_NOT_VALIDATED="email-not-validated",logging=__webpack_require__("./src/utils/logging.js"),process=__webpack_require__("./node_modules/process/browser.js"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var initialState={isLoading:!0,isAuthenticated:!1,isAuthenticatedWithRigobot:!1,user:null},langHelper={us:"en",en:"en",es:"es"},reducer=function reducer(state,action){switch(action.type){case"INIT":var _action$payload=action.payload,isLoading=_action$payload.isLoading,isAuthenticated=_action$payload.isAuthenticated,isAuthenticatedWithRigobot=_action$payload.isAuthenticatedWithRigobot,user=_action$payload.user;return _objectSpread(_objectSpread({},state),{},{isLoading,isAuthenticated,isAuthenticatedWithRigobot,user});case"LOGIN":var _user=action.payload.user;return _objectSpread(_objectSpread({},state),{},{isLoading:!1,isAuthenticated:!0,user:_user});case"CHOOSE":return _objectSpread(_objectSpread({},state),{},{isAuthenticated:!0,user:_objectSpread(_objectSpread({},state.user),{},{active_cohort:action.payload})});case"LOGOUT":return _objectSpread(_objectSpread({},state),{},{isLoading:!1,isAuthenticated:!1,user:null});case"REGISTER":var _user2=action.payload.user;return _objectSpread(_objectSpread({},state),{},{isAuthenticated:!0,user:_user2});case"UPDATE_PROFILE_PICTURE":return _objectSpread(_objectSpread({},state),{},{isLoading:!1,user:action.payload});default:return _objectSpread({},state)}},getToken=function getToken(){if(utils.FJ){var _query$get,queryToken=null===(_query$get=new URLSearchParams(window.location.search||"").get("token"))||void 0===_query$get?void 0:_query$get.split("?")[0];return queryToken||localStorage.getItem("accessToken")}return null},AuthContext=(0,react.createContext)(_objectSpread({},initialState));function AuthProvider(_ref){var _query$get2,children=_ref.children,pageProps=_ref.pageProps,BREATHECODE_HOST=(0,modifyEnv.Z)({queryString:"host",env:process.env.BREATHECODE_HOST}),router=(0,next_router.useRouter)(),_useTranslation=(0,useTranslation.Z)("footer"),t=_useTranslation.t,lang=_useTranslation.lang,toast=(0,chunk_ENIANY67.p)(),_useReducer=(0,react.useReducer)(reducer,initialState),state=_useReducer[0],dispatch=_useReducer[1],_useState=(0,react.useState)({state:!1,user:null}),modalState=_useState[0],setModalState=_useState[1],_usePersistent=(0,usePersistent.K)("profile",{}),_usePersistent2=(0,slicedToArray.Z)(_usePersistent,2),profile=_usePersistent2[0],setProfile=_usePersistent2[1],query=utils.FJ&&new URLSearchParams(window.location.search||""),queryToken=utils.FJ&&(null===(_query$get2=query.get("token"))||void 0===_query$get2?void 0:_query$get2.split("?")[0]),cleanUrl=utils.FJ&&(0,utils.rg)(window.location.href,"token"),queryTokenExists=utils.FJ&&void 0!==queryToken&&queryToken.length>0,handleSession=function handleSession(tokenString){return function setTokenSession(token){token?(localStorage.setItem("accessToken",token),axios.ZP.defaults.headers.common.Authorization="Token ".concat(token)):((0,utils.L_)("syllabus"),(0,utils.L_)("programMentors"),(0,utils.L_)("programServices"),(0,utils.L_)("cohortSession"),(0,utils.L_)("accessToken"),(0,utils.L_)("taskTodo"),(0,utils.L_)("profile"),(0,utils.L_)("sortedAssignments"),(0,utils.L_)("days_history_log"),(0,utils.L_)("queryCache"),(0,utils.L_)("hasPaidSubscription"),(0,utils.L_)("hasPaidSubscription"),(0,utils.L_)("programsList"),(0,utils.L_)("isClosedLateModal"),delete axios.ZP.defaults.headers.common.Authorization)}(tokenString)},updateSettingsLang=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,breathecode.Z.auth().updateSettings({lang});case 3:_context.next=8;break;case 5:_context.prev=5,_context.t0=_context.catch(0),(0,logging.ZK)('error function "updateSettingsLang": ',_context.t0);case 8:case"end":return _context.stop()}}),_callee,null,[[0,5]])})));return function updateSettingsLang(){return _ref2.apply(this,arguments)}}(),authHandler=function(){var _ref3=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee2(){var token,respRigobotAuth,isAuthenticatedWithRigobot;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(null==(token=getToken())){_context2.next=10;break}return _context2.next=4,breathecode.Z.auth().verifyRigobotConnection(token);case 4:return respRigobotAuth=_context2.sent,isAuthenticatedWithRigobot=respRigobotAuth&&200===(null==respRigobotAuth?void 0:respRigobotAuth.status),_context2.next=8,fetch("".concat(BREATHECODE_HOST,"/v1/auth/token/").concat(token),{method:"GET",headers:{"Content-Type":"application/json"}});case 8:_context2.sent.status>=400?(handleSession(null),queryTokenExists?router.push(cleanUrl):router.reload(),dispatch({type:"INIT",payload:{user:null,isAuthenticated:!1,isLoading:!1}})):(handleSession(token),breathecode.Z.auth().me().then((function(_ref4){var _data$profile,_data$github,_data$profile2,_data$profile3,data=_ref4.data;dispatch({type:"INIT",payload:{user:data,isAuthenticated:!0,isAuthenticatedWithRigobot,isLoading:!1}});var permissionsSlug=data.permissions.map((function(l){return l.codename})),settingsLang=null==data?void 0:data.settings.lang;setProfile(_objectSpread(_objectSpread(_objectSpread({},profile),data),{},{permissionsSlug})),(0,requests._1)({dataLayer:{event:"session_load",method:"native",user_id:data.id,email:data.email,first_name:data.first_name,last_name:data.last_name,avatar_url:(null===(_data$profile=data.profile)||void 0===_data$profile?void 0:_data$profile.avatar_url)||(null===(_data$github=data.github)||void 0===_data$github?void 0:_data$github.avatar_url),language:"us"===(null===(_data$profile2=data.profile)||void 0===_data$profile2||null===(_data$profile2=_data$profile2.settings)||void 0===_data$profile2?void 0:_data$profile2.lang)?"en":null===(_data$profile3=data.profile)||void 0===_data$profile3||null===(_data$profile3=_data$profile3.settings)||void 0===_data$profile3?void 0:_data$profile3.lang}}),data.github?localStorage.setItem("showGithubWarning","closed"):localStorage.getItem("showGithubWarning")&&"postponed"===localStorage.getItem("showGithubWarning")||localStorage.setItem("showGithubWarning","active"),pageProps.disableLangSwitcher||langHelper[null==router?void 0:router.locale]===settingsLang||updateSettingsLang()})).catch((function(){handleSession(null)})));case 10:return _context2.abrupt("return",null);case 11:case"end":return _context2.stop()}}),_callee2)})));return function authHandler(){return _ref3.apply(this,arguments)}}();(0,react.useEffect)((function(){authHandler()}),[router]);var login=function(){var _ref5=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee3(){var payload,disableRedirect,redirect,_responseData$non_fie,response,responseData,i,_responseData$non_fie2,indexFromOne,message,_args3=arguments;return regenerator_default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(payload=_args3.length>0&&void 0!==_args3[0]?_args3[0]:null,disableRedirect=_args3.length>1&&void 0!==_args3[1]&&_args3[1],redirect=utils.FJ&&localStorage.getItem("redirect"),_context3.prev=3,!payload){_context3.next=15;break}return _context3.next=7,breathecode.Z.auth().login2(payload,lang);case 7:return response=_context3.sent,_context3.next=10,response.json();case 10:if((null==(responseData=_context3.sent)?void 0:responseData.silent_code)===SILENT_CODE_EMAIL_NOT_VALIDATED&&setModalState(_objectSpread(_objectSpread(_objectSpread({},payload),responseData),{},{state:!0})),!0!==(null==responseData?void 0:responseData.silent)&&(null==responseData||null===(_responseData$non_fie=responseData.non_field_errors)||void 0===_responseData$non_fie?void 0:_responseData$non_fie.length)>0)for(i=0;i<(null===(_responseData$non_fie2=responseData.non_field_errors)||void 0===_responseData$non_fie2?void 0:_responseData$non_fie2.length);i+=1)indexFromOne=i+1,toast({position:"top",status:"error",title:responseData.non_field_errors[i],duration:5e3+1e3*indexFromOne,isClosable:!0});return 200===response.status&&(handleSession(responseData.token||response.token),dispatch({type:"LOGIN",payload:responseData}),disableRedirect?router.reload():redirect&&redirect.length>0?(router.push(redirect),localStorage.removeItem("redirect")):(router.push("/choose-program"),localStorage.removeItem("redirect")),(0,requests._1)({dataLayer:{event:"login",path:router.pathname,method:"native",user_id:responseData.user_id,email:responseData.email}})),_context3.abrupt("return",response);case 15:throw Error("Empty values");case 18:throw _context3.prev=18,_context3.t0=_context3.catch(3),message=_context3.t0.details||_context3.t0.detail||Array.isArray(_context3.t0.non_field_errors)?_context3.t0.non_field_errors[0]:"Unable to login",Error(message);case 22:case"end":return _context3.stop()}}),_callee3,null,[[3,18]])})));return function login(){return _ref5.apply(this,arguments)}}(),register=function(){var _ref6=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee4(){var payload,response,message,_args4=arguments;return regenerator_default().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:if(payload=_args4.length>0&&void 0!==_args4[0]?_args4[0]:null,_context4.prev=1,!payload){_context4.next=8;break}return _context4.next=5,breathecode.Z.auth().register(payload);case 5:return 200===(response=_context4.sent).status&&(handleSession(response.data.token||response.token),dispatch({type:"REGISTER",payload:{isLoading:!1,isAuthenticated:!0,user:response.data}})),_context4.abrupt("return",response);case 8:throw Error("Empty values");case 11:throw _context4.prev=11,_context4.t0=_context4.catch(1),message=_context4.t0.details||_context4.t0.detail||Array.isArray(_context4.t0.non_field_errors)?_context4.t0.non_field_errors[0]:"Unable to register",Error(message);case 15:case"end":return _context4.stop()}}),_callee4,null,[[1,11]])})));return function register(){return _ref6.apply(this,arguments)}}(),choose=function(){var _ref7=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee5(payload){return regenerator_default().wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:dispatch({type:"CHOOSE",payload});case 1:case"end":return _context5.stop()}}),_callee5)})));return function choose(_x){return _ref7.apply(this,arguments)}}(),updateProfilePicture=function(){var _ref8=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee6(payload){return regenerator_default().wrap((function _callee6$(_context6){for(;;)switch(_context6.prev=_context6.next){case 0:dispatch({type:"UPDATE_PROFILE_PICTURE",payload});case 1:case"end":return _context6.stop()}}),_callee6)})));return function updateProfilePicture(_x2){return _ref8.apply(this,arguments)}}();return __jsx(AuthContext.Provider,{value:_objectSpread(_objectSpread({},state),{},{method:"Bearer",login,logout:function logout(){var callback=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;(0,axios.zy)(),handleSession(null),setProfile({}),"function"==typeof callback&&callback(),"function"!=typeof callback&&(queryTokenExists?router.push(cleanUrl).then((function(){router.reload()})):router.reload()),localStorage.removeItem("showGithubWarning"),localStorage.removeItem("redirect"),dispatch({type:"LOGOUT"})},register,choose,updateProfilePicture})},children,__jsx(modalInfo.Z,{headerStyles:{textAlign:"center"},title:t("signup:alert-message.validate-email-title"),footerStyle:{flexDirection:"row-reverse"},closeButtonVariant:"outline",closeButtonStyles:{borderRadius:"3px",color:"#0097CD",borderColor:"#0097CD"},childrenDescription:__jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:"column",alignItems:"center",gridGap:"17px"},__jsx(chunk_WPAIWTI3.q,{src:"".concat(BREATHECODE_HOST,"/static/img/avatar-1.png"),border:"3px solid #0097CD",width:"91px",height:"91px",borderRadius:"50px"}),__jsx(Text.Z,{size:"14px",textAlign:"center",dangerouslySetInnerHTML:{__html:t("signup:alert-message.validate-email-description",{email:null==modalState?void 0:modalState.email})}})),isOpen:modalState.state,buttonHandlerStyles:{variant:"default"},actionHandler:function actionHandler(){var _modalState$data,inviteId=null==modalState||null===(_modalState$data=modalState.data)||void 0===_modalState$data||null===(_modalState$data=_modalState$data[0])||void 0===_modalState$data?void 0:_modalState$data.id;breathecode.Z.auth().resendConfirmationEmail(inviteId).then((function(resp){var data=null==resp?void 0:resp.data;toast(void 0===data?{position:"top",status:"info",title:t("signup:alert-message.email-already-sent"),isClosable:!0,duration:6e3}:{position:"top",status:"success",title:t("signup:alert-message.email-sent-to",{email:null==data?void 0:data.email}),isClosable:!0,duration:6e3})}))},handlerText:t("signup:resend"),onClose:function onClose(){return setModalState(_objectSpread(_objectSpread({},modalState),{},{state:!1}))}}))}AuthProvider.displayName="AuthProvider",AuthProvider.propTypes={children:prop_types_default().node,pageProps:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().any])).isRequired},AuthProvider.defaultProps={children:null},AuthProvider.__docgenInfo={description:"",methods:[],displayName:"AuthProvider",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},pageProps:{description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"any"}]}},required:!0}}};const hooks_useAuth=function useAuth(){return(0,react.useContext)(AuthContext)}},"./src/common/hooks/usePersistent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>usePersistent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),usePersistent=function usePersistent(key,initialValue){var getStoredValues=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var item=_utils_index__WEBPACK_IMPORTED_MODULE_1__.FJ?window.localStorage.getItem(key):null;return JSON.parse(item)||initialValue}),[key,initialValue]),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getStoredValues),storedValue=_useState[0],setStoredValue=_useState[1];return[storedValue,function setValue(value){try{setStoredValue(value),window.localStorage.setItem(key,JSON.stringify(value))}catch(error){console.error("usePersistent_error:",error)}}]}}}]);