/**
 * Created by amade on 28.07.2016.
 */
var searchEvolutions = function() {
    var textbox = document.getElementById("name");
    var name = textbox.value;
    /*var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fbulbapedia.bulbagarden.net%2Fwiki%2FGrowlithe_(Pok%25C3%25A9mon)%2FGeneration_II_learnset%22%20and%20xpath%3D%22%2F%2Fdiv%2Fdiv%2Fdiv%2Fdiv%2Fdiv%2Fdiv%2Fdiv%22&format=json&callback=";
    var nanana = $.getJSON(url);
    //var result = $("#result").getJSON(url);
    //document.getElementById("result").innerHTML=httpGet();*/

    $.get("www.mydomain.com/?url=www.google.com", function(response) {
        alert(response)
    });
    var i = 0;
}
