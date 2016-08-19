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
        "<td></td><td>ID</td><td>Name</td><td>Candies</td><td>Requirement</td><td>Pokemon<br>Count</td><td>Evolutions<br>possible</td>" +
        "</tr>")
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

        var correction = 1;
        if ($('#transferAfter').prop('checked')) correction++;

        var evolutions =  Math.floor(pokeEvos[j].candies / (parseInt(pokeEvos[j].candiesToEvolve)-correction));

        var output = '<tr ' + trClass + '">' +
            '<td class="image"><img src="http://www.serebii.net/pokemongo/pokemon/' + textId + '.png" border="0" width="50"></td>' +
            '<td class="id">' + pokeEvos[j].id + "</td>" +
            '<td class="name">' + pokeEvos[j].name + "</td>" +
            '<td class="candies">' + pokeEvos[j].candies + "</td>" +
            '<td class="req">' + pokeEvos[j].candiesToEvolve + "</td>" +
            '<td class="count">' + pokeEvos[j].count + "</td>" +
            '<td class="evos">' + evolutions + '</td>'
            "</tr>";
        $("#pokeData").append(output);
    }
    $("#return").append("</table>");
    $("#return").slideDown(1500);

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