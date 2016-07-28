/**
 * Created by amade on 25.07.2016.
 */

$('td').each(function(){
   this.onclick = function(){
       checkClickedCell(this);
   }
});

var choice = 0;
var color = 0,level = 0;
var actualChoiceCell = 0;


var updateDataCell = function()
{
    var dataCellText = "";
    if (choice === 0) dataCellText += "Card not chosen.<br>";
    else dataCellText = "You chose card number " + choice + ".<br>";
    if (color === 0 || level === 0) dataCellText += "Value not chosen.";
    else dataCellText += "You chose " + color + " at lvl " + level;

    $("td#dataCell").html(dataCellText);
}
var checkCard = function(number)
{
    choice = number;

    var buildString = "";
    for (var i = 1; i < 5; i++) {
        if (i === number) {
            buildString += "<a id='Card" + i + "' href='#' onclick='checkCard(" + i + ");'><img src='cardback.png' class='chosen' height='140' width='100'></a>";
        }
        else {
            buildString += "<a id='Card" + i + "' href='#' onclick='checkCard(" + i + ");'><img src='cardback.png' height='140' width='100'></a>";
        }
    }
    $("div#chooseCards").html(buildString);

    updateDataCell();
};

var checkClickedCell = function(cell){

    if (actualChoiceCell !== 0)
    {
        $(actualChoiceCell).animate({borderWidth: "1px"});
        actualChoiceCell.style.border = "1px solid #838181";
    }

    actualChoiceCell = cell;

    for (var i=1;i<7;i++)
    {
        var searchString = "Lv." + i;
        if (cell.innerHTML.indexOf(searchString) !== -1 ) level = i;
    }

    if (cell.className.indexOf("pink") !== -1) color="pink";
    else if (cell.className.indexOf("yellow") !== -1) color="yellow";
    else if (cell.className.indexOf("red") !== -1) color="red";
    else if (cell.className.indexOf("blue") !== -1) color="blue";
    else
    {
        color = 0;
        level = 0;
    }

    if (color === 0 || level === 0) return;
    cell.style.border = "1px solid black";
    $(cell).animate({borderWidth: "5px"},200,"linear");

    updateDataCell();
}

checkCard(0);