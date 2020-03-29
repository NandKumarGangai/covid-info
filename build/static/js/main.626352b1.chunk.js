(this["webpackJsonpcovid-stats"]=this["webpackJsonpcovid-stats"]||[]).push([[0],{23:function(e,t,a){e.exports=a(79)},28:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),l=(a(28),a(4)),o=a(5),i=a(6),m=a(7),u=a(8),d=a.n(u),h=(a(50),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"summary",style:{backgroundColor:"#eee"}},r.a.createElement("div",{className:""},r.a.createElement("p",{className:"summary-title"},"Confirmed"),r.a.createElement("p",{className:"summary-content"},this.props.summary.cases)),r.a.createElement("div",{className:""},r.a.createElement("p",{className:"summary-title"},"Deaths"),r.a.createElement("p",{className:"summary-content text-danger"},this.props.summary.deaths)),r.a.createElement("div",{className:""},r.a.createElement("p",{className:"summary-title"},"Recovered  "),r.a.createElement("p",{className:"summary-content text-success"},this.props.summary.recovered)))}}]),a}(n.Component));function p(e){var t=e.miliseconds,a=void 0===t?0:t;return r.a.createElement("p",{className:"text-center last-update"},a?"".concat(new Date(a)):"")}function v(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark text-light"},r.a.createElement("p",{className:"navbar-brand"},"COVID-19 CORONAVIRUS PANDEMIC"))}a(51);function E(e){var t=e.onClick;return r.a.createElement("div",{className:"show-all-btn"},r.a.createElement("button",{type:"button",className:"btn",onClick:t},"See all countries stats"))}function f(e){var t=e.country,a=void 0===t?"":t,n=e.state,c=void 0===n?"":n,s=e.cases,l=void 0===s?0:s,o=e.todayCases,i=void 0===o?0:o,m=e.deaths,u=void 0===m?0:m,d=(e.todayDeaths,e.recovered),h=void 0===d?0:d,p=e.active,v=void 0===p?0:p,E=e.critical,f=void 0===E?0:E,y=e.confirmed,N=void 0===y?0:y,b=e.hide,g=void 0!==b&&b,O=e.background,w=void 0!==O&&O?"bg-info text-dark h5":"";return r.a.createElement("tr",{className:w},r.a.createElement("th",{scope:"col"},r.a.createElement("p",null,a||c)),r.a.createElement("td",null,r.a.createElement("p",null,l||N)),!g&&r.a.createElement("td",{className:"bg-warning"},r.a.createElement("p",null,"+".concat(i))),r.a.createElement("td",null,r.a.createElement("p",{className:"text-danger"},u)),r.a.createElement("td",{className:"hide-sm"},r.a.createElement("p",null,v)),!g&&r.a.createElement("td",{className:"hide-sm"},r.a.createElement("p",null,f)),r.a.createElement("td",null,r.a.createElement("p",{className:"text-success ".concat(w)},h)))}function y(e){var t=e.toggle,a=void 0===t?"country":t,n=e.hide,c=void 0!==n&&n;return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},a),r.a.createElement("th",{scope:"col"},"Confirmed"),!c&&r.a.createElement("th",{scope:"col"},"Todays Case"),r.a.createElement("th",{scope:"col"},"Deaths"),r.a.createElement("th",{scope:"col",className:"hide-sm"},"Active"),!c&&r.a.createElement("th",{scope:"col",className:"hide-sm"},"Critical"),r.a.createElement("th",{scope:"col"},"Recovered"))}var N=a(3),b=a.n(N),g=a(9),O=a(53),w=a(57),C=function(){var e=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,O.getAll();case 3:return e.t1=e.sent,e.abrupt("return",e.t0.stringify.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(g.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,O.getCountry({country:t});case 3:return e.t1=e.sent,e.abrupt("return",e.t0.stringify.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,O.getCountry({sort:"cases"});case 3:return e.t1=e.sent,e.abrupt("return",e.t0.stringify.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){return w.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise").then((function(e){return e.data})).catch((function(e){return console.log(e)}))},D=(a(75),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={summary:[],current:0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){return e.setState({summary:JSON.parse(t)})})).catch((function(e){return console.error("Error: ",e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.summary.length?r.a.createElement("table",{className:"table table-sm text-center"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement(y,{toggle:"Country"})),r.a.createElement("tbody",null,this.state.summary.map((function(e,t){return r.a.createElement(f,Object.assign({key:t},e))})))):r.a.createElement("div",{className:"text-center"},r.a.createElement(d.a,{type:"Oval"})))}}]),a}(n.Component)),A=a(22);a(76);function I(e){var t=e.source,a=void 0===t?"":t,n=e.lastRefreshed,c=void 0===n?"":n,s=e.total,l=void 0===s?{}:s,o=e.statewise,i=void 0===o?[]:o,m=Object(A.a)({state:"Total"},l);return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-sm text-center"},r.a.createElement("thead",{className:"bg-dark text-light"},r.a.createElement(y,{toggle:"State",hide:!0})),r.a.createElement("tbody",null,r.a.createElement(f,Object.assign({hide:!0},m,{background:!0})),i.map((function(e,t){return e.confirmed>0?r.a.createElement(f,Object.assign({key:t},e,{hide:!0})):null})))),r.a.createElement("p",{className:"text-center last-update"},"**Above data is provided by ",r.a.createElement("a",{href:"".concat(a)},a)," and updated on ".concat(new Date(c))))}a(77);var J=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getIndiaStateWiseStatus=function(){return S().then((function(e){return n.setState({indiaStatus:e.data,show:!0})})).catch((function(e){return console.error(e)}))},n.getCountryData=function(){k(n.state.search).then((function(e){return n.setState({summary:JSON.parse(e)})})).catch((function(e){return console.error("Error: ",e)}))},n.onChange=function(e){e.preventDefault(),n.setState({search:e.target.value})},n.onSearch=function(e){e.preventDefault(),n.getCountryData(),n.setState({search:""})},n.showAllCountry=function(e){e.preventDefault(),n.setState({showAllCountry:!0})},n.state={summary:{},show:!1,search:"India",showAllCountry:!1,indiaStatus:{}},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getCountryData(),this.getIndiaStateWiseStatus()}},{key:"render",value:function(){return console.log(this.state.indiaStatus),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:""},r.a.createElement("p",{className:"text-center h6 bg-dark p-1 text-light"},"India official stats")),r.a.createElement("div",{className:"country-data"},r.a.createElement("div",{className:""},r.a.createElement("p",{className:"title"},"Confirmed"),r.a.createElement("p",{className:"content"},this.state.summary.cases)),r.a.createElement("div",{className:"bg-danger text-light"},r.a.createElement("p",{className:"title"},"New Cases"),r.a.createElement("p",{className:"content"},"+".concat(this.state.summary.todayCases))),r.a.createElement("div",{className:"text-danger"},r.a.createElement("p",{className:"title"},"Deaths"),r.a.createElement("p",{className:"content"},this.state.summary.deaths)),r.a.createElement("div",{className:""},r.a.createElement("p",{className:"title"},"Active"),r.a.createElement("p",{className:"content"},this.state.summary.active)),r.a.createElement("div",{className:""},r.a.createElement("p",{className:"title"},"Critical"),r.a.createElement("p",{className:"content"},this.state.summary.critical)),r.a.createElement("div",{className:"text-success"},r.a.createElement("p",{className:"title"},"Recovered"),r.a.createElement("p",{className:"content"},this.state.summary.recovered))),this.state.show?r.a.createElement(I,this.state.indiaStatus):r.a.createElement("div",{className:"text-center"},r.a.createElement(d.a,{type:"Oval"})),r.a.createElement(E,{onClick:this.showAllCountry}),this.state.showAllCountry&&r.a.createElement(D,null))}}]),a}(n.Component);function R(){return r.a.createElement("footer",{id:"sticky-footer",className:"py-4 bg-dark text-white-50 mt-4"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("small",{className:"text-light"},"Copyright \xa9 Your Website"),r.a.createElement("p",null,"Developed by: Nandkumar Gangai")))}a(78);var M=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={summary:{},show:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;C().then((function(t){return e.setState({summary:JSON.parse(t),show:!0})})).catch((function(e){return console.error("Error: ",e)}))}},{key:"render",value:function(){return console.log(this.state.summary),r.a.createElement("div",null,this.state.show?r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement("div",{className:"container"},r.a.createElement(p,{miliseconds:this.state.summary.updated}),r.a.createElement(h,{summary:this.state.summary}),r.a.createElement(J,null)),r.a.createElement(R,null)):r.a.createElement("div",{className:"text-center"},r.a.createElement(d.a,{type:"Oval"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.626352b1.chunk.js.map