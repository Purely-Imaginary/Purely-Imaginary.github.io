(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,a,t){e.exports=t(68)},41:function(e,a,t){},42:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(28),c=t.n(r),m=(t(41),t(42),function(e){var a=e.text,t=e.url,n=e.icon;return l.a.createElement("div",{className:"menuLink"},l.a.createElement("a",{href:t},l.a.createElement("div",{className:"icon"},n),l.a.createElement("div",{className:"text"},a)))}),s=function(e){var a=e.url,t=e.name;return l.a.createElement("img",{src:a,className:t,alt:t})},u="https://64c99a553dd8.ngrok.io",o=t(10),i=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"menu"},l.a.createElement(s,{url:"logo512blue.png",name:"mainLogo"}),l.a.createElement(m,{text:"Last matches",url:"/#/",icon:"\ud83d\udd51"}),l.a.createElement(m,{text:"Players table",url:"/#/",icon:"\u2694"}),l.a.createElement(m,{text:"Leagues",url:"/#/future",icon:"\ud83c\udfc6"}),l.a.createElement(m,{text:"Future features",url:"/#/future",icon:"\ud83d\udca1"}),l.a.createElement("div",{className:"backendURL"},l.a.createElement("span",null,u,"/p?u="))))},E=t(30),d=t(31),h=t(35),g=t(34),p=t(8),f=t.n(p),v=t(11),y=t(13),R=t(12),N=t.n(R),T=t(14),b=t(32),P=t.n(b),M=function(){var e=Object(n.useState)([{ID:0,Time:"",BlueTeam:{AvgTeamRating:0,RatingChange:0,Score:0,Players:[{PlayerID:0,PlayerName:"",Rating:0}]},RedTeam:{AvgTeamRating:0,RatingChange:0,Score:0,Players:[{PlayerID:0,PlayerName:"",Rating:0}]}}]),a=Object(y.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(v.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()(u+"/getLastMatches");case 2:a=e.sent,console.log(a.data),r(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement(T.a,{striped:!0,hover:!0,className:"lastMatchTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Red Team Players"),l.a.createElement("th",{className:"avgRedRating"},"Avg Red Rating"),l.a.createElement("th",null,"Red Team Score"),l.a.createElement("th",null,"Blue Team Score"),l.a.createElement("th",{className:"avgRedRating"},"Avg Blue Rating"),l.a.createElement("th",null,"Blue Team Players"),l.a.createElement("th",null,"Red Team Rating Change"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e.ID},l.a.createElement("td",null,P()(e.Time).format("DD-MM-YYYY")),l.a.createElement("td",{className:"redTeamMatches"},e.RedTeam.Players.map((function(e){return l.a.createElement("div",{key:e.PlayerID},l.a.createElement("span",{className:"playerName"},e.PlayerName),l.a.createElement("span",{className:"playerRating"}," - ",Math.round(e.Rating)))}))),l.a.createElement("td",{className:"redTeamMatches avgRedRating"},Math.round(10*e.RedTeam.AvgTeamRating)/10),l.a.createElement("td",{className:"redTeamMatches"},e.RedTeam.Score),l.a.createElement("td",{className:"blueTeamMatches"},e.BlueTeam.Score),l.a.createElement("td",{className:"blueTeamMatches avgRedRating"},Math.round(10*e.BlueTeam.AvgTeamRating)/10),l.a.createElement("td",{className:"blueTeamMatches"},e.BlueTeam.Players.map((function(e){return l.a.createElement("div",{key:e.PlayerID},l.a.createElement("span",{className:"playerName"},e.PlayerName),l.a.createElement("span",{className:"playerRating"}," - ",Math.round(e.Rating)))}))),l.a.createElement("td",null,Math.round(10*e.RedTeam.RatingChange)/10))}))))},L=function(){var e=Object(n.useState)([{ID:0,Name:"",Wins:0,Losses:0,GoalsScored:0,GoalsLost:0,Rating:0}]),a=Object(y.a)(e,2),t=a[0],r=a[1];Object(n.useEffect)((function(){(function(){var e=Object(v.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()(u+"/getPlayersTable");case 2:a=e.sent,console.log(a.data),r(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var c=0;return l.a.createElement(T.a,{striped:!0,hover:!0,className:"playersTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"No."),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Wins"),l.a.createElement("th",null,"Losses"),l.a.createElement("th",null,"Goals Scored"),l.a.createElement("th",null,"Goals Lost"),l.a.createElement("th",null,"Rating"))),l.a.createElement("tbody",null,t.map((function(e){return e.Wins+e.Losses>10&&++c&&l.a.createElement("tr",{className:"playerRow",key:e.ID},l.a.createElement("td",null,c),l.a.createElement("td",null,e.Name),l.a.createElement("td",null,e.Wins),l.a.createElement("td",null,e.Losses),l.a.createElement("td",null,e.GoalsScored),l.a.createElement("td",null,e.GoalsLost),l.a.createElement("td",null,e.Rating))}))))},k=t(2),w=function(){return l.a.createElement("div",{className:"futureList"},l.a.createElement("h1",null,"Incoming features"),l.a.createElement("ul",null,l.a.createElement("li",null,"RWD tables, hiding less important columns"),l.a.createElement("li",null,"Player labels"),l.a.createElement("li",null,"Player card"),l.a.createElement("li",null,"Match card")))},S=function(e){Object(h.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={count:0},e.increment=function(){e.setState({count:e.state.count+1})},e.decrement=function(){e.setState({count:e.state.count-1})},e}return Object(d.a)(t,[{key:"render",value:function(){return n.createElement(o.a,null,n.createElement("div",{className:"mainContainer"},n.createElement(k.c,null,n.createElement(k.a,{path:"/future"},n.createElement(w,null)),n.createElement(k.a,{path:"/"},n.createElement("h1",null,"Last Matches"),n.createElement(M,null),n.createElement("h1",null,"Players Table"),n.createElement(L,null)))))}}]),t}(n.Component);var j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i,null),l.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(67);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.1bba9bfa.chunk.js.map