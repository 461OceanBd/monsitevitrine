(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(20)},16:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(9),c=t.n(s),r=(t(16),t(1)),o=t(2),i=t(4),m=t(3),u=t(5),p=t(7),d=t(10),h=t.n(d),E=(t(19),function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=(this.props.data.description,this.props.data.address.city,this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Accueil")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"\xc0 propos")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"CV")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Me contacter")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e),l.a.createElement("h3",null,l.a.createElement("span",null,a,".")),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},t))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),f=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e)),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="images/"+this.props.data.image,a=this.props.data.bio;this.props.data.phone,this.props.data.email,this.props.data.resumedownload}return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:e,alt:"Photo profil Romain Mercier"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"\xc0 propos"),l.a.createElement("p",null,a))))}}]),a}(n.Component),N=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e={color:"#4f4d4d",fontWeight:"bold"};if(this.props.data)var a=this.props.data.skillmessage,t=this.props.data.education.map(function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))}),n=this.props.data.work.map(function(a){return l.a.createElement("div",{key:a.company},l.a.createElement("h3",null,a.company),l.a.createElement("p",{className:"info"},a.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},a.years)),l.a.createElement("p",null,a.description," ",l.a.createElement("br",null)," ",l.a.createElement("span",{style:e},a.skills)))}),s=this.props.data.skillss.languages,c=this.props.data.skillss.frameworks,r=this.props.data.skillss.bdds,o=this.props.data.skillss.cms,i=this.props.data.skillss.deployment,m=this.props.data.skillss.methods;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Formation"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},t)))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Exp\xe9rience pro"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,"Exp\xe9rience professionnelle en lien direct avec le d\xe9veloppement. Vous pouvez consulter mon CV pour avoir un d\xe9tail des exp\xe9riences pass\xe9es."),n)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,a)),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h3",null,"Langages"),l.a.createElement("p",{className:"info"},s),l.a.createElement("h3",null,"Frameworks"),l.a.createElement("p",{className:"info"},c),l.a.createElement("h3",null,"Bases de donn\xe9es"),l.a.createElement("p",{className:"info"},r),l.a.createElement("h3",null,"CMS"),l.a.createElement("p",{className:"info"},o),l.a.createElement("h3",null,"D\xe9ploiement"),l.a.createElement("p",{className:"info"},i),l.a.createElement("h3",null,"M\xe9thodes"),l.a.createElement("p",{className:"info"},m))))}}]),a}(n.Component),b=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,a=this.props.data.phone,t=this.props.data.email;this.props.data.contactmessage}return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"Contactez moi"),l.a.createElement("br",null),l.a.createElement("p",{className:"address"},e,l.a.createElement("br",null),a," ",l.a.createElement("br",null),t))))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},p.a.initialize("UA-110570651-1"),p.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{data:this.state.resumeData.main}),l.a.createElement(v,{data:this.state.resumeData.main}),l.a.createElement(N,{data:this.state.resumeData.resume}),l.a.createElement(b,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.main}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[11,1,2]]]);
//# sourceMappingURL=main.fa757013.chunk.js.map