(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[351],{32993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!o(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!o(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},24839:function(e,t,r){"use strict";var n,i=r(67294),o=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),p.canUseDOM?t(u):r&&(u=r(u))}var p=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return o.createElement(n,this.props)},i}(i.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(p,"canUseDOM",c),p}}},75295:function(e){e.exports=function(e,t){(t=t||{}).listUnicodeChar=!!t.hasOwnProperty("listUnicodeChar")&&t.listUnicodeChar,t.stripListLeaders=!t.hasOwnProperty("stripListLeaders")||t.stripListLeaders,t.gfm=!t.hasOwnProperty("gfm")||t.gfm,t.useImgAltText=!t.hasOwnProperty("useImgAltText")||t.useImgAltText;var r=e||"";r=r.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{t.stripListLeaders&&(r=t.listUnicodeChar?r.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,t.listUnicodeChar+" $1"):r.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),t.gfm&&(r=r.replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),r=r.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,t.useImgAltText?"$1":"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,"\n\n")}catch(n){return console.error(n),e}return r}},58594:function(e,t,r){var n,i,o;o=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var r=e.shift();e[0]=r+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var i=e[n];if("string"!=typeof i)throw new TypeError("Url must be a string. Received "+i);""!==i&&(n>0&&(i=i.replace(/^[\/]+/,"")),i=n<e.length-1?i.replace(/[\/]+$/,""):i.replace(/[\/]+$/,"/"),t.push(i))}var o=t.join("/"),a=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=a.shift()+(a.length>0?"?":"")+a.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=o():void 0===(i="function"==typeof(n=o)?n.call(t,r,t,e):n)||(e.exports=i)},81705:function(e,t,r){"use strict";r.d(t,{Z:function(){return Ue}});var n,i,o,a,c=r(42982),u=r(67294),s=r(45697),l=r.n(s),p=r(24839),f=r.n(p),d=r(32993),g=r.n(d),y=r(46494),h=r.n(y),m="bodyAttributes",b="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),O="cssText",A="href",S="http-equiv",C="innerHTML",E="itemprop",j="name",P="property",k="rel",x="src",L="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",D="defer",U="encodeSpecialCharacters",N="onChangeClientState",$="titleTemplate",_=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),R=[T.NOSCRIPT,T.SCRIPT,T.STYLE],B="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Z=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=X(e,T.TITLE),r=X(e,$);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,M);return t||n||void 0},V=function(e){return X(e,N)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var o=n[i].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===t.indexOf(u)||r===k&&"canonical"===e[r].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==C&&c!==O&&c!==E||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][s]&&(i[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],u=h()({},n[c],i[c]);n[c]=u}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ee=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:r.g.requestAnimationFrame||ee,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:r.g.cancelAnimationFrame||te,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,p=e.title,f=e.titleAttributes;se(T.BODY,n),se(T.HTML,i),ue(p,f);var d={baseTag:le(T.BASE,r),linkTags:le(T.LINK,o),metaTags:le(T.META,a),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,s),styleTags:le(T.STYLE,l)},g={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(g[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,g,y)},ce=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),se(T.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(B),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===i.indexOf(u)&&i.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var p=o.length-1;p>=0;p--)r.removeAttribute(o[p]);i.length===o.length?r.removeAttribute(B):r.getAttribute(B)!==a.join(",")&&r.setAttribute(B,a.join(","))}},le=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===O)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(B,"true"),i.some((function(e,t){return a=t,r.isEqualNode(e)}))?i.splice(a,1):o.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:o}},pe=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[B]=!0,i=fe(r,n),[u.createElement(T.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=pe(r),o=ce(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+K(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case m:case b:return{toComponent:function(){return fe(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[B]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===C||r===O){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),u.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===C||e===O)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+i:i}),""),o=n.innerHTML||n.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},ge=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,p=void 0===l?"":l,f=e.titleAttributes;return{base:de(T.BASE,t,n),bodyAttributes:de(m,r,n),htmlAttributes:de(b,i,n),link:de(T.LINK,o,n),meta:de(T.META,a,n),noscript:de(T.NOSCRIPT,c,n),script:de(T.SCRIPT,u,n),style:de(T.STYLE,s,n),title:de(T.TITLE,{title:p,titleAttributes:f},n)}},ye=f()((function(e){return{baseTag:G([A,L],e),bodyAttributes:J(m,e),defer:X(e,D),encode:X(e,U),htmlAttributes:J(b,e),linkTags:Q(T.LINK,[k,A],e),metaTags:Q(T.META,[j,w,S,P,E],e),noscriptTags:Q(T.NOSCRIPT,[C],e),onChangeClientState:V(e),scriptTags:Q(T.SCRIPT,[x,C],e),styleTags:Q(T.STYLE,[O],e),title:W(e),titleAttributes:J(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=re((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),ge)((function(){return null})),he=(i=ye,a=o=function(e){function t(){return q(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!g()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return F({},n,((t={})[r.type]=[].concat(n[r.type]||[],[F({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(n.type){case T.TITLE:return F({},i,((t={})[n.type]=a,t.titleAttributes=F({},o),t));case T.BODY:return F({},i,{bodyAttributes:F({},o)});case T.HTML:return F({},i,{htmlAttributes:F({},o)})}return F({},i,((r={})[n.type]=F({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=F({},t);return Object.keys(e).forEach((function(t){var n;r=F({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return u.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)}(Z(i,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Z(e,["children"]),n=F({},r);return t&&(n=this.mapChildrenToProps(t,n)),u.createElement(i,n)},Y(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(u.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=ge({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var me=function(e){var t=e.title,r=e.seoTitle,n=e.description,i=e.imageUrl,o=e.tags,a=[u.createElement("title",{key:"gen-title"},r||t)];return n&&a.push(u.createElement("meta",{name:"description",content:n,key:"gen-desc"})),i&&a.push(u.createElement("meta",{name:"image",content:i,key:"gen-image"})),o&&o.length>0&&a.push(u.createElement("meta",{name:"keywords",content:o.join(", "),key:"gen-keywords"})),a},be=r(4942);function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){(0,be.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var we=function(e,t,r){e.push(u.createElement("meta",{property:t,content:r}))},Oe=function(e){var t=e.seoData,r=e.siteMetadata,n=e.postData,i=t.isArticle,o=t.type,a=t.title,u=t.imageUrl,s=t.imageAlt,l=t.url,p=t.description,f=r.name;if(!u||!s)return[];var d=[];return we(d,"og:title",a),we(d,"og:type",o),we(d,"og:url",l),we(d,"og:image",u),we(d,"og:image:alt",s),we(d,"og:site_name",f),p&&we(d,"og:description",p),r.fbAppId&&we(d,"fb:app_id",r.fbAppId),i&&n&&d.push.apply(d,(0,c.Z)(function(e){var t=[];return e.datePublished&&we(t,"article:published_time",e.datePublished.toISOString()),e.dateModified&&we(t,"article:modified_time",e.dateModified.toISOString()),we(t,"article:author","http://examples.opengraphprotocol.us/profile.html"),we(t,"article:section",e.category),e.tags.forEach((function(e){we(t,"article:tag",e)})),t}(n))),d.map((function(e){return Te(Te({},e),{},{key:e.props.property+"-"+e.props.content})}))},Ae=function(e){var t=e.seoData,r=e.postData,n=t.isArticle,i=n&&r?function(e){var t=e.title,r=e.description,n=e.imageUrl,i=e.datePublished,o=e.dateModified,a=e.category,c=e.tags,u=e.body,s=e.url,l=void 0;return n&&r?{"@context":"http://schema.org","@type":"BlogPosting",image:n,url:s,headline:t,name:t,description:r,dateCreated:i,datePublished:i,dateModified:o,author:l,creator:l,publisher:void 0,mainEntityOfPage:"True",keywords:c,articleSection:a,articleBody:u}:null}(r):void 0,o=n?i:undefined;return o?[u.createElement("script",{key:"rich-search",type:"application/ld+json"},JSON.stringify(o))]:[]};function Se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(r),!0).forEach((function(t){(0,be.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ee=function(e){var t=e.seoData,r=e.siteMetadata,n=t.title,i=t.description,o=t.imageUrl,a=t.imageAlt,c=null==r?void 0:r.twitterName,s=r.twitterName,l=[],p=function(e,t){l.push(u.createElement("meta",{name:e,content:t}))};return p("twitter:card","summary_large_image"),p("twitter:title",n),i&&p("twitter:description",i),o&&p("twitter:image",o),p("twitter:image:alt",a),c&&p("twitter:creator",c),s&&p("twitter:site",s),l.map((function(e){return Ce(Ce({},e),{},{key:e.props.name})}))},je=r(75295),Pe=r.n(je),ke=r(695),xe=r.n(ke),Le=r(58594),Ie=r.n(Le),Me=r(37674),De=r(2393),Ue=function(e){var t=e.post,r=(0,Me.Z)(),n=r.siteMetadata,i=r.pathPrefix,o=(0,De.Z)(),a=t?function(e){var t=e.imageUrl,r=e.imageAlt,n=e.datePublished,i=e.dateModified,o=e.description,a=e.title,c=e.category,u=e.tags,s=e.rawBody,l=e.excerpt,p=e.slug,f=e.frontmatterTitle,d=e.language,g=e.seoTitle,y="";s&&(y=Pe()(s));var h="";return o?h=o:(h=l||"",!f&&a&&h.startsWith(a)&&(h=h.slice(a.length))&&h.startsWith(" ")&&(h=h.slice(1))),{slug:p,title:a,description:h,imageUrl:t,imageAlt:r,datePublished:n,dateModified:i,category:c||"None",tags:u||[],body:y,url:e.url,language:d||"en",seoTitle:g}}(t):void 0,s=function(e,t,r){var n=r.pathPrefix,i=!!t,o=t?t.title:e.title,a=t&&"/"!==t.slug?"article":"website",c=t&&t.imageUrl?t.imageUrl:e.imageUrl,u=t&&t.imageAlt?t.imageAlt:e.description||e.title;n||(n="/");var s=t?t.url:"",l=t?t.description:e.description,p=t.tags||[],f=e.siteUrl;return xe()(c)&&(c=Ie()(f,c)),{isArticle:i,type:a,title:o,imageUrl:c,imageAlt:u,url:s,description:l,tags:p,language:t.language,seoTitle:t.seoTitle}}(n,a,{pathPrefix:i}),l=[].concat((0,c.Z)(me(s,n)),(0,c.Z)(Oe({seoData:s,siteMetadata:n,postData:a})),(0,c.Z)(Ae({seoData:s,postData:a})),(0,c.Z)(Ee({seoData:s,siteMetadata:n}))),p=null===o.titleTemplate?"%s - "+n.title:o.titleTemplate;return u.createElement(he,{titleTemplate:s.seoTitle?null:p,htmlAttributes:{lang:a&&a.language?a.language:n.language||"en"}},l)}}}]);
//# sourceMappingURL=commons-159d3f9bd07a4785368c.js.map