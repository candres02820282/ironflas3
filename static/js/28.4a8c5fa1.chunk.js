(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{141:function(e,t,n){"use strict";function o(e,t){var n=t.left,o=t.right,r=t.mirror,a=t.opposite,i=(n?1:0)|(o?2:0)|(r?16:0)|(a?32:0)|(e?64:0);if(p.hasOwnProperty(i))return p[i];if(!r!=!(e&&a)){var u=[o,n];n=u[0],o=u[1]}var s=n?"-100%":o?"100%":"0",c=e?"from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d("+s+", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ":"from {\n        transform: translate3d("+s+", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";return p[i]=(0,l.animation)(c),p[i]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=e.children,n=(e.out,e.forever),r=e.timeout,a=e.duration,i=void 0===a?l.defaults.duration:a,s=e.delay,c=void 0===s?l.defaults.delay:s,p=e.count,d=void 0===p?l.defaults.count:p,f=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["children","out","forever","timeout","duration","delay","count"]),h={make:o,duration:void 0===r?i:r,delay:c,forever:n,count:d,style:{animationFillMode:"both"}};return f.left,f.right,f.mirror,f.opposite,(0,u.default)(f,h,h,t)}Object.defineProperty(t,"__esModule",{value:!0});var a,i=n(39),u=(a=i)&&a.__esModule?a:{default:a},s=n(1),l=n(30),c={out:s.bool,left:s.bool,right:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},p={};r.propTypes=c,t.default=r,e.exports=t.default},190:function(e,t,n){e.exports=n(191)},191:function(e,t,n){var o,r,a;r=[t,n(0),n(26),n(192),n(1)],void 0===(a="function"===typeof(o=function(e,t,n,o,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l(t),i=l(n),u=l(o),s=l(r);function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return window.React=a.default,window.ReactDOM=i.default,n.state={showButton:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.isScriptLoaded,n=e.isScriptLoadSucceed;this.state.show||t&&!this.props.isScriptLoaded&&(n?this.setState({showButton:!0}):(console.log("Cannot load Paypal script!"),this.props.onError()))}},{key:"componentDidMount",value:function(){var e=this.props,t=e.isScriptLoaded,n=e.isScriptLoadSucceed;t&&n&&this.setState({showButton:!0})}},{key:"render",value:function(){var e=this,t="";return this.state.showButton&&(t=a.default.createElement(paypal.Button.react,{env:this.props.env,client:this.props.client,style:this.props.style,payment:function(){return paypal.rest.payment.create(e.props.env,e.props.client,Object.assign({transactions:[{amount:{total:e.props.total,currency:e.props.currency}}]},e.props.paymentOptions),{input_fields:{no_shipping:e.props.shipping}})},commit:!0,onAuthorize:function(t,n){return n.payment.execute().then(function(n){var o=Object.assign({},e.props.payment);o.paid=!0,o.cancelled=!1,o.payerID=t.payerID,o.paymentID=t.paymentID,o.paymentToken=t.paymentToken,o.returnUrl=t.returnUrl,o.address=n.payer.payer_info.shipping_address,o.email=n.payer.payer_info.email,e.props.onSuccess(o)})},onCancel:this.props.onCancel})),a.default.createElement("div",null,t)}}]),t}(a.default.Component);p.propTypes={currency:s.default.string.isRequired,total:s.default.number.isRequired,client:s.default.object.isRequired,style:s.default.object},p.defaultProps={paymentOptions:{},env:"sandbox",shipping:null,onSuccess:function(e){console.log("The payment was succeeded!",e)},onCancel:function(e){console.log("The payment was cancelled!",e)},onError:function(e){console.log("Error loading Paypal script!",e)}},e.default=(0,u.default)("https://www.paypalobjects.com/api/checkout.js")(p)})?o.apply(t,r):o)||(e.exports=a)},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.startLoadingScripts=h;var a=n(0),i=c(a),u=c(n(1)),s=c(n(193)),l=n(194);function c(e){return e&&e.__esModule?e:{default:e}}var p=[],d={},f=[];function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.noop,n=function(e){if(p.indexOf(e)<0)return function(t){var n=d[e]||[];if(n.push(t),d[e]=n,1===n.length)return(0,l.newScript)(e)(function(t){d[e].forEach(function(n){return n(t,e)}),delete d[e]})}},o=e.map(function(e){return Array.isArray(e)?e.map(n):n(e)});l.series.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(o))(function(e,t){e?f.push(t):Array.isArray(t)?t.forEach(y):y(t)})(function(e){b(),t(e)})}var y=function(e){p.indexOf(e)<0&&p.push(e)},b=function(){f.length>0&&(f.forEach(function(e){var t=document.querySelector("script[src='"+e+"']");null!=t&&t.parentNode.removeChild(t)}),f=[])};t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){var n=function(n){function u(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e,t));return n.state={isScriptLoaded:!1,isScriptLoadSucceed:!1},n._isMounted=!1,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(u,a.Component),r(u,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,h(t,function(t){e._isMounted&&e.setState({isScriptLoaded:!0,isScriptLoadSucceed:!t},function(){t||e.props.onScriptLoaded()})})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var t=o({},this.props,this.state);return i.default.createElement(e,t)}}]),u}();return n.propTypes={onScriptLoaded:u.default.func},n.defaultProps={onScriptLoaded:l.noop},(0,s.default)(n,e)}}},193:function(e,t,n){"use strict";var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},a="function"===typeof Object.getOwnPropertySymbols;e.exports=function(e,t,n){if("string"!==typeof t){var i=Object.getOwnPropertyNames(t);a&&(i=i.concat(Object.getOwnPropertySymbols(t)));for(var u=0;u<i.length;++u)if(!o[i[u]]&&!r[i[u]]&&(!n||!n[i[u]]))try{e[i[u]]=t[i[u]]}catch(s){}}return e}},194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.isDefined=function(e){return null!=e};var o=t.isFunction=function(e){return"function"===typeof e},r=(t.noop=function(e){},t.newScript=function(e){return function(t){var n=document.createElement("script");return n.src=e,n.addEventListener("load",function(){return t(null,e)}),n.addEventListener("error",function(){return t(!0,e)}),document.body.appendChild(n),n}},t.parallel=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(n){var r=!1,a=0,i=[];(t=t.filter(o)).length<=0?n(null):t.forEach(function(u,s){u(function(u){for(var l=arguments.length,c=Array(l>1?l-1:0),p=1;p<l;p++)c[p-1]=arguments[p];u?r=!0:(c.length<=1&&(c=c[0]),i[s]=c,a++),o(e)&&e.call(null,u,c,s),r?n(!0):t.length===a&&n(null,i)})})}}});t.series=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(n){var a=function(e){var t=Object.keys(e),n=-1;return{next:function(){return++n>=t.length?null:t[n]}}}(t=t.filter(function(e){return null!=e})),i=function(){var n=a.next(),o=t[n];return Array.isArray(o)&&(o=r.apply(null,o).call(null,e)),[+n,o]},u=void 0,s=void 0,l=i();if(u=l[0],null==(s=l[1]))return n(null);var c=[];!function t(){s(function(r){for(var a=arguments.length,p=Array(a>1?a-1:0),d=1;d<a;d++)p[d-1]=arguments[d];if(p.length<=1&&(p=p[0]),o(e)&&e.call(null,r,p,u),r)n(r);else{if(c.push(p),l=i(),u=l[0],null==(s=l[1]))return n(null,c);t()}})}()}}}},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),i=s(a),u=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.payWithPaystack=n.payWithPaystack.bind(n),n.loadScript=n.loadScript.bind(n),n.loadscriptAndUpdateState=n.loadscriptAndUpdateState.bind(n),n.state=o({},n.props,{scriptLoaded:null,class:n.props.class||n.props.className||""}),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){this.loadscriptAndUpdateState()}},{key:"loadscriptAndUpdateState",value:function(){var e=this;this.setState({scriptLoaded:new Promise(function(t){e.loadScript(function(){t()})})},function(){e.props.embed&&e.payWithPaystack()})}},{key:"loadScript",value:function(e){var t=document.createElement("script");t.src="https://js.paystack.co/v1/inline.js",document.getElementsByTagName("head")[0].appendChild(t),t.readyState?t.onreadystatechange=function(){"loaded"!==t.readyState&&"complete"!==t.readyState||(t.onreadystatechange=null,e())}:t.onload=function(){e()}}},{key:"componentDidUpdate",value:function(e,t){for(var n in e)t[n]!==this.state[n]&&this.loadscriptAndUpdateState()}},{key:"payWithPaystack",value:function(){var e=this;this.state.scriptLoaded&&this.state.scriptLoaded.then(function(){console.log("ref:",e.state.reference);var t={key:e.state.paystackkey,email:e.state.email,amount:e.state.amount,ref:e.state.reference,metadata:e.state.metadata||{},callback:function(t){e.state.callback(t)},onClose:function(){e.state.close()},currency:e.state.currency,plan:e.state.plan||"",quantity:e.state.quantity||"",subaccount:e.state.subaccount||"",transaction_charge:e.state.transaction_charge||0,bearer:e.state.bearer||""};e.state.embed&&(t.container="paystackEmbedContainer");var n=window.PaystackPop.setup(t);e.state.embed||n.openIframe()})}},{key:"render",value:function(){var e=""+this.props.tag;return this.props.embed?i.default.createElement("div",{id:"paystackEmbedContainer"}):i.default.createElement(a.Fragment,null,i.default.createElement(e,{className:this.state.class,onClick:this.payWithPaystack,disabled:this.state.disabled},this.state.text))}}],[{key:"getDerivedStateFromProps",value:function(e,t){for(var n in e)if(e[n]!==t[n])return o={scriptLoaded:null},r=n,a=e[n],r in o?Object.defineProperty(o,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[r]=a,o;var o,r,a;return null}}]),t}();l.propTypes={embed:u.default.bool,text:u.default.string,class:u.default.string,metadata:u.default.object,currency:u.default.string,plan:u.default.string,quantity:u.default.string,subaccount:u.default.string,transaction_charge:u.default.number,bearer:u.default.string,reference:u.default.string.isRequired,email:u.default.string.isRequired,amount:u.default.number.isRequired,paystackkey:u.default.string.isRequired,callback:u.default.func.isRequired,close:u.default.func.isRequired,disabled:u.default.bool,tag:u.default.oneOf(["button","a","input"])},l.defaultProps={tag:"button",text:"Make Payment",currency:"NGN",disabled:!1},t.default=l},196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=u(n(0)),i=u(n(1));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!1,c=!1,p=!1,d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onScriptLoaded=function(){t.stripeHandler||(t.stripeHandler=StripeCheckout.configure({key:n.props.stripeKey}),n.hasPendingClick&&n.showStripeDialog())},n.onScriptError=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n.hideLoadingDialog(),n.props.onScriptError&&n.props.onScriptError.apply(n,t)},n.onClosed=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n._isMounted&&n.setState({open:!1}),n.props.closed&&n.props.closed.apply(n,t)},n.onOpened=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n.setState({open:!0}),n.props.opened&&n.props.opened.apply(n,t)},n.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce(function(e,t){return o({},e,n.props.hasOwnProperty(t)&&s({},t,n.props[t]))},{opened:n.onOpened,closed:n.onClosed})},n.onClick=function(){if(!n.props.disabled)if(p)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch(e){}else t.stripeHandler?n.showStripeDialog():(n.showLoadingDialog(),n.hasPendingClick=!0)},n.handleOnMouseDown=function(){n.setState({buttonActive:!0})},n.handleOnMouseUp=function(){n.setState({buttonActive:!1})},n.state={open:!1,buttonActive:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"componentDidMount",value:function(){var e=this;if(this._isMounted=!0,!c&&!l){l=!0;var t=document.createElement("script");"function"===typeof this.props.onScriptTagCreated&&this.props.onScriptTagCreated(t),t.src="https://checkout.stripe.com/checkout.js",t.async=1,this.loadPromise=function(){var n=!1,o=new Promise(function(n,o){t.onload=function(){c=!0,l=!1,n(),e.onScriptLoaded()},t.onerror=function(t){p=!0,l=!1,o(t),e.onScriptError(t)}});return{promise:new Promise(function(e,t){o.then(function(){return n?t({isCanceled:!0}):e()}),o.catch(function(e){return t(n?{isCanceled:!0}:e)})}),cancel:function(){n=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(t)}}},{key:"componentDidUpdate",value:function(){l||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),t.stripeHandler&&this.state.open&&t.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){t.stripeHandler&&!this.props.reconfigureOnUpdate||(t.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.props.showLoadingDialog.apply(this,t)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.props.hideLoadingDialog.apply(this,t)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),t.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return a.default.createElement("button",o({},s({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:o({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),a.default.createElement("span",{style:o({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return a.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},a.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){!0!==this.props.desktopShowModal||this.state.open?!1===this.props.desktopShowModal&&this.state.open&&t.stripeHandler.close():this.onClick();var e=this.props.ComponentClass;return this.props.children?a.default.createElement(e,o({},s({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),t}();d.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"},d.propTypes={desktopShowModal:i.default.bool,triggerEvent:i.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:i.default.string,style:i.default.object,textStyle:i.default.object,disabled:i.default.bool,ComponentClass:i.default.string,showLoadingDialog:i.default.func,hideLoadingDialog:i.default.func,onScriptError:i.default.func,onScriptTagCreated:i.default.func,reconfigureOnUpdate:i.default.bool,stripeKey:i.default.string.isRequired,token:i.default.func.isRequired,name:i.default.string,description:i.default.string,image:i.default.string,amount:i.default.number,locale:i.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:i.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:i.default.string,zipCode:i.default.bool,billingAddress:i.default.bool,shippingAddress:i.default.bool,email:i.default.string,allowRememberMe:i.default.bool,bitcoin:i.default.bool,alipay:i.default.oneOf(["auto",!0,!1]),alipayReusable:i.default.bool,opened:i.default.func,closed:i.default.func},d._isMounted=!1,t.default=d}}]);