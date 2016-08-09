javascript:(function () {
/*TO DO : polskie znaki*/


    $("td.satellites").each(function () {
        $(this).css({'color': 'black', 'background-color': 'lightgreen'});
        if ($(this).html() < 5) $(this).css({'color': 'black', 'background-color': 'yellow'});
        if ($(this).html() === "0") $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
    });
    $("th.satellites").html("<a title='Jesli mniej niz 5 - oznacza to zbyt slaby zasieg GPS'>Satelity</a>");

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

    $("td.memory").each(function () {
        if ($(this).html() > 300) $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    $("th.memory").html("<a title='Jesli jest wiecej niz 264 oznacza to ze w pamieci " +
        "rejestratora sa jeszcze ramki czekajace na zrzucenie'>Pamiec</a>");


    $("td.network").each(function () {
        if ($(this).html() === 0) $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    $("th.network").html("<a title='Czerowny jesli kod sieci jest rowny 0'>Kod sieci</a>");


    $("td.power").each(function () {
        if ($(this).html() < 10) $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    $("th.power").html("<a title='Czerowny jesli napiecie akumulatora jest mniejsze niz 10V'>Nap. aku.</a>");

    $("td.battery").each(function () {
        if ($(this).html() < 8) $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    $("th.battery").html("<a title='Czerowny jesli napiecie baterii jest mniejsze niz 8V'>Bateria</a>");

    $("td.antenna").each(function () {
        if ($(this).html() === "1") $(this).css({'color': 'black', 'background-color': 'lightgreen'});
        else $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
    });
    $("th.antenna").html("<a title='1 - Prawidlowy\n2 - Zwarcie\n3 - Zamienione anteny'>Antena</a>");


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
    $("th.signal").html("<a title='Wiecej niz 16 - zielony\nMniej niz 16 - zolty\n0 lub 99 - czerwony'>GSM</a>");

    $("td.frame").each(function () {
        if ($(this).html() !== "3 ") $(this).css({'color': 'black', 'background-color': 'yellow'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    $("th.frame").html("<a title='3 - Prawidlowy\nInne - Trzeba zwrocic uwage'>Typ</a>");


    $("td.inputs, td.alarm").each(function () {
        var input = $(this).html();
        var printString = "<span style='color:blue'>  (";
        var printString = "<span style='color:blue'>  (";
        printString += parseInt(input).toString(2);

        var dins = "\<";
        for (var i = 0; i < printString.length; i++) {
            if (printString[i] === "1") dins += (printString.length - i) - 1 + ",";
        }
        if (dins === "\<") dins += " ";
        $(this).html(input + printString + ")</span> <span style='color:green'>" + dins.slice(0, -1) + "\></span>");
    });

    $("th.alarm").html("<a title='0 - oznacza że w zarejestrowanej ramce wystąpił alarm immobilizera (immobilizer jest w" +
        " tej chwili aktywny, blokowane jest uruchomienie pojazdu)\n1 - oznacza że wystąpił jeden z warunków " +
        "wystąpienia wirtualnej stacyjki\n2 - flaga ładowania, oznacza że w chwili zrzucenia danych bateria podtrzymująca " +
        "rejestratora jest ładowana\n3 - oznacza że podczas analizowania czarnej skrzynki urządzenie zarejestrowało " +
        "błąd\n5 - flaga zajętości digidowna / tachoreadera\n6 - czarna skrzynka nie jest opróżniona\n7 - przed " +
        "wystąpieniem ramki miał miejsce restart rejestratora\nZrodlo: frametech'>Alarm</a>");

    $("th.inputs").html("<a title='Liczba w systemie dziesietnym (Liczba w systemie binarnym) <Ktore diny sa wlaczone>'>Wej. Cyfrowe</a>");


    $(".validity, .altitude, .course").each(function () {
        $(this).css('display', 'none');
    });
    $('.hint--top').tooltip({html: true})
    console.log("Chowanie 'Praw.odczyt','Wysokosc','Kierunek'");

    console.log("DbImprover v1.4");
})();