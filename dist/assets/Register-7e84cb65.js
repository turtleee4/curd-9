import{_ as h,u as v,k as d,o as g,c as b,b as e,d as i,v as u,F as f,q as w,m as p,G as y,n as x,p as I,i as R}from"./index-8a8ec991.js";const r=t=>(I("data-v-0d0d3a2a"),t=t(),R(),t),k=r(()=>e("h1",null,"Register",-1)),P={class:"d-flex justify-content-center"},S={class:"mb-3"},E=r(()=>e("label",{for:"email",class:"form-label"},"Email",-1)),G={class:"mb-3"},q=r(()=>e("label",{for:"password",class:"form-label"},"Password",-1)),A={__name:"Register",setup(t){const c=v(),a=d(""),l=d(""),_=()=>{w(p(),a.value,l.value).then(o=>{console.log("Success Register"),c.push("feed")}).catch(o=>{console.log(o.code),alert(o.message)})},m=()=>{const o=new y;x(p(),o).then(s=>{console.log(s.user),c.push("feed")}).catch(s=>{})};return(o,s)=>(g(),b(f,null,[k,e("div",P,[e("form",null,[e("div",S,[E,i(e("input",{type:"email",class:"form-control",id:"email",placeholder:"Email","onUpdate:modelValue":s[0]||(s[0]=n=>a.value=n),required:""},null,512),[[u,a.value]])]),e("div",G,[q,i(e("input",{type:"password",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=n=>l.value=n),required:""},null,512),[[u,l.value]])]),e("div",{class:"mb-3"},[e("button",{type:"submit",class:"btn btn-primary",onClick:_},"Submit"),e("button",{type:"button",class:"btn btn-secondary",onClick:m},"Google")])])])],64))}},U=h(A,[["__scopeId","data-v-0d0d3a2a"]]);export{U as default};