import{_ as b}from"./QImg.Bvvq1gIi.js";import{o as t,c as o,F as h,r as k,f as i,a as l,t as m,n as f,g as d,h as $,i as w,u as n,d as C,b as g,j as S,v as E,k as _}from"./entry.BXnrCNv6.js";import{u as L}from"./vue.f36acd1f.D5qHZy9J.js";import"./use-timeout.BSSs-esP.js";const N={class:"flex md:flex-nowrap"},j={key:0,class:"mx-[0.3rem]"},A=["href"],B={class:"text-base"},F={__name:"TagList",props:{items:Array},setup(e){return(a,s)=>(t(),o("div",N,[(t(!0),o(h,null,k(e.items,(r,c)=>(t(),o("div",{key:c,class:"flex shrink-0"},[c>0?(t(),o("span",j," • ")):i("",!0),l("a",{href:r.link,class:f(["flex items-center",r.link?"hover:underline":""])},[l("span",B,m(r.title),1)],10,A)]))),128))]))}},T=F,I=l("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.11997 9.29L12 13.17L15.88 9.29C16.27 8.9 16.9 8.9 17.29 9.29C17.68 9.68 17.68 10.31 17.29 10.7L12.7 15.29C12.31 15.68 11.68 15.68 11.29 15.29L6.69997 10.7C6.30997 10.31 6.30997 9.68 6.69997 9.29C7.08997 8.91 7.72997 8.9 8.11997 9.29Z",fill:"#0F0F0F"},null,-1),V=[I],P={__name:"IconArrow",props:{direction:String},setup(e){const a=e,s=d(null);function r(){switch(a.direction){case"left":s.value="transform: rotate(90deg);";break;case"right":s.value="transform: rotate(-90deg);";break;case"up":s.value="transform: rotate(180deg);";break;case"down":default:s.value="transform: rotate(0deg);";break}}return $(()=>{r()}),r(),(c,u)=>(t(),o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",style:w(n(s))},V,4))}},W=P,q={class:"flex flex-col w-full p-5"},z={class:"text-h3_mobile sm:text-h3 font-semibold flex justify-beetween relative w-full mb-2 pr-6"},D=["href"],J={__name:"AboutItem",props:{item:Object},setup(e){const a=d(!1);return(s,r)=>{const c=b;return t(),o("div",{class:"flex flex-col sm:flex-row items-center flex-nowrap sm:mb-3 last:mb-0 rounded-2xl overflow-hidden",style:w(e.item.bg_color?`background-color: ${e.item.bg_color};`:"")},[l("div",q,[l("h3",z,[C(m(e.item.title)+" ",1),e.item.expanded_text?(t(),o("button",{key:0,class:"absolute top-2 right-0",onClick:r[0]||(r[0]=u=>a.value=!n(a))},[g(W,{direction:n(a)?"up":"down"},null,8,["direction"])])):i("",!0)]),l("p",{class:f(["text-base sm:text-lg sm:leading-7",e.item.text_color?`text-${e.item.text_color}`:""])},m(e.item.text),3),e.item.expanded_text?S((t(),o("p",{key:0,class:f(["text-lg leading-7",e.item.text_color?`text-${e.item.text_color}`:""])},m(e.item.expanded_text),3)),[[E,n(a)]]):i("",!0)]),e.item.image_link&&e.item.image_src?(t(),o("a",{key:0,href:e.item.image_link,target:"_blank",class:"w-full flex justify-end"},[g(c,{src:e.item.image_src,class:"w-full sm:w-50"},null,8,["src"])],8,D)):e.item.image_src?(t(),_(c,{key:1,src:e.item.image_src,class:"w-full sm:w-50"},null,8,["src"])):i("",!0)],4)}}},O=J,H=l("h3",{class:"text-h3 mb-6"}," Об авторе ",-1),M={key:0,class:"flex flex-col items-center pt-6 sm:pt-0"},Q={class:"text-h3 font-semibold mb-[0.55rem]"},U={key:2,class:"mt-[1.4rem]"},Z=["href"],G=l("h3",{class:"text-h3 mt-20 mb-4"}," О проекте ",-1),K=l("p",{class:"text-lgExt sm:w-medium"}," Пет-проект представляет из себя набор полезных страниц на каждый день. ",-1),R=l("p",{class:"text-lgExt sm:w-medium"}," Для получения доступа к расширенному функционалу — войдите в аккаунт ",-1),X={class:"w-full md:w-medium mt-6 md:mt-8 mb-16"},ne={__name:"about",setup(e){L({title:"О проекте"});const a=d(!1),s=d({name:"Яруллин Рустам",phone:"+79872053376",image_src:"/images/author.png",counts:{agents:5},tags:[{title:"23 года"},{title:"Казань"}]}),r=d([{id:101,title:"Frontend",text:"Nuxt 3, Quasar, Tailwind CSS"},{id:102,title:"Backend ",text:"Node.js (Express.js)",bg_color:"#E8E8E8",expanded_text:`
                - Создание и вход в аккаунт
                - Сохранение данных пользователя
                - Аутентификация с использованием JWT (JSON Web Token) 
            `},{id:103,title:"Platforms",text:"Web, Android (coming soon)",text_color:"darkgreen"}]);return(c,u)=>{const p=b,v=T,y=O;return t(),o(h,null,[H,n(s)?(t(),o("div",M,[n(s).image_src?(t(),_(p,{key:0,src:n(s).image_src,alt:"logo",class:"rounded-8 w-[120px] h-[120px] mb-6"},null,8,["src"])):i("",!0),l("h3",Q,m(n(s).name),1),n(s).tags?(t(),_(v,{key:1,items:n(s).tags},null,8,["items"])):i("",!0),n(s).phone?(t(),o("div",U,[n(a)?i("",!0):(t(),o("button",{key:0,class:"bg-darkgreen hover:bg-[#378a77] text-white text-base py-4 px-5 rounded-xl",onClick:u[0]||(u[0]=x=>a.value=!0)}," Показать номер телефона ")),n(a)?(t(),o("a",{key:1,class:"text-darkgreen text-3xl hover:underline flex h-14",href:`tel:${n(s).phone}`},m(n(s).phone),9,Z)):i("",!0)])):i("",!0)])):i("",!0),G,K,R,l("div",X,[(t(!0),o(h,null,k(n(r),x=>(t(),_(y,{key:x.id,item:x},null,8,["item"]))),128))])],64)}}};export{ne as default};
