(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a(48)},27:function(e,t,a){},28:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),u=(a(27),a(28),function(e){var t=e.text,a=e.url;return l.a.createElement("div",{className:"menuLink"},l.a.createElement("a",{href:a},t))}),m=function(e){var t=e.url,a=e.name;return l.a.createElement("img",{src:t,className:a})},o="https://b4ddea5338f5.ngrok.io",s=function(){return l.a.createElement("div",{className:"menu"},l.a.createElement(m,{url:"logo512.png",name:"mainLogo"}),l.a.createElement("h1",null,"MENU"),l.a.createElement("h6",null,o),l.a.createElement(u,{text:"Last matches",url:"/1"}),l.a.createElement(u,{text:"Players table",url:"/1"}),l.a.createElement(u,{text:"Leagues",url:"/1"}),l.a.createElement(u,{text:"Future features",url:"/1"}))},i=a(17),E=a(18),d=a(21),h=a(20),f=a(2),g=a.n(f),p=a(3),v=a(5),y=a(4),R=a.n(y),b=a(6),T=function(){var e=Object(n.useState)([{ID:0,Time:"",BlueTeam:{AvgTeamRating:0,RatingChange:0,Score:0,Players:[{PlayerID:0,PlayerName:"",Rating:0}]},RedTeam:{AvgTeamRating:0,RatingChange:0,Score:0,Players:[{PlayerID:0,PlayerName:"",Rating:0}]}}]),t=Object(v.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()(o+"/getLastMatches");case 2:t=e.sent,console.log(t.data),r(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement(b.a,{striped:!0,hover:!0,className:"lastMatchTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Time"),l.a.createElement("th",null,"PlayersRed"),l.a.createElement("th",null,"AvgRed"),l.a.createElement("th",null,"ScoreRed"),l.a.createElement("th",null,"ScoreBlue"),l.a.createElement("th",null,"AvgBlue"),l.a.createElement("th",null,"PlayersBlue"),l.a.createElement("th",null,"RedRatingChange"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.ID),l.a.createElement("td",null,e.Time),l.a.createElement("td",null,e.RedTeam.Players.map((function(e){return l.a.createElement("div",null,e.PlayerName," - ",e.Rating)}))),l.a.createElement("td",null,e.RedTeam.AvgTeamRating),l.a.createElement("td",null,e.RedTeam.Score),l.a.createElement("td",null,e.BlueTeam.Score),l.a.createElement("td",null,e.BlueTeam.AvgTeamRating),l.a.createElement("td",null,e.BlueTeam.Players.map((function(e){return l.a.createElement("div",null,e.PlayerName," - ",e.Rating)}))),l.a.createElement("td",null,e.RedTeam.RatingChange))}))))},N=function(){var e=Object(n.useState)([{ID:0,Name:"",Wins:0,Losses:0,GoalsScored:0,GoalsLost:0,Rating:0}]),t=Object(v.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()(o+"/getPlayersTable");case 2:t=e.sent,console.log(t.data),r(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement(b.a,{striped:!0,hover:!0,className:"playersTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Wins"),l.a.createElement("th",null,"Losses"),l.a.createElement("th",null,"GoalsScored"),l.a.createElement("th",null,"GoalsLost"),l.a.createElement("th",null,"Rating"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",{className:"lastMatch"},l.a.createElement("td",null,e.ID),l.a.createElement("td",null,e.Name),l.a.createElement("td",null,e.Wins),l.a.createElement("td",null,e.Losses),l.a.createElement("td",null,e.GoalsScored),l.a.createElement("td",null,e.GoalsLost),l.a.createElement("td",null,e.Rating))}))))},P=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={count:0},e.increment=function(){e.setState({count:e.state.count+1})},e.decrement=function(){e.setState({count:e.state.count-1})},e}return Object(E.a)(a,[{key:"render",value:function(){return n.createElement("div",{className:"mainContainer"},n.createElement("h1",null,"Last Matches"),n.createElement(T,null),n.createElement("h1",null,"Players Table"),n.createElement(N,null))}}]),a}(n.Component);var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s,null),l.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.1cec1b08.chunk.js.map