(function(t){function e(e){for(var r,n,s=e[0],l=e[1],c=e[2],A=0,p=[];A<s.length;A++)n=s[A],o[n]&&p.push(o[n][0]),o[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},o={app:0},i=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("64a9"),o=a.n(r);o.a},"0726":function(t,e,a){},"0c5b":function(t,e,a){"use strict";var r=a("695f"),o=a.n(r);o.a},"1efb":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAfklEQVRIie3UQQrCMBBG4U8F117AA9V72OsKdi0I9gau3JiuIl20FdoEqeTBQMLAPCY/hMIXdr3zAXu8cskuCAnqhtOQ4JlIEHAfEsTmUgLe8bJNMHCSIhjjk+VqN8gu+NMnOuNq+TcBjynpETWamYIWVRy26VmzkD2Dwu/pACDDUEgFwtX+AAAAAElFTkSuQmCC"},"359c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABf0lEQVRIid3VvUtWURwH8I+PFrooTiIkgi5Kg2At7sqTgqIojUG7/0JpELhkS5Nr0lRztfcHNGimqCAogg6RRDn5PA3PvXo7nsd7b1t94Tfcc74v5+2ew7+Olpz+VjzAPO6hL2k/xGd8wDtc/E34OHZQz6l9TJcxbsET1AqYp1XDS/krAl6UMA5rNc98OhCMYQ5bEbN9PMRI0D7VzLwNuwG5LenrwH10JzWKrowuq9nG7VjATGSU/XlTRk9Ed7nplQxxIRDu4bRAwI+Em0XoBTaDUcwWME8xF2g3YqTTgNRZIqAz0H5LO7JLVAlE9RIB4flvj5keBKRqiYDJ4Du6d2v+nOYRhgqYD+M40L6NEadcP24/8RQDEf4glvAronsUC6jgS0J4jvcZwasIfz1iXMeJxo8ZRVXj6j3HHXzEd/RGuHebBDxuZp5iOSGu5PBaI+av88xTPNO4grfw6QZe1vwNbhUNgAl8dfNrVcMZFhV8C0JUNG7RZqi6ulX/U/wGjNCe9i998QoAAAAASUVORK5CYII="},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Jumbotron"),a("Project",{attrs:{id:"projects",projects:this.projects}}),a("ContactForm",{attrs:{id:"contact"}}),a("Footer")],1)},i=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"projects"},[r("h1",[t._v("Projects")]),r("hr",{staticClass:"line"}),r("b-card-group",{staticClass:"project-card-group"},t._l(t.projects,function(e,o){return r("b-card",{key:o,staticClass:"mb-2 project-card",attrs:{"data-aos":"fade-up","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-once":"true","footer-tag":"footer"}},[r("a",{attrs:{href:t.getUrl(e),alt:"Go to project"}},[r("b-card-img-lazy",t._b({directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{src:e.imageUrl,alt:e.title}},"b-card-img-lazy",t.mainProps,!1))],1),r("a",{attrs:{href:t.getUrl(e),alt:"Go to project"}},[r("b-card-title",{staticClass:"project-card-title",attrs:{title:e.title}})],1),r("hr"),r("b-card-text",{staticClass:"project-card-text"},[t._v(t._s(e.description))]),r("div",{attrs:{slot:"footer"},slot:"footer"},[e.projectUrl?r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"project-card-button",attrs:{href:e.projectUrl,title:"See Project",alt:"See this program running"}},[r("img",{attrs:{src:a("1efb"),alt:"See this program running"}})]):t._e(),r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"project-card-button",attrs:{href:e.githubUrl,title:"See Code",alt:"Go to the Github Repo"}},[r("img",{attrs:{src:a("359c"),alt:"Go to the Github Repo"}})])],1)],1)}),1)],1)},s=[],l={props:{projects:Array},data(){return{mainProps:{title:"See Project",class:"project-card-image","blank-width":300,"blank-height":169,"blank-color":"grey"}}},methods:{getUrl(t){return t.projectUrl?t.projectUrl:t.projectUrl?void 0:t.githubUrl}}},c=l,u=(a("af37"),a("2877")),A=Object(u["a"])(c,n,s,!1,null,"94eab0aa",null),p=A.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-jumbotron",{attrs:{id:"jumboTitle",fluid:""}},[r("template",{slot:"header"},[t._v("Nick Leslie")]),r("template",{slot:"lead"},[t._v("Fullstack Web Developer | Mobile Developer")]),r("b-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#projects",expression:"'#projects'"}],staticClass:"project-card-button",attrs:{href:"#"}},[t._v("See Projects")]),r("hr"),r("div",{staticClass:"jumbotron-button-container"},[r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"project-card-button animated",attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-once":"true",href:"https://github.com/ncpleslie",title:"Github"}},[r("img",{attrs:{src:a("359c"),alt:"Go to my Github Repo"}})]),r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"project-card-button",attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-once":"true",href:"https://www.linkedin.com/in/nicholas-leslie/",title:"LinkedIn"}},[r("img",{attrs:{src:a("dd32"),alt:"Go to my LinkedIn"}})]),r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"project-card-button",attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-once":"true",href:"NickLeslieCV.pdf",title:"Resume/CV"}},[r("img",{attrs:{src:a("cd7f"),alt:"Go to my Resume Or CV"}})]),r("b-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"},{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"project-card-button",attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-once":"true",href:"#",title:"Contact"}},[r("img",{attrs:{src:a("9afb"),alt:"Contact Me"}})])],1)],2)],1)},d=[],b={},h=b,g=(a("0c5b"),Object(u["a"])(h,m,d,!1,null,"3a34483c",null)),f=g.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact"},[a("h1",[t._v("Contact Me")]),t._m(0),a("hr",{staticClass:"line"}),a("b-form",{staticClass:"contact-form",attrs:{action:"https://formspree.io/ncpleslie@gmail.com",method:"POST"}},[a("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1"}},[a("b-form-input",{staticClass:"contact-form-input",attrs:{name:"name",id:"input-1",type:"email",required:"",placeholder:"Your Email",alt:"Your Email"}})],1),a("b-form-group",{attrs:{id:"input-group-2",label:"Your Name:","label-for":"input-2"}},[a("b-form-input",{staticClass:"contact-form-input",attrs:{name:"name",id:"input-2",required:"",placeholder:"Your Name",alt:"Your Name"}})],1),a("b-form-group",{attrs:{label:"Your Message:","label-for":"textarea-default"}},[a("b-form-textarea",{staticClass:"contact-form-input",attrs:{name:"name",id:"textarea-default",placeholder:"Your Message",alt:"Your Message"}})],1),a("b-button",{staticClass:"contact-button",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",[t._v("\n    Contact me at\n    "),a("a",{attrs:{href:"mailto:ncpleslie@gmail.com"}},[t._v("ncpleslie@gmail.com")])])}],U={methods:{onSubmit(t){t.preventDefault(),alert(JSON.stringify(this.form))}}},C=U,w=(a("fb7f"),Object(u["a"])(C,v,j,!1,null,"18f83baa",null)),N=w.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("h6",[t._v("Site created by Nick Leslie © 2019")])])}],E={},S=E,O=(a("a2bc"),Object(u["a"])(S,R,G,!1,null,"5661071b",null)),B=O.exports,M={name:"App",components:{Project:p,Jumbotron:f,ContactForm:N,Footer:B},data(){return{projects:[{title:"Correlation and Regression",description:"After creating an algorithm to calculate Correlation and Regression between two arrays, I recreated the same website using different technologies. NodeJS, React, Vue, and Bootstrap",imageUrl:"thumbnails/small/correlationthumbnail.jpg",projectUrl:"https://6t14c.codesandbox.io/",githubUrl:"https://github.com/ncpleslie/PR280-Assignment2"},{title:"Join Us - Cult Website",description:"A website connecting a relational database with the client using NodeJS, EJS, and Express. Built in conjection with Colt Steele (Udemy)",imageUrl:"thumbnails/small/cultthumbnail.jpg",githubUrl:"https://github.com/ncpleslie/JoinUs_Cult_Website"},{title:"Vector LTD Database",description:"A relational database designed and built for Vector Energy using MySQL. Used to stored information sent from 'Smart Meters'",imageUrl:"thumbnails/small/vectorthumbnail.jpg",githubUrl:"https://github.com/ncpleslie/VectorLTD_SmartMeter_Database"},{title:"Date Night",description:"Date Night is a flutter based cross-platform mobile app designed to make your relationship easier.",imageUrl:"thumbnails/small/datenightthumbnail.jpg",githubUrl:"https://github.com/ncpleslie/date_night"},{title:"Wizard Saves the City",description:"A Platform game in JavaScript using Phaser 3",imageUrl:"thumbnails/small/platformgamethumbnail.jpg",projectUrl:"https://ncpleslie.github.io/PlatformGame/",githubUrl:"https://github.com/ncpleslie/PlatformGame"},{title:"Commonwealth Games",description:"Taking the assignment I worked on in Semester One I extended it to create a Single Page Application",imageUrl:"thumbnails/small/commonwealthgamesthumbnail.jpg",projectUrl:"https://ncpleslie.github.io/commonwealthgames2018",githubUrl:"https://github.com/ncpleslie/commonwealthgames2018"},{title:"New Zealand Music Live",description:"A website for a Live Music Recording Company",imageUrl:"thumbnails/small/NZMLthumbnail.jpg",projectUrl:"https://ncpleslie.github.io/NZML/",githubUrl:"https://github.com/ncpleslie/NZML"},{title:"Weather App",description:"A basic Weather App using jQuery and Dark Sky API",imageUrl:"thumbnails/small/weatherthumbnail.jpg",projectUrl:"https://codepen.io/nick-leslie/pen/vjJGrp",githubUrl:"https://codepen.io/nick-leslie/pen/vjJGrp"},{title:"Quote Machine",description:"A basic quote generator. Built in conjection with freeCodeCamp",imageUrl:"thumbnails/small/quotethumbnail.jpg",projectUrl:"https://codepen.io/nick-leslie/pen/qYBNWG",githubUrl:"https://codepen.io/nick-leslie/pen/qYBNWG"},{title:"Hackintosh Project for the Acer Aspire v7",description:"Currently running Mojave on the Acer Aspire V7-482PG",imageUrl:"thumbnails/small/hackintoshthumbnail.jpg",githubUrl:"https://github.com/ncpleslie/Acer-V7-Aspire-482PG"}]}}},D=M,k=(a("034f"),Object(u["a"])(D,o,i,!1,null,null,null)),y=k.exports,I=a("5f5b"),P=a("f13c"),V=a.n(P),J=a("f5af"),x=a.n(J);a("e829"),a("f9e3"),a("2dd8");x.a.init(),r["default"].use(I["a"]),r["default"].use(V.a),r["default"].config.productionTip=!1,new r["default"]({render:t=>t(y)}).$mount("#app")},"64a9":function(t,e,a){},"695f":function(t,e,a){},"9afb":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADTSURBVEhL7ZLNCcJAEIXThkcRexAsQG1BrMVeLMFzutACBC1B8ObPe7ADA/NiMtmb+MFHdrPvzR6S5qd5J02jhnwzzdDiqAsWMHsBO71M4AG+YPYCdtjlDMkG3iHDj/LMXGAdzuCswAUycITTsqZ9WG4G2eWaswIWPMOl2/dhOXZObh+wAzrmGzzdWvb8oXcHu9hC1aEBFTJbOIcG13ynsmZAhbz8S/ZF/5d1GVChGgMqVGNAhWoMqFCNARWqMXCDKjjGKwysIQ9UISNnrOCfITTNBxN3ClLZztguAAAAAElFTkSuQmCC"},a2bc:function(t,e,a){"use strict";var r=a("f7b3"),o=a.n(r);o.a},af37:function(t,e,a){"use strict";var r=a("0726"),o=a.n(r);o.a},cd7f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACqSURBVEhL3ZVBCkIxEEO7EFf/HF5F8Uj+gwgeT72HJtBFkKkxBTf/waN0SAa6atskZ/iEr1B22LU8YLXgF+/QUhUTLZ+FC1zgKjOqjOYlGqZcTnjqXBnNSzRMRy8YaalKiRYNX+EB7vt5g9Ui7Vg0vONA4L1apB2Lhme0VKVESxTuRJ0o3Ik6Gp7RUpUSLVG4E3WicCfqaHhGy98/nBNksFrwTXaOcFO09gZCHvfyQmJrbgAAAABJRU5ErkJggg=="},dd32:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADMSURBVEhL7ZUhDsJAEEUHRzAozoHC40ggBIcGRbAoboDEcDaCwQCnwMCfpU2+2L+026DoS16amf7piCa71lKXGXzAV6Y+O4WSO4wN1vEGJbGBHCUcusI1PFGvqhIO7bwBOvAJ+d03JRw6wyU8Uq+qklg4RwmH9t4oKHv9UJnN4Rh24RBeIM9KOJRa4PSKp7OAPCvhUGrBCPqPX4XKbAB5VsKh1IIN9PoQqg9lxpVwKLVgC73+8wVNlMTCOUp+flz7ZdFkiX98AluqYvYG0jEDY1Je+/kAAAAASUVORK5CYII="},f5c2:function(t,e,a){},f7b3:function(t,e,a){},fb7f:function(t,e,a){"use strict";var r=a("f5c2"),o=a.n(r);o.a}});
//# sourceMappingURL=app.245f683b.js.map