/**
 * Created by amade on 18.08.2016.
 */



function Pokemon(id,name,candies,candiesToEvolve)
{
    this.id = id;
    this.name = name;
    this.candies = candies;
    this.candiesToEvolve = candiesToEvolve;
}

function PokemonWithCount(id,name,candies,candiesToEvolve,count)
{
    this.id = id;
    this.name = name;
    this.candies = candies;
    this.count = count;
    this.candiesToEvolve = candiesToEvolve;
}


function calculate() {
    $("#return").css('display','none');
    $("#leftOne").css('opacity',0);
    var pokeArray = [];
    var pokeEvos = [];

    var pokeData = $("#dataInput").val();
    var pokemonRaw = pokeData.split("\n");
    for (var i in pokemonRaw) {
        var data = pokemonRaw[i].split("\t");
        var pokemonObj = new Pokemon(data[0], data[2], data[18], data[19]);
        pokeArray.push(pokemonObj);
    }
    /*
     for (var j in pokeArray)
     {
     var output = pokeArray[j].id + " - " + pokeArray[j].name + " - " + pokeArray[j].candies + "<br>";
     $("#return").append(output);
     }
     */
    for (var j in pokeArray) {
        var count = 0;

        for (var k in pokeArray) {
            if (pokeArray[j].id === pokeArray[k].id) {
                count++;
            }
        }
        var newPoke = new PokemonWithCount(pokeArray[j].id, pokeArray[j].name, pokeArray[j].candies, pokeArray[j].candiesToEvolve, count);
        if (newPoke.candiesToEvolve === "-") continue;
        var isInAlready = false;
        for (var p in pokeEvos)
        {
            if (pokeEvos[p].id === newPoke.id) isInAlready = true;
        }
        if (!isInAlready) pokeEvos.push(newPoke);
        count = 0;
    }

    for (var j in pokeEvos) {
        for (var k in pokeEvos) {

            if (pokeEvos[j].id === pokeEvos[k].id & j !== k)
                pokeEvos.splice(k, 1);
        }
    }

    //$("#return").fadeOut();
    $("#return").html("");
    $("#return").append("<table id='pokeData'><tr>" +
        "<td></td>" +
        "<td>ID</td>" +
        "<td>Name</td>" +
        "<td>Candies</td>" +
        "<td>Requirement</td>" +
        "<td>Pokemon<br>Count</td>" +
        "<td>Transfers<br>needed</td>" +
        "<td>Evolutions<br>possible</td>" +
        "<td>Candies to<br>next evo</td>" +
        "</tr>")

    var totalEvos = 0;
    pokeEvos.sort()
    for (var j in pokeEvos) {
        if (pokeEvos[j].id === "") continue;
        var textId = pokeEvos[j].id;
        if (textId < 100) textId = "0" + textId;
        if (textId < 10) textId = "0" + textId;

        var evolvable = "";

        if (parseInt(pokeEvos[j].candiesToEvolve) < parseInt(pokeEvos[j].candies)+1)
            evolvable = " evolvable";

        var checkboxForEvolvables = $('#evolvableOnly').prop('checked');
        if (checkboxForEvolvables & evolvable === "") continue;

        var oddTr = (j%2 === 0);

        var trClass = 'class="';
        if (oddTr)
            trClass += "odd";
        else
            trClass += "even";

        if (evolvable !== "") trClass += " evolvable";


        var evolutions = evolveSim(pokeEvos[j].candies,pokeEvos[j].candiesToEvolve,$('#transferAfter').prop('checked'),pokeEvos[j].count);
        totalEvos += evolutions[0];

        var candiesToNext = pokeEvos[j].candiesToEvolve - evolutions[1];

        var flashyClass = "";
        if (candiesToNext < 5 && evolutions[0]<pokeEvos[j].count) flashyClass += " flashy";

        var output = '<tr ' + trClass + '">' +
            '<td class="image"><img src="http://www.serebii.net/pokemongo/pokemon/' + textId + '.png" border="0" width="50"></td>' +
            '<td class="id">' + pokeEvos[j].id + "</td>" +
            '<td class="name">' + pokeEvos[j].name + "</td>" +
            '<td class="candies">' + pokeEvos[j].candies + "</td>" +
            '<td class="req">' + pokeEvos[j].candiesToEvolve + "</td>" +
            '<td class="count">' + pokeEvos[j].count + "</td>" +
            '<td class="transfers">' + evolutions[2] + "</td>" +
            '<td class="evos">' + evolutions[0] + '</td>' +
            '<td class="candiesToNext' + flashyClass + '">' + candiesToNext + '</td>' +
            "</tr>";
        $("#pokeData").append(output);
    }
    $("#return").append("</table>");
    $("#return").slideDown(1500, function(){

        $("#leftOne").html(generateStatistics(totalEvos));
        $("#leftOne").fadeTo(800,1);
    });

/*
    $("#divsReturn").html("");
    for (var j in pokeEvos) {
        if (pokeEvos[j].id === "") continue;
        var textId = pokeEvos[j].id;
        if (textId < 100) textId = "0" + textId;
        if (textId < 10) textId = "0" + textId;

        var evolvable = "";

        if (parseInt(pokeEvos[j].candiesToEvolve) < parseInt(pokeEvos[j].candies)+1)
            evolvable = " evolvable";

        var checkboxForEvolvables = $('#evolvableOnly').prop('checked');
        if (checkboxForEvolvables & evolvable === "") continue;

        var correction = 1;
        if ($('#transferAfter').prop('checked')) correction++;

        var evolutions =  Math.floor(pokeEvos[j].candies / (parseInt(pokeEvos[j].candiesToEvolve)-correction));
        var output = '<div class="singlePoke' + evolvable + '">' +
            '<div class="image"><img src="http://www.serebii.net/pokemongo/pokemon/' + textId + '.png" border="0" width="50"></div>' +
            '<div class="id">' + pokeEvos[j].id + '</div>' +
            '<div class="name">' + pokeEvos[j].name + '</div>' +
            '<div class="candies">' + pokeEvos[j].candies + '</div>' +
            '<div class="req">' + pokeEvos[j].candiesToEvolve + '</div>' +
            '<div class="count">' + pokeEvos[j].count + '</div>' +
            '<div class="evolutions">' + evolutions + '</div>' +
            '</div>';

        $("#divsReturn").append(output);
    }
    */
}

