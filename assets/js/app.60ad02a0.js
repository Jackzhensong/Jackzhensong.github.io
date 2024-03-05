(function(){"use strict";var e={2309:function(e,t,n){n(3236);var a=n(4246),i=(n(1739),n(6987)),r=(n(3188),n(4604)),o=(n(3655),n(4464)),s=(n(6066),n(2774)),c=(n(733),n(2746)),l=(n(4632),n(7142)),u=(n(5577),n(1351)),h=(n(7681),n(7875)),d=n(144),p=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"overflow-x":"hidden",position:"relative"}},[t("div",{attrs:{id:"app"}},[t("Navbar",{staticStyle:{"z-index":"5"}}),t("router-view"),t("Footer")],1)])},f=[],m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("a-row",{staticClass:"clos"},[t("a-col",{attrs:{span:6}},[t("span",{staticClass:"logoName",on:{click:e.home}},[e._v(e._s("Time-Varying Data Science Lab"))])]),t("a-col",{staticClass:"menu",attrs:{span:18}},[t("a-menu",{staticClass:"lineHeight",attrs:{mode:"horizontal"},on:{click:e.pushmenu},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}},[t("a-menu-item",{key:"index"},[t("a-icon",{attrs:{type:"home"}}),e._v("Home ")],1),t("a-menu-item",{key:"publications"},[t("a-icon",{attrs:{type:"profile"}}),e._v("Publications ")],1),t("a-menu-item",{key:"team"},[t("a-icon",{attrs:{type:"team"}}),e._v("Team ")],1),t("a-menu-item",{key:"research"},[t("a-icon",{attrs:{type:"search"}}),e._v("Vacancies ")],1),t("a-menu-item",{key:"activities"},[t("a-icon",{attrs:{type:"schedule"}}),e._v("Activities ")],1)],1)],1)],1)],1)},g=[],v=(n(7658),{components:{},data(){return{showFlag:!1,current:["index"]}},watch:{$route(e,t){if(this.$route.path.substring(1)){var n=[];n.push(this.$route.path.substring(1)),this.current=n}}},methods:{pushmenu(e,t){t?(this.$route.path!=="/"+e&&this.$route.push({path:"/"+e}),this.showFlag=!1):this.$route.path!=="/"+e.key&&this.$router.push({path:"/"+e.key})},home(){"/"!==this.$route.path&&this.$router.push({path:"/"}),this.showFlag=!1}}}),b=v,y=n(1001),_=(0,y.Z)(b,m,g,!1,null,"121716f0",null),w=_.exports,C=function(){var e=this;e._self._c;return e._m(0)},S=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"footer"},[t("div",{staticClass:"footer-container"},[t("div",{staticClass:"footer-list"},[t("div",{staticClass:"Copyright"},[t("ul",{staticClass:"helpLink"},[t("li",[e._v("About us "),t("span",{staticClass:"space"})]),t("li",[e._v("Contact us")])]),t("p",[e._v("Secretary: Shengnan Li, lishengnan@sz.tsinghua.edu.cn")]),t("p",[e._v("Address: Information Building, Room 1106, Tsinghua Shenzhen International Graduate School, Shenzhen, Guangdong, China (518055)")]),t("p",[e._v("Copyright © TBSI All Rights Reserved 粤ICP备18046147号-1")])])])])])}],k={name:"Footer"},x=k,P=(0,y.Z)(x,C,S,!1,null,"952de4fc",null),Z=P.exports,A={name:"App",components:{Navbar:w,Footer:Z}},N=A,T=(0,y.Z)(N,p,f,!1,null,null,null),G=T.exports,O=n(8345),R=function(){var e=this,t=e._self._c;return t("div",{staticClass:"textlayout"},[e._m(0),t("h2",[e._v("Ongoing Projects")]),t("div",[t("a-row",{attrs:{gutter:[16,48],type:"flex",align:"middle"}},[t("a-col",{attrs:{span:12}},[t("span",{staticClass:"themeTitle"},[e._v("Stochastic Graphs")]),t("p",[e._v("Recently emerged Graph signal processing (GSP) techniques provide efficient solutions to deal with irregularly structured data. GSP techniques have already been applied in modeling brain functional connectivity, spatial temperature data, transportation flows, monitoring 5G signal strength, sensor networks in smart cities, structuring geometric data, and modeling transportation flows. The spectral analysis of GSP is the backbone of the Graph Convolutional Neural network, one of the most well-known graph deep learning architectures. ")])]),t("a-col",{attrs:{span:12}},[t("img",{attrs:{src:n(3966),alt:"alt text",height:"100%",width:"100%"}})])],1),t("a-divider"),t("a-row",{attrs:{gutter:[16,48],type:"flex",align:"middle"}},[t("a-col",{attrs:{span:12}},[t("span",{staticClass:"themeTitle"},[e._v("Remote Sensing")]),t("p",[e._v("Synthetic aperture radar (SAR) is a powerful radar technology commonly adopted for airborne and spaceborne geo-sensing and mapping applications due to its significant advantages in high azimuthal resolution and weather-independent operations. Upon acquisition of SAR images, a histogram representing the distribution of the image pixel values is drafted, and a proper model is required to obtain precise knowledge of the statistical properties of the image data to characterize the surface on which the image is produced. ")])]),t("a-col",{attrs:{span:12}},[t("img",{attrs:{src:n(6229),alt:"alt text",height:"100%",width:"100%"}})])],1),t("a-divider"),t("a-row",{attrs:{gutter:[16,48],type:"flex",align:"middle"}},[t("a-col",{attrs:{span:12}},[t("span",{staticClass:"themeTitle"},[e._v("Bayesian Learning")]),t("p",[e._v("Recently, Graph Convolutional Networks (GCNs) have been used to address node and graph classification and matrix completion. Brain disease prediction, which requires graph representation, also achieved effective results using the GCN. However, the current implementations have limited capability to incorporate uncertainty in the graph structure. Bayesian-GCN views the observed graph as a realization from a parametric family of random graphs. It targets inference of the joint posterior of the random graph parameters and the node (or graph) labels using Bayes’ theorem. ")])]),t("a-col",{attrs:{span:12}},[t("img",{attrs:{src:n(8774),alt:"alt text",height:"100%",width:"100%"}})])],1),t("a-divider"),t("a-row",{attrs:{gutter:[16,48],type:"flex",align:"middle"}},[t("a-col",{attrs:{span:12}},[t("span",{staticClass:"themeTitle"},[e._v("Neural Network Achitectures")]),t("p",[e._v("Neural Networks are everywhere nowadays, being able to fit any arbitrary function in order to discern some truth about the underlying data. When designing a Neural Network, the choice of architecture is of utmost importance, since a network too large would result in a network unable to generalize to other data, and a network too small would be unable to accurately reflect the underlying data distribution. ")])]),t("a-col",{attrs:{span:12}},[t("img",{attrs:{src:n(4608),alt:"alt text",height:"100%",width:"100%"}})])],1)],1),t("h2",[e._v("Completed Projects")]),e._m(1)])},j=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"margin-top":"85px"}},[t("h2",[e._v("Lab Introduction")]),t("span",{staticClass:"textstyle"},[t("a",[e._v("TVDS Group")]),e._v(" aims at studying time evolution in data science. Our research interests include Statistical Signal Processing, Bayesian Learning, Computational Biology and Geosciences, Remote Sensing, etc. We are looking for the people with the same interest! Our research themes including but not limited to: "),t("ul",[t("li",[e._v(" Statistical Signal and Image Processing ")]),t("li",[e._v(" Bayesian Learning and Statistical Machine Learning ")]),t("li",[e._v(" Data Science for Computational Biology and Geosciences ")]),t("li",[e._v(" Remote Sensing ")]),t("li",[e._v(" System and Noise Modelling ")]),t("li",[e._v(" Graphical Models ")]),t("li",[e._v(" Information and Coding Theory ")])])])])},function(){var e=this,t=e._self._c;return t("span",{staticClass:"finishProj"},[t("ul",[t("li",[e._v(" SARS-CoV-2 Gene Sequence Mutations Modeling: "),t("a",{attrs:{href:"https://github.com/mavericklim91/Modeling-SARS-CoV-2-Nucleotide-Mutations"}},[e._v("Stochastic Approach, ")]),t("a",{attrs:{href:"https://github.com/mavericklim91/Modeling-SARS-CoV-2-viral-escape-mutations"}},[e._v("Data-driven Approach")])]),t("li",[t("a",{attrs:{href:"https://github.com/poorichc/A-Metaheuristic-Approach-to-the-Multi-period-Reliable-Location-Problem-in-Time-Varying-Risk"}},[e._v("Metaheuristic Approach for Multi-period Reliable Location Problem in Time-Varying Risk")])]),t("li",[t("a",{attrs:{href:"https://ieeexplore.ieee.org/abstract/document/10214355"}},[e._v("Data Science for Geosciences")])])])])}],L={name:"HomeView",props:{}},M=L,B=(0,y.Z)(M,R,j,!1,null,"6c311dc2",null),E=B.exports;d.ZP.use(O.ZP);const V=[{path:"/",redirect:"/index"},{path:"/index",name:"home",component:E,meta:{title:"TVDS Lab"}},{path:"/research",name:"research",component:()=>n.e(840).then(n.bind(n,7840)),meta:{title:"Vacancies"}},{path:"/team",name:"team",component:()=>n.e(336).then(n.bind(n,9336)),meta:{title:"Team"}},{path:"/publications",name:"publications",component:()=>n.e(861).then(n.bind(n,1861)),meta:{title:"Publications"}},{path:"/activities",name:"activities",component:()=>n.e(794).then(n.bind(n,8794)),meta:{title:"Activities"}}],F=new O.ZP({routes:V});var $=F;n(1335);d.ZP.config.productionTip=!1,d.ZP.use(h.ZP),d.ZP.use(u.Z),d.ZP.use(l.Z),d.ZP.use(c.Z),d.ZP.use(s.Z),d.ZP.use(o.Z),d.ZP.use(r.Z),d.ZP.use(i.Z),d.ZP.use(a.ZP),new d.ZP({router:$,render:e=>e(G)}).$mount("#app")},8774:function(e,t,n){e.exports=n.p+"assets/img/gcn.5aa64dfb.png"},4608:function(e,t,n){e.exports=n.p+"assets/img/neural1.0655b22b.png"},6229:function(e,t,n){e.exports=n.p+"assets/img/remote_sensing1.1a7a7dd1.png"},3966:function(e,t,n){e.exports=n.p+"assets/img/statistic_graph.471cab13.png"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,r){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],i=e[u][1],r=e[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,r<o&&(o=r));if(s){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"assets/js/"+e+"."+{336:"b61ce2a8",794:"41354328",840:"8f70bdec",861:"f2ed7006"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"assets/css/"+e+"."+{336:"91227602",794:"c8bf05b7",840:"1e4cb010",861:"ba86bb31"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="tvds-lab:";n.l=function(a,i,r,o){if(e[a])e[a].push(i);else{var s,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var h=l[u];if(h.getAttribute("src")==a||h.getAttribute("data-webpack")==t+r){s=h;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=a),e[a]=[i];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var i=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(n){if(r.onerror=r.onload=null,"load"===n.type)a();else{var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=s,r.parentNode&&r.parentNode.removeChild(r),i(c)}};return r.onerror=r.onload=o,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){i=o[a],r=i.getAttribute("data-href");if(r===e||r===t)return i}},a=function(a){return new Promise((function(i,r){var o=n.miniCssF(a),s=n.p+o;if(t(o,s))return i();e(a,s,null,i,r)}))},i={143:0};n.f.miniCss=function(e,t){var n={336:1,794:1,840:1,861:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=a(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,a){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(n,a){i=e[t]=[n,a]}));a.push(i[2]=r);var o=n.p+n.u(t),s=new Error,c=function(a){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,i[1](s)}};n.l(o,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,r,o=a[0],s=a[1],c=a[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(t&&t(a);l<o.length;l++)r=o[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},a=self["webpackChunktvds_lab"]=self["webpackChunktvds_lab"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2309)}));a=n.O(a)})();
//# sourceMappingURL=app.60ad02a0.js.map