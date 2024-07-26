import{E as te,d as x,t as g,v as f,x as a,y as h,F as u,G as z,H as D,_ as A,h as O,I as ie,j as P,p as oe,J as U,K as T,L as se,l as ne,m as J,c as k,r as B,o as re,g as ae,z as _,B as Y,M as Q}from"./CNnx6_Vi.js";import{u as X}from"./CF0PLh0y.js";import ce from"./Cu7wUwK7.js";function de(e,t){const{title:o,titleTemplate:i,...s}=e;return X({title:o,titleTemplate:i,_flatMeta:s},{...t,transform(n){const r=te({...n._flatMeta});return delete n._flatMeta,{...n,meta:r}}})}const le=[{name:"Experience",link:"#Experience"},{name:"Work",link:"#Work"},{name:"Photography",link:"#Photography"},{name:"Contact",link:"#Contact"}],L=[{name:"W.Robin",link:"#"}],ue=[{id:"01",firstColor:"text-green-500",firstWord:"Google, ",secondWord:"Interaction Designer",description:"I currently am the lead designer on the interaction design team for Google Play."},{id:"02",firstColor:"text-blue-500",firstWord:"Facebook, ",secondWord:"Product Designer",description:"I’ve worked on a wide variety of internal tools for Facebook over the past 6 years."},{id:"03",firstColor:"text-pink-500",firstWord:"Instagram, ",secondWord:"Graphic Designer",description:"I started my design career with Dribble. I was in charge of creating illustrations for the platform."}],H={WorkTitle:"Work Experience",Description:"Companies I have worked for in the past"},I={PhilosophyTitle:"Our Philosophy & Values",Description:"At the core of our beliefs lie aspirations for profound connections with humanity, harmony in the metaphysical realm, and deep engagement with the universe. Our guiding principles—authenticity, creativity, and hospitality—steer us towards realizing these aspirations.",Link:"#",LinkText:"Learn More",ImageSrc:"/human_2.jpg",ImageAltText:"Human"},j={title:"I’m Robin Williams. A Product Designer,",titleSecond:"based in Italy.",description:"I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.",imageSrc:"/human.jpg",imageAlt:"Human"},F={title:"Skillset",description:"With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full-fledged project. Whatever your needs are, I can pretty much take on any challenge."},he=[{Icon:"mdi:view-dashboard",Skill:"Product Design",Description:"Working at Facebook has taught me a lot about how to understand users, solve problems and build great products."},{Icon:"mdi:pen",Skill:"Visual Design",Description:"My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout and the whole package."},{Icon:"mdi:motion-play",Skill:"Motion Design",Description:"I started my design journey with motion design in my college days. Motion is something that really fascinates me because of the flexibility of story telling. "},{Icon:"mdi:play",Skill:"Photography",Description:"Clicking pictures really brings out the creative in me. Phtography really makes you look and percieve things in a different way."}],me=[{id:1,imgSrc:"/img_1.png",imgAlt:"Restaurant Website Design",title:"Restaurant Website Design",description:"I worked with the guys at CBRE to redesign their entire website and mobile app for both Android and iOS. This project lasted for 4 months and was a very challenging one."},{id:2,imgSrc:"/img_2.png",imgAlt:"Restaurant Website Design",title:"Restaurant Website Design",description:"I worked with the guys at CBRE to redesign their entire website and mobile app for both Android and iOS. This project lasted for 4 months and was a very challenging one."},{id:3,imgSrc:"/img_3.png",imgAlt:"Restaurant Website Design",title:"Restaurant Website Design",description:"I worked with the guys at CBRE to redesign their entire website and mobile app for both Android and iOS. This project lasted for 4 months and was a very challenging one."},{id:4,imgSrc:"/img_4.png",imgAlt:"Restaurant Website Design",title:"Restaurant Website Design",description:"I worked with the guys at CBRE to redesign their entire website and mobile app for both Android and iOS. This project lasted for 4 months and was a very challenging one."}],ge={class:"flex justify-between items-center py-4 px-12 sticky top-0 z-10 bg-black/20 backdrop-blur-lg border border-gray-800 rounded-md"},fe=["href"],pe={class:"flex justify-end"},_e=["href"],ye=x({__name:"NavBar",setup(e){return(t,o)=>(g(),f("nav",ge,[a("a",{href:u(L)[0].link,class:"text-4xl font-bold text-primary"},h(u(L)[0].name),9,fe),a("div",pe,[(g(!0),f(z,null,D(u(le),i=>(g(),f("a",{href:i.link,class:"nav-link"},h(i.name),9,_e))),256))])]))}}),ve=A(ye,[["__scopeId","data-v-9e489ece"]]);async function xe(e,t){return await be(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function be(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,o)=>{const i=new Image;i.onload=()=>{const s={width:i.width,height:i.height,ratio:i.width/i.height};t(s)},i.onerror=s=>o(s),i.src=e})}function q(e){return t=>t?e[t]||t:e.missingValue}function we({formatter:e,keyMap:t,joinWith:o="/",valueMap:i}={}){e||(e=(n,r)=>`${n}=${r}`),t&&typeof t!="function"&&(t=q(t));const s=i||{};return Object.keys(s).forEach(n=>{typeof s[n]!="function"&&(s[n]=q(s[n]))}),(n={})=>Object.entries(n).filter(([d,l])=>typeof l<"u").map(([d,l])=>{const m=s[d];return typeof m=="function"&&(l=m(n[d])),d=typeof t=="function"?t(d):d,e(d,l)}).join(o)}function v(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function Se(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const o of e.split(" ")){const i=Number.parseInt(o.replace("x",""));i&&t.add(i)}return Array.from(t)}function ke(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function $e(e){const t={};if(typeof e=="string")for(const o of e.split(/[\s,]+/).filter(i=>i)){const i=o.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function Ie(e){const t={options:e},o=(s,n={})=>Z(t,s,n),i=(s,n={},r={})=>o(s,{...r,modifiers:U(n,r.modifiers||{})}).url;for(const s in e.presets)i[s]=(n,r,d)=>i(n,r,{...e.presets[s],...d});return i.options=e,i.getImage=o,i.getMeta=(s,n)=>We(t,s,n),i.getSizes=(s,n)=>De(t,s,n),t.$img=i,i}async function We(e,t,o){const i=Z(e,t,{...o});return typeof i.getMeta=="function"?await i.getMeta():await xe(e,i.url)}function Z(e,t,o){var m,b;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:s}=je(e,o.provider||e.options.provider),n=ze(e,o.preset);if(t=O(t)?t:ie(t),!i.supportsAlias)for(const w in e.options.alias)t.startsWith(w)&&(t=P(e.options.alias[w],t.substr(w.length)));if(i.validateDomains&&O(t)){const w=oe(t).host;if(!e.options.domains.find(W=>W===w))return{url:t}}const r=U(o,n,s);r.modifiers={...r.modifiers};const d=r.modifiers.format;(m=r.modifiers)!=null&&m.width&&(r.modifiers.width=v(r.modifiers.width)),(b=r.modifiers)!=null&&b.height&&(r.modifiers.height=v(r.modifiers.height));const l=i.getImage(t,r,e);return l.format=l.format||d||"",l}function je(e,t){const o=e.options.providers[t];if(!o)throw new Error("Unknown provider: "+t);return o}function ze(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function De(e,t,o){var y,C,R,E,N;const i=v((y=o.modifiers)==null?void 0:y.width),s=v((C=o.modifiers)==null?void 0:C.height),n=$e(o.sizes),r=(R=o.densities)!=null&&R.trim()?Se(o.densities.trim()):e.options.densities;ke(r);const d=i&&s?s/i:0,l=[],m=[];if(Object.keys(n).length>=1){for(const p in n){const S=V(p,String(n[p]),s,d,e);if(S!==void 0){l.push({size:S.size,screenMaxWidth:S.screenMaxWidth,media:`(max-width: ${S.screenMaxWidth}px)`});for(const $ of r)m.push({width:S._cWidth*$,src:G(e,t,o,S,$)})}}Pe(l)}else for(const p of r){const S=Object.keys(n)[0];let $=V(S,String(n[S]),s,d,e);$===void 0&&($={size:"",screenMaxWidth:0,_cWidth:(E=o.modifiers)==null?void 0:E.width,_cHeight:(N=o.modifiers)==null?void 0:N.height}),m.push({width:p,src:G(e,t,o,$,p)})}Ae(m);const b=m[m.length-1],w=l.length?l.map(p=>`${p.media?p.media+" ":""}${p.size}`).join(", "):void 0,W=w?"w":"x",c=m.map(p=>`${p.src} ${p.width}${W}`).join(", ");return{sizes:w,srcset:c,src:b==null?void 0:b.src}}function V(e,t,o,i,s){const n=s.options.screens&&s.options.screens[e]||Number.parseInt(e),r=t.endsWith("vw");if(!r&&/^\d+$/.test(t)&&(t=t+"px"),!r&&!t.endsWith("px"))return;let d=Number.parseInt(t);if(!n||!d)return;r&&(d=Math.round(d/100*n));const l=i?Math.round(d*i):o;return{size:t,screenMaxWidth:n,_cWidth:d,_cHeight:l}}function G(e,t,o,i,s){return e.$img(t,{...o.modifiers,width:i._cWidth?i._cWidth*s:void 0,height:i._cHeight?i._cHeight*s:void 0},o)}function Pe(e){var o;e.sort((i,s)=>i.screenMaxWidth-s.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const s=e[i];s.media===t&&e.splice(i,1),t=s.media}for(let i=0;i<e.length;i++)e[i].media=((o=e[i+1])==null?void 0:o.media)||""}function Ae(e){e.sort((o,i)=>o.width-i.width);let t=null;for(let o=e.length-1;o>=0;o--){const i=e[o];i.width===t&&e.splice(o,1),t=i.width}}const Me=we({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>T(e)+"_"+T(t)}),Ce=(e,{modifiers:t={},baseURL:o}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const s=Me(t)||"_";return o||(o=P(i.options.nuxt.baseURL,"/_ipx")),{url:P(o,s,se(e))}},Re=!0,Ee=!0,Ne=Object.freeze(Object.defineProperty({__proto__:null,getImage:Ce,supportsAlias:Ee,validateDomains:Re},Symbol.toStringTag,{value:"Module"})),K={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{},densities:[1,2],format:["webp"]};K.providers={ipx:{provider:Ne,defaults:{}}};const ee=()=>{const e=ne(),t=J();return t.$img||t._img||(t._img=Ie({...K,nuxt:{baseURL:e.app.baseURL}}))};function Oe(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const Te={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:[Boolean,Object],default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},Be=e=>{const t=k(()=>({provider:e.provider,preset:e.preset})),o=k(()=>({width:v(e.width),height:v(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=ee(),s=k(()=>({...e.modifiers,width:v(e.width),height:v(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:o,modifiers:s}},Le={...Te,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},M=x({name:"NuxtImg",props:Le,emits:["load","error"],setup:(e,t)=>{const o=ee(),i=Be(e),s=B(!1),n=B(),r=k(()=>o.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:v(e.width),height:v(e.height)}})),d=k(()=>{const c={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||s.value)&&(c.sizes=r.value.sizes,c.srcset=r.value.srcset),c}),l=k(()=>{let c=e.placeholder;if(c===""&&(c=!0),!c||s.value)return!1;if(typeof c=="string")return c;const y=Array.isArray(c)?c:typeof c=="number"?[c,c]:[10,10];return o(e.src,{...i.modifiers.value,width:y[0],height:y[1],quality:y[2]||50,blur:y[3]||3},i.options.value)}),m=k(()=>e.sizes?r.value.src:o(e.src,i.modifiers.value,i.options.value)),b=k(()=>l.value?l.value:m.value);if(e.preload){const c=Object.values(r.value).every(y=>y);X({link:[{rel:"preload",as:"image",nonce:e.nonce,...c?{href:r.value.src,imagesizes:r.value.sizes,imagesrcset:r.value.srcset}:{href:b.value},...typeof e.preload!="boolean"&&e.preload.fetchPriority?{fetchpriority:e.preload.fetchPriority}:{}}]})}const W=J().isHydrating;return re(()=>{if(l.value){const c=new Image;c.src=m.value,e.sizes&&(c.sizes=r.value.sizes||"",c.srcset=r.value.srcset),c.onload=y=>{s.value=!0,t.emit("load",y)},Oe("nuxt-image");return}n.value&&(n.value.complete&&W&&(n.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),n.value.onload=c=>{t.emit("load",c)},n.value.onerror=c=>{t.emit("error",c)})}),()=>ae("img",{ref:n,...d.value,...t.attrs,class:e.placeholder&&!s.value?[e.placeholderClass]:void 0,src:b.value})}}),He={class:"relative flex flex-col md:flex-row justify-between items-center"},Fe={class:"md:right-0 md:w-screen px-4"},qe={class:"font-bold text-4xl md:text-5xl lg:text-6xl text-primary py-4"},Ve={class:"text-gray-400 block"},Ge={class:"text-lg text-primary mt-4 lg: md:mt-8 md:pr-8"},Ue=x({__name:"Hero",setup(e){return(t,o)=>{const i=M;return g(),f("section",He,[_(i,{alt:u(j).imageAlt,src:u(j).imageSrc,class:"md:w-1/2 h-1/2 object-cover rounded-lg shadow-md"},null,8,["alt","src"]),a("div",Fe,[a("h1",qe,[Y(h(u(j).title)+" ",1),a("span",Ve,h(u(j).titleSecond),1)]),a("p",Ge,h(u(j).description),1)])])}}}),Je={class:"work-card bg-accent-foreground/10 dark:bg-gray-800 rounded-lg shadow-md p-3 flex flex-col justify-start"},Ye={class:"text-5xl md:text-9xl text-gray-600"},Qe={class:"text-xl md:text-2xl py-2"},Xe={class:"py-2 text-sm md:text-base"},Ze=x({__name:"ExperienceCard",setup(e){return(t,o)=>(g(!0),f(z,null,D(u(ue),i=>(g(),f("div",Je,[a("span",Ye,h(i.id),1),a("p",Qe,[a("span",{class:Q(i.firstColor)},h(i.firstWord),3),Y(" "+h(i.secondWord),1)]),a("p",Xe,h(i.description),1)]))),256))}}),Ke=A(Ze,[["__scopeId","data-v-7b235254"]]),et={id:"Work",class:"scroll-auto"},tt={class:"font-bold text-xl md:text-2xl text-primary/70"},it={class:"font-bold text-2xl md:text-6xl text-primary py-4"},ot={class:"flex flex-col md:flex-row justify-between gap-4"},st=x({__name:"Work",setup(e){return(t,o)=>(g(),f("section",et,[a("h2",tt,h(u(H).WorkTitle),1),a("h2",it,h(u(H).Description),1),a("div",ot,[_(Ke)])]))}}),nt={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},rt={class:"bg-accent-foreground/10 dark:bg-gray-800 p-6 flex flex-col justify-center rounded-lg shadow-md"},at={class:"text-2xl text-primary dark:text-primary font-bold mb-4"},ct={class:"text-accent-foreground/70"},dt=["href"],lt={class:"bg-accent-foreground/10 dark:bg-gray-800 flex justify-center items-center object-cover rounded-lg shadow-md"},ut={class:"w-full h-full flex justify-center items-center"},ht=x({__name:"Philosophy",setup(e){return(t,o)=>{const i=M;return g(),f("section",nt,[a("div",rt,[a("h2",at,h(u(I).PhilosophyTitle),1),a("p",ct,h(u(I).Description),1),a("a",{href:u(I).Link,class:"mt-4 text-blue-500 hover:underline"},h(u(I).LinkText),9,dt)]),a("div",lt,[a("div",ut,[_(i,{alt:u(I).ImageAltText,src:u(I).ImageSrc,class:"object-cover w-full h-64 md:h-96 rounded-lg shadow-md"},null,8,["alt","src"])])])])}}}),mt={class:"bg-white p-4 rounded-lg shadow-md"},gt={class:"text-2xl text-secondary font-semibold mb-2"},ft={class:"text-gray-600"},pt=x({__name:"SkillCard",setup(e){return(t,o)=>{const i=ce;return g(!0),f(z,null,D(u(he),s=>(g(),f("div",mt,[_(i,{name:s.Icon,size:"36px",style:{color:"black"}},null,8,["name"]),a("h4",gt,h(s.Skill),1),a("p",ft,h(s.Description),1)]))),256)}}}),_t={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},yt={class:"flex flex-col justify-start"},vt={class:"text-2xl font-bold text-primary/70 mb-4"},xt={class:"text-xl md:text-4xl font-bold text-gray-700"},bt={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},wt=x({__name:"Skillset",setup(e){return(t,o)=>{const i=pt;return g(),f("div",_t,[a("div",yt,[a("h4",vt,h(u(F).title),1),a("p",xt,h(u(F).description),1)]),a("div",bt,[_(i)])])}}}),St=A(wt,[["__scopeId","data-v-dbb5bafa"]]),kt={class:"p-4"},$t=a("div",{class:"mb-8 md:w-1/2"},[a("h5",{class:"text-xl"},"MY PROJECTS"),a("p",{class:"text-4xl md:text-6xl font-bold"}," Work that I’ve done for the past 8 years ")],-1),It={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Wt={class:"p-4"},jt={class:"text-2xl md:text-4xl"},zt={class:"text-lg md:text-xl"},Dt=a("div",{class:"w-full md:w-5/6 mt-8 flex justify-center md:justify-end"},[a("button",{class:"p-4 border-gray-500 border-2"},"VIEW ALL PROJECTS")],-1),Pt=x({__name:"Projects",setup(e){return(t,o)=>{const i=M;return g(),f("div",kt,[$t,a("div",It,[(g(!0),f(z,null,D(u(me),(s,n)=>(g(),f("div",{key:n,class:Q([{"md:top-16":n%2==0},"relative bg-primary text-primary-foreground rounded-lg"])},[_(i,{alt:s.imgAlt,src:s.imgSrc,class:"w-full rounded-t-lg"},null,8,["alt","src"]),a("div",Wt,[a("h5",jt,h(s.title),1),a("p",zt,h(s.description),1)])],2))),128))]),Dt])}}}),At={class:"container flex flex-col relative z-10 text-primary gap-4"},Et=x({__name:"index",setup(e){return de({title:"Switty | Портфолио",description:"Добро пожаловать в портфолио Switty, где представлены мои лучшие проекты и достижения."}),(t,o)=>{const i=ve,s=Ue,n=st,r=ht,d=St,l=Pt;return g(),f("div",At,[_(i),_(s),_(n),_(r),_(d),_(l)])}}});export{Et as default};