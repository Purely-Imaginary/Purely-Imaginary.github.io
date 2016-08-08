/**
 * Created by amade on 03.08.2016.
 */

var score = 0;
var gameTime;
var rectList = [];


$( "#dialog" ).dialog({
    width: 800,
    buttons: [
        {
            text: "Graj!",
            click: function () {
                populateBoard(getDifficultyLevel());
                $(this).dialog("close");
            }
        }]
});
$( "#radioset" ).buttonset();
$( "div.button" ).button();


function getDifficultyLevel(){
    if ($("#radio1").attr("checked")=== "checked") return 1;
    if ($("#radio2").attr("checked")=== "checked") return 2;
    if ($("#radio3").attr("checked")=== "checked") return 3;
}

function populateBoard(diffLevel)
{
    var diffText = "";
    switch(diffLevel){
        case 1:
            diffText = "Łatwy (Jeden kolor)";
            break;
        case 2:
            diffText = "Średni (Dwa kolory)";
            break;
        case 3:
            diffText = "Trudny (Cztery kolory)";
            break;
    }






    $("#difficulty").html(diffText);
    $("#score").html(score);
    $("#wrapper").removeAttr("style");
    drawCards();


    gameTime = 0;
    setInterval(function(){
        gameTime++;
        $("#gameTime").html(stringToDate(gameTime));
    }, 100)
}

function stringToDate(tenthsOfSecond){
var returnString = "";
    returnString += Math.floor(tenthsOfSecond/600);
    returnString += ":" + Math.floor((tenthsOfSecond%600)/10);
    returnString += "," + (tenthsOfSecond%10) + "s";
    return returnString;
}

function newGame(){
    location.reload();
}

function drawCards(){
    createCards(2);
    var canvas = document.getElementById("playCanvas");
    var ctx = canvas.getContext("2d");
    ctx.canvas.width  = window.innerWidth-100;
    ctx.canvas.height = window.innerHeight-100;
    rectList = shuffle(rectList);
    for (var i=0;i<rectList.length;i++)
    {
        var x = (i%10)*120;
        var y = Math.floor(i/10)*40;
        drawCardObject(ctx,rectList[i],x,y);
    }

    console.log("DrawCards");
}

function drawCardObject(canvas,card,x,y)
{
    card.x = x;
    card.y = y;
    if (card.color === 0) canvas.fillStyle = "#000000";
    if (card.color === 1) canvas.fillStyle = "#FF0000";

    canvas.fillRect(x,y,100,180);

    canvas.strokeStyle = 'white';
    canvas.strokeRect(x,y,100,180);
}
function createCards(difficultyLvl) {
    rectList = [];
    if (difficultyLvl === 2) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 2; j++) {
                for (var k = 1; k < 14; k++) {
                    var card = {
                        color: j,
                        value: k,
                        isFlipped: 0,
                        x: 0,
                        y: 0
                    }
                    rectList.push(card);
                }
            }

        }
        console.log(rectList.length + " cards created for medium difficulty");
    }
    console.log(rectList);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}