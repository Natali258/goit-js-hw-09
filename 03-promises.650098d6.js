const e=document.querySelector('[name="delay"]'),o=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]');document.querySelector("button").addEventListener("click",function(n){n.preventDefault();let l=Number(e.value),u=Number(o.value),r=Number(t.value);for(let e=1;e<=r;e+=1)(function(e,o){return new Promise((t,n)=>{let l=Math.random()>.3;setTimeout(()=>{l?t({position:e,delay:o}):n({position:e,delay:o})},o)})})(e,l+u*e).then(({position:e,delay:o})=>{console.log(`\u{2705} Fulfilled promise ${e} in ${o}ms`)}).catch(({position:e,delay:o})=>{console.log(`\u{274C} Rejected promise ${e} in ${o}ms`)})});
//# sourceMappingURL=03-promises.650098d6.js.map
