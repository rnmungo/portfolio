(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{135:function(e,t,c){},136:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(41),n=c.n(s),i=c(190),r=c(187),l=c(191),o=c(170),j=c(192),b=c(166),d=c(12),u=c(23),m=c.n(u),O=c(156),h=c(157),x=c(158),_=c(159),f=Object(a.createContext)(),v=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){var e="false"!==localStorage.getItem("portfolio-dark-mode-active");s(e),e?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")}),[]),[c,function(){s((function(e){return localStorage.setItem("portfolio-dark-mode-active",!c),e?document.body.classList.remove("dark-theme"):document.body.classList.add("dark-theme"),!e}))}]},p=c(0),N=function(e){var t=e.children,c=e.userName,s=Object(a.useState)(!1),n=Object(d.a)(s,2),i=n[0],r=n[1],l=Object(a.useState)(!1),o=Object(d.a)(l,2),j=o[0],b=o[1],u=v(),N=Object(d.a)(u,2),g=N[0],k=N[1],w=function(){window.scrollY>=80?b(!0):b(!1)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]),Object(p.jsx)(f.Provider,{value:{setShow:r},children:Object(p.jsx)("header",{className:m()("header",{"scroll-header":j}),id:"header",children:Object(p.jsxs)("nav",{className:"nav container",children:[Object(p.jsx)("a",{href:"#",className:"nav__logo",children:c}),Object(p.jsxs)("div",{className:m()("nav__menu",{"show-menu":i}),id:"nav-menu",children:[Object(p.jsx)("ul",{className:"nav__list grid",children:t}),Object(p.jsx)(O.a,{className:"nav__close",id:"nav-close",onClick:function(){return r(!1)}})]}),Object(p.jsxs)("div",{className:"nav__btns",children:[g?Object(p.jsx)(h.a,{className:"change-theme",onClick:function(){return k()}}):Object(p.jsx)(x.a,{className:"change-theme",onClick:function(){return k()}}),Object(p.jsx)("div",{className:"nav__toggle",id:"nav-toggle",onClick:function(){return r(!0)},children:Object(p.jsx)(_.a,{})})]})]})})})},g=function(e){var t=e.link,c=e.label,s=e.icon,n=Object(a.useContext)(f).setShow;return Object(p.jsx)("li",{className:"nav__item",children:Object(p.jsxs)("a",{href:"#".concat(t),className:"nav__link",onClick:function(){return n(!1)},children:[s," ",c]})})},k=function(e){var t=e.children;return Object(p.jsx)("main",{className:"main",children:t})},w=function(e){var t=e.children;return Object(p.jsx)("div",{className:"footer__container container grid",children:t})},C=c(160),y=function(e){var t=e.userName;return Object(p.jsx)("a",{href:"https://www.facebook.com/".concat(t),target:"_blank",rel:"noopener noreferrer",className:"footer__social",children:Object(p.jsx)(C.a,{})})},S=c(161),q=function(e){var t=e.userName;return Object(p.jsx)("a",{href:"https://www.instagram.com/".concat(t),target:"_blank",rel:"noopener noreferrer",className:"footer__social",children:Object(p.jsx)(S.a,{})})},E=function(){return Object(p.jsxs)("div",{className:"footer__socials",children:[Object(p.jsx)(y,{userName:"rodrigo.mungo"}),Object(p.jsx)(q,{userName:"rodrigo.mungo"})]})},P=function(e){var t=e.href,c=e.label;return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#".concat(t),className:"footer__link",children:c})})},M=function(){return Object(p.jsxs)("ul",{className:"footer__links",children:[Object(p.jsx)(P,{href:"services",label:"Servicios"}),Object(p.jsx)(P,{href:"portfolio",label:"Portafolio"}),Object(p.jsx)(P,{href:"contact",label:"Contactame"})]})},A=function(e){var t=e.label;return Object(p.jsx)("h1",{className:"footer__title",children:t})},D=function(e){var t=e.label;return Object(p.jsx)("span",{className:"footer__subtitle",children:t})},L=function(e){var t=e.enterprice,c=(new Date).getFullYear();return Object(p.jsxs)("p",{className:"footer__copy",children:["\xa9 ",t," 2020 - ",c,". Todos los derechos reservados"]})},F=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsxs)("div",{className:"footer__bg",children:[Object(p.jsxs)(w,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(A,{label:"Rodrigo"}),Object(p.jsx)(D,{label:"Desarrollador FullStack"})]}),Object(p.jsx)(M,{}),Object(p.jsx)(E,{})]}),Object(p.jsx)(L,{enterprice:"Shovel Soft"})]})})},B=c(73),T=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),c=t[0],s=t[1],n=function(){window.scrollY>=560?s(!0):s(!1)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),Object(p.jsx)("a",{href:"#",className:m()("button--fab scrollup",{"scrollup-active":c}),id:"scroll-up",children:Object(p.jsx)(B.a,{className:"button--fab__icon"})})},z=c(4),I=c(7),R=["children","className"],H=function(e){var t=e.children,c=e.className,a=Object(I.a)(e,R);return Object(p.jsx)("section",Object(z.a)(Object(z.a)({className:m()(c,"section")},a),{},{children:t}))};H.defaultProps={className:""};var J=H,V=function(e){var t=e.className,c=e.children;return Object(p.jsx)("div",{className:t,children:c})};V.defaultProps={className:""};var W=V,U=c(162),Y=function(e){var t=e.userName;return Object(p.jsx)("a",{href:"https://www.linkedin.com/in/".concat(t,"/"),target:"_blank",rel:"noopener noreferrer",className:"home__social-icon",children:Object(p.jsx)(U.a,{})})},Q=c(163),Z=function(e){var t=e.userName;return Object(p.jsx)("a",{href:"https://github.com/".concat(t),target:"_blank",rel:"noopener noreferrer",className:"home__social-icon",children:Object(p.jsx)(Q.a,{})})},G=function(e){var t=e.image;return Object(p.jsx)("div",{className:"home__img",children:Object(p.jsxs)("svg",{className:"home__blob",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 200 187",version:"1.1",children:[Object(p.jsx)("mask",{id:"mask0",style:{maskType:"alpha"},children:Object(p.jsx)("path",{d:"M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 \r 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 \r 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 \r 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"})}),Object(p.jsxs)("g",{mask:"url(#mask0)",children:[Object(p.jsx)("path",{d:"M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 \r 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 \r 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 \r -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"}),Object(p.jsx)("image",{className:"home__blob-img",x:"-30",y:"-30",xlinkHref:t})]})]})})},X=c(164),$=c(165),K=function(e){var t=e.label;return Object(p.jsx)("div",{className:"home__scroll",children:Object(p.jsxs)("a",{href:"#about",className:"home__scroll-button button--flex",children:[Object(p.jsx)(X.a,{className:"home__scroll-mouse"}),Object(p.jsx)("span",{className:"home__scroll-name",children:t}),Object(p.jsx)($.a,{className:"home__scroll-arrow"})]})})},ee=function(e){var t=e.children;return Object(p.jsx)("h1",{className:"home__title",children:t})},te=function(e){var t=e.children;return Object(p.jsx)("h3",{className:"home__subtitle",children:t})},ce=function(e){var t=e.children;return Object(p.jsx)("p",{className:"home__description",children:t})},ae=c.p+"static/media/profile.c4a2fb11.png",se=function(){return Object(p.jsx)(J,{className:"home",id:"home",children:Object(p.jsxs)(W,{className:"home__container container grid",children:[Object(p.jsxs)("div",{className:"home__content grid",children:[Object(p.jsxs)("div",{className:"home__social",children:[Object(p.jsx)(Y,{userName:"rodrigo-nicol\xe1s-mungo-86290591"}),Object(p.jsx)(Z,{userName:"rnmungo"})]}),Object(p.jsx)(G,{image:ae}),Object(p.jsxs)("div",{className:"home__data",children:[Object(p.jsx)(ee,{children:"Hola, soy Rodrigo"}),Object(p.jsx)(te,{children:"Desarrollador Fullstack"}),Object(p.jsx)(ce,{children:"Experiencia en dise\xf1o web y conocimiento en desarrollo backend, produciendo trabajos de calidad."}),Object(p.jsxs)("a",{href:"#contact",className:"button button--flex",children:["Contactame ",Object(p.jsx)(b.a,{className:"button__icon"})]})]})]}),Object(p.jsx)(K,{label:"Desplazarse hacia abajo"})]})})},ne=function(e){var t=e.children;return Object(p.jsx)("h2",{className:"section__title",children:t})},ie=function(e){var t=e.children;return Object(p.jsx)("h2",{className:"section__subtitle",children:t})};ie.defaultProps={children:""};var re=ie,le=function(e){var t=e.children;return Object(p.jsx)("div",{className:"about__data",children:t})},oe=function(e){var t=e.src,c=e.alt;return Object(p.jsx)("img",{src:t,alt:c,className:"about__img"})};oe.defaultProps={alt:""};var je=oe,be=function(e){var t=e.children;return Object(p.jsx)("p",{className:"about__description",children:t})},de=function(e){var t=e.children;return Object(p.jsx)("div",{className:"about__info",children:t})},ue=function(e){var t=e.title,c=e.content;return Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{className:"about__info-title",children:t}),Object(p.jsxs)("span",{className:"about__info-name",children:[c.primary," ",Object(p.jsx)("br",{})," ",c.secondary]})]})},me=function(e){var t=e.children;return Object(p.jsx)("div",{className:"about__buttons",children:t})},Oe=c(74),he=c.p+"static/media/Rodrigo-CV.bd4d4a1c.pdf",xe=function(e){var t=e.children;return Object(p.jsxs)("a",{download:"",href:he,className:"button button--flex",children:[t,Object(p.jsx)(Oe.a,{className:"button__icon"})]})},_e=c.p+"static/media/about.f0a341f8.jpg",fe=function(){return Object(p.jsxs)(J,{className:"about",id:"about",children:[Object(p.jsx)(ne,{children:"Sobre mi"}),Object(p.jsx)(re,{children:"Introducci\xf3n"}),Object(p.jsxs)(W,{className:"about__container container grid",children:[Object(p.jsx)(je,{src:_e,alt:"Rodrigo Mungo - Sobre mi"}),Object(p.jsxs)(le,{children:[Object(p.jsx)(be,{children:"Desarrollador Full Stack autodidacta, proactivo y entusiasta, con amplios conocimientos y a\xf1os de experiencia, trabajando en tecnolog\xedas web, entregando trabajos de calidad."}),Object(p.jsxs)(de,{children:[Object(p.jsx)(ue,{title:"05+",content:{primary:"A\xf1os",secondary:"de experiencia"}}),Object(p.jsx)(ue,{title:"04+",content:{primary:"Proyectos",secondary:"completados"}}),Object(p.jsx)(ue,{title:"02+",content:{primary:"Empresas",secondary:"trabajaron"}})]}),Object(p.jsx)(me,{children:Object(p.jsx)(xe,{children:"Descargar CV"})})]})]})]})},ve=c(167),pe=c(168),Ne=function(e){var t=e.title,c=e.subtitle,a=e.onClick;return Object(p.jsxs)("div",{className:"skills__header",onClick:a,children:[Object(p.jsx)(ve.a,{className:"skills__icon"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"skills__title",children:t}),Object(p.jsx)("span",{className:"skills__subtitle",children:c})]}),Object(p.jsx)(pe.a,{className:"skills__arrow"})]})};Ne.defaultProps={onClick:function(){}};var ge=Ne,ke=function(e){var t=e.title,c=e.subtitle,s=e.children,n=e.defaultOpen,i=Object(a.useState)(n),r=Object(d.a)(i,2),l=r[0],o=r[1],j=l?"skills__open":"skills__close";return Object(p.jsxs)("div",{className:m()("skills__content",j),children:[Object(p.jsx)(ge,{title:t,subtitle:c,onClick:function(){return o((function(e){return!e}))}}),Object(p.jsx)("div",{className:"skills__list grid",children:s})]})};ke.defaultProps={defaultOpen:!1};var we=ke,Ce=function(e){var t=e.name,c=e.level;return Object(p.jsxs)("div",{className:"skills__data",children:[Object(p.jsxs)("div",{className:"skills__titles",children:[Object(p.jsx)("h3",{className:"skills__name",children:t}),Object(p.jsx)("span",{className:"skills__number",children:"".concat(c," %")})]}),Object(p.jsx)("div",{className:"skills__bar",children:Object(p.jsx)("span",{className:"skills__percentage",style:{width:"".concat(c,"%")}})})]})};Ce.defaultProps={level:0};var ye=Ce,Se=function(){return Object(p.jsxs)(J,{className:"skills",id:"skills",children:[Object(p.jsx)(ne,{children:"Habilidades"}),Object(p.jsx)(re,{children:"Mi nivel t\xe9cnico"}),Object(p.jsxs)(W,{className:"skills__container container grid",children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)(we,{title:"Desarrollo Frontend",subtitle:"M\xe1s de 2 a\xf1os",defaultOpen:!0,children:[Object(p.jsx)(ye,{name:"HTML",level:90}),Object(p.jsx)(ye,{name:"CSS - Bootstrap - SASS",level:70}),Object(p.jsx)(ye,{name:"JavaScript",level:80}),Object(p.jsx)(ye,{name:"ReactJS",level:95})]}),Object(p.jsxs)(we,{title:"Desarrollo Backend",subtitle:"M\xe1s de 4 a\xf1os",defaultOpen:!1,children:[Object(p.jsx)(ye,{name:"C# - .NET - .NET Core",level:90}),Object(p.jsx)(ye,{name:"NodeJS",level:65}),Object(p.jsx)(ye,{name:"Python - FastAPI",level:70}),Object(p.jsx)(ye,{name:"Golang",level:85}),Object(p.jsx)(ye,{name:"PHP - Laravel",level:80}),Object(p.jsx)(ye,{name:"MySQL - SQLServer",level:75})]})]}),Object(p.jsx)("div",{children:Object(p.jsx)(we,{title:"Dise\xf1ador",subtitle:"M\xe1s de 1 a\xf1o",defaultOpen:!1,children:Object(p.jsx)(ye,{name:"Figma",level:70})})})]})]})},qe=c(171),Ee=c(169),Pe=function(e){var t=e.children;return Object(p.jsx)("div",{className:"qualification__tabs",children:t})},Me=function(e){var t=e.name,c=e.icon,a=e.target,s=e.onClick;return Object(p.jsxs)("div",{className:"qualification__button button--flex qualification__active","data-target":"#".concat(a),onClick:function(){return s(a)},children:[c,t]})};Me.defaultProps={onClick:function(){}};var Ae=Me,De=function(e){var t=e.children;return Object(p.jsx)("div",{className:"qualification__sections",children:t})},Le=function(e){var t=e.children,c=e.active;return Object(p.jsx)("div",{className:m()("qualification__content",{qualification__active:c}),"data-content":!0,children:t})};Le.defaultProps={active:!1};var Fe=Le,Be=function(){return Object(p.jsx)("span",{className:"qualification__line"})},Te=function(){return Object(p.jsx)("span",{className:"qualification__rounder"})},ze=Object(a.createContext)(),Ie=function(){var e=Object(a.useState)("education"),t=Object(d.a)(e,2),c=t[0],s=t[1];return Object(p.jsxs)(J,{className:"qualification",children:[Object(p.jsx)(ne,{children:"Calificaci\xf3n"}),Object(p.jsx)(re,{children:"Mi recorrido"}),Object(p.jsx)(ze.Provider,{value:{activeTab:c},children:Object(p.jsxs)(W,{className:"qualification__container container",children:[Object(p.jsxs)(Pe,{children:[Object(p.jsx)(Ae,{name:"Educaci\xf3n",target:"education",icon:Object(p.jsx)(Ee.a,{className:"qualification__icon"}),onClick:function(e){return s(e)}}),Object(p.jsx)(Ae,{name:"Trabajo",target:"work",icon:Object(p.jsx)(o.a,{className:"qualification__icon"}),onClick:function(e){return s(e)}})]}),Object(p.jsxs)(De,{children:[Object(p.jsxs)(Fe,{active:"education"===c,children:[Object(p.jsxs)("div",{className:"qualification__data",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"qualification__title",children:"T\xe9cnico Analista de Sistemas"}),Object(p.jsx)("span",{className:"qualification_subtitle",children:"Argentina - ISFDT 114"}),Object(p.jsxs)("div",{className:"qualification__calendar",children:[Object(p.jsx)(qe.a,{size:".75rem"})," ","2016 - 2019"]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(Te,{}),Object(p.jsx)(Be,{})]})]}),Object(p.jsxs)("div",{className:"qualification__data",children:[Object(p.jsx)("div",{}),Object(p.jsxs)("div",{children:[Object(p.jsx)(Te,{}),Object(p.jsx)(Be,{})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"qualification__title",children:"Desarrollo Mobile"}),Object(p.jsx)("span",{className:"qualification_subtitle",children:"Argentina - Coderhouse"}),Object(p.jsxs)("div",{className:"qualification__calendar",children:[Object(p.jsx)(qe.a,{size:".75rem"})," ","2019 - 2020"]})]})]}),Object(p.jsxs)("div",{className:"qualification__data",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"qualification__title",children:"Ingenier\xeda en Sistemas"}),Object(p.jsx)("span",{className:"qualification_subtitle",children:"Argentina - UAI"}),Object(p.jsxs)("div",{className:"qualification__calendar",children:[Object(p.jsx)(qe.a,{size:".75rem"})," ","2020 - En curso"]})]}),Object(p.jsx)("div",{children:Object(p.jsx)(Te,{})})]})]}),Object(p.jsxs)(Fe,{active:"work"===c,children:[Object(p.jsxs)("div",{className:"qualification__data",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"qualification__title",children:"Software Analyst"}),Object(p.jsx)("span",{className:"qualification_subtitle",children:"Millanel - Argentina"}),Object(p.jsxs)("div",{className:"qualification__calendar",children:[Object(p.jsx)(qe.a,{size:".75rem"})," ","2016 - 2019"]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(Te,{}),Object(p.jsx)(Be,{})]})]}),Object(p.jsxs)("div",{className:"qualification__data",children:[Object(p.jsx)("div",{}),Object(p.jsxs)("div",{children:[Object(p.jsx)(Te,{}),Object(p.jsx)(Be,{})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"qualification__title",children:"Software Analyst"}),Object(p.jsx)("span",{className:"qualification_subtitle",children:"MercadoLibre - Argentina"}),Object(p.jsxs)("div",{className:"qualification__calendar",children:[Object(p.jsx)(qe.a,{size:".75rem"})," ","2019 - 2020"]})]})]}),Object(p.jsxs)("div",{className:"qualification__data",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"qualification__title",children:"Software Engineer"}),Object(p.jsx)("span",{className:"qualification_subtitle",children:"MercadoLibre - Argentina"}),Object(p.jsxs)("div",{className:"qualification__calendar",children:[Object(p.jsx)(qe.a,{size:".75rem"})," ","2020 - Actualmente"]})]}),Object(p.jsx)("div",{children:Object(p.jsx)(Te,{})})]})]})]})]})})]})},Re=c(174),He=c(175),Je=c(176),Ve=function(e){var t=e.children;return Object(p.jsx)("div",{className:"services__content",children:t})},We=function(e){var t=e.icon,c=e.title;return Object(p.jsxs)("div",{children:[t,Object(p.jsxs)("h3",{className:"services__title",children:[c.primary," ",Object(p.jsx)("br",{})," ",c.secondary]})]})},Ue=c(173),Ye=c(172),Qe=function(e){var t=e.onClick;return Object(p.jsxs)("span",{className:"button button--flex button--small button--link services__button",onClick:t,children:["Ver m\xe1s",Object(p.jsx)(Ye.a,{className:"button__icon"})]})};Qe.defaultProps={onClick:function(){}};var Ze=Qe,Ge=function(e){var t=e.title,c=e.items,s=Object(a.useState)(!1),n=Object(d.a)(s,2),i=n[0],r=n[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Ze,{onClick:function(){return r(!0)}}),Object(p.jsx)("div",{className:m()("services__modal",{"active-modal":i}),children:Object(p.jsxs)("div",{className:"services__modal-content",children:[Object(p.jsx)("h4",{className:"services__modal-title",children:t}),Object(p.jsx)(O.a,{className:"services__modal-close",onClick:function(){return r(!1)}}),Object(p.jsx)("ul",{className:"services__modal-services grid",children:c&&c.map((function(e){return Object(p.jsxs)("li",{className:"services__modal-service",children:[Object(p.jsx)(Ue.a,{className:"services__modal-icon"}),Object(p.jsx)("p",{children:e})]},e)}))})]})})]})},Xe=function(){return Object(p.jsxs)(J,{className:"services",id:"services",children:[Object(p.jsx)(ne,{children:"Servicios"}),Object(p.jsx)(re,{children:"Les ofrezco"}),Object(p.jsxs)(W,{className:"services__container container grid",children:[Object(p.jsxs)(Ve,{children:[Object(p.jsx)(We,{icon:Object(p.jsx)(Re.a,{className:"services__icon"}),title:{primary:"Desarrollo",secondary:"Web"}}),Object(p.jsx)(Ge,{title:"Desarrollo Web",items:["Desarrollo de interfaz de usuario.","Desarrollo de p\xe1ginas web.","Posiciono la marca de tu empresa."]})]}),Object(p.jsxs)(Ve,{children:[Object(p.jsx)(We,{icon:Object(p.jsx)(He.a,{className:"services__icon"}),title:{primary:"Servicios",secondary:"Backend"}}),Object(p.jsx)(Ge,{title:"Servicios Backend",items:["Dise\xf1o el core de tu negocio analizando los casos de uso.","Desarrollo el core de tu p\xe1gina web."]})]}),Object(p.jsxs)(Ve,{children:[Object(p.jsx)(We,{icon:Object(p.jsx)(Je.a,{className:"services__icon"}),title:{primary:"Desarrollo",secondary:"\xc1gil e Iterativo"}}),Object(p.jsx)(Ge,{title:"Desarrollo \xc1gil e Iterativo",items:["Trabajo con metodolog\xeda Scrumban.","Estimo tareas y costos."]})]})]})]})},$e=c(194),Ke=c(177),et=c(37),tt=c(62),ct=c(63),at=c(178),st=c(179),nt=function(e){var t=e.title,c=e.image,a=e.button;return Object(p.jsxs)("div",{className:"portfolio__content grid",children:[Object(p.jsx)("img",{src:c.src,alt:c.alt,className:"portfolio__img"}),Object(p.jsxs)("div",{className:"portfolio__data",children:[Object(p.jsx)("h3",{className:"portfolio__title",children:t}),Object(p.jsx)("p",{className:"portfolio__description"}),a&&Object(p.jsxs)("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",className:"button button--flex button--small portfolio__button",children:[a.label,Object(p.jsx)(Ye.a,{className:"button__icon"})]})]})]})};nt.defaultProps={button:null};var it=nt,rt=c.p+"static/media/portfolio1.a74171a5.jpg",lt=c.p+"static/media/portfolio2.a591116a.jpg";c(107);et.a.use([tt.a,ct.a]);var ot=function(){return Object(p.jsxs)(J,{className:"portfolio",id:"portfolio",children:[Object(p.jsx)(ne,{children:"Portafolio"}),Object(p.jsx)(re,{children:"Trabajos m\xe1s recientes"}),Object(p.jsx)(W,{className:"portfolio__container container",children:Object(p.jsxs)($e.a,{pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,children:[Object(p.jsx)(Ke.a,{children:Object(p.jsx)(it,{title:"MercadoLibre en tus Apps",image:{src:rt,alt:"MercadoLibre en tus Apps"},button:{link:"https://www.youtube.com/watch?v=8LfCEOzqhxc",label:"Presentaci\xf3n"}})}),Object(p.jsx)(Ke.a,{children:Object(p.jsx)(it,{title:"Entren\xe1 con BeBlackfit",image:{src:lt,alt:"BeBlackfit"}})}),Object(p.jsx)("div",{className:"swiper-button-next",children:Object(p.jsx)(at.a,{className:"swiper-portfolio-icon"})}),Object(p.jsx)("div",{className:"swiper-button-prev",children:Object(p.jsx)(st.a,{className:"swiper-portfolio-icon"})}),Object(p.jsx)("div",{className:"swiper-pagination"})]})})]})},jt=c.p+"static/media/project.e0c28239.png",bt=function(){return Object(p.jsx)(J,{className:"project",children:Object(p.jsx)("div",{className:"project__bg",children:Object(p.jsxs)(W,{className:"project__container container grid",children:[Object(p.jsxs)("div",{className:"project__data",children:[Object(p.jsx)("h2",{className:"project__title",children:"\xbfTen\xe9s un nuevo proyecto en mente?"}),Object(p.jsx)("p",{className:"project__description",children:"No esperes m\xe1s para poner en pr\xe1ctica tus ideas"}),Object(p.jsxs)("a",{href:"#contact",className:"button button--flex button--white",children:["Contactame",Object(p.jsx)(b.a,{className:"project__icon button__icon"})]})]}),Object(p.jsx)("img",{src:jt,alt:"\xbfTen\xe9s un nuevo proyecto en mente?",className:"project__img"})]})})})},dt=c(27),ut=c.n(dt),mt=c(32),Ot=c(180),ht=c(181),xt=c(182),_t=c(197),ft=c(193),vt=function(e){var t=e.title,c=e.subtitle,a=e.icon;return Object(p.jsxs)("div",{className:"contact__information",children:[a,Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"contact__title",children:t}),Object(p.jsx)("span",{className:"contact__subtitle",children:c})]})]})},pt=["label","value","onChange","multiline"],Nt=function(e){var t=e.label,c=e.value,a=e.onChange,s=e.multiline,n=Object(I.a)(e,pt);return Object(p.jsxs)("div",{className:"contact__content",children:[Object(p.jsx)("label",{htmlFor:"",className:"contact__label",children:t}),s&&Object(p.jsx)("textarea",Object(z.a)({className:"contact__textarea",value:c,onChange:function(e){return a(e.target.value)}},n)),!s&&Object(p.jsx)("input",Object(z.a)({className:"contact__input",value:c,onChange:function(e){return a(e.target.value)}},n))]})};Nt.defaultProps={value:"",onChange:function(){},multiline:!1};var gt=Nt,kt=c(50),wt=c.n(kt),Ct=c(38),yt=c(75),St=c(76),qt=c(77),Et=function(e){Object(yt.a)(c,e);var t=Object(St.a)(c);function c(e,a,s,n){var i;return Object(Ct.a)(this,c),(i=t.call(this,e)).name="ClientError",i.code=a,i.status=s,i.data=n,i}return c}(Object(qt.a)(Error)),Pt=function(){var e=Object(mt.a)(ut.a.mark((function e(t,c,a,s){var n,i;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=wt.a.create({baseURL:"https://shovel-portfolio-api.herokuapp.com/api",timeout:5e3}),e.prev=1,e.next=4,n.post("/email",{name:t,email:c,project:a,message:s});case 4:return i=e.sent,e.abrupt("return",i.data);case 8:if(e.prev=8,e.t0=e.catch(1),!e.t0.response){e.next=12;break}throw new Et(e.t0.message,"INVALID_FORM_DATA",e.t0.response.status,e.t0.response.data);case 12:throw e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,c,a,s){return e.apply(this,arguments)}}(),Mt={name:"",email:"",project:"",message:""},At=function(){var e=Object(a.useState)(Mt),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),i=Object(d.a)(n,2),r=i[0],l=i[1],o=Object(a.useState)({message:"",show:!1}),j=Object(d.a)(o,2),u=j[0],m=j[1],O=function(e){if(""===e.name)throw new Error("El campo -Nombre- es requerido");if(""===e.email)throw new Error("El campo -Email- es requerido");if(""===e.project)throw new Error("El campo -Proyecto- es requerido");if(""===e.message)throw new Error("El campo -Mensaje- es requerido")};return Object(p.jsxs)(J,{className:"contact",id:"contact",children:[Object(p.jsx)(ne,{children:"Contactame"}),Object(p.jsx)(re,{}),Object(p.jsxs)(W,{className:"contact__container container grid",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(vt,{title:"Tel\xe9fono",subtitle:"+54 911 6806-5208",icon:Object(p.jsx)(Ot.a,{className:"contact__icon"})}),Object(p.jsx)(vt,{title:"Email",subtitle:"rodrigomungo@gmail.com",icon:Object(p.jsx)(ht.a,{className:"contact__icon"})}),Object(p.jsx)(vt,{title:"Direcci\xf3n",subtitle:"Argentina - Buenos Aires, Rosario 3713",icon:Object(p.jsx)(xt.a,{className:"contact__icon"})})]}),Object(p.jsxs)("form",{action:"",className:"contact__form grid",autoComplete:"off",children:[Object(p.jsxs)("div",{className:"contact__inputs grid",children:[Object(p.jsx)(gt,{label:"Nombre",type:"text",value:c.name,onChange:function(e){return s(Object(z.a)(Object(z.a)({},c),{},{name:e}))}}),Object(p.jsx)(gt,{label:"Email",type:"email",value:c.email,onChange:function(e){return s(Object(z.a)(Object(z.a)({},c),{},{email:e}))}})]}),Object(p.jsx)(gt,{label:"Proyecto",type:"text",value:c.project,onChange:function(e){return s(Object(z.a)(Object(z.a)({},c),{},{project:e}))}}),Object(p.jsx)(gt,{label:"Mensaje",value:c.message,onChange:function(e){return s(Object(z.a)(Object(z.a)({},c),{},{message:e}))},multiline:!0,name:"",id:"",cols:"0",rows:"7"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{href:"#contact",className:"button button--flex",onClick:Object(mt.a)(ut.a.mark((function e(){return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,O(c),e.next=5,Pt(c.name,c.email,c.project,c.message);case 5:s(Mt),m({message:"Mensaje enviado",show:!0}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),"ClientError"===e.t0.name?m({message:e.t0.data?e.t0.data.message:e.t0.message,show:!0}):m({message:e.t0.message,show:!0});case 12:l(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),children:r?Object(p.jsxs)(p.Fragment,{children:["Enviando...",Object(p.jsx)(_t.a,{color:"inherit",size:10})]}):Object(p.jsxs)(p.Fragment,{children:["Enviar mensaje",Object(p.jsx)(b.a,{className:"button__icon"})]})}),Object(p.jsx)(ft.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:u.show,autoHideDuration:5e3,onClose:function(){return m(Object(z.a)(Object(z.a)({},u),{},{show:!1}))},message:u.message})]})]})]})]})},Dt=c(53),Lt=c.n(Dt),Ft=c(189),Bt=c(188),Tt=c(186),zt=c(195),It=function(e){var t=e.title;return Object(p.jsx)("div",{className:"chat__header",children:t})},Rt={botName:"FrankyBot",initialMessages:[Object(Dt.createChatBotMessage)("\xa1Suuuuupeeer!")],customComponents:{header:function(){return Object(p.jsx)(It,{title:"Preguntale a Franky sobre Rodrigo"})},botAvatar:function(){return Object(p.jsx)(zt.a,{className:"chat__avatar",children:Object(p.jsx)(Tt.a,{})})},userAvatar:function(){return Object(p.jsx)(zt.a,{className:"chat__avatar",children:Object(p.jsx)(r.a,{})})}}},Ht=c(30),Jt=c(54),Vt=function(){var e=Object(mt.a)(ut.a.mark((function e(t){var c,a;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=wt.a.create({baseURL:"https://shovel-portfolio-api.herokuapp.com/api",timeout:15e3}),e.next=3,c.post("/bot",{query:t});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Wt=function(){function e(t,c){Object(Ct.a)(this,e),this.createChatBotMessage=t,this.setState=c}return Object(Jt.a)(e,[{key:"talk",value:function(){var e=Object(mt.a)(ut.a.mark((function e(t){var c;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Vt(t);case 2:c=e.sent,this.updateChatbotState(c.message);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateChatbotState",value:function(e){var t=this.createChatBotMessage(e);this.setState((function(e){return Object(z.a)(Object(z.a)({},e),{},{messages:[].concat(Object(Ht.a)(e.messages),[t])})}))}}]),e}(),Ut=Wt,Yt=function(){function e(t){Object(Ct.a)(this,e),this.actionProvider=t}return Object(Jt.a)(e,[{key:"parse",value:function(e){this.actionProvider.talk(e.trim())}}]),e}(),Qt=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),c=t[0],s=t[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Bt.a,{in:c,children:Object(p.jsx)("div",{className:"chat__container",children:Object(p.jsx)(Lt.a,{config:Rt,actionProvider:Ut,messageParser:Yt,placeholderText:"Escriba su mensaje aqu\xed",validator:function(e){return""!==e.trim()}})})}),Object(p.jsx)("div",{className:"button--fab chat__fab",onClick:function(){return s((function(e){return!e}))},children:Object(p.jsx)(Ft.a,{className:"button--fab__icon"})})]})},Zt=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(N,{userName:"Rodrigo",children:[Object(p.jsx)(g,{link:"home",label:"Home",icon:Object(p.jsx)(i.a,{className:"nav__icon"})}),Object(p.jsx)(g,{link:"about",label:"Sobre mi",icon:Object(p.jsx)(r.a,{className:"nav__icon"})}),Object(p.jsx)(g,{link:"skills",label:"Habilidades",icon:Object(p.jsx)(l.a,{className:"nav__icon"})}),Object(p.jsx)(g,{link:"services",label:"Servicios",icon:Object(p.jsx)(o.a,{className:"nav__icon"})}),Object(p.jsx)(g,{link:"portfolio",label:"Portafolio",icon:Object(p.jsx)(j.a,{className:"nav__icon"})}),Object(p.jsx)(g,{link:"contact",label:"Contactame",icon:Object(p.jsx)(b.a,{className:"nav__icon"})})]}),Object(p.jsxs)(k,{children:[Object(p.jsx)(se,{}),Object(p.jsx)(fe,{}),Object(p.jsx)(Se,{}),Object(p.jsx)(Ie,{}),Object(p.jsx)(Xe,{}),Object(p.jsx)(ot,{}),Object(p.jsx)(bt,{}),Object(p.jsx)(At,{})]}),Object(p.jsx)(F,{}),Object(p.jsx)(T,{}),Object(p.jsx)(Qt,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c(135);n.a.render(Object(p.jsx)(Zt,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[136,1,2]]]);
//# sourceMappingURL=main.f27bddec.chunk.js.map