(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a62a479c"],{"99af":function(e,t,c){"use strict";var r=c("23e7"),s=c("da84"),n=c("d039"),a=c("e8b5"),l=c("861d"),u=c("7b0b"),i=c("07fa"),o=c("8418"),d=c("65f0"),b=c("1dde"),p=c("b622"),O=c("2d00"),j=p("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",f=s.TypeError,v=O>=51||!n((function(){var e=[];return e[j]=!1,e.concat()[0]!==e})),g=b("concat"),k=function(e){if(!l(e))return!1;var t=e[j];return void 0!==t?!!t:a(e)},V=!v||!g;r({target:"Array",proto:!0,forced:V},{concat:function(e){var t,c,r,s,n,a=u(this),l=d(a,0),b=0;for(t=-1,r=arguments.length;t<r;t++)if(n=-1===t?a:arguments[t],k(n)){if(s=i(n),b+s>m)throw f(h);for(c=0;c<s;c++,b++)c in n&&o(l,b,n[c])}else{if(b>=m)throw f(h);o(l,b++,n)}return l.length=b,l}})},a398:function(e,t,c){"use strict";c("c7ef")},b0c0:function(e,t,c){var r=c("83ab"),s=c("5e77").EXISTS,n=c("e330"),a=c("9bf2").f,l=Function.prototype,u=n(l.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,o=n(i.exec),d="name";r&&!s&&a(l,d,{configurable:!0,get:function(){try{return o(i,u(this))[1]}catch(e){return""}}})},c7ef:function(e,t,c){},cbe1:function(e,t,c){"use strict";var r=c("7a23"),s={class:"section section-progressbar",id:"section-progressbar"},n={class:"container"},a={class:"progressbar"};function l(e,t,c,l,u,i){return Object(r["B"])(),Object(r["g"])("section",s,[Object(r["h"])("div",n,[Object(r["h"])("ul",a,[Object(r["h"])("li",{class:Object(r["s"])(["progressCart",{active:"Cart"===c.currentProgress}])},"購物車",2),Object(r["h"])("li",{class:Object(r["s"])(["progressFill",{active:"Payment"===c.currentProgress}]),ref:"progressFill"},"填寫資料",2),Object(r["h"])("li",{class:Object(r["s"])(["progressOrder",{active:"Order"===c.currentProgress}])},"訂單確認",2)])])])}var u={props:{currentProgress:{type:String}}},i=c("6b0d"),o=c.n(i);const d=o()(u,[["render",l]]);t["a"]=d},d31c:function(e,t,c){"use strict";c.r(t);c("b0c0");var r=c("7a23"),s={class:"section section-payment"},n={class:"container"},a={class:"row"},l={class:"col"},u=Object(r["h"])("h3",{class:"title"},"收件人聯絡資訊",-1),i={class:"input-field"},o=Object(r["h"])("span",null,"收件人姓名",-1),d={class:"input-field"},b=Object(r["h"])("span",null,"電子信箱",-1),p={class:"input-field"},O=Object(r["h"])("span",null,"收件人電話",-1),j={class:"input-field"},m=Object(r["h"])("span",null,"收件人地址",-1),h={class:"col"},f=Object(r["h"])("h3",{class:"title"},"信用卡付款資料",-1),v=Object(r["h"])("div",{class:"input-field"},[Object(r["h"])("span",null,"信用卡付款"),Object(r["h"])("img",{src:"https://upload.cc/i1/2022/02/06/NPJZT9.png",alt:""})],-1),g={class:"input-field"},k=Object(r["h"])("span",null,"信用卡號碼",-1),V={class:"input-field"},y=Object(r["h"])("span",null,"到期月",-1),x={class:"flex"},P={class:"input-field"},w=Object(r["h"])("span",null,"到期年",-1),S={class:"input-field"},q=Object(r["h"])("span",null,"驗證碼",-1),J=Object(r["h"])("input",{type:"submit",class:"btn-main",value:"提交訂單"},null,-1),M=Object(r["j"])(" 返回購物車 ");function U(e,t,c,U,$,F){var C=Object(r["J"])("Progressbar"),E=Object(r["J"])("Field"),N=Object(r["J"])("ErrorMessage"),T=Object(r["J"])("Form"),B=Object(r["J"])("router-link");return Object(r["B"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(C,{currentProgress:$.currentProgress},null,8,["currentProgress"]),Object(r["h"])("section",s,[Object(r["h"])("div",n,[Object(r["k"])(T,{action:"",class:"form-payment",onSubmit:F.createOrder},{default:Object(r["V"])((function(e){var c=e.errors;return[Object(r["h"])("div",a,[Object(r["h"])("div",l,[u,Object(r["h"])("div",i,[o,Object(r["k"])(E,{type:"text",placeholder:"收件人姓名",class:"input-box",name:"姓名",modelValue:$.user.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return $.user.name=e}),rules:"required"},null,8,["modelValue"]),Object(r["k"])(N,{name:"姓名",class:Object(r["s"])({invalid:c["姓名"]})},null,8,["class"])]),Object(r["h"])("div",d,[b,Object(r["k"])(E,{type:"email",placeholder:"example.gmail.com",class:"input-box",name:"電子信箱",modelValue:$.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return $.user.email=e}),rules:"email|required"},null,8,["modelValue"]),Object(r["k"])(N,{name:"電子信箱",class:Object(r["s"])({invalid:c["電子信箱"]})},null,8,["class"])]),Object(r["h"])("div",p,[O,Object(r["k"])(E,{type:"tel",placeholder:"0988888888",name:"電話",modelValue:$.user.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return $.user.tel=e}),rules:"required|min:8|max:10"},null,8,["modelValue"]),Object(r["k"])(N,{name:"電話",class:Object(r["s"])({invalid:c["電話"]})},null,8,["class"])]),Object(r["h"])("div",j,[m,Object(r["k"])(E,{type:"text",placeholder:"收件人地址",name:"地址",modelValue:$.user.address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return $.user.address=e}),rules:"required"},null,8,["modelValue"]),Object(r["k"])(N,{name:"地址",class:Object(r["s"])({invalid:c["地址"]})},null,8,["class"])])]),Object(r["h"])("div",h,[f,v,Object(r["h"])("div",g,[k,Object(r["k"])(E,{type:"number",placeholder:"1111-2222-3333-4444",name:"信用卡號碼",modelValue:$.user.creditNum,"onUpdate:modelValue":t[4]||(t[4]=function(e){return $.user.creditNum=e}),rules:"required|min:16|max:16"},null,8,["modelValue"]),Object(r["k"])(N,{name:"信用卡號碼",class:Object(r["s"])({invalid:c["信用卡號碼"]})},null,8,["class"])]),Object(r["h"])("div",V,[y,Object(r["k"])(E,{type:"number",placeholder:"02",name:"到期月",modelValue:$.user.creditMonth,"onUpdate:modelValue":t[5]||(t[5]=function(e){return $.user.creditMonth=e}),rules:"required|between:1,12|min:2"},null,8,["modelValue"]),Object(r["k"])(N,{name:"到期月",class:Object(r["s"])({invalid:c["到期月"]})},null,8,["class"])]),Object(r["h"])("div",x,[Object(r["h"])("div",P,[w,Object(r["k"])(E,{type:"number",placeholder:"2022",name:"到期年",rules:"required|min:4|max:4"}),Object(r["k"])(N,{name:"到期年",class:Object(r["s"])({invalid:c["到期年"]})},null,8,["class"])]),Object(r["h"])("div",S,[q,Object(r["k"])(E,{type:"number",placeholder:"123",name:"驗證碼",rules:"required|min:3|max:3"}),Object(r["k"])(N,{name:"驗證碼",class:Object(r["s"])({invalid:c["驗證碼"]})},null,8,["class"])])])])]),J]})),_:1},8,["onSubmit"]),Object(r["k"])(B,{to:"/cart",class:"back-link"},{default:Object(r["V"])((function(){return[M]})),_:1})])])],64)}c("99af");var $=c("cbe1"),F={data:function(){return{user:{},currentProgress:this.$route.name}},components:{Progressbar:$["a"]},methods:{createOrder:function(){var e=this,t="提交訂單",c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("freedom","/order"),r={data:{user:this.user}};this.$http.post(c,r).then((function(c){c.data.success?(e.$httpMessageState(c,t),e.$router.push("/order/".concat(c.data.orderId))):e.$httpMessageState(c,t)})).catch((function(c){e.$httpMessageState(c,t)}))}}},C=(c("a398"),c("6b0d")),E=c.n(C);const N=E()(F,[["render",U]]);t["default"]=N}}]);
//# sourceMappingURL=chunk-a62a479c.057b7e8f.js.map