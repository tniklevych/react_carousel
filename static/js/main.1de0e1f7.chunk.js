(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(4),a=n.n(i),s=n(2),c=n(1),r=(n(9),n(10),n(0)),l=function(e){var t=e.images,n=e.step,i=e.frameSize,a=e.itemWidth,s=e.animationDuration,c=e.infinite,l=e.position,o=e.setPosition,m=t.length-i,u=c&&i===t.length||0===l&&!c,b=c&&i===t.length||l===m&&!c,d=function(e){var t=e.lastIndexOf("."),n=e.lastIndexOf("/"),i="";return-1!==t&&-1!==n&&(i=e.slice(n+1,t)),i};return Object(r.jsxs)("div",{className:"Carousel",style:{width:"".concat(i*a,"px")},children:[Object(r.jsx)("div",{className:"Carousel__wrapper",children:Object(r.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(a*t.length,"px")},children:t.map((function(e){return Object(r.jsx)("li",{className:"Carousel__item",style:{transform:"translateX(".concat(-l*a,"px)"),transition:"transform ".concat(s,"ms")},children:Object(r.jsx)("img",{src:e,width:a,className:"Carousel__img",alt:d(e)})},d(e))}))})}),Object(r.jsxs)("div",{className:"Carousel__btns",children:[Object(r.jsx)("button",{type:"button",className:"Carousel__btn ".concat(u?"Carousel__btn-disabled":""),onClick:function(){o(l-n>0?l-n:0),c&&0===l&&o(m)},disabled:u,children:"Prev"}),Object(r.jsx)("button",{"data-cy":"next",type:"button",className:"Carousel__btn ".concat(b?"Carousel__btn-disabled":""),onClick:function(){o(l+n<m?l+n:m),c&&l===m&&o(0)},disabled:b,children:"Next"})]})]})},o=(n(12),function(e){var t=e.images,n=e.step,i=e.setStep,a=e.frameSize,s=e.setFrameSize,c=e.itemWidth,l=e.setItemWidth,o=e.animationDuration,m=e.setAnimationDuration,u=e.infinite,b=e.setInfinite,d=e.setPosition;return Object(r.jsxs)("form",{action:"#",method:"GET",className:"SettingForm",children:[Object(r.jsxs)("label",{htmlFor:"stepId",className:"SettingForm__label",children:["Step:",Object(r.jsx)("input",{id:"stepId",type:"number",className:"SettingForm__input",min:1,max:t.length-a,value:n,onChange:function(e){i(+e.currentTarget.value),d(0)}})]}),Object(r.jsxs)("label",{htmlFor:"frameSizeId",className:"SettingForm__label",children:["Frame size:",Object(r.jsx)("input",{id:"fremeSizeId",type:"number",className:"SettingForm__input",min:1,max:t.length,value:a,onChange:function(e){s(+e.currentTarget.value),d(0)}})]}),Object(r.jsxs)("label",{htmlFor:"itemWidthId",className:"SettingForm__label",children:["Item width:",Object(r.jsx)("input",{id:"itemWidthId",type:"number",className:"SettingForm__input",min:50,step:5,value:c,onChange:function(e){l(+e.currentTarget.value),d(0)}})]}),Object(r.jsxs)("label",{htmlFor:"animationDurationId",className:"SettingForm__label",children:["Animation duration:",Object(r.jsx)("input",{id:"animationDurationId",type:"number",className:"SettingForm__input",min:0,step:100,value:o,onChange:function(e){m(+e.currentTarget.value),d(0)}})]}),Object(r.jsxs)("label",{htmlFor:"infiniteId",className:"SettingForm__label",children:["Infinite:",Object(r.jsx)("input",{id:"infiniteId",type:"checkbox",className:"SettingForm__checkbox",checked:u,onChange:function(e){b(e.target.checked),d(0)}})]})]})}),m=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],u=function(){var e=Object(c.useState)(3),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(3),u=Object(s.a)(a,2),b=u[0],d=u[1],j=Object(c.useState)(130),g=Object(s.a)(j,2),h=g[0],p=g[1],_=Object(c.useState)(1e3),O=Object(s.a)(_,2),f=O[0],x=O[1],S=Object(c.useState)(!1),N=Object(s.a)(S,2),F=N[0],I=N[1],v=Object(c.useState)(0),C=Object(s.a)(v,2),y=C[0],z=C[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("h1",{className:"App__title","data-cy":"title",children:["Carousel with",m.length,"images"]}),Object(r.jsx)(o,{images:m,step:n,setStep:i,frameSize:b,setFrameSize:d,itemWidth:h,setItemWidth:p,animationDuration:f,setAnimationDuration:x,infinite:F,setInfinite:I,setPosition:z}),Object(r.jsx)(l,{images:m,step:n,frameSize:b,itemWidth:h,animationDuration:f,infinite:F,position:y,setPosition:z})]})};a.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.1de0e1f7.chunk.js.map