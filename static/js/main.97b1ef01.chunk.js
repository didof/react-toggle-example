(this["webpackJsonpreact-toggle-example"]=this["webpackJsonpreact-toggle-example"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),s=n.n(o),l=(n(13),n(3)),c=n(4),i=n(6),u=n(5),m=n(7),h=(n(14),n(15),function(e){return r.a.createElement("div",{className:"box"},r.a.createElement("label",null,"Nome: "),e.name,r.a.createElement("b",{onClick:e.click}," X"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",OneChange:e.changed}),r.a.createElement("br",null),r.a.createElement("label",null," Eta': "),e.age)}),d=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={persons:[{id:"1",name:"Francesco",age:22},{id:"2",name:"Lucrezia",age:23},{id:"3",name:"Kirby",age:1}],showPersons:!1,buttonValue:"Mostra"},n.togglePersonsHandler=function(){var e=n.state.showPersons;n.setState({showPersons:!e})},n.deletePersonsHandler=function(e){var t=n.state.persons.slice();t.splice(e,1),n.setState({persons:t})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=null;return this.state.showPersons&&(t=r.a.createElement("div",null,this.state.persons.map((function(t,n){return r.a.createElement(h,{name:t.name,age:t.age,click:function(){return e.deletePersonsHandler(n)},key:t.id,changed:function(n){return e.nameChangeHandler(n,t.id)}})})))),r.a.createElement("div",{className:"App"},r.a.createElement("button",{onClick:this.togglePersonsHandler,className:"button"},this.state.buttonValue),t)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.97b1ef01.chunk.js.map