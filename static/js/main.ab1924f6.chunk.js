(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,a,t){e.exports=t(69)},42:function(e,a,t){},43:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(29),c=t.n(r),s=(t(42),t(43),function(e){var a=e.text,t=e.url,l=e.icon;return n.a.createElement("div",{className:"menuLink"},n.a.createElement("a",{href:t},n.a.createElement("div",{className:"icon"},l),n.a.createElement("div",{className:"text"},a)))}),m=function(e){var a=e.url,t=e.name;return n.a.createElement("img",{src:a,className:t,alt:t})},i="https://fef21c7b7c5a.ngrok.io",o=t(13),u=function(){return n.a.createElement(o.a,null,n.a.createElement("div",{className:"menu"},n.a.createElement(m,{url:"logo512blue.png",name:"mainLogo"}),n.a.createElement(s,{text:"Last matches",url:"/#/matches",icon:"\ud83d\udd51"}),n.a.createElement(s,{text:"Players table",url:"/#/players",icon:"\u2694"}),n.a.createElement(s,{text:"Charts",url:"/#/charts",icon:"\ud83d\udcca"}),n.a.createElement(s,{text:"Future features",url:"/#/future",icon:"\ud83d\udca1"}),n.a.createElement("div",{className:"backendURL"},n.a.createElement("span",null,i,"/p?u="))))},h=t(31),E=t(32),d=t(36),g=t(35),y=t(4),v=t.n(y),p=t(9),N=t(11),f=t(10),R=t.n(f),P=t(15),T=t(3),b=t.n(T),M=t(1),S=function(e){var a="#/showPlayer/"+e.PlayerID,t=Object(M.f)();return n.a.createElement("div",{className:"playerLabel"},n.a.createElement("div",{onClick:function(){return a=e.PlayerID,void t.push("#/showMatch/"+a);var a}},n.a.createElement("a",{href:a},n.a.createElement("span",{className:"playerName"},e.PlayerName),0!==e.Rating&&n.a.createElement("span",{className:"playerRating"}," - ",Math.round(e.Rating)))))},D=function(){var e=Object(l.useState)([{ID:0,Time:"2012-12-25 10:00",Goals:[],BlueTeam:{AvgTeamRating:0,RatingChange:0,Score:0,Players:[{PlayerID:0,PlayerName:"",GoalsNumber:0,Rating:0}]},RedTeam:{AvgTeamRating:0,RatingChange:0,Score:0,Players:[{PlayerID:0,PlayerName:"",GoalsNumber:0,Rating:0}]}}]),a=Object(N.a)(e,2),t=a[0],r=a[1];Object(l.useEffect)((function(){(function(){var e=Object(p.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()(i+"/getLastMatches");case 2:a=e.sent,r(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),r(t)}),[]),console.log(t);var c=Object(M.f)();return n.a.createElement(P.a,{striped:!0,hover:!0,className:"lastMatchTable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"Red Team Players"),n.a.createElement("th",{className:"avgRedRating"},"Avg Red Rating"),n.a.createElement("th",{className:"scoreColumn",colSpan:3},"Score"),n.a.createElement("th",{className:"avgBlueRating"},"Avg Blue Rating"),n.a.createElement("th",null,"Blue Team Players"),n.a.createElement("th",null,"Red Team Rating Change"))),n.a.createElement("tbody",null,t.map((function(e){return n.a.createElement("tr",{key:e.ID,onClick:function(){return a=e.ID,void c.push("/showMatch/"+a);var a}},n.a.createElement("td",null,b()(e.Time).format("DD-MM-YYYY HH:mm")),n.a.createElement("td",{className:"redTeamMatches"},e.RedTeam.Players.map((function(e){return n.a.createElement("div",{key:e.PlayerID,className:"redTeam"},n.a.createElement(S,e))}))),n.a.createElement("td",{className:"redTeamMatches avgRedRating"},Math.round(10*e.RedTeam.AvgTeamRating)/10),n.a.createElement("td",{className:"redTeamMatches scoreColumn"},e.RedTeam.Score),n.a.createElement("td",{className:"scoreColumn"}," : "),n.a.createElement("td",{className:"blueTeamMatches scoreColumn"},e.BlueTeam.Score),n.a.createElement("td",{className:"blueTeamMatches avgBlueRating"},Math.round(10*e.BlueTeam.AvgTeamRating)/10),n.a.createElement("td",{className:"blueTeamMatches"},e.BlueTeam.Players.map((function(e){return n.a.createElement("div",{key:e.PlayerID,className:"blueTeam"},n.a.createElement(S,e))}))),n.a.createElement("td",null,Math.round(10*e.RedTeam.RatingChange)/10))}))))},w=function(){var e=Object(l.useState)([{ID:0,Name:"",Wins:0,Losses:0,GoalsShot:0,GoalsScored:0,GoalsLost:0,Matches:[],Rating:0}]),a=Object(N.a)(e,2),t=a[0],r=a[1];Object(l.useEffect)((function(){(function(){var e=Object(p.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()(i+"/getPlayersTable");case 2:a=e.sent,r(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var c=0,s=0,m=2e3;t.map((function(e){return s=Math.max(s,e.Rating),m=Math.min(m,e.Rating),null}));var o=Object(M.f)();return n.a.createElement(P.a,{striped:!0,hover:!0,className:"playersTable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"No."),n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Wins"),n.a.createElement("th",null,"Losses"),n.a.createElement("th",null,"W/L Ratio"),n.a.createElement("th",{className:"goalsColumn"},"Goals Shot"),n.a.createElement("th",{className:"goalsColumn"},"Goals Won"),n.a.createElement("th",{className:"goalsColumn"},"Goals Lost"),n.a.createElement("th",{className:"goalsColumn"},"Aggression %"),n.a.createElement("th",null,"Rating"),n.a.createElement("th",{className:"ratingPercent"},"Rating %"),n.a.createElement("th",{className:"lastMatch"},"Last played"))),n.a.createElement("tbody",null,t.map((function(e){var a=Math.round(e.GoalsShot/e.GoalsScored*1e3)/10+"%",t=Math.round(100*(1-(e.Rating-m)/(s-m)))+"%",l=Math.round(e.Wins/(e.Wins+e.Losses)*1e4)/100+"%";return e.Wins+e.Losses>10&&Date.now()-1e3*b()(e.Matches[e.Matches.length-1].Time).unix()<2592e6&&++c&&n.a.createElement("tr",{className:"playerRow",key:e.ID,onClick:function(){return a=e.ID,void o.push("/showPlayer/"+a);var a}},n.a.createElement("td",null,c),n.a.createElement("td",null,e.Name),n.a.createElement("td",null,e.Wins),n.a.createElement("td",null,e.Losses),n.a.createElement("td",null,l),n.a.createElement("td",{className:"goalsColumn"},e.GoalsShot),n.a.createElement("td",{className:"goalsColumn"},e.GoalsScored),n.a.createElement("td",{className:"goalsColumn"},e.GoalsLost),n.a.createElement("td",{className:"goalsColumn"},a),n.a.createElement("td",null,Math.round(10*e.Rating)/10),n.a.createElement("td",{className:"ratingPercent"},t),void 0!==e.Matches[0]&&n.a.createElement("td",{className:"lastMatch"},b()(e.Matches[e.Matches.length-1].Time).fromNow()))}))))},I=function(){return n.a.createElement("div",{className:"futureList"},n.a.createElement("h1",null,"Incoming features"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Player labels")," 27.08.2020"),n.a.createElement("li",null,"Match card"),n.a.createElement("li",null,"Player card"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Best rating")," 07.10.2020"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Worst rating")," 07.10.2020"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Present rank")," 07.10.2020"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Todays / Last week / month change")," 07.10.2020"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Rating amount to drop / climb")," 07.10.2020"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Biggest gain")," 07.10.2020"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Biggest drop")," 07.10.2020"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Average goals per match")," 07.10.2020"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Average goals shot per match")," 07.10.2020"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Aggression rating (goals shot / goals won)")," 07.10.2020"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Last 5 matches trend")," 07.10.2020"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Latest streak (matches / days)")," 07.10.2020"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Biggest winning streak (matches / days)")," 07.10.2020"),n.a.createElement("li",null,"Matches history"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Top ally (quantitative)")," 07.10.2020"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Top enemy (quantitative)")," 07.10.2020"),n.a.createElement("li",null,"Domination and nemesis (matches / enemy streak)"),n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Enemies table (name / matches balance)")," 07.10.2020"),n.a.createElement("li",null,"Rating history chart"),n.a.createElement("ul",null,n.a.createElement("li",null,"Group by day option"),n.a.createElement("li",null,"Erase time space option"))),n.a.createElement("li",null,"Full match analysis",n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",{className:"finished"},"Goals")," 22.09.2020"),n.a.createElement("li",null,"Ball position"),n.a.createElement("li",null,"Ball posession",n.a.createElement("ul",null,n.a.createElement("li",null,"Proximity based"),n.a.createElement("li",null,"Touch based"))),n.a.createElement("li",null,"Previous encounters"),n.a.createElement("li",null,"Player position heatmap")))))},B=t(34),k=function(e){var a={};e.forEach((function(e){e.PlayerName in a||(a[e.PlayerName]=[],a[e.PlayerName].push([b()(e.MatchRef.Time).valueOf()-36e5,1e3])),a[e.PlayerName].push([b()(e.MatchRef.Time).valueOf(),e.Rating])}));var t=[];return Object.entries(a).forEach((function(e){var a=Object(N.a)(e,2),l=a[0],n=a[1];return t.push({type:"line",name:l,data:n})})),t},C=function(e){return Object(l.useEffect)((function(){(function(){var e=Object(p.a)(v.a.mark((function e(){var a,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()(i+"/getPlayersSnapshots");case 2:a=e.sent,t=k(a.data),B.chart("highchart-container",{title:{text:"Rating over time",style:{color:"#FFF",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},legend:{itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"white"},itemHoverStyle:{color:"white"}},chart:{zoomType:"x",backgroundColor:"rgb(6, 29, 82)"},xAxis:{type:"datetime",labels:{formatter:function(){return b()(this.value).format("DD-MM-YYYY")}},min:158625e7,tickInterval:6048e5},yAxis:{gridLineColor:"black"},series:t});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n.a.createElement("div",{id:"highchart-container"},n.a.createElement("h1",null,"Loading charts..."))},Y=function(e){return n.a.createElement("div",{className:"playerPageTile"},n.a.createElement("div",{className:"title"},e.title),n.a.createElement("div",{className:"value"},e.value),n.a.createElement("div",{className:"subscript"},e.subscript))},G=function(){var e=Object(M.g)().playerID,a=Object(l.useState)({Player:{GoalsLost:0,GoalsScored:0,GoalsShot:0,ID:0,Losses:0,Name:"0",Rating:0,WinRate:0,Wins:0,Matches:[{ID:0,Time:"2012-12-25 10:00",BlueTeam:{AvgTeamRating:0,RatingChange:0,Score:0,Players:[{PlayerID:0,PlayerName:"",MatchID:0,Rating:0,MatchRef:""}]},RedTeam:{AvgTeamRating:0,RatingChange:0,Score:0,Players:[{PlayerID:0,PlayerName:"",MatchID:0,Rating:0,MatchRef:""}]}}]},Snapshots:[{PlayerID:0,PlayerName:"",MatchID:0,Rating:0,MatchRef:""}],PlayerRatings:[{}]}),t=Object(N.a)(a,2),r=t[0],c=t[1];Object(l.useEffect)((function(){(function(){var a=Object(p.a)(v.a.mark((function a(){var t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,R()(i+"/getPlayerData?id="+e);case 2:t=a.sent,c(t.data);case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]);var s=Object(M.f)();for(var m=0,o="",u=3e3,h="",E=0,d="",g=0,y="",f=0,P=0,T=0,D=0,w=0,I="",B="",k=0,C=r.Snapshots[0],G=0;G<r.Snapshots.length;G++){var L=r.Snapshots[G];if(L.Rating<u&&(u=Math.round(10*L.Rating)/10,h=L.MatchRef.Time),L.Rating>m&&(m=Math.round(10*L.Rating)/10,o=L.MatchRef.Time),0===f&&b()(L.MatchRef.Time,"YYYY-MM-DD hh:mm")>b()().startOf("day")&&(f=Math.round(10*(r.Player.Rating-L.Rating))/10),0===P&&b()(L.MatchRef.Time,"YYYY-MM-DD hh:mm")>b()().subtract(1,"week").startOf("day")&&(P=Math.round(10*(r.Player.Rating-L.Rating))/10),0===T&&b()(L.MatchRef.Time,"YYYY-MM-DD hh:mm")>b()().subtract(1,"month").startOf("day")&&(T=Math.round(10*(r.Player.Rating-L.Rating))/10),0!==G){var A=L.Rating-C.Rating;A<g&&(g=Math.round(10*A)/10,y=L.MatchRef.Time),A>E&&(E=Math.round(10*A)/10,d=L.MatchRef.Time),A>0?D>0?++D>w&&(w=Math.max(D,w),I=B):(D=1,B=C.MatchRef.Time,k=Math.round(10*(r.Player.Rating-C.Rating))/10):D<0?D--:(D=-1,B=C.MatchRef.Time,k=Math.round(10*(r.Player.Rating-C.Rating))/10),C=L}}var O=r.Snapshots[r.Snapshots.length-1];O.Rating<r.Player.Rating?D>0?++D>w&&(w=Math.max(D,w)):(D=1,B=O.MatchRef.Time,k=Math.round(10*(r.Player.Rating-C.Rating))/10):D<0?D--:(D=-1,B=O.MatchRef.Time,k=Math.round(10*(r.Player.Rating-C.Rating))/10);for(var j=0,x={Name:"GOD",Rating:3e3},W={Name:"MUD",Rating:0},H=0;H<r.PlayerRatings.length;H++){var F=r.PlayerRatings[H];r.Player.Name===F.Name&&(j=H+1,H>0&&(x={Name:r.PlayerRatings[H-1].Name,Rating:r.PlayerRatings[H-1].Rating}),H!==r.PlayerRatings.length-1&&(W={Name:r.PlayerRatings[H+1].Name,Rating:r.PlayerRatings[H+1].Rating}))}for(var U=Math.round(r.Player.GoalsScored/(r.Player.Wins+r.Player.Losses)*10)/10+" : "+Math.round(r.Player.GoalsLost/(r.Player.Wins+r.Player.Losses)*10)/10,V=Math.round(r.Player.GoalsShot/(r.Player.Wins+r.Player.Losses)*10)/10,q=Math.round((r.Player.Wins+r.Player.Losses)/b()().diff(b()(r.Snapshots[0].MatchRef.Time,"YYYY-MM-DD hh:mm"),"days")*100)/100,J=r.Player.Rating>r.Snapshots[r.Snapshots.length-1].Rating?"W":"L",z=r.Snapshots.length-1;z>r.Snapshots.length-5&&z>0;z--){r.Snapshots[z].Rating<r.Snapshots[z-1].Rating?J+=" L":J+=" W"}for(var K={},$={},_={},Q=0;Q<r.Player.Matches.length;Q++){for(var X=r.Player.Matches[Q],Z=!0,ee=X.RedTeam.Score>X.BlueTeam.Score,ae=0,te=0;te<X.BlueTeam.Players.length;te++){if(X.BlueTeam.Players[te].PlayerName===r.Player.Name){Z=!1;break}}if(Z){for(var le=0;le<X.RedTeam.Players.length;le++){var ne=X.RedTeam.Players[le];ne.PlayerName!==r.Player.Name&&(ne.PlayerName in $||($[ne.PlayerName]={count:0,matchBalance:0,wonAgainst:0,lostAgainst:0,currentStreak:0,id:ne.PlayerID}),$[ne.PlayerName].count++)}for(var re=0;re<X.BlueTeam.Players.length;re++){var ce=X.BlueTeam.Players[re];ce.PlayerName in _||(_[ce.PlayerName]={count:0,matchBalance:0,wonAgainst:0,lostAgainst:0,currentStreak:0,pointsBalance:0,id:ce.PlayerID}),_[ce.PlayerName].count++,_[ce.PlayerName].matchBalance+=ee?1:-1,_[ce.PlayerName].wonAgainst+=ee?1:0,_[ce.PlayerName].lostAgainst+=ee?0:1,_[ce.PlayerName].pointsBalance+=X.RedTeam.RatingChange;var se=_[ce.PlayerName].currentStreak;_[ce.PlayerName].currentStreak=ee?se>0?se+1:1:se<0?se-1:-1,ae=X.RedTeam.RatingChange}}else{for(var me=0;me<X.RedTeam.Players.length;me++){var ie=X.RedTeam.Players[me];ie.PlayerName in _||(_[ie.PlayerName]={count:0,matchBalance:0,wonAgainst:0,lostAgainst:0,currentStreak:0,pointsBalance:0,id:ie.PlayerID}),_[ie.PlayerName].count++,_[ie.PlayerName].matchBalance+=ee?-1:1,_[ie.PlayerName].wonAgainst+=ee?0:1,_[ie.PlayerName].lostAgainst+=ee?1:0,_[ie.PlayerName].pointsBalance+=X.BlueTeam.RatingChange;var oe=_[ie.PlayerName].currentStreak;_[ie.PlayerName].currentStreak=ee?oe<0?oe-1:-1:oe>0?oe+1:1}for(var ue=0;ue<X.BlueTeam.Players.length;ue++){var he=X.BlueTeam.Players[ue];he.PlayerName!==r.Player.Name&&(he.PlayerName in $||($[he.PlayerName]={count:0,matchBalance:0,wonAgainst:0,lostAgainst:0,currentStreak:0,id:he.PlayerID}),$[he.PlayerName].count++)}ae=X.BlueTeam.RatingChange}K[X.ID]={playerRatingChange:ae}}var Ee=[];for(var de in _)Ee.push([de,_[de].count]);Ee.sort((function(e,a){return a[1]-e[1]}));var ge=[];for(var ye in _)ge.push([ye,_[ye].matchBalance,_[ye].wonAgainst,_[ye].lostAgainst,_[ye].currentStreak,_[ye].id,_[ye].pointsBalance]);ge.sort((function(e,a){return a[1]-e[1]}));var ve=[];for(var pe in $)ve.push([pe,$[pe].count]);return ve.sort((function(e,a){return a[1]-e[1]})),n.a.createElement("div",null,n.a.createElement("h1",null,r.Player.Name),n.a.createElement("div",{className:"data"},n.a.createElement("div",{className:"leftPanel"},n.a.createElement("div",{className:"dataRow"},n.a.createElement(Y,{title:"Player since",value:r.Snapshots[0].MatchRef.Time,subscript:b()(r.Snapshots[0].MatchRef.Time,"YYYY-MM-DD hh:mm").fromNow()}),n.a.createElement(Y,{title:"Matches balance",value:r.Player.Wins+" : "+r.Player.Losses,subscript:(r.Player.Wins-r.Player.Losses).toString()}),n.a.createElement(Y,{title:"Total matches",value:(r.Player.Wins+r.Player.Losses).toString(),subscript:"~"+q.toString()+" per day"})),n.a.createElement("div",{className:"dataRow"},n.a.createElement(Y,{title:"Current rating",value:r.Player.Rating.toString(),subscript:""}),n.a.createElement(Y,{title:"Rating place",value:j.toString(),subscript:""}),n.a.createElement(Y,{title:"Upper neighbor",value:x.Name+" ("+Math.round(10*x.Rating)/10+")",subscript:(Math.round(10*(x.Rating-r.Player.Rating))/10).toString()+"pts above you"}),n.a.createElement(Y,{title:"Lower neighbor",value:W.Name+" ("+Math.round(10*W.Rating)/10+")",subscript:(Math.round(10*(r.Player.Rating-W.Rating))/10).toString()+"pts below you"})),n.a.createElement("div",{className:"dataRow"},n.a.createElement(Y,{title:"Goals",value:r.Player.GoalsScored+" : "+r.Player.GoalsLost,subscript:U+" avg"}),n.a.createElement(Y,{title:"Goals Shot",value:r.Player.GoalsShot.toString(),subscript:"~"+V.toString()+" per match"}),n.a.createElement(Y,{title:"Shot %",value:(Math.round(r.Player.GoalsShot/r.Player.GoalsScored*1e3)/10).toString()+"%",subscript:""})),n.a.createElement("div",{className:"dataRow"},n.a.createElement(Y,{title:"Best Rating",value:m.toString(),subscript:o}),n.a.createElement(Y,{title:"Worst Rating",value:u.toString(),subscript:h}),n.a.createElement(Y,{title:"Biggest gain",value:E.toString()+"pts",subscript:d}),n.a.createElement(Y,{title:"Biggest drop",value:g.toString()+"pts",subscript:y})),n.a.createElement("div",{className:"dataRow"},n.a.createElement(Y,{title:"Today's change",value:f.toString()+"pts",subscript:"Since "+b()().format("YYYY-MM-DD")}),n.a.createElement(Y,{title:"Week's change",value:P.toString()+"pts",subscript:"Since "+b()().subtract(1,"week").format("YYYY-MM-DD")}),n.a.createElement(Y,{title:"Month's change",value:T.toString()+"pts",subscript:"Since "+b()().subtract(1,"month").format("YYYY-MM-DD")})),n.a.createElement("div",{className:"dataRow"},n.a.createElement(Y,{title:"Match streak",value:D.toString()+" ("+k+"pts)",subscript:"Since "+B}),n.a.createElement(Y,{title:"Biggest winning streak",value:w.toString(),subscript:"Started at "+I}),n.a.createElement(Y,{title:"Last matches trend",value:J,subscript:""})),n.a.createElement("div",{className:"dataRow"},n.a.createElement(Y,{title:"Top ally",value:ve[0][0],subscript:ve[0][1]+" matches"}),n.a.createElement(Y,{title:"Top enemy",value:Ee[0][0],subscript:Ee[0][1]+" matches"}))),n.a.createElement("div",{className:"rightPanel"},n.a.createElement("div",{className:"enemiesBalance"},n.a.createElement("div",{className:"title"},n.a.createElement("h3",null,"Enemies stats (won - lost against specific opponent)")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("th",null,"Enemy"),n.a.createElement("th",null,"Score"),n.a.createElement("th",null,"Win ratio"),n.a.createElement("th",null,"Streak"),n.a.createElement("th",null,"Points flow")),n.a.createElement("tbody",null,ge.map((function(e){return n.a.createElement("tr",{key:e[5]},n.a.createElement("td",null,n.a.createElement(S,{PlayerID:e[5],PlayerName:e[0],Rating:0})),n.a.createElement("td",null,e[1]," (",e[2]," : ",e[3],")"),n.a.createElement("td",null,Math.round(e[2]/(e[2]+e[3])*1e3)/10,"%"),n.a.createElement("td",null,e[4]),n.a.createElement("td",null,Math.round(10*e[6])/10))}))))),n.a.createElement("div",{className:"matchHistory"},n.a.createElement("h3",null,"Matches History"),n.a.createElement("table",{className:"matchHistoryTable table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"Red",n.a.createElement("br",null),"Players"),n.a.createElement("th",{className:"avgRedRating"},"Avg Red",n.a.createElement("br",null),"Rating"),n.a.createElement("th",{className:"scoreColumn",colSpan:3},"Score"),n.a.createElement("th",{className:"avgBlueRating"},"Avg Blue",n.a.createElement("br",null),"Rating"),n.a.createElement("th",null,"Blue",n.a.createElement("br",null),"Players"),n.a.createElement("th",null,"Player Rating",n.a.createElement("br",null),"Change"))),n.a.createElement("tbody",null,r.Player.Matches.map((function(e){return n.a.createElement("tr",{key:e.ID,onClick:function(){return a=e.ID,void s.push("/showMatch/"+a);var a}},n.a.createElement("td",null,b()(e.Time).format("DD-MM-YYYY"),n.a.createElement("br",null),b()(e.Time).format("HH:mm")),n.a.createElement("td",{className:"redTeamMatches"},e.RedTeam.Players.map((function(e){return n.a.createElement("div",{key:e.PlayerID,className:"redTeam"},n.a.createElement(S,e))}))),n.a.createElement("td",{className:"redTeamMatches avgRedRating"},Math.round(10*e.RedTeam.AvgTeamRating)/10),n.a.createElement("td",{className:"redTeamMatches scoreColumn"},e.RedTeam.Score),n.a.createElement("td",{className:"scoreColumn"}," : "),n.a.createElement("td",{className:"blueTeamMatches scoreColumn"},e.BlueTeam.Score),n.a.createElement("td",{className:"blueTeamMatches avgBlueRating"},Math.round(10*e.BlueTeam.AvgTeamRating)/10),n.a.createElement("td",{className:"blueTeamMatches"},e.BlueTeam.Players.map((function(e){return n.a.createElement("div",{key:e.PlayerID,className:"blueTeam"},n.a.createElement(S,e))}))),n.a.createElement("td",null,Math.round(10*K[e.ID].playerRatingChange)/10))})).reverse()))))))},L=function(e){for(var a="",t=0;t<e.GoalsNumber;t++)a+="\u26bd";return n.a.createElement("div",{className:"playerGoals"},n.a.createElement("span",null,a))};function A(e){e=Math.floor(e);var a=Math.floor(e/60),t=(e-60*a).toString();return e-60*a<10&&(t="0"+t),a+":"+t}var O=function(){var e=Object(M.g)().matchID,a=Object(l.useState)({ID:0,Time:"2012-12-25 10:00",StartTime:0,EndTime:600,BlueTeam:{AvgTeamRating:0,RatingChange:0,Score:0,Players:[{PlayerID:0,PlayerName:"",Rating:0,GoalsNumber:0}]},RedTeam:{AvgTeamRating:0,RatingChange:0,Score:0,Players:[{PlayerID:0,PlayerName:"",Rating:0,GoalsNumber:0}]},Goals:[{IsRed:!1,PlayerID:0,PlayerName:"",ShotTime:0,Speed:0,Time:0,TravelTime:0}]}),t=Object(N.a)(a,2),r=t[0],c=t[1];Object(l.useEffect)((function(){(function(){var a=Object(p.a)(v.a.mark((function a(){var t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,R()(i+"/getMatchByID?id="+e);case 2:t=a.sent,c(t.data);case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]);var s="==>";return r.RedTeam.RatingChange>0&&(s="<=="),r.RedTeam.Players.map((function(e){return e.GoalsNumber=0,r.Goals.map((function(a){return e.PlayerID===a.PlayerID&&e.GoalsNumber++,a})),e})),r.BlueTeam.Players.map((function(e){return e.GoalsNumber=0,r.Goals.map((function(a){return e.PlayerID===a.PlayerID&&e.GoalsNumber++,a})),e})),n.a.createElement("div",null,n.a.createElement("h2",null,"MATCH DETAILS VIEW"),n.a.createElement("div",{className:"matchDetailsPanels"},n.a.createElement("div",{className:"leftPanel"},n.a.createElement("div",{className:"scorePanel"},n.a.createElement("div",null,r.RedTeam.Players.map((function(e){return n.a.createElement("div",{key:e.PlayerID,className:"redTeam"},n.a.createElement(S,e),n.a.createElement(L,e))}))),n.a.createElement("div",{className:"scoreData"},n.a.createElement("div",{className:"scores"},n.a.createElement("span",{className:"redScore"},r.RedTeam.Score),"\xa0",":","\xa0",n.a.createElement("span",{className:"blueScore"},r.BlueTeam.Score)),n.a.createElement("div",{className:"arrow"},s),n.a.createElement("div",{className:"ratingChange"},Math.abs(Math.round(100*r.RedTeam.RatingChange)/100))),n.a.createElement("div",null,r.BlueTeam.Players.map((function(e){return n.a.createElement("div",{key:e.PlayerID,className:"blueTeam"},n.a.createElement(S,e),n.a.createElement(L,e))})))),n.a.createElement("div",{className:"goalsChartTitle"},"GOALS CHART"),n.a.createElement("div",{className:"goalsChart"},n.a.createElement("div",{className:"goal matchStart"},n.a.createElement("div",{className:"redTeam"}),n.a.createElement("div",{className:"chart"},n.a.createElement("div",{className:"matchStartTime"},A(r.StartTime))),n.a.createElement("div",{className:"blueTeam"})),n.a.createElement("div",{className:"goal matchStart"},n.a.createElement("div",{className:"redTeam"}),n.a.createElement("div",{className:"chart"},n.a.createElement("div",{className:"goalElement matchStart"},"\uffdc")),n.a.createElement("div",{className:"blueTeam"})),r.Goals.map((function(e){return n.a.createElement("div",{className:"goal"},n.a.createElement("div",{className:"redTeam"},e.IsRed&&n.a.createElement("div",null,"(",Math.round(100*e.Speed)/10," km/h) ",e.PlayerName," - ",A(e.Time))),n.a.createElement("div",{className:"chart"},e.IsRed&&n.a.createElement("div",{className:"goalElement red"},"\uffc6"),!e.IsRed&&n.a.createElement("div",{className:"goalElement blue"},"\uffc2")),n.a.createElement("div",{className:"blueTeam"},!e.IsRed&&n.a.createElement("div",null,A(e.Time)," - ",e.PlayerName," (",Math.round(100*e.Speed)/10," km/h)")))})),n.a.createElement("div",{className:"goal"},n.a.createElement("div",{className:"redTeam"}),n.a.createElement("div",{className:"chart matchEnd"},n.a.createElement("div",{className:"goalElement matchEnd"},"\uffdc")),n.a.createElement("div",{className:"blueTeam"})),n.a.createElement("div",{className:"goal"},n.a.createElement("div",{className:"redTeam"}),n.a.createElement("div",{className:"chart matchEnd"},n.a.createElement("div",{className:"matchEndTime"},A(r.EndTime))),n.a.createElement("div",{className:"blueTeam"})))),n.a.createElement("div",{className:"rightPanel"},n.a.createElement("a",{href:"https://www.haxball.com/replay?v=3#"+i+"/getFile?id="+r.ID,target:"_blank",rel:"noopener noreferrer"},"LINK TO REPLAY"))))},j=function(e){Object(d.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={count:0},e.increment=function(){e.setState({count:e.state.count+1})},e.decrement=function(){e.setState({count:e.state.count-1})},e}return Object(E.a)(t,[{key:"render",value:function(){return l.createElement(o.a,null,l.createElement("div",{className:"mainContainer"},l.createElement(M.c,null,l.createElement(M.a,{path:"/future"},l.createElement(I,null)),l.createElement(M.a,{path:"/charts"},l.createElement(C,null)),l.createElement(M.a,{path:"/matches"},l.createElement("h1",null,"Last Matches"),l.createElement(D,null)),l.createElement(M.a,{path:"/showPlayer/:playerID"},l.createElement(G,null)),l.createElement(M.a,{path:"/showMatch/:matchID"},l.createElement(O,null)),l.createElement(M.a,{path:"/players"},l.createElement("h1",null,"Players Table"),l.createElement(w,null)),l.createElement(M.a,{path:"/"},l.createElement("h1",null,"Last Matches"),l.createElement(D,null)))))}}]),t}(l.Component);var x=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u,null),n.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(68);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.ab1924f6.chunk.js.map