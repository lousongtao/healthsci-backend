(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[516],{47828:function(){},3887:function(V,D,l){"use strict";l.d(D,{Z:function(){return ut}});var m=l(22122),T=l(96156),o=l(67294),J=l(94184),W=l.n(J),j=l(42550),C=l(65632),P=l(21687),Y=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},q=function(r,i){var e=r.prefixCls,t=r.component,a=t===void 0?"article":t,s=r.className,d=r["aria-label"],c=r.setContentRef,p=r.children,f=Y(r,["prefixCls","component","className","aria-label","setContentRef","children"]),u=i;return c&&((0,P.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),u=(0,j.sQ)(i,c)),o.createElement(C.C,null,function(y){var x=y.getPrefixCls,A=y.direction,R=a,b=x("typography",e),U=W()(b,(0,T.Z)({},"".concat(b,"-rtl"),A==="rtl"),s);return o.createElement(R,(0,m.Z)({className:U,"aria-label":d,ref:u},f),p)})},F=o.forwardRef(q);F.displayName="Typography";var H=F,g=H,K=l(90484),_=l(98423),k=l(85061),X=l(6610),be=l(5991),Oe=l(10379),Se=l(44144),re=l(50344),Te=l(20640),Ze=l.n(Te),ee=l(28991),Ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},Pe=Ne,ve=l(27029),ye=function(r,i){return o.createElement(ve.Z,(0,ee.Z)((0,ee.Z)({},r),{},{ref:i,icon:Pe}))};ye.displayName="EditOutlined";var Re=o.forwardRef(ye),Le=l(79508),we=l(99165),De=l(35193),Ae=l(69224),Ie=l(42051),he=l(34952),ie=l(32637),me=l(31808),ae=l(69713),ke=l(28481),ge=l(15105),Me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},je=Me,Ee=function(r,i){return o.createElement(ve.Z,(0,ee.Z)((0,ee.Z)({},r),{},{ref:i,icon:je}))};Ee.displayName="EnterOutlined";var Ke=o.forwardRef(Ee),Ue=l(40865),ze=function(r){var i=r.prefixCls,e=r["aria-label"],t=r.className,a=r.style,s=r.direction,d=r.maxLength,c=r.autoSize,p=c===void 0?!0:c,f=r.value,u=r.onSave,y=r.onCancel,x=r.onEnd,A=o.useRef(),R=o.useRef(!1),b=o.useRef(),U=o.useState(f),z=(0,ke.Z)(U,2),L=z[0],G=z[1];o.useEffect(function(){G(f)},[f]),o.useEffect(function(){if(A.current&&A.current.resizableTextArea){var E=A.current.resizableTextArea.textArea;E.focus();var S=E.value.length;E.setSelectionRange(S,S)}},[]);var v=function(S){var N=S.target;G(N.value.replace(/[\n\r]/g,""))},h=function(){R.current=!0},w=function(){R.current=!1},Z=function(S){var N=S.keyCode;R.current||(b.current=N)},I=function(){u(L.trim())},$=function(S){var N=S.keyCode,de=S.ctrlKey,pe=S.altKey,ue=S.metaKey,fe=S.shiftKey;b.current===N&&!R.current&&!de&&!pe&&!ue&&!fe&&(N===ge.Z.ENTER?(I(),x==null||x()):N===ge.Z.ESC&&y())},M=function(){I()},B=W()(i,"".concat(i,"-edit-content"),(0,T.Z)({},"".concat(i,"-rtl"),s==="rtl"),t);return o.createElement("div",{className:B,style:a},o.createElement(Ue.Z,{ref:A,maxLength:d,value:L,onChange:v,onKeyDown:Z,onKeyUp:$,onCompositionStart:h,onCompositionEnd:w,onBlur:M,"aria-label":e,autoSize:p}),o.createElement(Ke,{className:"".concat(i,"-edit-content-confirm")}))},$e=ze,oe=l(73935),Be=1,He=3,We=8,O,le={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function se(n){if(!n)return 0;var r=n.match(/^\d*(\.\d*)?/);return r?Number(r[0]):0}function Fe(n){var r=Array.prototype.slice.apply(n);return r.map(function(i){return"".concat(i,": ").concat(n.getPropertyValue(i),";")}).join("")}function Ge(n){var r=[];return n.forEach(function(i){var e=r[r.length-1];typeof i=="string"&&typeof e=="string"?r[r.length-1]+=i:r.push(i)}),r}function Ce(n,r){n.setAttribute("aria-hidden","true");var i=window.getComputedStyle(r),e=Fe(i);n.setAttribute("style",e),n.style.position="fixed",n.style.left="0",n.style.height="auto",n.style.minHeight="auto",n.style.maxHeight="auto",n.style.top="-999999px",n.style.zIndex="-1000",n.style.textOverflow="clip",n.style.whiteSpace="normal",n.style.webkitLineClamp="none"}function Ve(n){var r=document.createElement("div");Ce(r,n),r.appendChild(document.createTextNode("text")),document.body.appendChild(r);var i=r.offsetHeight,e=se(window.getComputedStyle(n).lineHeight);return document.body.removeChild(r),i>e?i:e}var Xe=function(n,r,i,e,t){O||(O=document.createElement("div"),O.setAttribute("aria-hidden","true")),O.parentNode||document.body.appendChild(O);var a=r.rows,s=r.suffix,d=s===void 0?"":s,c=window.getComputedStyle(n),p=Ve(n),f=Math.floor(p)*(a+1)+se(c.paddingTop)+se(c.paddingBottom);Ce(O,n);var u=Ge((0,re.Z)(i));(0,oe.render)(o.createElement("div",{style:le},o.createElement("span",{style:le},u,d),o.createElement("span",{style:le},e)),O);function y(){return Math.ceil(O.getBoundingClientRect().height)<f}if(y())return(0,oe.unmountComponentAtNode)(O),{content:i,text:O.innerHTML,ellipsis:!1};var x=Array.prototype.slice.apply(O.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(v){var h=v.nodeType;return h!==We}),A=Array.prototype.slice.apply(O.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,oe.unmountComponentAtNode)(O);var R=[];O.innerHTML="";var b=document.createElement("span");O.appendChild(b);var U=document.createTextNode(t+d);b.appendChild(U),A.forEach(function(v){O.appendChild(v)});function z(v){b.insertBefore(v,U)}function L(v,h){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,Z=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h.length,I=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,$=Math.floor((w+Z)/2),M=h.slice(0,$);if(v.textContent=M,w>=Z-1)for(var B=Z;B>=w;B-=1){var E=h.slice(0,B);if(v.textContent=E,y()||!E)return B===h.length?{finished:!1,reactNode:h}:{finished:!0,reactNode:E}}return y()?L(v,h,$,Z,$):L(v,h,w,$,I)}function G(v,h){var w=v.nodeType;if(w===Be)return z(v),y()?{finished:!1,reactNode:u[h]}:(b.removeChild(v),{finished:!0,reactNode:null});if(w===He){var Z=v.textContent||"",I=document.createTextNode(Z);return z(I),L(I,Z)}return{finished:!1,reactNode:null}}return x.some(function(v,h){var w=G(v,h),Z=w.finished,I=w.reactNode;return I&&R.push(I),Z}),{content:R,text:O.innerHTML,ellipsis:!0}},Qe=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},Je=(0,me.GL)("webkitLineClamp"),Ye=(0,me.GL)("textOverflow");function qe(n,r){var i=n.mark,e=n.code,t=n.underline,a=n.delete,s=n.strong,d=n.keyboard,c=n.italic,p=r;function f(u,y){!u||(p=o.createElement(y,{},p))}return f(s,"strong"),f(t,"u"),f(a,"del"),f(e,"code"),f(i,"mark"),f(d,"kbd"),f(c,"i"),p}function te(n,r,i){return n===!0||n===void 0?r:n||i&&r}var xe="...",ce=function(n){(0,Oe.Z)(i,n);var r=(0,Se.Z)(i);function i(){var e;return(0,X.Z)(this,i),e=r.apply(this,arguments),e.contentRef=o.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,a=e.context.getPrefixCls;return a("typography",t)},e.onExpandClick=function(t){var a,s=e.getEllipsis(),d=s.onExpand;e.setState({expanded:!0}),(a=d)===null||a===void 0||a(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var a=e.getEditable(),s=a.onChange;s==null||s(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,a;(a=(t=e.getEditable()).onCancel)===null||a===void 0||a.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var a=e.props,s=a.children,d=a.copyable,c=(0,m.Z)({},(0,K.Z)(d)==="object"?d:null);c.text===void 0&&(c.text=String(s)),Ze()(c.text||""),e.setState({copied:!0},function(){c.onCopy&&c.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var a=e.getEditable(),s=a.onStart;t&&s&&s(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){ie.Z.cancel(e.rafId),e.rafId=(0,ie.Z)(function(){e.syncEllipsis()})},e}return(0,be.Z)(i,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var a=this.props.children,s=this.getEllipsis(),d=this.getEllipsis(t);(a!==t.children||s.rows!==d.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),ie.Z.cancel(this.rafId)}},{key:"getEditable",value:function(t){var a=this.state.edit,s=t||this.props,d=s.editable;return d?(0,m.Z)({editing:a},(0,K.Z)(d)==="object"?d:null):{editing:a}}},{key:"getEllipsis",value:function(t){var a=t||this.props,s=a.ellipsis;return s?(0,m.Z)({rows:1,expandable:!1},(0,K.Z)(s)==="object"?s:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,a=this.props,s=a.editable,d=a.copyable,c=this.getEllipsis(),p=c.rows,f=c.expandable,u=c.suffix,y=c.onEllipsis,x=c.tooltip;return u||x||s||d||f||!t||y?!1:p===1?Ye:Je}},{key:"syncEllipsis",value:function(){var t=this.state,a=t.ellipsisText,s=t.isEllipsis,d=t.expanded,c=this.getEllipsis(),p=c.rows,f=c.suffix,u=c.onEllipsis,y=this.props.children;if(!(!p||p<0||!this.contentRef.current||d)&&!this.canUseCSSEllipsis()){(0,P.Z)((0,re.Z)(y).every(function(U){return typeof U=="string"}),"Typography","`ellipsis` should use string as children only.");var x=Xe(this.contentRef.current,{rows:p,suffix:f},y,this.renderOperations(!0),xe),A=x.content,R=x.text,b=x.ellipsis;(a!==R||s!==b)&&(this.setState({ellipsisText:R,ellipsisContent:A,isEllipsis:b}),s!==b&&u&&u(b))}}},{key:"renderExpand",value:function(t){var a=this.getEllipsis(),s=a.expandable,d=a.symbol,c=this.state,p=c.expanded,f=c.isEllipsis;if(!s||!t&&(p||!f))return null;var u;return d?u=d:u=this.expandStr,o.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},u)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var a=t.icon,s=t.tooltip,d=(0,re.Z)(s)[0]||this.editStr,c=typeof d=="string"?d:"";return o.createElement(ae.Z,{key:"edit",title:s===!1?"":d},o.createElement(he.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":c},a||o.createElement(Re,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,a=this.props.copyable;if(!!a){var s=this.getPrefixCls(),d=a.tooltips,c=a.icon,p=Array.isArray(d)?d:[d],f=Array.isArray(c)?c:[c],u=t?te(p[1],this.copiedStr):te(p[0],this.copyStr),y=t?this.copiedStr:this.copyStr,x=typeof u=="string"?u:y;return o.createElement(ae.Z,{key:"copy",title:u},o.createElement(he.Z,{className:W()("".concat(s,"-copy"),t&&"".concat(s,"-copy-success")),onClick:this.onCopyClick,"aria-label":x},t?te(f[1],o.createElement(Le.Z,null),!0):te(f[0],o.createElement(we.Z,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,a=t.children,s=t.className,d=t.style,c=this.context.direction,p=this.getEditable(),f=p.maxLength,u=p.autoSize,y=p.onEnd;return o.createElement($e,{value:typeof a=="string"?a:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:y,prefixCls:this.getPrefixCls(),className:s,style:d,direction:c,maxLength:f,autoSize:u})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(a){return a})}},{key:"renderContent",value:function(){var t=this,a=this.state,s=a.ellipsisContent,d=a.isEllipsis,c=a.expanded,p=this.props,f=p.component,u=p.children,y=p.className,x=p.type,A=p.disabled,R=p.style,b=Qe(p,["component","children","className","type","disabled","style"]),U=this.context.direction,z=this.getEllipsis(),L=z.rows,G=z.suffix,v=z.tooltip,h=this.getPrefixCls(),w=(0,_.Z)(b,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,k.Z)(Ae.nf))),Z=this.canUseCSSEllipsis(),I=L===1&&Z,$=L&&L>1&&Z,M=u;if(L&&d&&!c&&!Z){var B=b.title,E=B||"";!B&&(typeof u=="string"||typeof u=="number")&&(E=String(u)),E=E.slice(String(s||"").length),M=o.createElement(o.Fragment,null,s,o.createElement("span",{title:E,"aria-hidden":"true"},xe),G),v&&(M=o.createElement(ae.Z,{title:v===!0?u:v},o.createElement("span",null,M)))}else M=o.createElement(o.Fragment,null,u,G);return M=qe(this.props,M),o.createElement(Ie.Z,{componentName:"Text"},function(S){var N,de=S.edit,pe=S.copy,ue=S.copied,fe=S.expand;return t.editStr=de,t.copyStr=pe,t.copiedStr=ue,t.expandStr=fe,o.createElement(De.Z,{onResize:t.resizeOnNextFrame,disabled:Z},o.createElement(g,(0,m.Z)({className:W()((N={},(0,T.Z)(N,"".concat(h,"-").concat(x),x),(0,T.Z)(N,"".concat(h,"-disabled"),A),(0,T.Z)(N,"".concat(h,"-ellipsis"),L),(0,T.Z)(N,"".concat(h,"-single-line"),L===1),(0,T.Z)(N,"".concat(h,"-ellipsis-single-line"),I),(0,T.Z)(N,"".concat(h,"-ellipsis-multiple-line"),$),N),y),style:(0,m.Z)((0,m.Z)({},R),{WebkitLineClamp:$?L:void 0}),component:f,ref:t.contentRef,direction:U},w),M,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),a=t.editing;return a?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var a=t.children,s=t.editable;return(0,P.Z)(!s||typeof a=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),i}(o.Component);ce.contextType=C.E_,ce.defaultProps={children:""};var ne=ce,_e=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},et=function(r){var i=r.ellipsis,e=_e(r,["ellipsis"]),t=o.useMemo(function(){return i&&(0,K.Z)(i)==="object"?(0,_.Z)(i,["expandable","rows"]):i},[i]);return(0,P.Z)((0,K.Z)(i)!=="object"||!i||!("expandable"in i)&&!("rows"in i),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),o.createElement(ne,(0,m.Z)({},e,{ellipsis:t,component:"span"}))},tt=et,nt=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},rt=function(r,i){var e=r.ellipsis,t=r.rel,a=nt(r,["ellipsis","rel"]);(0,P.Z)((0,K.Z)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var s=o.useRef(null);o.useImperativeHandle(i,function(){var c;return(c=s.current)===null||c===void 0?void 0:c.contentRef.current});var d=(0,m.Z)((0,m.Z)({},a),{rel:t===void 0&&a.target==="_blank"?"noopener noreferrer":t});return delete d.navigate,o.createElement(ne,(0,m.Z)({},d,{ref:s,ellipsis:!!e,component:"a"}))},it=o.forwardRef(rt),at=l(93355),ot=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},lt=(0,at.a)(1,2,3,4,5),st=function(r){var i=r.level,e=i===void 0?1:i,t=ot(r,["level"]),a;return lt.indexOf(e)!==-1?a="h".concat(e):((0,P.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),a="h1"),o.createElement(ne,(0,m.Z)({},t,{component:a}))},ct=st,dt=function(r){return o.createElement(ne,(0,m.Z)({},r,{component:"div"}))},pt=dt,Q=g;Q.Text=tt,Q.Link=it,Q.Title=ct,Q.Paragraph=pt;var ut=Q},402:function(V,D,l){"use strict";var m=l(65056),T=l.n(m),o=l(47828),J=l.n(o),W=l(22385),j=l(47673)},20640:function(V,D,l){"use strict";var m=l(11742),T={"text/plain":"Text","text/html":"Url",default:"Text"},o="Copy to clipboard: #{key}, Enter";function J(j){var C=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return j.replace(/#{\s*key\s*}/g,C)}function W(j,C){var P,Y,q,F,H,g,K=!1;C||(C={}),P=C.debug||!1;try{q=m(),F=document.createRange(),H=document.getSelection(),g=document.createElement("span"),g.textContent=j,g.style.all="unset",g.style.position="fixed",g.style.top=0,g.style.clip="rect(0, 0, 0, 0)",g.style.whiteSpace="pre",g.style.webkitUserSelect="text",g.style.MozUserSelect="text",g.style.msUserSelect="text",g.style.userSelect="text",g.addEventListener("copy",function(k){if(k.stopPropagation(),C.format)if(k.preventDefault(),typeof k.clipboardData=="undefined"){P&&console.warn("unable to use e.clipboardData"),P&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var X=T[C.format]||T.default;window.clipboardData.setData(X,j)}else k.clipboardData.clearData(),k.clipboardData.setData(C.format,j);C.onCopy&&(k.preventDefault(),C.onCopy(k.clipboardData))}),document.body.appendChild(g),F.selectNodeContents(g),H.addRange(F);var _=document.execCommand("copy");if(!_)throw new Error("copy command was unsuccessful");K=!0}catch(k){P&&console.error("unable to copy using execCommand: ",k),P&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(C.format||"text",j),C.onCopy&&C.onCopy(window.clipboardData),K=!0}catch(X){P&&console.error("unable to copy using clipboardData: ",X),P&&console.error("falling back to prompt"),Y=J("message"in C?C.message:o),window.prompt(Y,j)}}finally{H&&(typeof H.removeRange=="function"?H.removeRange(F):H.removeAllRanges()),g&&document.body.removeChild(g),q()}return K}V.exports=W},11742:function(V){V.exports=function(){var D=document.getSelection();if(!D.rangeCount)return function(){};for(var l=document.activeElement,m=[],T=0;T<D.rangeCount;T++)m.push(D.getRangeAt(T));switch(l.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":l.blur();break;default:l=null;break}return D.removeAllRanges(),function(){D.type==="Caret"&&D.removeAllRanges(),D.rangeCount||m.forEach(function(o){D.addRange(o)}),l&&l.focus()}}}}]);
