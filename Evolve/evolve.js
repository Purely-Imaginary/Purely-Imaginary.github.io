/**
 * Created by amade on 28.07.2016.
 */
var searchEvolutions = function() {
    var textbox = document.getElementById("name");
    var name = textbox.value;
    var url2 = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22bulbapedia.bulbagarden.net%2Fwiki%2FHaunter_(Pok%C3%A9mon)%2FGeneration_II_learnset%23By_leveling_up%22&format=json&diagnostics=true&callback=";
    var url ="http://query.yahooapis.com/v1/public/yql?q=select%20title%20from%20html%20where%20url%3D%22http%3A%2F%2Fstackoverflow.com%22%20and%0A%20%20%20%20%20%20xpath%3D'%2F%2Fdiv%2Fh3%2Fa'%0A%20%20%20%20&format=json&callback=cbfunc";
    var nanana = $.getJSON(url);
    //alert(nanana);

    var i = 0;
}


var loadFile = function(){
    var oFrame = document.getElementById("frmFile");
    var data = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
    var split = data.split("<td id=");
    var pokeID = document.getElementById("name").value;
    extractDataFromSplit(split[pokeID]);
    var i = 0;
}

var extractDataFromSplit = function(HTMLTable){

    var name = HTMLTable.substring(HTMLTable.indexOf("<big><big><big>")+15,HTMLTable.indexOf("</big></big></big>"));
    var id = HTMLTable

    $('body').append("Name: " + name + "<br><BR>");
    HTMLTable = HTMLTable.substring(5);
    document.getElementById("result").innerHTML = HTMLTable;
    //    $('body').append(HTMLTable);
}