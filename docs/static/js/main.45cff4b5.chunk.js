(this["webpackJsonprick-and-morty-search-characters"]=this["webpackJsonprick-and-morty-search-characters"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),r=a.n(s),i=a(20),n=a.n(i),l=a(11),o=(a(27),a(14)),j=a(2),d=a(7),h=a(8),m=a(10),u=a(9),p=a.p+"static/media/logo.de13d484.png",b=(a(28),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("img",{src:p,alt:"logo de la serie Rick and Morty",title:"logo de la serie Rick and Morty",className:"header__img"})})}}]),a}(r.a.Component)),O=a.p+"static/media/portal.5e5081a6.png",x=(a(29),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"detail",children:[Object(c.jsxs)(l.b,{to:"/",alt:"volver a la Home",className:"detail__return",children:[Object(c.jsx)("img",{src:O,alt:"Volver al inicio",className:"detail__return--img"}),Object(c.jsx)("p",{className:"detail__return--text",children:"Volver al inicio"})]}),Object(c.jsxs)("article",{className:"detail__article",children:[Object(c.jsx)("img",{src:this.props.character.image,className:"detail__article--img",alt:"imagen de ".concat(this.props.character.name),title:"imagen de ".concat(this.props.character.name)}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"detail__article--title",children:[Object(c.jsx)("h3",{children:this.props.character.name}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"detail__article--icons",children:"Alive"===e.props.character.status?Object(c.jsx)("i",{className:"fas fa-heart"}):"Dead"===e.props.character.status?Object(c.jsx)("i",{className:"fas fa-skull-crossbones"}):Object(c.jsx)("i",{className:"fas fa-question"})}),Object(c.jsx)("span",{className:"detail__article--icons",children:"Human"===e.props.character.species?Object(c.jsx)("i",{className:"fas fa-user"}):Object(c.jsx)("i",{className:"fab fa-reddit-alien"})})]})]}),Object(c.jsxs)("ul",{className:"detail__article--list",children:[Object(c.jsxs)("li",{className:"detail__article--listItem",children:["Estado: ",this.props.character.status]}),Object(c.jsxs)("li",{className:"detail__article--listItem",children:["Especie: ",this.props.character.species]}),Object(c.jsxs)("li",{className:"detail__article--listItem",children:["Origen: ",this.props.character.origin]}),Object(c.jsxs)("li",{className:"detail__article--listItem",children:["Episodios: ",this.props.character.episodes.length]})]})]})]})]})}}]),a}(r.a.Component)),f=(a(35),{getDataFromApi:function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,image:e.image,species:e.species,origin:e.origin.name,episodes:e.episode,status:e.status}}))}))}}),g=(a(36),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l.b,{to:"/character-detail/".concat(this.props.character.id),className:"list__article",alt:"ir a los detalles del personaje ",children:Object(c.jsxs)("article",{children:[Object(c.jsx)("img",{src:this.props.character.image,alt:"imagen de ".concat(this.props.character.name),title:"imagen de ".concat(this.props.character.name),className:"list__article--img"}),Object(c.jsx)("h3",{className:"list__article--title",children:this.props.character.name}),Object(c.jsx)("p",{className:"list__article--text",children:this.props.character.species})]})})})}}]),a}(r.a.Component)),_=a.p+"static/media/notFound.80dc1a7d.png",N=(a(37),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.characters.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(g,{character:e})},e.id)}));return Object(c.jsx)("section",{className:"section",children:0!==e.length?Object(c.jsx)("ul",{className:"list",children:e}):Object(c.jsxs)("div",{className:"alternative",children:[Object(c.jsx)("h3",{className:"alternative__text",children:"Personaje no encontrado"}),Object(c.jsx)("img",{src:_,alt:"personaje no encontrado",className:"alternative__img"})]})})}}]),a}(r.a.Component)),v=(a(38),function(e){return Object(c.jsxs)("form",{action:"",className:"form",onSubmit:function(e){e.preventDefault()},children:[Object(c.jsx)("label",{htmlFor:"character",className:"form__label",children:"Personaje:"}),Object(c.jsx)("input",{id:"character",type:"text",placeholder:"Rick",className:"form__input",onChange:function(t){e.handleFilter(t.target.value)},value:e.filterText})]})}),y=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,{handleFilter:e.handleFilter,filterText:e.filterText}),Object(c.jsx)(N,{characters:e.characters})]})},k=a.p+"static/media/load.c78652bc.png",F=(a(39),function(){return Object(c.jsx)("div",{className:"loading",children:Object(c.jsx)("img",{src:k,alt:"cargando",className:"loading--img"})})}),C=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(s.useState)(""),n=Object(o.a)(i,2),l=n[0],d=n[1],h=Object(s.useState)(!1),m=Object(o.a)(h,2),u=m[0],p=m[1];Object(s.useEffect)((function(){p(!0),f.getDataFromApi().then((function(e){r(e),p(!1)}))}),[]);a.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}));var O=a.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(b,{}),Object(c.jsxs)("main",{children:[!0===u?Object(c.jsx)(F,{}):null,Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",children:Object(c.jsx)(y,{characters:O,handleFilter:function(e){d(e)},filterText:l})}),Object(c.jsx)(j.a,{path:"/character-detail/:id",render:function(e){var t=parseInt(e.match.params.id),s=a.find((function(e){return t===e.id}));return void 0!==s?Object(c.jsx)(x,{character:s}):Object(c.jsx)("p",{className:"notFound",children:"No se ha encontrado el personaje"})}})]})]})]})};n.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(C,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.45cff4b5.chunk.js.map