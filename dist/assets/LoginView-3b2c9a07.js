import{_ as U,u as V,r as d,s as I,c as B,o as t,a as i,b as e,d as o,w,v as k,e as v,n as x,f as h,B as g,g as N,p as C,h as M,i as E}from"./index-b2d9c140.js";const L=s=>(C("data-v-11b416a9"),s=s(),M(),s),O={class:"c__ModalOpened"},D={class:"c__Modal css-selector-Modal"},T={class:"c"},z={class:"menu"},j={key:0,for:"Username"},A={key:1,for:"Username"},F={class:"menu"},G=L(()=>e("label",{for:"Password"},"Senha",-1)),H={key:0},J={class:"menu"},K=L(()=>e("label",{for:"Email"},"Email",-1)),Q={key:1,class:"modalInvalid"},W={class:"menu"},X={__name:"ModalLoginView",props:{text:String,rota:String,register:null},emits:["registerEvent"],setup(s,{emit:f}){const p=s,c=V(),n=d(""),y=d(""),_=d(""),m=d("");let l=d(!1);function P(){const u={name:n.value,avatar:y.value,login:_.value,password:m.value,active:!1};!n.value||!_.value||!m.value?l.value=!0:(l.value=!1,c.registerUser(u))}const{data:R}=I(c),$=B(()=>R.value);let b=d(!1);function q(){const u={loginPay:n.value,passwordPay:m.value};c.userState(u);const a=$.value.data.filter(r=>(r.login.includes(u.loginPay),r.password.includes(u.passwordPay)));a[0].login===u.loginPay&&a[0].password===u.passwordPay?N.push({name:"home"}):b.value=!0}return(u,a)=>(t(),i("section",O,[e("main",D,[e("div",{class:"close",onClick:a[0]||(a[0]=r=>f("registerEvent",!1))},"❌"),e("div",T,[e("div",z,[p.register?(t(),i("label",j,"Usuario")):o("",!0),p.register?o("",!0):(t(),i("label",A,"Email")),w(e("input",{"onUpdate:modelValue":a[1]||(a[1]=r=>n.value=r),class:"menu__item",type:"text",name:"Username",id:"username",required:""},null,512),[[k,n.value]]),v(l)?(t(),i("p",{key:2,class:x({erro:v(l)})},"Invalido ❌",2)):o("",!0)]),e("div",F,[G,w(e("input",{"onUpdate:modelValue":a[2]||(a[2]=r=>m.value=r),class:"menu__item",type:"text",name:"Password",required:""},null,512),[[k,m.value]]),v(l)?(t(),i("p",{key:0,class:x({erro:v(l)})},"Invalido ❌",2)):o("",!0)]),s.register?(t(),i("div",H,[e("div",J,[K,w(e("input",{"onUpdate:modelValue":a[3]||(a[3]=r=>_.value=r),class:"menu__item",type:"text",name:"Email",required:""},null,512),[[k,_.value]]),v(l)?(t(),i("p",{key:0,class:x({erro:v(l)})},"Invalido ❌",2)):o("",!0)])])):o("",!0),v(b)?(t(),i("div",Q,"Digite o usuario e senha!")):o("",!0),e("div",W,[p.register?(t(),h(g,{key:0,onButtonEvent:P,rota:"",text:"Cadastar"})):o("",!0),p.register?o("",!0):(t(),h(g,{key:1,onButtonEvent:q,rota:"",text:"Entrar"}))])])])]))}},S=U(X,[["__scopeId","data-v-11b416a9"]]);const Y=s=>(C("data-v-bce80ff6"),s=s(),M(),s),Z={class:"c"},ee={class:"c-menu"},te=Y(()=>e("h1",null,"Login",-1)),se={__name:"LoginView",setup(s){const f=V();f.userState();const{data:p}=I(f);B(()=>p.value.data);const c=d(!1),n=d(!1);function y(){c.value=!c.value}function _(){n.value=!n.value}return(m,l)=>(t(),i("main",Z,[e("section",ee,[te,E(g,{rota:"",onButtonEvent:y,text:"Entrar"}),E(g,{rota:"",onButtonEvent:_,text:"Cadastrar"}),E(g,{rota:"/",text:"Voltar"})]),c.value?(t(),h(S,{key:0,onRegisterEvent:y,register:!1})):o("",!0),n.value?(t(),h(S,{key:1,onRegisterEvent:_,register:!0})):o("",!0)]))}},oe=U(se,[["__scopeId","data-v-bce80ff6"]]);export{oe as default};
