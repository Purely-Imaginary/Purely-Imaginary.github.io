/**
 * Created by amade on 03.08.2016.
 */

var score = 0;
var gameTime;
var rectList;


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

    drawCards();




    $("#difficulty").html(diffText);
    $("#score").html(score);
    $("#wrapper").removeAttr("style");



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
    console.log("DrawCards");
}