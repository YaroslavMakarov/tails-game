(this["webpackJsonptiles-game"]=this["webpackJsonptiles-game"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports=n(32)},,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),s=n(1),l=(n(25),n(26),n(3)),o=n(2),u=function(e,t){return{type:"IS_OPEN_TILE",id:e,isOpen:t}},d={tiles:[{id:1,color:"red",isOpen:!1,isFindCouple:!1},{id:2,color:"maroon",isOpen:!1,isFindCouple:!1},{id:3,color:"pink",isOpen:!1,isFindCouple:!1},{id:4,color:"yellow",isOpen:!1,isFindCouple:!1},{id:5,color:"red",isOpen:!1,isFindCouple:!1},{id:6,color:"blue",isOpen:!1,isFindCouple:!1},{id:7,color:"pink",isOpen:!1,isFindCouple:!1},{id:8,color:"indigo",isOpen:!1,isFindCouple:!1},{id:9,color:"maroon",isOpen:!1,isFindCouple:!1},{id:10,color:"green",isOpen:!1,isFindCouple:!1},{id:11,color:"blue",isOpen:!1,isFindCouple:!1},{id:12,color:"indigo",isOpen:!1,isFindCouple:!1},{id:13,color:"teal",isOpen:!1,isFindCouple:!1},{id:14,color:"yellow",isOpen:!1,isFindCouple:!1},{id:15,color:"teal",isOpen:!1,isFindCouple:!1},{id:16,color:"green",isOpen:!1,isFindCouple:!1}]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_TILE":return{tiles:e.tiles.map((function(e){return t.id===e.id?Object(o.a)(Object(o.a)({},e),{},{isOpen:t.isOpen}):e}))};case"CLOSE_ALL_TILES":return{tiles:e.tiles.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{isOpen:!1})}))};case"IS_FIND_COUPLE":return{tiles:e.tiles.map((function(e){return e.color===t.color?Object(o.a)(Object(o.a)({},e),{},{isFindCouple:!0}):e}))};case"CHANGE_ALL_FIND_COUPLE_STATUS":return{tiles:e.tiles.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{isFindCouple:!1,isOpen:!1})}))};case"SHACKED_TILES":return{tiles:Object(l.a)(e.tiles).sort((function(){return Math.random()-.5}))};default:return e}},p=n(4),_=function(e){return{type:"SET_VIEWED_TILE",viewedTile:e}},E={viewedTile:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VIEWED_TILE":return{viewedTile:[].concat(Object(l.a)(e.viewedTile),[t.viewedTile])};case"REMOVE_ALL_TILES":return{viewedTile:[]};default:return e}},b={count:0},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREASE_COUNT":return{count:e.count+1};case"CLEAR_COUNT":return{count:0};default:return e}},v=function(e){return{type:"CHANGE_NICK_NAME",name:e}},C=function(e){return{type:"ADD_RESULT",result:e}},N={name:"Player",results:[]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NICK_NAME":return Object(o.a)(Object(o.a)({},e),{},{name:t.name});case"ADD_RESULT":return Object(o.a)(Object(o.a)({},e),{},{results:e.results.length>=10?[].concat(Object(l.a)(e.results.slice(1,10)),[t.result]):[].concat(Object(l.a)(e.results),[t.result])});default:return e}},j=function(e){return{type:"IS_START_GAME",status:e}},S={status:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_START_GAME":return{status:t.status};default:return e}},L=Object(p.b)({tails:m,viewedTail:O,count:f,results:g,startGame:T}),h=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),y=Object(p.c)(L,h);y.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}(y.getState())}));var A=function(e){return e.tails.tiles},I=function(e){return e.viewedTail.viewedTile},F=function(e){return e.count.count},w=function(e){return e.results.name},k=function(e){return e.results.results},U=function(e){return e.startGame.status},R=y,D=function(e){var t=e.tile,n=t.id,c=t.color,i=t.isOpen,l=t.isFindCouple,o=Object(s.b)(),d=Object(s.b)(),m=Object(s.b)(),p=Object(s.c)(I),E=Object(s.c)(A),O=Object(s.c)(F);return Object(a.useEffect)((function(){2===p.length&&(p[0].color!==p[1].color&&setTimeout((function(){o({type:"CLOSE_ALL_TILES"}),d({type:"REMOVE_ALL_TILES"})}),500),p[0].color===p[1].color&&setTimeout((function(){o(function(e){return{type:"IS_FIND_COUPLE",color:e}}(p[0].color)),d({type:"REMOVE_ALL_TILES"})}),500))}),[p]),r.a.createElement("div",{className:l?"tile tile__found":"tile",onClick:function(){!function(e){(p.length<=1||!E.some((function(e){return e.isOpen})))&&(0===p.length&&(o(u(n,!0)),d(_(e)),m({type:"INCREASE_COUNT"}),console.log(O,"first")),1===p.length&&p[0].id!==e.id&&(o(u(n,!0)),d(_(e)),m({type:"INCREASE_COUNT"}),console.log(O,"second")))}(t)},style:i?{backgroundColor:c}:{backgroundColor:"tan",transform:"rotateY(180deg)"}})},G=(n(27),function(){var e=Object(s.b)();Object(a.useEffect)((function(){e({type:"SHACKED_TILES"})}),[]);var t=Object(s.c)(A);return r.a.createElement("div",{className:"tiles"},t.map((function(e){return r.a.createElement(D,{key:e.id,tile:e})})))}),M=(n(28),function(){var e=Object(s.c)(F),t=Math.floor(e/2);return r.a.createElement("div",{className:"counter"},r.a.createElement("h1",null,"Steps to win: ".concat(t)))}),P=n(8),H=n(34),V=(n(29),n(30),function(e){var t=e.result,n=e.index;return r.a.createElement("div",{className:"results"},r.a.createElement("div",{className:"results__list"},r.a.createElement("div",{className:"results__item"},r.a.createElement("div",{className:"results__nickname results__description"},"".concat(n+1," ").concat(t.name,":")),r.a.createElement("div",{className:"results__steps results__description"},t.steps/2))))}),x=function(){var e=Object(s.b)(),t=Object(s.b)(),n=Object(s.b)(),c=Object(s.b)(),i=Object(s.c)(F),l=Object(s.c)(w),o=Object(s.c)(k),u=Object(a.useState)(!1),d=Object(P.a)(u,2),m=d[0],p=d[1];return r.a.createElement("div",{className:"restart"},!m&&r.a.createElement("div",{className:"restart__button-wrapper"},r.a.createElement("button",{onClick:function(){return e({type:"CHANGE_ALL_FIND_COUPLE_STATUS"}),t({type:"CLEAR_COUNT"}),void n(C({name:l,steps:i,id:Object(H.a)()}))},className:"restart__button"},"Restart game"),r.a.createElement("button",{className:"restart__button",onClick:function(){return n(C({name:l,steps:i,id:Object(H.a)()})),void p(!0)}},"Show latest results")),m&&r.a.createElement("div",{className:"restart__results-wrapper"},r.a.createElement("div",{className:"restart__result-header"},"Latest results :"),o.map((function(e,t){return r.a.createElement("div",{key:e.id},r.a.createElement(V,{result:e,index:t}))})),r.a.createElement("button",{className:"restart__results-button restart__button",onClick:function(){c(j(!1)),e({type:"CHANGE_ALL_FIND_COUPLE_STATUS"}),t({type:"CLEAR_COUNT"})}},"Restart game")))},J=(n(31),function(){var e=Object(a.useState)(!1),t=Object(P.a)(e,2),n=t[0],c=t[1],i=Object(s.c)(w),l=Object(s.b)(),o=Object(s.b)();return r.a.createElement("div",{className:"start-game"},r.a.createElement("div",{className:"start-game__container"},r.a.createElement("div",{className:"start-game__content"},r.a.createElement("div",{className:"start-game__input-description"},"Enter your nick name:"),r.a.createElement("div",{className:"start-game__input-wrapper"},r.a.createElement("input",{className:"start-game__input",type:"text",value:i,onChange:function(e){return function(e){var t=e.target.value.length;t<2||t>=10?(c(!0),l(v(e.target.value))):(c(!1),l(v(e.target.value)))}(e)}}),n&&r.a.createElement("div",{className:"start-game__nickname-alarm"},"nickname must be more than 2 and less than 11 characters")),r.a.createElement("button",{disabled:n,className:"start-game__button btn-grad",onClick:function(){return o(j(!0))}},"Start game"))))});var K=function(){var e=Object(s.c)(A);return Object(s.c)(U)?e.every((function(e){return e.isFindCouple}))?r.a.createElement(x,null):r.a.createElement("div",{className:"app"},r.a.createElement(M,null),r.a.createElement(G,null)):r.a.createElement(J,null)};i.a.render(r.a.createElement(s.a,{store:R},r.a.createElement(K,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.69f419f9.chunk.js.map