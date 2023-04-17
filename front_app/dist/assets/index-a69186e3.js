(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=l(o);fetch(o.href,c)}})();function ae(){}function Xe(e){return e()}function Fe(){return Object.create(null)}function oe(e){e.forEach(Xe)}function Ye(e){return typeof e=="function"}function Ue(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let pe;function qe(e,t){return pe||(pe=document.createElement("a")),pe.href=t,e===pe.href}function nt(e){return Object.keys(e).length===0}function n(e,t){e.appendChild(t)}function re(e,t,l){e.insertBefore(t,l||null)}function te(e){e.parentNode&&e.parentNode.removeChild(e)}function lt(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function r(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function f(){return M(" ")}function A(e,t,l,s){return e.addEventListener(t,l,s),()=>e.removeEventListener(t,l,s)}function it(e){return function(t){return t.preventDefault(),e.call(this,t)}}function i(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function rt(e){let t;return{p(...l){t=l,t.forEach(s=>e.push(s))},r(){t.forEach(l=>e.splice(e.indexOf(l),1))}}}function we(e){return e===""?null:+e}function st(e){return Array.from(e.childNodes)}function _e(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function J(e,t){e.value=t??""}let Ee;function se(e){Ee=e}const ee=[],Ke=[];let ne=[];const Qe=[],at=Promise.resolve();let ke=!1;function ot(){ke||(ke=!0,at.then(Ve))}function Ce(e){ne.push(e)}const $e=new Set;let Z=0;function Ve(){if(Z!==0)return;const e=Ee;do{try{for(;Z<ee.length;){const t=ee[Z];Z++,se(t),ut(t.$$)}}catch(t){throw ee.length=0,Z=0,t}for(se(null),ee.length=0,Z=0;Ke.length;)Ke.pop()();for(let t=0;t<ne.length;t+=1){const l=ne[t];$e.has(l)||($e.add(l),l())}ne.length=0}while(ee.length);for(;Qe.length;)Qe.pop()();ke=!1,$e.clear(),se(e)}function ut(e){if(e.fragment!==null){e.update(),oe(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ce)}}function ct(e){const t=[],l=[];ne.forEach(s=>e.indexOf(s)===-1?t.push(s):l.push(s)),l.forEach(s=>s()),ne=t}const ge=new Set;let ft;function ze(e,t){e&&e.i&&(ge.delete(e),e.i(t))}function dt(e,t,l,s){if(e&&e.o){if(ge.has(e))return;ge.add(e),ft.c.push(()=>{ge.delete(e),s&&(l&&e.d(1),s())}),e.o(t)}else s&&s()}function ht(e){e&&e.c()}function Je(e,t,l,s){const{fragment:o,after_update:c}=e.$$;o&&o.m(t,l),s||Ce(()=>{const a=e.$$.on_mount.map(Xe).filter(Ye);e.$$.on_destroy?e.$$.on_destroy.push(...a):oe(a),e.$$.on_mount=[]}),c.forEach(Ce)}function Ze(e,t){const l=e.$$;l.fragment!==null&&(ct(l.after_update),oe(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function pt(e,t){e.$$.dirty[0]===-1&&(ee.push(e),ot(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function et(e,t,l,s,o,c,a,u=[-1]){const p=Ee;se(e);const h=e.$$={fragment:null,ctx:[],props:c,update:ae,not_equal:o,bound:Fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:Fe(),dirty:u,skip_bound:!1,root:t.target||p.$$.root};a&&a(h.root);let m=!1;if(h.ctx=l?l(e,t.props||{},(_,q,...x)=>{const j=x.length?x[0]:q;return h.ctx&&o(h.ctx[_],h.ctx[_]=j)&&(!h.skip_bound&&h.bound[_]&&h.bound[_](j),m&&pt(e,_)),q}):[],h.update(),m=!0,oe(h.before_update),h.fragment=s?s(h.ctx):!1,t.target){if(t.hydrate){const _=st(t.target);h.fragment&&h.fragment.l(_),_.forEach(te)}else h.fragment&&h.fragment.c();t.intro&&ze(e.$$.fragment),Je(e,t.target,t.anchor,t.customElement),Ve()}se(p)}class tt{$destroy(){Ze(this,1),this.$destroy=ae}$on(t,l){if(!Ye(l))return ae;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(l),()=>{const o=s.indexOf(l);o!==-1&&s.splice(o,1)}}$set(t){this.$$set&&!nt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _t="/assets/svelte-a39f39b7.svg",gt="/vite.svg";function Re(e,t,l){const s=e.slice();return s[14]=t[l],s[16]=l,s}function We(e){let t,l=e[16]+1+"",s,o,c=e[14].data+"",a;return{c(){t=r("li"),s=M(l),o=M(": "),a=M(c)},m(u,p){re(u,t,p),n(t,s),n(t,o),n(t,a)},p(u,p){p&8&&c!==(c=u[14].data+"")&&_e(a,c)},d(u){u&&te(t)}}}function vt(e){let t,l,s,o,c,a,u,p,h,m,_,q,x,j,w,v,H,y,Q,U,F,le,E,R,K,L,W,X,B,G,I,D,V,T,b,g,Le,Pe,ue,P,Se,Oe,ce,S,Me,Te,fe,O,Ae,xe,de,ie,Ie,he,Ne,N,je,He,ve,Y,Be,me,ye,be,De,z=e[3],k=[];for(let d=0;d<z.length;d+=1)k[d]=We(Re(e,z,d));return ye=rt(e[10][0]),{c(){t=r("section"),l=r("nav"),l.innerHTML=`<ul><li><img alt="argo" src="/argo.svg" width="40"/></li> 
      <li><a href="http://minus-na-plus.nabank.tech/swagger"><img alt="swagger" src="/swagger.svg" width="40"/></a></li> 
      <li><a href="https://github.com/minusnaplus/api"><img alt="github" src="/github.svg" width="34"/></a></li></ul>`,s=f(),o=r("header"),o.innerHTML=`<div><img alt="hart" src="/heart.svg" width="40" height="40"/> 
      <h6 class="svelte-1oq2equ">Healthy</h6></div> 
    <div><img alt="hart" src="/check.svg" width="40" height="40"/> 
      <h6 class="svelte-1oq2equ">Synced</h6></div> 
    <div><img alt="hart" src="/check.svg" width="40" height="40"/> 
      <h6 class="svelte-1oq2equ">Sync OK</h6></div>`,c=f(),a=r("div"),u=r("div"),p=r("h6"),p.textContent="X:",h=f(),m=r("input"),_=f(),q=r("div"),x=M(e[0]),j=f(),w=r("div"),v=r("h6"),v.textContent="Y:",H=f(),y=r("input"),Q=f(),U=r("div"),F=M(e[1]),le=f(),E=r("div"),R=r("h6"),R.textContent="Requests:",K=f(),L=r("input"),W=f(),X=r("div"),B=M(e[2]),G=f(),I=r("div"),D=r("h6"),D.textContent="Type:",V=f(),T=r("div"),b=r("label"),g=r("input"),Le=M("Addition"),Pe=f(),ue=r("label"),P=r("input"),Se=M("Subtraction"),Oe=f(),ce=r("label"),S=r("input"),Me=M("Multiplication"),Te=f(),fe=r("label"),O=r("input"),Ae=M("Division"),xe=f(),de=r("div"),ie=r("button"),ie.textContent="Run",Ie=f(),he=r("h2"),he.textContent="Here should be an application flooding the ARGO CD cluster with requests to monitor the scaling of API container. Unfortunately, I had to scale down my expectations as I can't keep up with time.",Ne=f(),N=r("iframe"),He=f(),ve=r("div"),Y=r("pre"),Be=M("      ");for(let d=0;d<k.length;d+=1)k[d].c();me=M(`
  `),i(l,"class","menu"),i(o,"class","header"),i(p,"class","svelte-1oq2equ"),i(m,"type","range"),i(m,"min","1"),i(m,"max","10000000000"),i(m,"class","slider"),i(u,"class","slidecontainer"),i(v,"class","svelte-1oq2equ"),i(y,"type","range"),i(y,"min","1"),i(y,"max","1000000000"),i(y,"class","slider"),i(w,"class","slidecontainer"),i(R,"class","svelte-1oq2equ"),i(L,"type","range"),i(L,"min","1"),i(L,"max","10000"),i(L,"class","slider"),i(E,"class","slidecontainer"),i(D,"class","svelte-1oq2equ"),i(g,"type","radio"),i(g,"name","calctype"),g.__value="add",g.value=g.__value,g.checked=!0,i(P,"type","radio"),i(P,"name","calctype"),P.__value="sub",P.value=P.__value,i(S,"type","radio"),i(S,"name","calctype"),S.__value="mul",S.value=S.__value,i(O,"type","radio"),i(O,"name","calctype"),O.__value="div",O.value=O.__value,i(I,"class","slidecontainer"),i(ie,"class","svelte-1oq2equ"),i(de,"class","buttonWrapper"),i(he,"class","svelte-1oq2equ"),i(N,"width","460"),i(N,"height","215"),qe(N.src,je="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1")||i(N,"src",je),i(N,"title","YouTube video player"),i(N,"frameborder","0"),i(N,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),N.allowFullscreen=!0,i(N,"class","svelte-1oq2equ"),i(a,"class","ranges"),i(Y,"class","svelte-1oq2equ"),i(t,"id","secondPage"),ye.p(g,P,S,O)},m(d,C){re(d,t,C),n(t,l),n(t,s),n(t,o),n(t,c),n(t,a),n(a,u),n(u,p),n(u,h),n(u,m),J(m,e[0]),n(u,_),n(u,q),n(q,x),n(a,j),n(a,w),n(w,v),n(w,H),n(w,y),J(y,e[1]),n(w,Q),n(w,U),n(U,F),n(a,le),n(a,E),n(E,R),n(E,K),n(E,L),J(L,e[2]),n(E,W),n(E,X),n(X,B),n(a,G),n(a,I),n(I,D),n(I,V),n(I,T),n(T,b),n(b,g),g.checked=g.__value===e[4],n(b,Le),n(T,Pe),n(T,ue),n(ue,P),P.checked=P.__value===e[4],n(ue,Se),n(T,Oe),n(T,ce),n(ce,S),S.checked=S.__value===e[4],n(ce,Me),n(T,Te),n(T,fe),n(fe,O),O.checked=O.__value===e[4],n(fe,Ae),n(a,xe),n(a,de),n(de,ie),n(a,Ie),n(a,he),n(a,Ne),n(a,N),n(t,He),n(t,ve),n(ve,Y),n(Y,Be);for(let $=0;$<k.length;$+=1)k[$]&&k[$].m(Y,null);n(Y,me),be||(De=[A(m,"change",e[6]),A(m,"input",e[6]),A(y,"change",e[7]),A(y,"input",e[7]),A(L,"change",e[8]),A(L,"input",e[8]),A(g,"change",e[9]),A(P,"change",e[11]),A(S,"change",e[12]),A(O,"change",e[13]),A(ie,"click",e[5])],be=!0)},p(d,[C]){if(C&1&&J(m,d[0]),C&1&&_e(x,d[0]),C&2&&J(y,d[1]),C&2&&_e(F,d[1]),C&4&&J(L,d[2]),C&4&&_e(B,d[2]),C&16&&(g.checked=g.__value===d[4]),C&16&&(P.checked=P.__value===d[4]),C&16&&(S.checked=S.__value===d[4]),C&16&&(O.checked=O.__value===d[4]),C&8){z=d[3];let $;for($=0;$<z.length;$+=1){const Ge=Re(d,z,$);k[$]?k[$].p(Ge,C):(k[$]=We(Ge),k[$].c(),k[$].m(Y,me))}for(;$<k.length;$+=1)k[$].d(1);k.length=z.length}},i:ae,o:ae,d(d){d&&te(t),lt(k,d),ye.r(),be=!1,oe(De)}}}function mt(e,t,l){let s=1e10,o=99999999,c=280,a=[],u="mul";async function p(){for(let H=0;H<c;H++)fetch("https://minus-na-plus.nabank.tech/v1/api/"+u+"/?x="+Math.floor(Math.random()*s)+"&y="+Math.floor(Math.random()*o),{method:"GET",headers:{Cookie:"public-key-123"}}).then(y=>y.json()).then(y=>{a.push(y),l(3,a=[...a]),console.log(y,a)})}const h=[[]];function m(){s=we(this.value),l(0,s)}function _(){o=we(this.value),l(1,o)}function q(){c=we(this.value),l(2,c)}function x(){u=this.__value,l(4,u)}function j(){u=this.__value,l(4,u)}function w(){u=this.__value,l(4,u)}function v(){u=this.__value,l(4,u)}return[s,o,c,a,u,p,m,_,q,x,h,j,w,v]}class yt extends tt{constructor(t){super(),et(this,t,mt,vt,Ue,{})}}function bt(e){let t,l,s,o,c,a,u,p,h,m,_,q,x,j,w,v,H,y,Q,U,F,le,E,R,K,L,W,X,B,G,I,D,V,T;return G=new yt({}),{c(){t=r("main"),l=r("h1"),l.textContent="🚿 GIT-MOPS get Stuff clean!",s=f(),o=r("h2"),o.textContent="There is no alternative to the mop.",c=f(),a=r("div"),u=r("a"),p=r("img"),m=f(),_=r("a"),q=r("img"),j=f(),w=r("div"),v=r("form"),H=r("div"),H.textContent="Login",y=f(),Q=r("div"),Q.textContent="∀∫∑∛∐∛∞∫∑∛∞∜",U=f(),F=r("div"),F.textContent="Password",le=f(),E=r("div"),E.textContent="42",R=f(),K=r("button"),K.textContent="Sign in",L=f(),W=r("div"),W.innerHTML=`<div class="left">e<sup>π</sup> =</div> 
        <div class="right"><ul><li>2,7182818284590</li> 
            <li>4523536028747135266</li> 
            <li>249775724709369995</li> 
            <li>95749669676277240766303535475945713821785251664274</li></ul></div>`,X=f(),B=r("div"),ht(G.$$.fragment),i(p,"width","20px"),qe(p.src,h=gt)||i(p,"src",h),i(p,"class","logo"),i(p,"alt","Vite Logo"),i(u,"href","https://vitejs.dev"),i(u,"target","_blank"),i(u,"rel","noreferrer"),i(q,"width","20px"),qe(q.src,x=_t)||i(q,"src",x),i(q,"class","logo svelte"),i(q,"alt","Svelte Logo"),i(_,"href","https://svelte.dev"),i(_,"target","_blank"),i(_,"rel","noreferrer"),i(H,"class","form__label"),i(Q,"class","form__input"),i(F,"class","form__label"),i(E,"class","form__input"),i(K,"class","fake"),i(v,"class","form"),i(W,"class","numberE"),i(w,"class","page-1"),i(t,"id","firstPage"),i(B,"class",I=e[0]?"show-second-page":"hide-second-page")},m(b,g){re(b,t,g),n(t,l),n(t,s),n(t,o),n(t,c),n(t,a),n(a,u),n(u,p),n(a,m),n(a,_),n(_,q),n(a,j),n(a,w),n(w,v),n(v,H),n(v,y),n(v,Q),n(v,U),n(v,F),n(v,le),n(v,E),n(v,R),n(v,K),n(w,L),n(w,W),re(b,X,g),re(b,B,g),Je(G,B,null),D=!0,V||(T=A(K,"click",it(e[1])),V=!0)},p(b,[g]){(!D||g&1&&I!==(I=b[0]?"show-second-page":"hide-second-page"))&&i(B,"class",I)},i(b){D||(ze(G.$$.fragment,b),D=!0)},o(b){dt(G.$$.fragment,b),D=!1},d(b){b&&te(t),b&&te(X),b&&te(B),Ze(G),V=!1,T()}}}function wt(e,t,l){let s=!1;function o(){console.log("just hide with hard code"),document.getElementById("firstPage").style.display="none",document.body.style.backgroundImage="none",l(0,s=!s)}return[s,o]}class $t extends tt{constructor(t){super(),et(this,t,wt,bt,Ue,{})}}new $t({target:document.getElementById("app")});