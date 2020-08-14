(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,a){e.exports=a(68)},41:function(e,t,a){},42:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),c=a.n(r),m=(a(41),a(42),function(e){var t=e.text,a=e.url,n=e.icon;return l.a.createElement("div",{className:"menuLink"},l.a.createElement("a",{href:a},l.a.createElement("div",{className:"icon"},n),l.a.createElement("div",{className:"text"},t)))}),u=function(e){var t=e.url,a=e.name;return l.a.createElement("img",{src:t,className:a})},s="https://64c99a553dd8.ngrok.io",o=a(10),i=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"menu"},l.a.createElement(u,{url:"logo512blue.png",name:"mainLogo"}),l.a.createElement("hr",null),l.a.createElement(m,{text:"Last matches",url:"/#/",icon:"\ud83d\udd51"}),l.a.createElement(m,{text:"Players table",url:"/#/",icon:"\u2694"}),l.a.createElement(m,{text:"Leagues",url:"/#/future",icon:"\ud83c\udfc6"}),l.a.createElement(m,{text:"Future features",url:"/#/future",icon:"\ud83d\udca1"}),l.a.createElement("div",{className:"spacer"}),l.a.createElement("p",null,s)))},E=a(30),d=a(31),h=a(35),f=a(34),g=a(8),p=a.n(g),v=a(11),T=a(13),y=a(12),R=a.n(y),b=a(14),N=a(32),P=a.n(N),S=function(){var e=Object(n.useState)([{ID:0,Time:"",BlueTeam:{AvgTeamRating:0,RatingChange:0,Score:0,Players:[{PlayerID:0,PlayerName:"",Rating:0}]},RedTeam:{AvgTeamRating:0,RatingChange:0,Score:0,Players:[{PlayerID:0,PlayerName:"",Rating:0}]}}]),t=Object(T.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()(s+"/getLastMatches");case 2:t=e.sent,console.log(t.data),r(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement(b.a,{striped:!0,hover:!0,className:"lastMatchTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Red Team Players"),l.a.createElement("th",null,"Avg Red Rating"),l.a.createElement("th",null,"Red Team Score"),l.a.createElement("th",null,"Blue Team Score"),l.a.createElement("th",null,"Avg Blue Rating"),l.a.createElement("th",null,"Blue Team Players"),l.a.createElement("th",null,"Red Team Rating Change"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.ID),l.a.createElement("td",null,P()(e.Time).format("DD-MM-YYYY")),l.a.createElement("td",{className:"redTeamMatches"},e.RedTeam.Players.map((function(e){return l.a.createElement("div",null,e.PlayerName," - ",e.Rating)}))),l.a.createElement("td",{className:"redTeamMatches"},e.RedTeam.AvgTeamRating),l.a.createElement("td",{className:"redTeamMatches"},e.RedTeam.Score),l.a.createElement("td",{className:"blueTeamMatches"},e.BlueTeam.Score),l.a.createElement("td",{className:"blueTeamMatches"},e.BlueTeam.AvgTeamRating),l.a.createElement("td",{className:"blueTeamMatches"},e.BlueTeam.Players.map((function(e){return l.a.createElement("div",null,e.PlayerName," - ",e.Rating)}))),l.a.createElement("td",null,e.RedTeam.RatingChange))}))))},w=function(){var e=Object(n.useState)([{ID:0,Name:"",Wins:0,Losses:0,GoalsScored:0,GoalsLost:0,Rating:0}]),t=Object(T.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()(s+"/getPlayersTable");case 2:t=e.sent,console.log(t.data),r(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var c=0;return l.a.createElement(b.a,{striped:!0,hover:!0,className:"playersTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Wins"),l.a.createElement("th",null,"Losses"),l.a.createElement("th",null,"Goals Scored"),l.a.createElement("th",null,"Goals Lost"),l.a.createElement("th",null,"Rating"))),l.a.createElement("tbody",null,a.map((function(e){return e.Wins+e.Losses>10&&++c&&l.a.createElement("tr",{className:"lastMatch"},l.a.createElement("td",null,c),l.a.createElement("td",null,e.Name),l.a.createElement("td",null,e.Wins),l.a.createElement("td",null,e.Losses),l.a.createElement("td",null,e.GoalsScored),l.a.createElement("td",null,e.GoalsLost),l.a.createElement("td",null,e.Rating))}))))},L=a(2),M=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={count:0},e.increment=function(){e.setState({count:e.state.count+1})},e.decrement=function(){e.setState({count:e.state.count-1})},e}return Object(d.a)(a,[{key:"render",value:function(){return n.createElement(o.a,null,n.createElement("div",{className:"mainContainer"},n.createElement(L.c,null,n.createElement(L.a,{path:"/future"},n.createElement("ul",null,n.createElement("li",null,"1"),n.createElement("li",null,"1"),n.createElement("li",null,"1"),n.createElement("li",null,"1"))),n.createElement(L.a,{path:"/"},n.createElement("h1",null,"Last Matches"),n.createElement(S,null),n.createElement("h1",null,"Players Table"),n.createElement(w,null)))))}}]),a}(n.Component);var j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i,null),l.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(67);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.47f81b8b.chunk.js.map