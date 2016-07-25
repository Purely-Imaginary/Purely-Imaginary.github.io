/**
 * Created by amade on 24.07.2016.
 */


var showData = function ()
{
    var bet = 3;
    var availableSpots = 0;
    var unavailableSpots = 0;
    var yellowSpots = 0;
    var pinkSpots = 0;
    var blueSpots = 0;
    var greenSpots = 0;
    var lv1Spots = 0;
    var lv2Spots = 0;
    var lv3Spots = 0;
    var lv4Spots = 0;
    var lv5Spots = 0;
    var lv6Spots = 0;

    $('td.clickable').each(function(){
      if ((this).style.backgroundColor  === "black")
          unavailableSpots++;
      else {
          availableSpots++;

      }
    })

    var calculatedWin = 24*bet / availableSpots;

    $('td.clickable').each(function(){
        if ((this).style.backgroundColor  !== "black") {
            this.innerHTML = this.innerHTML.substring(0,this.innerHTML.indexOf("Lv")+11) +
                "<br>" + calculatedWin.toFixed(2);

            if (this.innerHTML.indexOf("Lv.1") !== -1) lv1Spots++;
            if (this.innerHTML.indexOf("Lv.2") !== -1) lv2Spots++;
            if (this.innerHTML.indexOf("Lv.3") !== -1) lv3Spots++;
            if (this.innerHTML.indexOf("Lv.4") !== -1) lv4Spots++;
            if (this.innerHTML.indexOf("Lv.5") !== -1) lv5Spots++;
            if (this.innerHTML.indexOf("Lv.6") !== -1) lv6Spots++;
            if (this.innerHTML.indexOf("Yellow") !== -1) yellowSpots++;
            if (this.innerHTML.indexOf("Pink") !== -1) pinkSpots++;
            if (this.innerHTML.indexOf("Blue") !== -1) blueSpots++;
            if (this.innerHTML.indexOf("Green") !== -1) greenSpots++;
        }
    })

    document.getElementById("firstHalf").innerHTML =
        document.getElementById("firstHalf").innerHTML.substr(0,2) + "<br>"
        + (yellowSpots+pinkSpots) + "/" + availableSpots + "<br>"
        + (((yellowSpots+pinkSpots)*2*bet)/availableSpots).toFixed(2);

    document.getElementById("secondHalf").innerHTML =
        document.getElementById("secondHalf").innerHTML.substr(0,2) + "<br>"
        + (blueSpots+greenSpots) + "/" + availableSpots + "<br>"
        + (((blueSpots+greenSpots)*2*bet)/availableSpots).toFixed(2);

    document.getElementById("LVs 1-2").innerHTML =
        document.getElementById("LVs 1-2").innerHTML.substr(0,2) + "<br>"
        + (lv1Spots+lv2Spots) + "/" + availableSpots + "<br>"
        + (((lv1Spots+lv2Spots)*3*bet)/availableSpots).toFixed(2);

    document.getElementById("LVs 3-4").innerHTML =
        document.getElementById("LVs 3-4").innerHTML.substr(0,2) + "<br>"
        + (lv3Spots+lv4Spots) + "/" + availableSpots + "<br>"
        + (((lv3Spots+lv4Spots)*3*bet)/availableSpots).toFixed(2);

    document.getElementById("LVs 5-6").innerHTML =
        document.getElementById("LVs 5-6").innerHTML.substr(0,2) + "<br>"
        + (lv5Spots+lv6Spots) + "/" + availableSpots + "<br>"
        + (((lv5Spots+lv6Spots)*3*bet)/availableSpots).toFixed(2);

    document.getElementById("Lv.1").innerHTML =
        document.getElementById("Lv.1").innerHTML.substr(0,2) + "<br>"
        + (lv1Spots) + "/" + availableSpots + "<br>"
        + (((lv1Spots)*6*bet)/availableSpots).toFixed(2);

    document.getElementById("Lv.2").innerHTML =
        document.getElementById("Lv.2").innerHTML.substr(0,2) + "<br>"
        + (lv2Spots) + "/" + availableSpots + "<br>"
        + (((lv2Spots)*6*bet)/availableSpots).toFixed(2);

    document.getElementById("Lv.3").innerHTML =
        document.getElementById("Lv.3").innerHTML.substr(0,2) + "<br>"
        + (lv3Spots) + "/" + availableSpots + "<br>"
        + (((lv3Spots)*6*bet)/availableSpots).toFixed(2);

    document.getElementById("Lv.4").innerHTML =
        document.getElementById("Lv.4").innerHTML.substr(0,2) + "<br>"
        + (lv4Spots) + "/" + availableSpots + "<br>"
        + (((lv4Spots)*6*bet)/availableSpots).toFixed(2);

    document.getElementById("Lv.5").innerHTML =
        document.getElementById("Lv.5").innerHTML.substr(0,2) + "<br>"
        + (lv5Spots) + "/" + availableSpots + "<br>"
        + (((lv5Spots)*6*bet)/availableSpots).toFixed(2);

    document.getElementById("Lv.6").innerHTML =
        document.getElementById("Lv.6").innerHTML.substr(0,2) + "<br>"
        + (lv6Spots) + "/" + availableSpots + "<br>"
        + (((lv6Spots)*6*bet)/availableSpots).toFixed(2);

    document.getElementById("Yellow").innerHTML =
        document.getElementById("Yellow").innerHTML.substr(0,2) + "<br>"
        + (yellowSpots) + "/" + availableSpots + "<br>"
        + (((yellowSpots)*4*bet)/availableSpots).toFixed(2);

    document.getElementById("Pink").innerHTML =
        document.getElementById("Pink").innerHTML.substr(0,2) + "<br>"
        + (pinkSpots) + "/" + availableSpots + "<br>"
        + (((pinkSpots)*4*bet)/availableSpots).toFixed(2);

    document.getElementById("Blue").innerHTML =
        document.getElementById("Blue").innerHTML.substr(0,2) + "<br>"
        + (blueSpots) + "/" + availableSpots + "<br>"
        + (((blueSpots)*4*bet)/availableSpots).toFixed(2);

    document.getElementById("Green").innerHTML =
        document.getElementById("Green").innerHTML.substr(0,2) + "<br>"
        + (greenSpots) + "/" + availableSpots + "<br>"
        + (((greenSpots)*4*bet)/availableSpots).toFixed(2);

    var profit = 0;
    for (var i=0;i<12;i++)
    {
        var roundProfit = (24/(24-i)*bet)-bet;
        profit += roundProfit;
    }

    var message = "White: " + availableSpots + " / 24<br>"
                + "Black: " + unavailableSpots + " / 24<br>"
                + "Bet : " + bet + "$<br>"
                + "12 rounds profit: " + profit.toFixed(2) + "$";

    document.getElementById("dataCell").innerHTML = message;
}

$('td').hover(function(){
    document.getElementById("dataCell").onmouseover = showData();
});

$('td.clickable').hover(function(){
    document.getElementById("dataCell").onmouseover = showData();

})

var table = document.getElementById("table");
if (table != null) {
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].onclick = function () {
                reportCell(this);
            };
        }
    }
}

var reportCell = function(cell){
    if ( cell.style.backgroundColor === "black") {
        cell.style.backgroundColor = "white";
        cell.style.color = "black";
    }
    else {
        cell.style.backgroundColor = "black";
        cell.style.color = "white";
    }

    document.getElementById("dataCell").onmouseover = showData();
}

var resetButton = function(){
    $('td.clickable').each(function(){
        this.style.backgroundColor = "white";
        this.style.color = "black";
    })
    showData();
}

showData();