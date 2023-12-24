(this["webpackJsonpassignment-3"]=this["webpackJsonpassignment-3"]||[]).push([[0],{17:function(e,n,t){e.exports=t.p+"static/media/bg3.13a2ec5b.png"},19:function(e,n,t){e.exports=t(30)},26:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a,r,o,l,i,s=t(0),c=t.n(s),d=t(13),u=t.n(d),m=(t(26),t(3)),p=t(6),x=t(2),b=t(18),g=t(4);const E=g.a.div(a||(a=Object(m.a)(["\n  border: 1px solid #121212;\n  margin: 20px 0px;\n"]))),f=g.a.div(r||(r=Object(m.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),v=g.a.div(o||(o=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  font-size: 1.3rem;\n"]))),k=g.a.div(l||(l=Object(m.a)(["\n  padding: 25px;\n  display: flex;\n  align-items: center;\n"]))),h=g.a.table(i||(i=Object(m.a)([""])));var O,j,y,w=e=>{let{title:n,component:t,propDocs:a}=e;return c.a.createElement(E,null,c.a.createElement(v,null,n),c.a.createElement(f,null,c.a.createElement(k,null,t),c.a.createElement(h,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Prop"),c.a.createElement("th",null,"Description"),c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Default value"))),c.a.createElement("tbody",null,a.map((e,n)=>c.a.createElement("tr",{key:n},c.a.createElement("td",null,e.prop),c.a.createElement("td",null,e.description),c.a.createElement("td",null,e.type),c.a.createElement("td",null,c.a.createElement("code",null,e.defaultValue))))))))};const T="#ffa2bf",I={small:10,medium:14,large:20},S=g.a.div(O||(O=Object(m.a)(["\n  animation: spin 1.5s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),C=g.a.span(j||(j=Object(m.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: wobble 1s ease-in-out infinite;\n\n  @keyframes wobble {\n    0% {\n      border-radius: 25%;\n    }\n    100% {\n      border-radius: 100%;\n    }\n  }\n"])),e=>e.size,e=>e.size,e=>e.color),z=g.a.div(y||(y=Object(m.a)(["\n  display: flex;\n"])));var R,A,N=e=>{let{size:n="medium",color:t=T}=e;return c.a.createElement(S,null,c.a.createElement(z,null,c.a.createElement(C,{size:I[n],color:t}),c.a.createElement(C,{size:I[n],color:t})),c.a.createElement(z,null,c.a.createElement(C,{size:I[n],color:t}),c.a.createElement(C,{size:I[n],color:t})))};const D=g.a.div(R||(R=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),M=g.a.div(A||(A=Object(m.a)(["\n  font-size: 2rem;\n"])));var P,X=()=>c.a.createElement(D,null,c.a.createElement("div",null,c.a.createElement(M,null,"Documentation"),c.a.createElement(w,{title:"Loading spinner ",component:c.a.createElement(N,null),propDocs:[{prop:"size",description:"Changes the size of the loading spinner",type:"string",defaultValue:"medium"}]}))),W=t(5);const Y=g.a.div(P||(P=Object(m.a)(["\n  transition: opacity 0.5s ease-in-out;\n  font-size: 60px;\n  z-index: 0;\n  font-weight: 200;\n  padding: 7px 7px;\n  margin-bottom: 10px;\n  color: red;\n  text-align: center;\n  background-color: #121212;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n  position: relative;\n\n  background-image: \n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%);\n  background-size: 30px 30px, 30px 30px, 30px 30px, 30px 30px;\n  background-position: 0 0, 10px 10px, 20px 20px, 15px 15px;\n\n\n  \n  }\n"]))),J=e=>{const n=("0"+Math.floor(e/6e4%60)).slice(-2),t=("0"+Math.floor(e/1e3%60)).slice(-2);return"".concat(n,":").concat(t)};var U,B,F,q,H=e=>{let{time:n}=e;return c.a.createElement(Y,null,J(n))};const V=g.a.div(U||(U=Object(m.a)(["\n  display: flex;\n  margin-bottom: 10px;\n  flex-direction: row;\n  align-items: center;\n  background-color: #121212;\n  \n  border-radius: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n  background-image: \n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%);\n  background-size: 30px 30px, 30px 30px, 30px 30px, 30px 30px;\n  background-position: 0 0, 10px 10px, 20px 20px, 15px 15px;\n"]))),L=g.a.div(B||(B=Object(m.a)(["\n  flex: 1;\n  align-items: center;\n  border-radius: 25px;\n  margin: 10px;\n  padding-left: 5px;\n  padding-right: 5px;\n  background-color: black;\n"]))),K=g.a.label(F||(F=Object(m.a)(["\n  flex: 1; \n  font-weight: 300;\n  font-size: 16px;\n  background-color: black;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n"]))),G=g.a.select(q||(q=Object(m.a)(["\n  flex: 1;\n  font-weight: 300;\n  font-size: 16px;\n  padding: 7px;\n  margin: 12px 0px 12px 12px;\n  background-color: darkred;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 25px;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: black;\n  }\n"])));var Q=e=>{let{minutes:n,setMinutes:t,seconds:a,setSeconds:r,disabled:o}=e;const l=(e,n)=>{const t=[];for(let a=e;a<=n;a++)t.push(c.a.createElement("option",{key:a,value:a},a<10?"0".concat(a):a));return t};return c.a.createElement(V,null,c.a.createElement(L,null,c.a.createElement(K,null,"MINUTES:"),c.a.createElement(G,{value:n,onChange:e=>t(Number(e.target.value)),disabled:o},l(0,59))),c.a.createElement(L,null,c.a.createElement(K,null,"SECONDS:"),c.a.createElement(G,{value:a,onChange:e=>r(Number(e.target.value)),disabled:o},l(0,59))))};var Z,$=e=>{const n=e.index,[t,a]=Object(s.useState)(1e3*(60*e.minutes+e.seconds)),{activeIndex:r,timers:o,setTimers:l,setActiveIndex:i,timerIsRunning:d}=Object(s.useContext)(un),u=e.index===r;Object(s.useEffect)(()=>{let e;return u&&t>0&&d?(console.log({index:n,activeIndex:r}),e=setInterval(()=>{a(e=>e-1e3)},1e3)):u&&0===t&&(console.log({index:n,activeIndex:r}),i(n+1),clearInterval(e)),()=>clearInterval(e)},[t,r,n,u,i,d]);return c.a.createElement("div",{className:"countdown"},c.a.createElement(Q,{minutes:e.minutes,setMinutes:n=>{const t={...o[e.index],minutes:n},a=[...o];a.splice(e.index,1,t),l(a)},seconds:e.seconds,setSeconds:n=>{const t={...o[e.index],seconds:n},a=[...o];a.splice(e.index,1,t),l(a)},disabled:u}),c.a.createElement(H,{time:t}))};const _=g.a.div(Z||(Z=Object(m.a)(["\n  width: 100%;\n  height: 94px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n  background-color: black;\n  overflow: hidden;\n  opacity: ",";\n  transition: opacity 0.5s ease-in-out;\n\n  & > div {\n    width: ","%;\n    height: 100%;\n    border-radius: 10px;\n    background-color: darkred;\n    transition: width 1s linear; \n  }\n"])),e=>e.value>0?1:0,e=>e.value);var ee,ne,te,ae,re=e=>{let{value:n,max:t}=e;return c.a.createElement(_,{value:n/t*100},c.a.createElement("div",null))};const oe=g.a.div(ee||(ee=Object(m.a)(["\n  display: flex;\n  margin-bottom: 10px;\n  flex-direction: row;\n  align-items: center;\n  background-color: #121212;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n  background-image: \n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%);\n  background-size: 30px 30px, 30px 30px, 30px 30px, 30px 30px;\n  background-position: 0 0, 10px 10px, 20px 20px, 15px 15px;\n"]))),le=g.a.div(ne||(ne=Object(m.a)(["\n  flex: 1;\n  align-items: center;\n  border-radius: 25px;\n  margin: 10px;\n  background-color: black;\n"]))),ie=g.a.label(te||(te=Object(m.a)(["\nflex: 1; \nfont-weight: 300;\nfont-size: 16px;\nbackground-color: black;\ncolor: #fff;\nborder: none;\ncursor: pointer;\n"]))),se=g.a.select(ae||(ae=Object(m.a)(["\nflex: 1;\n  font-weight: 300;\n  font-size: 16px;\n  padding: 7px;\n  margin: 10px 0px 10px 10px;\n  background-color: darkred;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 25px;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: black;\n  }\n"])));var ce=e=>{let{currentRound:n,initialRounds:t,onRoundsChange:a,disabled:r,resting:o}=e;const[l,i]=Object(s.useState)(t);Object(s.useEffect)(()=>{o&&i(n)},[n,o]);return c.a.createElement(oe,null,c.a.createElement(le,null,c.a.createElement(ie,null,"ROUND ",n," / ",l),c.a.createElement(se,{value:l,onChange:e=>{return n=Number(e.target.value),i(n),void a(n);var n},disabled:r||o},((e,n)=>{const t=[];for(let a=e;a<=n;a++)t.push(c.a.createElement("option",{key:a,value:a},a<10?"0".concat(a):a));return t})(1,100))))};var de=e=>{const n=e.rounds,t=e.index,a=1e3*(60*e.minutes+e.seconds),[r,o]=Object(s.useState)(a),[l,i]=Object(s.useState)(!1),[d,u]=Object(s.useState)(1),[m,p]=Object(s.useState)(!1),[,x]=Object(s.useState)(0),{setActiveIndex:b,activeIndex:g,timers:E,setTimers:f,timerIsRunning:v,isPaused:k}=Object(s.useContext)(un),h=e.index===g;Object(s.useEffect)(()=>{let e;return h&&r>0&&v&&!k?e=setInterval(()=>{if(o(e=>Math.max(0,e-1e3)),m){x(1e3-1e3*(r/a))}},1e3):h&&0===r?(console.log({index:t,activeIndex:g}),clearInterval(e),m?(p(!1),u(e=>e+1),o(a),i(!0),x(0)):(p(!0),o(a),i(!0)),d>=n&&(b(t+1),u(1),p(!1),o(0),i(!1),x(0))):(console.log({index:t,activeIndex:g}),clearInterval(e)),()=>clearInterval(e)},[l,r,m,a,d,n,g,b,v,k,t,h]);return c.a.createElement("div",{className:"timer"},c.a.createElement(ce,{currentRound:d,initialRounds:e.rounds,onRoundsChange:e=>{const n={...E[t],rounds:e},a=[...E];a.splice(t,1,n),f(a)}}),c.a.createElement(Q,{minutes:e.minutes,setMinutes:n=>{const t={...E[e.index],minutes:n},a=[...E];a.splice(e.index,1,t),f(a)},seconds:e.seconds,setSeconds:n=>{const t={...E[e.index],seconds:n},a=[...E];a.splice(e.index,1,t),f(a)},disabled:l}),c.a.createElement("div",{className:"display-time"},m?c.a.createElement(re,{value:m?r/a*100:(a-r)/a*100,max:"100"}):c.a.createElement(H,{time:r})))};var ue=e=>{const[n,t]=Object(s.useState)(1e3*(60*e.minutes+e.seconds)),{activeIndex:a,setActiveIndex:r,timerIsRunning:o,timers:l,setTimers:i,index:d}=Object(s.useContext)(un),u=e.index===a;Object(s.useEffect)(()=>{let n;return u&&o?n=setInterval(()=>{t(t=>{const o=t+1e3;return o>=1e3*(60*e.minutes+e.seconds)&&(console.log({index:d,activeIndex:a}),r(e.index+1),clearInterval(n)),o})},1e3):(clearInterval(n),u||t(0)),()=>clearInterval(n)},[u,d,a,o,e.index,e.minutes,e.seconds,r]);return c.a.createElement("div",{className:"stopwatch"},c.a.createElement(Q,{minutes:e.minutes,setMinutes:n=>{const t={...l[e.index],minutes:n},a=[...l];a.splice(e.index,1,t),i(a)},seconds:e.seconds,setSeconds:n=>{const t={...l[e.index],seconds:n},a=[...l];a.splice(e.index,1,t),i(a)},disabled:u}),c.a.createElement(H,{time:n}))};var me,pe,xe,be,ge,Ee,fe=e=>{const n=e.rounds,t=e.index,a=1e3*(60*e.minutes+e.seconds),[r,o]=Object(s.useState)(a),[l,i]=Object(s.useState)(!1),[d,u]=Object(s.useState)(1),{setActiveIndex:m,activeIndex:p,timers:x,setTimers:b,timerIsRunning:g,isPaused:E}=Object(s.useContext)(un),f=e.index===p;Object(s.useEffect)(()=>{let e;return f&&r>0&&g&&!E?e=setInterval(()=>{o(e=>Math.max(0,e-1e3))},1e3):f&&0===r?(clearInterval(e),u(e=>e+1),d>=n?(m(t+1),u(1),o(0),i(!1)):(o(a),i(!0))):clearInterval(e),()=>clearInterval(e)},[l,r,a,d,n,p,m,g,E,t,f]);return c.a.createElement("div",{className:"timer"},c.a.createElement(ce,{currentRound:d,initialRounds:e.rounds,onRoundsChange:e=>{const n={...x[t],rounds:e},a=[...x];a.splice(t,1,n),b(a)}}),c.a.createElement(Q,{minutes:e.minutes,setMinutes:n=>{const t={...x[e.index],minutes:n},a=[...x];a.splice(e.index,1,t),b(a)},seconds:e.seconds,setSeconds:n=>{const t={...x[e.index],seconds:n},a=[...x];a.splice(e.index,1,t),b(a)},disabled:l}),c.a.createElement("div",{className:"display-time"},c.a.createElement(H,{time:r})))};const ve=g.a.div(me||(me=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 80px;\n"]))),ke=g.a.div(pe||(pe=Object(m.a)(["\n  border: ",";\n  border-radius: 15px;\n  padding: 15px;\n  padding-top: 20px;\n  font-size: 1.5rem;\n  color: darkred;\n  width: 100%;\n  text-align: center;\n"])),e=>{let{isActive:n}=e;return n?"3px solid darkred":"1px solid gray"}),he=g.a.button(xe||(xe=Object(m.a)(["\n  background-color: darkred;\n  color: white;\n  padding: 10px 20px;\n  margin: 0 10px;\n  border: none;\n  border-radius: 25px;\n  font-size: 1rem;\n  font-weight: 400;\n  cursor: pointer;\n\n  &:hover {\n    background-color: red;\n  }\n"]))),Oe=g.a.div(be||(be=Object(m.a)(["\n  display: flexwrap;\n  background-color: black;\n  padding: 25px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n"]))),je=g.a.div(ge||(ge=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 78px;\n"]))),ye=Object(g.a)(p.b)(Ee||(Ee=Object(m.a)(["\nposition: absolute;\ntop: 65px;\nright: 20px;\npadding: 10px;\nbackground-color: darkgreen;\ncolor: white;\nborder-radius: 25px;\ntext-decoration: none;\nfont-size: 1rem;\ndisplay: flex;\nalign-items: center;\nz-index: 1;\n"])));var we,Te,Ie,Se,Ce,ze,Re=()=>{const{timers:e,setTimers:n}=Object(s.useContext)(un),{activeIndex:t,setActiveIndex:a,isPaused:r,setIsPaused:o,setTimerIsRunning:l}=Object(s.useContext)(un);Object(s.useEffect)(()=>{const e=localStorage.getItem("timers");e&&n(JSON.parse(e))},[n]),Object(s.useEffect)(()=>{const n=setInterval(()=>{localStorage.setItem("timers",JSON.stringify(e))},5e3);return()=>clearInterval(n)},[e]);const i=e=>{switch(e){case"fastForward":a(t+1),o(!1),l(!0);break;case"START":a(0),o(!1),l(!0);break;case"pausePlay":o(e=>!e),l(e=>!e);break;case"END":a(null),o(!0),l(!1)}},d=e.reduce((e,n)=>{let t=60*n.minutes+n.seconds;return"XY"===n.componentType?t*=n.rounds:"TABATA"===n.componentType&&(t*=2*n.rounds),e+t},0),u=(t,a)=>{const r="up"===a?t-1:t+1;if(r>=0&&r<e.length){const a=[...e],[o]=a.splice(t,1);a.splice(r,0,o),n(a)}},m=e.some((e,n)=>t===n);return c.a.createElement("div",null,c.a.createElement(Oe,null,e.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement(he,{onClick:()=>i("START")},"START"),c.a.createElement(he,{onClick:()=>i("fastForward")},c.a.createElement(W.f,null)),c.a.createElement(he,{onClick:()=>i("pausePlay")},r?c.a.createElement(W.h,null):c.a.createElement(W.g,null)),c.a.createElement(he,{onClick:()=>i("END")},"END")):null),c.a.createElement("div",null),c.a.createElement(ye,{to:"/add",onClick:()=>{a(null),o(!0),l(!1)}},"ADD / EDIT TIMERS",c.a.createElement(W.c,null)),c.a.createElement("div",{style:{textAlign:"center",marginTop:"60px",fontSize:"25px"}},"Total Workout Duration: ",(e=>{const n=Math.floor(e/3600),t=Math.floor(e%3600/60),a=e%60;return"".concat(n>0?n+"h ":"").concat(t,"m ").concat(a,"s")})(d)),c.a.createElement(je,null,c.a.createElement(ve,null,e.length>0?e.map((e,n)=>c.a.createElement("div",{key:n,style:{position:"relative"}},c.a.createElement(ke,{key:n,isActive:t===n,style:{position:"relative"}},c.a.createElement("h2",null,e.title),c.a.createElement("p",null,e.description),((e,n)=>{let t;return"COUNTDOWN"===e.componentType&&(t=c.a.createElement($,{index:n,minutes:e.minutes,seconds:e.seconds})),"TABATA"===e.componentType&&(t=c.a.createElement(de,{index:n,minutes:e.minutes,seconds:e.seconds,rounds:e.rounds})),"STOPWATCH"===e.componentType&&(t=c.a.createElement(ue,{index:n,minutes:e.minutes,seconds:e.seconds})),"XY"===e.componentType&&(t=c.a.createElement(fe,{index:n,minutes:e.minutes,seconds:e.seconds,rounds:e.rounds})),t})(e,n),!m&&c.a.createElement("div",{style:{position:"absolute",top:-20,left:"50%",transform:"translateX(-50%)"}},c.a.createElement(he,{onClick:()=>u(n,"up")},c.a.createElement(W.d,null))),!m&&c.a.createElement("div",{style:{position:"absolute",bottom:-20,left:"50%",transform:"translateX(-50%)"}},c.a.createElement(he,{onClick:()=>u(n,"down")},c.a.createElement(W.a,null)))))):c.a.createElement("div",{style:{fontSize:"20px"}},"Configure your timers!"))))};const Ae=g.a.div(we||(we=Object(m.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  max-width: 600px;\n  margin: 0 auto;\n"]))),Ne=g.a.button(Te||(Te=Object(m.a)(["\n  background-color: black;\n  color: #fff;\n  padding: 15px;\n  border: none;\n  border-radius: 20px;\n  cursor: pointer;\n"]))),De=g.a.div(Ie||(Ie=Object(m.a)(["\n  color: white;\n  background-color: #121212;\n  border: 30px solid black;\n  border-radius: 15px;\n  padding: 20px;\n  margin-top: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  background-image: \n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%);\n  background-size: 30px 30px, 30px 30px, 30px 30px, 30px 30px;\n  background-position: 0 0, 10px 10px, 20px 20px, 15px 15px;\n"]))),Me=g.a.div(Se||(Se=Object(m.a)(["\n  margin-bottom: 20px;\n"]))),Pe=g.a.h2(Ce||(Ce=Object(m.a)(["\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n"]))),Xe=g.a.p(ze||(ze=Object(m.a)(["\n  font-size: 1rem;\n  color: lightgrey;\n  background-color: black;\n  padding: 15px;\n  border-radius: 20px;\n"])));var We,Ye,Je,Ue,Be,Fe,qe,He,Ve,Le,Ke=()=>{const[e,n]=Object(s.useState)(!1);return c.a.createElement(Ae,null,c.a.createElement(Ne,{onClick:()=>{n(!e)}},"Timer Information"),e&&c.a.createElement(De,null,c.a.createElement(Me,null,c.a.createElement(Pe,null,"Countdown Timer"),c.a.createElement(Xe,null,"The countdown timer counts down from a specified time to zero.")),c.a.createElement(Me,null,c.a.createElement(Pe,null,"Tabata Timer"),c.a.createElement(Xe,null,"The Tabata timer allows for rounds consisting of equal work and rest time. You may select your desired amount of rounds and duration per round. When the rest bar displays, RELAX!")),c.a.createElement(Me,null,c.a.createElement(Pe,null,"Stopwatch"),c.a.createElement(Xe,null,"The stopwatch is a simple timer that counts up from zero. To move on to the next timer in queue, press the fast forward button.")),c.a.createElement(Me,null,c.a.createElement(Pe,null,"XY Timer"),c.a.createElement(Xe,null,"The XY timer allows for X amount of rounds with no rest in between each round. You may select your desired amount of rounds and duration per round."))))};const Ge=Object(g.a)(p.b)(We||(We=Object(m.a)(["\n  position: absolute;\n  top: 65px;\n  right: 20px;\n  padding: 10px;\n  background-color: darkgreen;\n  color: white;\n  border-radius: 25px;\n  text-decoration: none;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  z-index: 1;\n"]))),Qe=g.a.div(Ye||(Ye=Object(m.a)(["\n  display: flexwrap;\n  background-color: black;\n  padding: 25px;\n  \n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n  \n"]))),Ze=g.a.button(Je||(Je=Object(m.a)(["\n  background-color: ",";\n  color: ",";\n  padding: 10px 20px;\n  margin: 0 10px;\n  border: none;\n  border-radius: 25px;\n  font-size: 1rem;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),e=>{let{bgColor:n}=e;return n||"darkred"},e=>{let{fontColor:n}=e;return n||"white"},e=>{let{hoverColor:n}=e;return n||"red"}),$e=g.a.div(Ue||(Ue=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),_e=g.a.div(Be||(Be=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 30px;\n"]))),en=g.a.div(Fe||(Fe=Object(m.a)(["\n  border: 1px solid gray;\n  border-radius: 15px;\n  margin: 10px;\n  padding: 20px;\n  padding-bottom: 35px;\n  font-size: 2rem;\n  color: darkred;\n  width: 100%;\n  text-align: center;\n"]))),nn=g.a.div(qe||(qe=Object(m.a)(["\n  margin: 25px;\n  font-weight: 400;\n"]))),tn=g.a.div(He||(He=Object(m.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 10px;\n"]))),an=Object(g.a)(Ze)(Ve||(Ve=Object(m.a)(["\n  background-color: Darkred;\n  color: #d76060;\n  align-items: center;\n  margin-top: 20px;\n"]))),rn=Object(g.a)(Ze)(Le||(Le=Object(m.a)(["\n  background-color: ",";\n  color: ",";\n"])),e=>{let{saveSuccess:n}=e;return n?"Darkgreen":"darkgreen"},e=>{let{saveSuccess:n}=e;return n?"#60d760":"white"});var on,ln=e=>{let{onRemoveTimer:n}=e;const{timers:t,setTimers:a}=Object(s.useContext)(un),[r,o]=Object(s.useState)(!1);Object(s.useEffect)(()=>{const e=localStorage.getItem("timers");e&&a(JSON.parse(e))},[a]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(Ge,{to:"/"},c.a.createElement(W.b,null),"VIEW WORKOUT"),c.a.createElement(Qe,null,[{key:"timer-countdown",title:"Countdown",description:"Counts down from a specified time to 0",componentType:"COUNTDOWN"},{key:"timer-tabata",title:"Tabata",description:"Rounds with equal work and rest time",componentType:"TABATA"},{key:"timer-stopwatch",title:"Stopwatch",description:"Counts up from 0 to a specified time",componentType:"STOPWATCH"},{key:"timer-xy",title:"XY",description:"Rounds of work with no rest time",componentType:"XY"}].map(e=>c.a.createElement(Ze,{key:e.key,onClick:()=>(e=>{const n=t.length,r={...e,title:e.title,index:n,key:n,minutes:e.minutes||0,seconds:e.seconds||0,rounds:e.rounds||5};a([...t,r]),o(!1)})(e),bgColor:"#121212",hoverColor:"red"},e.title)),c.a.createElement(rn,{bgColor:"Darkgreen",fontColor:"white",hoverColor:"grey",onClick:()=>{const e=t.map(e=>({...e,minutes:e.minutes||0,seconds:e.seconds||0,rounds:e.rounds||5}));a(e),localStorage.setItem("timers",JSON.stringify(e)),o(!0)},saveSuccess:r},r?c.a.createElement(W.e,null):"Save")),c.a.createElement(Ke,null),c.a.createElement($e,null,c.a.createElement(_e,null,t.map((e,r)=>c.a.createElement(en,{key:e.key},c.a.createElement(nn,null,e.title),((e,n)=>{let t;switch(e.componentType){case"COUNTDOWN":t=c.a.createElement($,{index:n,minutes:e.minutes,seconds:e.seconds});break;case"TABATA":t=c.a.createElement(de,{index:n,minutes:e.minutes,seconds:e.seconds,rounds:e.rounds});break;case"STOPWATCH":t=c.a.createElement(ue,{index:n,minutes:e.minutes,seconds:e.seconds});break;case"XY":t=c.a.createElement(fe,{index:n,minutes:e.minutes,seconds:e.seconds,rounds:e.rounds})}return t})(e,r),c.a.createElement(tn,null,c.a.createElement(an,{onClick:()=>(e=>{const r=t.filter((n,t)=>t!==e);n(r,t[e]),a(r),localStorage.setItem("timers",JSON.stringify(r))})(r),bgColor:"Darkred",fontColor:"#D76060"},"Remove")))))))},sn=t(17),cn=t.n(sn);const dn=g.a.div(on||(on=Object(m.a)(["\n  background-color: #E3E3DD;\n  background-image: url(",");\n  background-repeat: repeat; \n  background-position: center;\n  height: 100vh;\n  overflow: auto;\n  "])),cn.a),un=Object(s.createContext)(null),mn=e=>{let{error:n}=e;return c.a.createElement("div",null,c.a.createElement("h1",null,"Something went wrong! Restart the app!"),c.a.createElement("pre",{style:{whiteSpace:"normal"}},n.message))};var pn=()=>{const[e,n]=Object(s.useState)([]),[t,a]=Object(s.useState)(null),[r,o]=Object(s.useState)(!1),[l,i]=Object(s.useState)(!1),[d,u]=Object(s.useState)();return Object(s.useEffect)(()=>{console.log("App.js global state active index:",t)},[t]),Object(s.useEffect)(()=>{console.log({timers:e})},[e]),c.a.createElement(b.a,{FallbackComponent:mn,onError:(e,n)=>console.error(e)},c.a.createElement(un.Provider,{value:{timers:e,setTimers:n,timerIsRunning:r,setTimerIsRunning:o,activeIndex:t,setActiveIndex:a,isPaused:l,setIsPaused:i,pausedIndex:d,setPausedIndex:u,updateTimersOrder:e=>{n(e)}}},c.a.createElement(dn,null,c.a.createElement(p.a,null,c.a.createElement(x.c,null,c.a.createElement(x.a,{path:"/docs",element:c.a.createElement(X,null)}),c.a.createElement(x.a,{path:"/",element:c.a.createElement(Re,null)}),c.a.createElement(x.a,{path:"/add",element:c.a.createElement(ln,{onRemoveTimer:(e,t)=>{n(e),console.log("Removed Timer:",t)}})}))))))};u.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(pn,null)))}},[[19,1,2]]]);
//# sourceMappingURL=main.53b2dd98.chunk.js.map