(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{170:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(5),c=n(21),o=n(0),i=function(e){var t=e.data;return Object(o.jsx)("article",{className:"degree-container",children:Object(o.jsxs)("header",{children:[Object(o.jsx)("h4",{className:"degree",children:t.degree}),Object(o.jsxs)("p",{className:"school",children:[Object(o.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(o.jsxs)("div",{className:"education",children:[Object(o.jsx)("div",{className:"link-to",id:"education"}),Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(o.jsx)(i,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(o.jsxs)("article",{className:"jobs-container",children:[Object(o.jsxs)("header",{children:[Object(o.jsxs)("h4",{children:[Object(o.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(o.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(o.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(o.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(o.jsxs)("div",{className:"experience",children:[Object(o.jsx)("div",{className:"link-to",id:"experience"}),Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(o.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var a=f(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h(this,n)}}var g=n(59),v=n(57),O=function(e){var t=e.handleClick,n=e.active,r=e.label;return Object(o.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},x=function(e){var t=e.data,n=e.categories,r=t.category,a=t.competency,c=t.title,i={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(v.a)(Object(v.a)({},i),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return Object(o.jsxs)("div",{className:"skillbar clearfix",children:[Object(o.jsx)("div",{className:"skillbar-title",style:i,children:Object(o.jsx)("span",{children:c})}),Object(o.jsx)("div",{className:"skillbar-bar",style:s}),Object(o.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};x.defaultProps={categories:[]};var w=x,k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,r,a=j(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(v.a)(Object(v.a)({},n),{},Object(g.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(g.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=c,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(o.jsx)(w,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(o.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"skills",children:[Object(o.jsx)("div",{className:"link-to",id:"skills"}),Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h3",{children:"Skills"}),Object(o.jsx)("p",{children:"Here is a *mostly* honest overview of my skills."})]}),Object(o.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(o.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&b(t.prototype,n),r&&b(t,r),c}(r.Component);k.defaultProps={skills:[],categories:[]};var D=k,S=function(){return Object(o.jsxs)("div",{className:"references",children:[Object(o.jsx)("div",{className:"link-to",id:"references"}),Object(o.jsx)("div",{className:"title",children:Object(o.jsx)(a.b,{to:"/contact",children:Object(o.jsx)("h3",{children:"References are available upon request"})})})]})},P=[{school:"Houston Community College",degree:"B.S. Computer Science",link:"https://www.hccs.edu/",year:2022},{school:"The Iron Yard Houston",degree:"Front End Engineering",link:"https://www.coursereport.com/schools/the-iron-yard",year:2017}],N=[{company:"CocoLoco LLC",position:"Web Developer / Graphic Designer",link:"https://cocolococolorado.com",daterange:"February 2021 - Present",points:["Design and marketing materials development; enhancing our brand presence (flyers, web banners, infographics, pricing line-sheets, etc.)","Prepared illustrations and proofs of brand labels, based on clients' desired color scheme and preference.","Scheduled monthly updates and maintenence to keep client site up-to-date"]},{company:"Simply Hemp Wellness",position:"Web Developer, Retail & Social Media Manager",link:"https://simplyhempwellness.com",daterange:"January 2019 - January 2021",points:["Implement and maintain content management systems, primarily WordPress; including installation, configuration, and troubleshooting.","Manage technical integration with third-party services.","Provide networking/desktop support and resolve technical issues of software and surveillance systems.","Maintained strong social media presence across Twitter, Facebook, and Instagram platforms.","Built upon current client strategies within difficult CBD ad marketing space to meet and exceed expectations.","Provide quarterly campaign performance reporting and analysis to clients."]},{company:"Artflowmedia",position:"Consultant",link:"http://artflowmedia.org",daterange:"December 2019 - January 2020",points:["Identified issues with existing website, conducted market research, developed concepts for new site, and gained approval to completely redesign their web presence.","Design, develop, and maintain media production landing page, including content updates, debugging, and feature enhancements.","Performed unit testing to ensure optimal browser interpretation and functionality."]},{company:"BHG Real Estate",position:"Consultant",link:"https://www.bhgre.com/",daterange:"December 2018 - March 2019",points:["Develop and optimize real estate website utilizing HTML, CSS, Python, Javascript, Django and Postgres to meet the clients' needs and goals.","Ability for client to add/remove/edit listing information through their own admin dashboard, allowing for full control of all content.","Diagnose, troubleshoot and resolve issues with the website and/or server.","Meet with the client to review website, and gather the client\u2019s specifications for new or existing features."]},{company:"IDAD Inc.",position:"Manager / Lead Supervisor",link:"",daterange:"June 2018 - December 2018",points:["Improved efficiency of inventory, labor and point-of-sale management using Oracle Micros POS.","Training and developing productive staff while maintaining solid relationships with other management.","Delegating responsibilities and overseeing employee work to ensure compliance with company policies, regulations and safety guidelines.","Prepare a variety of administrative/operations reports and records."]}],C=n(17);var W=n(22);var L,J=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:3,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:3,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:3,category:["Web Development","Databases"]},{title:"Express.JS",competency:4,category:["Web Development","Javascript"]},{title:"D3",competency:2,category:["Web Development","Javascript"]},{title:"Git",competency:3,category:["Tools"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"Tensorflow",competency:3,category:["Data Science"]},{title:"Typescript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:2,category:["Languages"]},{title:"C++",competency:1,category:["Languages"]},{title:"Data Visualization",competency:2,category:["Data Science","Javascript"]},{title:"GraphQL",competency:3,category:["Web Development","Databases"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),R=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],T=(L=new Set(J.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(C.a)(e)}(L)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(L)||Object(W.a)(L)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:R[t]}})),E=["Education","Experience","Skills","References"];t.default=function(){return Object(o.jsx)(c.a,{title:"Resume",description:"Anthony Buncio's Resume.",children:Object(o.jsxs)("article",{className:"post",id:"resume",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h2",{"data-testid":"heading",children:Object(o.jsx)(a.b,{to:"resume",children:"Resume"})}),Object(o.jsx)("div",{className:"link-container",children:E.map((function(e){return Object(o.jsx)("h4",{children:Object(o.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(o.jsx)(l,{data:P}),Object(o.jsx)(p,{data:N}),Object(o.jsx)(D,{skills:J,categories:T}),Object(o.jsx)(S,{})]})})}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(59);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},59:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=5.6a4d93d1.chunk.js.map