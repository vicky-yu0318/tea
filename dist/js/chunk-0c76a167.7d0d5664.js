(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c76a167"],{"00b4":function(t,e,n){"use strict";n("ac1f");var r=n("23e7"),i=n("da84"),a=n("c65b"),o=n("e330"),c=n("1626"),s=n("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),f=i.Error,d=o(/./.test);r({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!c(e))return d(this,t);var n=a(e,this,t);if(null!==n&&!s(n))throw new f("RegExp exec method returned something other than an Object or null");return!!n}})},"057f":function(t,e,n){var r=n("c6b6"),i=n("fc6a"),a=n("241c").f,o=n("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return o(c)}};t.exports.f=function(t){return c&&"Window"==r(t)?s(t):a(i(t))}},1799:function(t,e,n){"use strict";var r=n("7a23"),i={class:"section section-pagination"},a={class:"container"},o={class:"pagination"},c=Object(r["h"])("i",{class:"fas fa-angle-left"},null,-1),s=[c],u={key:0,href:"",class:"page-link"},f=["onClick"],d=Object(r["h"])("i",{class:"fas fa-angle-right"},null,-1),l=[d];function v(t,e,n,c,d,v){return Object(r["B"])(),Object(r["g"])("section",i,[Object(r["h"])("div",a,[Object(r["h"])("ul",o,[Object(r["h"])("li",{class:Object(r["s"])(["page-item",{disabled:1===n.pages.current_page}])},[Object(r["h"])("a",{onClick:e[0]||(e[0]=Object(r["X"])((function(t){return v.emitPage(n.pages.current_page-1)}),["prevent"])),class:"page-link"},s)],2),(Object(r["B"])(!0),Object(r["g"])(r["a"],null,Object(r["H"])(n.pages.total_pages,(function(t){return Object(r["B"])(),Object(r["g"])("li",{class:Object(r["s"])(["page-item",{active:n.pages.current_page===t}]),key:t},[n.pages.current_page===t?(Object(r["B"])(),Object(r["g"])("span",u,Object(r["M"])(t),1)):(Object(r["B"])(),Object(r["g"])("a",{key:1,onClick:Object(r["X"])((function(e){return v.emitPage(t)}),["prevent"]),class:"page-link"},Object(r["M"])(t),9,f))],2)})),128)),Object(r["h"])("li",{class:Object(r["s"])(["page-item",{disabled:n.pages.current_page===n.pages.total_pages}])},[Object(r["h"])("a",{onClick:e[1]||(e[1]=Object(r["X"])((function(t){return v.emitPage(n.pages.current_page+1)}),["prevent"])),class:"page-link"},l)],2)])])])}var b={props:["pages"],mounted:function(){},methods:{emitPage:function(t){this.$emit("emit-page",t)}}},h=n("6b0d"),p=n.n(h);const g=p()(b,[["render",v]]);e["a"]=g},1915:function(t,e,n){"use strict";function r(){window.pageYOffset>100&&window.scrollTo({top:0,behavior:"smooth"})}n.d(e,"a",(function(){return r}))},"1c33":function(t,e,n){"use strict";n("e9c4"),n("caad"),n("2532"),n("a434");e["a"]={methods:{save:function(t){var e=JSON.stringify(t);localStorage.setItem("teaFavorite",e)},get:function(){return JSON.parse(localStorage.getItem("teaFavorite"))},addMyFavorite:function(t){if(this.myFavorite.includes(t)){var e="商品已從收藏清單中移除";this.myFavorite.splice(this.myFavorite.indexOf(t),1),this.$httpSideMessageState(e,!1)}else{var n="加入我的收藏清單";this.myFavorite.push(t),this.$httpSideMessageState(n)}this.save(this.myFavorite),this.emitter.emit("update-favorite")}},inject:["emitter"],watch:{myFavorite:{handler:function(){this.save(this.myFavorite)},deep:!0}}}},2532:function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),a=n("5a34"),o=n("1d80"),c=n("577e"),s=n("ab13"),u=i("".indexOf);r({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~u(c(o(this)),c(a(t)),arguments.length>1?arguments[1]:void 0)}})},"428f":function(t,e,n){var r=n("da84");t.exports=r},"466d":function(t,e,n){"use strict";var r=n("c65b"),i=n("d784"),a=n("825a"),o=n("50c4"),c=n("577e"),s=n("1d80"),u=n("dc4a"),f=n("8aa5"),d=n("14c3");i("match",(function(t,e,n){return[function(e){var n=s(this),i=void 0==e?void 0:u(e,t);return i?r(i,e,n):new RegExp(e)[t](c(n))},function(t){var r=a(this),i=c(t),s=n(e,r,i);if(s.done)return s.value;if(!r.global)return d(r,i);var u=r.unicode;r.lastIndex=0;var l,v=[],b=0;while(null!==(l=d(r,i))){var h=c(l[0]);v[b]=h,""===h&&(r.lastIndex=f(i,o(r.lastIndex),u)),b++}return 0===b?null:v}]}))},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,a=n("1dde"),o=a("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("da84"),i=n("0366"),a=n("c65b"),o=n("7b0b"),c=n("9bdd"),s=n("e95a"),u=n("68ee"),f=n("07fa"),d=n("8418"),l=n("9a1f"),v=n("35a1"),b=r.Array;t.exports=function(t){var e=o(t),n=u(this),r=arguments.length,h=r>1?arguments[1]:void 0,p=void 0!==h;p&&(h=i(h,r>2?arguments[2]:void 0));var g,y,O,m,j,x,w=v(e),S=0;if(!w||this==b&&s(w))for(g=f(e),y=n?new this(g):b(g);g>S;S++)x=p?h(e[S],S):e[S],d(y,S,x);else for(m=l(e,w),j=m.next,y=n?new this:[];!(O=a(j,m)).done;S++)x=p?c(m,h,[O.value,S],!0):O.value,d(y,S,x);return y.length=S,y}},"4fad":function(t,e,n){var r=n("d039"),i=n("861d"),a=n("c6b6"),o=n("d86b"),c=Object.isExtensible,s=r((function(){c(1)}));t.exports=s||o?function(t){return!!i(t)&&((!o||"ArrayBuffer"!=a(t))&&(!c||c(t)))}:c},"5a34":function(t,e,n){var r=n("da84"),i=n("44e7"),a=r.TypeError;t.exports=function(t){if(i(t))throw a("The method doesn't accept regular expressions");return t}},6062:function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,i=n("7c73"),a=n("e2cc"),o=n("0366"),c=n("19aa"),s=n("2266"),u=n("7dd0"),f=n("2626"),d=n("83ab"),l=n("f183").fastKey,v=n("69f3"),b=v.set,h=v.getterFor;t.exports={getConstructor:function(t,e,n,u){var f=t((function(t,r){c(t,v),b(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=r&&s(r,t[u],{that:t,AS_ENTRIES:n})})),v=f.prototype,p=h(e),g=function(t,e,n){var r,i,a=p(t),o=y(t,e);return o?o.value=n:(a.last=o={index:i=l(e,!0),key:e,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=o),r&&(r.next=o),d?a.size++:t.size++,"F"!==i&&(a.index[i]=o)),t},y=function(t,e){var n,r=p(t),i=l(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return a(v,{clear:function(){var t=this,e=p(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=p(e),r=y(e,t);if(r){var i=r.next,a=r.previous;delete n.index[r.index],r.removed=!0,a&&(a.next=i),i&&(i.previous=a),n.first==r&&(n.first=i),n.last==r&&(n.last=a),d?n.size--:e.size--}return!!r},forEach:function(t){var e,n=p(this),r=o(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),a(v,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&r(v,"size",{get:function(){return p(this).size}}),f},setStrong:function(t,e,n){var r=e+" Iterator",i=h(e),a=h(r);u(t,e,(function(t,e){b(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("e330"),o=n("94ca"),c=n("6eeb"),s=n("f183"),u=n("2266"),f=n("19aa"),d=n("1626"),l=n("861d"),v=n("d039"),b=n("1c7e"),h=n("d44e"),p=n("7156");t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),O=g?"set":"add",m=i[t],j=m&&m.prototype,x=m,w={},S=function(t){var e=a(j[t]);c(j,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!l(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return y&&!l(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!l(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},k=o(t,!d(m)||!(y||j.forEach&&!v((function(){(new m).entries().next()}))));if(k)x=n.getConstructor(e,t,g,O),s.enable();else if(o(t,!0)){var F=new x,C=F[O](y?{}:-0,1)!=F,E=v((function(){F.has(1)})),P=b((function(t){new m(t)})),A=!y&&v((function(){var t=new m,e=5;while(e--)t[O](e,e);return!t.has(-0)}));P||(x=e((function(t,e){f(t,j);var n=p(new m,t,x);return void 0!=e&&u(e,n[O],{that:n,AS_ENTRIES:g}),n})),x.prototype=j,j.constructor=x),(E||A)&&(S("delete"),S("has"),g&&S("get")),(A||C)&&S(O),y&&j.clear&&delete j.clear}return w[t]=x,r({global:!0,forced:x!=m},w),h(x,t),y||n.setStrong(x,t,g),x}},7156:function(t,e,n){var r=n("1626"),i=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var o,c;return a&&r(o=e.constructor)&&o!==n&&i(c=o.prototype)&&c!==n.prototype&&a(t,c),t}},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),a=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("d039"),o=n("e8b5"),c=n("861d"),s=n("7b0b"),u=n("07fa"),f=n("8418"),d=n("65f0"),l=n("1dde"),v=n("b622"),b=n("2d00"),h=v("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",y=i.TypeError,O=b>=51||!a((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=l("concat"),j=function(t){if(!c(t))return!1;var e=t[h];return void 0!==e?!!e:o(t)},x=!O||!m;r({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,r,i,a,o=s(this),c=d(o,0),l=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?o:arguments[e],j(a)){if(i=u(a),l+i>p)throw y(g);for(n=0;n<i;n++,l++)n in a&&f(c,l,a[n])}else{if(l>=p)throw y(g);f(c,l++,a)}return c.length=l,c}})},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(o){i(t,"throw",o)}}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("d066"),o=n("2ba4"),c=n("c65b"),s=n("e330"),u=n("c430"),f=n("83ab"),d=n("4930"),l=n("d039"),v=n("1a2d"),b=n("e8b5"),h=n("1626"),p=n("861d"),g=n("3a9b"),y=n("d9b5"),O=n("825a"),m=n("7b0b"),j=n("fc6a"),x=n("a04b"),w=n("577e"),S=n("5c6c"),k=n("7c73"),F=n("df75"),C=n("241c"),E=n("057f"),P=n("7418"),A=n("06cf"),M=n("9bf2"),B=n("d1e7"),I=n("f36a"),$=n("6eeb"),D=n("5692"),N=n("f772"),z=n("d012"),T=n("90e3"),_=n("b622"),J=n("e538"),R=n("746f"),X=n("d44e"),H=n("69f3"),W=n("b727").forEach,K=N("hidden"),U="Symbol",q="prototype",Q=_("toPrimitive"),Y=H.set,G=H.getterFor(U),L=Object[q],V=i.Symbol,Z=V&&V[q],tt=i.TypeError,et=i.QObject,nt=a("JSON","stringify"),rt=A.f,it=M.f,at=E.f,ot=B.f,ct=s([].push),st=D("symbols"),ut=D("op-symbols"),ft=D("string-to-symbol-registry"),dt=D("symbol-to-string-registry"),lt=D("wks"),vt=!et||!et[q]||!et[q].findChild,bt=f&&l((function(){return 7!=k(it({},"a",{get:function(){return it(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=rt(L,e);r&&delete L[e],it(t,e,n),r&&t!==L&&it(L,e,r)}:it,ht=function(t,e){var n=st[t]=k(Z);return Y(n,{type:U,tag:t,description:e}),f||(n.description=e),n},pt=function(t,e,n){t===L&&pt(ut,e,n),O(t);var r=x(e);return O(n),v(st,r)?(n.enumerable?(v(t,K)&&t[K][r]&&(t[K][r]=!1),n=k(n,{enumerable:S(0,!1)})):(v(t,K)||it(t,K,S(1,{})),t[K][r]=!0),bt(t,r,n)):it(t,r,n)},gt=function(t,e){O(t);var n=j(e),r=F(n).concat(xt(n));return W(r,(function(e){f&&!c(Ot,n,e)||pt(t,e,n[e])})),t},yt=function(t,e){return void 0===e?k(t):gt(k(t),e)},Ot=function(t){var e=x(t),n=c(ot,this,e);return!(this===L&&v(st,e)&&!v(ut,e))&&(!(n||!v(this,e)||!v(st,e)||v(this,K)&&this[K][e])||n)},mt=function(t,e){var n=j(t),r=x(e);if(n!==L||!v(st,r)||v(ut,r)){var i=rt(n,r);return!i||!v(st,r)||v(n,K)&&n[K][r]||(i.enumerable=!0),i}},jt=function(t){var e=at(j(t)),n=[];return W(e,(function(t){v(st,t)||v(z,t)||ct(n,t)})),n},xt=function(t){var e=t===L,n=at(e?ut:j(t)),r=[];return W(n,(function(t){!v(st,t)||e&&!v(L,t)||ct(r,st[t])})),r};if(d||(V=function(){if(g(Z,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?w(arguments[0]):void 0,e=T(t),n=function(t){this===L&&c(n,ut,t),v(this,K)&&v(this[K],e)&&(this[K][e]=!1),bt(this,e,S(1,t))};return f&&vt&&bt(L,e,{configurable:!0,set:n}),ht(e,t)},Z=V[q],$(Z,"toString",(function(){return G(this).tag})),$(V,"withoutSetter",(function(t){return ht(T(t),t)})),B.f=Ot,M.f=pt,A.f=mt,C.f=E.f=jt,P.f=xt,J.f=function(t){return ht(_(t),t)},f&&(it(Z,"description",{configurable:!0,get:function(){return G(this).description}}),u||$(L,"propertyIsEnumerable",Ot,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:V}),W(F(lt),(function(t){R(t)})),r({target:U,stat:!0,forced:!d},{for:function(t){var e=w(t);if(v(ft,e))return ft[e];var n=V(e);return ft[e]=n,dt[n]=e,n},keyFor:function(t){if(!y(t))throw tt(t+" is not a symbol");if(v(dt,t))return dt[t]},useSetter:function(){vt=!0},useSimple:function(){vt=!1}}),r({target:"Object",stat:!0,forced:!d,sham:!f},{create:yt,defineProperty:pt,defineProperties:gt,getOwnPropertyDescriptor:mt}),r({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:jt,getOwnPropertySymbols:xt}),r({target:"Object",stat:!0,forced:l((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(m(t))}}),nt){var wt=!d||l((function(){var t=V();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));r({target:"JSON",stat:!0,forced:wt},{stringify:function(t,e,n){var r=I(arguments),i=e;if((p(e)||void 0!==t)&&!y(t))return b(e)||(e=function(t,e){if(h(i)&&(e=c(i,this,t,e)),!y(e))return e}),r[1]=e,o(nt,null,r)}})}if(!Z[Q]){var St=Z.valueOf;$(Z,Q,(function(t){return c(St,this)}))}X(V,U),z[K]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),a=n("1c7e"),o=!a((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:i})},ab13:function(t,e,n){var r=n("b622"),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,a=n("e330"),o=n("9bf2").f,c=Function.prototype,s=a(c.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,f=a(u.exec),d="name";r&&!i&&o(c,d,{configurable:!0,get:function(){try{return f(u,s(this))[1]}catch(t){return""}}})},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,a=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d28b:function(t,e,n){var r=n("746f");r("iterator")},d86b:function(t,e,n){var r=n("d039");t.exports=r((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),a=n("da84"),o=n("e330"),c=n("1a2d"),s=n("1626"),u=n("3a9b"),f=n("577e"),d=n("9bf2").f,l=n("e893"),v=a.Symbol,b=v&&v.prototype;if(i&&s(v)&&(!("description"in b)||void 0!==v().description)){var h={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=u(b,this)?new v(t):void 0===t?v():v(t);return""===t&&(h[e]=!0),e};l(p,v),p.prototype=b,b.constructor=p;var g="Symbol(test)"==String(v("test")),y=o(b.toString),O=o(b.valueOf),m=/^Symbol\((.*)\)[^)]+$/,j=o("".replace),x=o("".slice);d(b,"description",{configurable:!0,get:function(){var t=O(this),e=y(t);if(c(h,t))return"";var n=g?x(e,7,-1):j(e,m,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},e538:function(t,e,n){var r=n("b622");e.f=r},e9c4:function(t,e,n){var r=n("23e7"),i=n("da84"),a=n("d066"),o=n("2ba4"),c=n("e330"),s=n("d039"),u=i.Array,f=a("JSON","stringify"),d=c(/./.exec),l=c("".charAt),v=c("".charCodeAt),b=c("".replace),h=c(1..toString),p=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,y=/^[\uDC00-\uDFFF]$/,O=function(t,e,n){var r=l(n,e-1),i=l(n,e+1);return d(g,t)&&!d(y,i)||d(y,t)&&!d(g,r)?"\\u"+h(v(t,0),16):t},m=s((function(){return'"\\udf06\\ud834"'!==f("\udf06\ud834")||'"\\udead"'!==f("\udead")}));f&&r({target:"JSON",stat:!0,forced:m},{stringify:function(t,e,n){for(var r=0,i=arguments.length,a=u(i);r<i;r++)a[r]=arguments[r];var c=o(f,null,a);return"string"==typeof c?b(c,p,O):c}})},ed84:function(t,e,n){"use strict";n.r(e);n("caad"),n("2532");var r=n("7a23"),i={class:"section section-products",id:"section-products"},a={class:"container"},o={class:"select-button-group"},c=["onClick"],s={class:"item-group"},u=Object(r["h"])("span",{class:"discount-label"},"sale",-1),f={class:"image"},d=["src"],l={class:"icons"},v=["onClick"],b={class:"content"},h={class:"flex"},p={class:"price"},g=["onClick"],y=Object(r["i"])('<div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><span>(50)</span></div>',1);function O(t,e,n,O,m,j){var x=Object(r["J"])("router-link"),w=Object(r["J"])("Pagination");return Object(r["B"])(),Object(r["g"])(r["a"],null,[Object(r["h"])("section",i,[Object(r["h"])("div",a,[Object(r["h"])("div",o,[Object(r["h"])("button",{class:Object(r["s"])(["btn-main btn-select",{active:""===m.selectCategory}]),onClick:e[0]||(e[0]=function(t){return m.selectCategory=""})},"全部",2),(Object(r["B"])(!0),Object(r["g"])(r["a"],null,Object(r["H"])(m.categories,(function(t){return Object(r["B"])(),Object(r["g"])("button",{class:Object(r["s"])(["btn-main btn-select",{active:m.selectCategory===t}]),key:t,onClick:function(e){return m.selectCategory=t}},Object(r["M"])(t),11,c)})),128))]),Object(r["h"])("div",s,[(Object(r["B"])(!0),Object(r["g"])(r["a"],null,Object(r["H"])(j.filterProducts,(function(e){return Object(r["B"])(),Object(r["g"])("div",{class:"item",key:e.id,"data-aos":"fade-up","data-aos-duration":"2000"},[u,Object(r["h"])("div",f,[Object(r["h"])("img",{src:e.imageUrl},null,8,d),Object(r["h"])("div",l,[Object(r["h"])("div",{class:"fas fa-shopping-cart",onClick:Object(r["X"])((function(t){return j.addToCart(e)}),["prevent"])},null,8,v),Object(r["k"])(x,{to:"/product/".concat(e.id),class:"fas fa-eye"},null,8,["to"])])]),Object(r["h"])("div",b,[Object(r["h"])("div",h,[Object(r["h"])("div",p,Object(r["M"])(t.$filters.toCurrency(e.price)),1),Object(r["h"])("i",{class:Object(r["s"])(["fas fa-heart",{active:m.myFavorite.includes(e.id)}]),onClick:function(n){return t.addMyFavorite(e.id)}},null,10,g)]),Object(r["h"])("h3",null,Object(r["M"])(e.title),1),y])])})),128))])])]),m.pagination?(Object(r["B"])(),Object(r["e"])(w,{key:0,pages:m.pagination,onEmitPage:j.getProducts},null,8,["pages","onEmitPage"])):Object(r["f"])("",!0)],64)}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function j(t){if(Array.isArray(t))return m(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function x(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a"),n("b0c0"),n("ac1f"),n("00b4");function w(t,e){if(t){if("string"===typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}function S(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function k(t){return j(t)||x(t)||w(t)||S()}n("99af"),n("6062"),n("159b"),n("4de4"),n("466d");var F=n("37ca"),C=n("1799"),E=n("1915"),P=n("1c33"),A={data:function(){return{products:[],categories:"",selectCategory:"",pagination:"",myFavorite:this.get()||[]}},mixins:[P["a"]],mounted:function(){var t=this;this.getProducts(),F["a"].on("update-favorite",(function(){t.myFavorite=t.get()||[]}))},components:{Pagination:C["a"]},methods:{getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("freedom","/products/all");this.$http.get(e).then((function(e){e.data.success&&(t.products=e.data.products,t.pagination=e.data.pagination,Object(E["a"])(),t.getCategories())})).catch((function(e){t.$httpMessageState(e,"接收產品資訊")}))},getCategories:function(){var t=new Set;this.products.forEach((function(e){t.add(e.category)})),this.categories=k(t)},addToCart:function(t){var e=this,n="加入購物車",r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("freedom","/cart"),i={product_id:t.id,qty:1};this.$http.post(r,{data:i}).then((function(t){t.data.success?(e.$httpMessageState(t,n),F["a"].emit("update-cart")):e.$httpMessageState(t,n)})).catch((function(t){e.$httpMessageState(t,n)}))}},computed:{filterProducts:function(){var t=this;return this.products.filter((function(e){return e.category.match(t.selectCategory)}))}}},M=n("6b0d"),B=n.n(M);const I=B()(A,[["render",O]]);e["default"]=I},f183:function(t,e,n){var r=n("23e7"),i=n("e330"),a=n("d012"),o=n("861d"),c=n("1a2d"),s=n("9bf2").f,u=n("241c"),f=n("057f"),d=n("4fad"),l=n("90e3"),v=n("bb2f"),b=!1,h=l("meta"),p=0,g=function(t){s(t,h,{value:{objectID:"O"+p++,weakData:{}}})},y=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!c(t,h)){if(!d(t))return"F";if(!e)return"E";g(t)}return t[h].objectID},O=function(t,e){if(!c(t,h)){if(!d(t))return!0;if(!e)return!1;g(t)}return t[h].weakData},m=function(t){return v&&b&&d(t)&&!c(t,h)&&g(t),t},j=function(){x.enable=function(){},b=!0;var t=u.f,e=i([].splice),n={};n[h]=1,t(n).length&&(u.f=function(n){for(var r=t(n),i=0,a=r.length;i<a;i++)if(r[i]===h){e(r,i,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:f.f}))},x=t.exports={enable:j,fastKey:y,getWeakData:O,onFreeze:m};a[h]=!0},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("e8b5"),o=n("68ee"),c=n("861d"),s=n("23cb"),u=n("07fa"),f=n("fc6a"),d=n("8418"),l=n("b622"),v=n("1dde"),b=n("f36a"),h=v("slice"),p=l("species"),g=i.Array,y=Math.max;r({target:"Array",proto:!0,forced:!h},{slice:function(t,e){var n,r,i,l=f(this),v=u(l),h=s(t,v),O=s(void 0===e?v:e,v);if(a(l)&&(n=l.constructor,o(n)&&(n===g||a(n.prototype))?n=void 0:c(n)&&(n=n[p],null===n&&(n=void 0)),n===g||void 0===n))return b(l,h,O);for(r=new(void 0===n?g:n)(y(O-h,0)),i=0;h<O;h++,i++)h in l&&d(r,i,l[h]);return r.length=i,r}})}}]);
//# sourceMappingURL=chunk-0c76a167.7d0d5664.js.map