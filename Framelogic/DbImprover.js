javascript:(function () {
/*TO DO : 99 na GSM
     TOOLTIPS*/

    $("td.satellites").each(function () {
        $(this).css({'color': 'black', 'background-color': 'lightgreen'});
        if ($(this).html() < 5) $(this).css({'color': 'black', 'background-color': 'yellow'});
        if ($(this).html() === "0") $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
    });
    console.log("Przeliczanie satelit (<5)");

    $("td.latitude").each(function () {
        if ($(this).html().indexOf("0,0000") !== -1) {
            $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
            $(this).html("0,0000");
        }
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });


    $("td.longitude").each(function () {
        if ($(this).html().indexOf("0,0000") !== -1) {
            $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
            $(this).html("0,0000");
        }
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    console.log("Przeliczanie dlugosci i szerokosci (!=0,000)");

    $("td.memory").each(function () {
        if ($(this).html() > 300) $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    console.log("Przeliczanie pamieci (>300)");

    $("td.network").each(function () {
        if ($(this).html() === 0) $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    console.log("Przeliczanie kodu sieci (!=0)");

    $("td.power").each(function () {
        if ($(this).html() < 10) $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    console.log("Przeliczanie napiecia akumulatora (<10)");

    $("td.battery").each(function () {
        if ($(this).html() < 8) $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    console.log("Przeliczanie baterii (<8)");

    $("td.antenna").each(function () {
        if ($(this).html() === "1") $(this).css({'color': 'black', 'background-color': 'lightgreen'});
        else $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
    });
    console.log("Przeliczanie antstatu (!=1)");

    $("td.signal").each(function () {
        if ($(this).html() < 16) $(this).css({'color': 'black', 'background-color': 'yellow'});
        else if ($(this).html() === "0") $(this).css({
            'color': 'black',
            'background-color': 'red',
            'font-weight': 'bold'
        });
        else if ($(this).html() === "99") $(this).css({'color': 'black', 'background-color': 'lightblue'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    console.log("Przeliczanie zasiegu GSM (<16 / ==0 / ==99)");

    $("td.frame").each(function () {
        if ($(this).html() !== "3 ") $(this).css({'color': 'black', 'background-color': 'yellow'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    console.log("Przeliczanie statusu ramki (!=3)");

    $("td.inputs, td.alarm").each(function () {
        var input = $(this).html();
        var printString = "<span style='color:blue'>  (";
        printString += parseInt(input).toString(2);

        var dins = "\<";
        for (var i = 0; i < printString.length; i++) {
            if (printString[i] === "1") dins += (printString.length - i) - 1 + ",";
        }
        if (dins === "\<") dins += " ";
        $(this).html(input + printString + ")</span> <span style='color:green'>" + dins.slice(0, -1) + "\></span>");
    });
    console.log("Przeliczanie dinów i alarmu");

    $(".validity, .altitude, .course").each(function () {
        $(this).css('display', 'none');
    });
    console.log("Chowanie 'Praw.odczyt','Wysokosc','Kierunek'");

    $("th.frame").html("Typ");
    $("th.memory").html("Pamiec");
    $("th.signal").html("GSM");
    $("th.antenna").html("Antena");

    $("th.alarm").html("<a href='http://frametech.framelogic.pl/index.php/Znaczenie_poszczeg%C3%B3lnych_bit%C3%B3w_pola_-_alarm'>Alarm</a>");

    console.log("Zmiana naglówków Typ,Pamiec,GSM,Antena i Alarm");


    console.log("Pomocnik odbioru v1.2.2");
})();