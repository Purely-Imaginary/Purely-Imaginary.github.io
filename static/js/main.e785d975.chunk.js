(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{38:function(e,a,t){e.exports=t(71)},43:function(e,a,t){},44:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),c=t.n(r),s=(t(43),t(44),function(e){var a=e.text,t=e.url,n=e.icon;return l.a.createElement("div",{className:"menuLink"},l.a.createElement("a",{href:t},l.a.createElement("div",{className:"icon"},n),l.a.createElement("div",{className:"text"},a)))}),m=function(e){var a=e.url,t=e.name;return l.a.createElement("img",{src:a,className:t,alt:t})},u="https://3420f47dfe2c.ngrok.io",o=t(14),i=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"menu"},l.a.createElement(m,{url:"logo512blue.png",name:"mainLogo"}),l.a.createElement(s,{text:"Last matches",url:"/#/matches",icon:"\ud83d\udd51"}),l.a.createElement(s,{text:"Players table",url:"/#/players",icon:"\u2694"}),l.a.createElement(s,{text:"Charts",url:"/#/charts",icon:"\ud83d\udcca"}),l.a.createElement(s,{text:"Future features",url:"/#/future",icon:"\ud83d\udca1"}),l.a.createElement("div",{className:"backendURL"},l.a.createElement("span",null,u,"/p?u="))))},E=t(31),h=t(32),d=t(37),g=t(36),f=t(8),p=t.n(f),v=t(11),y=t(10),N=t(12),R=t.n(N),b=t(15),M=t(9),T=t.n(M),P=function(){var e=Object(n.useState)([{ID:0,Time:"",BlueTeam:{AvgTeamRating:0,RatingChange:0,Score:0,Players:[{PlayerID:0,PlayerName:"",Rating:0}]},RedTeam:{AvgTeamRating:0,RatingChange:0,Score:0,Players:[{PlayerID:0,PlayerName:"",Rating:0}]}}]),a=Object(y.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()(u+"/getLastMatches");case 2:a=e.sent,console.log(a.data),r(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement(b.a,{striped:!0,hover:!0,className:"lastMatchTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Red Team Players"),l.a.createElement("th",{className:"avgRedRating"},"Avg Red Rating"),l.a.createElement("th",{className:"scoreColumn",colSpan:3},"Score"),l.a.createElement("th",{className:"avgBlueRating"},"Avg Blue Rating"),l.a.createElement("th",null,"Blue Team Players"),l.a.createElement("th",null,"Red Team Rating Change"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e.ID},l.a.createElement("td",null,T()(e.Time).format("DD-MM-YYYY HH:MM")),l.a.createElement("td",{className:"redTeamMatches"},e.RedTeam.Players.map((function(e){return l.a.createElement("div",{key:e.PlayerID},l.a.createElement("span",{className:"playerName"},e.PlayerName),l.a.createElement("span",{className:"playerRating"}," - ",Math.round(e.Rating)))}))),l.a.createElement("td",{className:"redTeamMatches avgRedRating"},Math.round(10*e.RedTeam.AvgTeamRating)/10),l.a.createElement("td",{className:"redTeamMatches scoreColumn"},e.RedTeam.Score),l.a.createElement("td",{className:"scoreColumn"}," : "),l.a.createElement("td",{className:"blueTeamMatches scoreColumn"},e.BlueTeam.Score),l.a.createElement("td",{className:"blueTeamMatches avgBlueRating"},Math.round(10*e.BlueTeam.AvgTeamRating)/10),l.a.createElement("td",{className:"blueTeamMatches"},e.BlueTeam.Players.map((function(e){return l.a.createElement("div",{key:e.PlayerID},l.a.createElement("span",{className:"playerName"},e.PlayerName),l.a.createElement("span",{className:"playerRating"}," - ",Math.round(e.Rating)))}))),l.a.createElement("td",null,Math.round(10*e.RedTeam.RatingChange)/10))}))))},L=function(){var e=Object(n.useState)([{ID:0,Name:"",Wins:0,Losses:0,GoalsScored:0,GoalsLost:0,LastMatch:"",Rating:0}]),a=Object(y.a)(e,2),t=a[0],r=a[1];Object(n.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()(u+"/getPlayersTable");case 2:a=e.sent,console.log(a.data),r(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var c=0,s=0,m=2e3;return t.map((function(e){return s=Math.max(s,e.Rating),m=Math.min(m,e.Rating),null})),l.a.createElement(b.a,{striped:!0,hover:!0,className:"playersTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"No."),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Wins"),l.a.createElement("th",null,"Losses"),l.a.createElement("th",null,"W/L Ratio"),l.a.createElement("th",{className:"goalsColumn"},"Goals Scored"),l.a.createElement("th",{className:"goalsColumn"},"Goals Lost"),l.a.createElement("th",{className:"goalsColumn"},"Avg per game"),l.a.createElement("th",null,"Rating"),l.a.createElement("th",{className:"ratingPercent"},"Rating %"),l.a.createElement("th",{className:"lastMatch"},"Last played"))),l.a.createElement("tbody",null,t.map((function(e){var a=Math.round(e.GoalsScored/(e.Wins+e.Losses)*10)/10+" : "+Math.round(e.GoalsLost/(e.Wins+e.Losses)*10)/10,t=Math.round(100*(1-(e.Rating-m)/(s-m)))+"%",n=Math.round(e.Wins/(e.Wins+e.Losses)*1e4)/100+"%";return e.Wins+e.Losses>10&&++c&&l.a.createElement("tr",{className:"playerRow",key:e.ID},l.a.createElement("td",null,c),l.a.createElement("td",null,e.Name),l.a.createElement("td",null,e.Wins),l.a.createElement("td",null,e.Losses),l.a.createElement("td",null,n),l.a.createElement("td",{className:"goalsColumn"},e.GoalsScored),l.a.createElement("td",{className:"goalsColumn"},e.GoalsLost),l.a.createElement("td",{className:"goalsColumn"},a),l.a.createElement("td",null,e.Rating),l.a.createElement("td",{className:"ratingPercent"},t),l.a.createElement("td",{className:"lastMatch"},T()(e.LastMatch).fromNow()))}))))},O=function(){return l.a.createElement("div",{className:"futureList"},l.a.createElement("h1",null,"Incoming features"),l.a.createElement("ul",null,l.a.createElement("li",null,"RWD tables, hiding less important columns"),l.a.createElement("li",null,"Player labels"),l.a.createElement("li",null,"Player card"),l.a.createElement("li",null,"Match card")))},j=t(34),x=t(35),S=t.n(x),w=function(e){var a={};e.forEach((function(e){e.PlayerName in a||(a[e.PlayerName]=[]),a[e.PlayerName].push([T()(e.MatchRef.Time).valueOf(),e.Rating])}));var t=[];return Object.entries(a).forEach((function(e){var a=Object(y.a)(e,2),n=a[0],l=a[1];return t.push({type:"line",name:n,data:l})})),t},C={title:{text:"Rating over time"},chart:{zoomType:"x"},xAxis:{labels:{formatter:function(){return T()(this.value).toString()}},min:159784046e4}},k=function(e){var a=Object(n.useState)(!1),t=Object(y.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){var a,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()(u+"/getPlayersSnapshots");case 2:a=e.sent,t=w(a.data),console.log(t),c(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r?l.a.createElement("div",null,l.a.createElement(S.a,Object.assign({highcharts:j,options:C},e))):l.a.createElement("div",null)},D=t(2),W=function(e){Object(d.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={count:0},e.increment=function(){e.setState({count:e.state.count+1})},e.decrement=function(){e.setState({count:e.state.count-1})},e}return Object(h.a)(t,[{key:"render",value:function(){return n.createElement(o.a,null,n.createElement("div",{className:"mainContainer"},n.createElement(D.c,null,n.createElement(D.a,{path:"/future"},n.createElement(O,null)),n.createElement(D.a,{path:"/charts"},n.createElement(k,null)),n.createElement(D.a,{path:"/matches"},n.createElement("h1",null,"Last Matches"),n.createElement(P,null)),n.createElement(D.a,{path:"/"},n.createElement("h1",null,"Last Matches"),n.createElement(P,null)),n.createElement(D.a,{path:"/players"},n.createElement("h1",null,"Players Table"),n.createElement(L,null)))))}}]),t}(n.Component);var A=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i,null),l.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(70);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.e785d975.chunk.js.map