/**
 * Created by amade on 25.07.2016.
 */

$('td').each(function(){
   this.onclick = function(){
       checkClickedCell(this);
   }
});

var choice = 0;

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
    var dataCellText = "";
    if (choice === 0) dataCellText = "Choose your card";
    else dataCellText = "You chose card number " + choice + ". Now choose its value!";
    $("td#dataCell").html(dataCellText);

};

var checkClickedCell = function(cell){
    var color = 0,level = 0;
    for (var i=1;i<7;i++)
    {
        var searchString = "Lv." + i;
        if (cell.innerHTML.indexOf(searchString) !== -1 ) level = i;
    }

    if (cell.className.indexOf("pink") !== -1) color="pink";
    if (cell.className.indexOf("yellow") !== -1) color="yellow";
    if (cell.className.indexOf("red") !== -1) color="red";
    if (cell.className.indexOf("blue") !== -1) color="blue";

    if (color === 0 || level === 0) return;
    alert(color + " " + level);
}

checkCard(0);