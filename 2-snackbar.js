import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector(".form");r.addEventListener("submit",e=>{e.preventDefault();const s=e.target.delay.value,i=e.target.state.value;m(s,i).then(t=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{o.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"topRight"})})});function m(e,s){return new Promise((i,t)=>{setTimeout(()=>{s==="fulfilled"?i(e):t(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map