function insertSample(){

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", 'sampleData.txt', false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                $("#dataInput").val(rawFile.responseText);

            }
        }
    }
    rawFile.send(null);

}

function wrapSpan(string,spanClass,em)
{
    var result = "";
    if (em) result += "<em>";
    result += "<span class='" + spanClass + "'>" + string + "</span>";
    if (em) result += "</em>";
    return result;
}

function generateStatistics(totalEvolutions)
{
    var result = "You have " +
        wrapSpan(totalEvolutions,"totalEvos bold",0) +
        " possible evolutions which takes " +
        wrapSpan(totalEvolutions/2,"evosTime bold",0) +
        "m and yield " +
        wrapSpan(totalEvolutions*500,"evoXP bold",0) +
        " XP (" +
        wrapSpan(totalEvolutions*1000,"evoXP bold",0) +
        " XP with Lucky Egg)";
    return result;

}

function evolveSim(actualCandies,candiesReq,transferAfterEvolve,pokeQuantity)
{
    var actual = parseInt(actualCandies);
    var req = parseInt(candiesReq);
    var transfer = transferAfterEvolve;
    var quant = pokeQuantity;
    var evolutions = 0;
    while (actual>=req)
    {
        evolutions++;
        actual -= req;
        actual++;
        if (transfer) actual++;
        quant--;
    }
    var transferred = 0;
    while (quant+actual>req)
    {
        transferred += req-actual;
        quant -= req-actual;
        evolutions++;
    }

    return [evolutions,actual,transferred];
}