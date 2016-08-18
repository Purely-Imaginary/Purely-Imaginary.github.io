javascript:(function () {

    $("td.satellites").each(function () {
        $(this).css({'color': 'black', 'background-color': 'lightgreen'});
        if ($(this).html() < 5) $(this).css({'color': 'black', 'background-color': 'yellow'});
        if ($(this).html() === "0") $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
    });
    $("th.satellites").html("<a title='Ilość satelit GPS połączonych z rejestratorem. Jeśli ta wartość wynosi mniej niż " +
        "5 - oznacza to zbyt słaby zasięg GPS'>Satelity</a>");

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
    $("th.memory").html("<a title='Wartość zajętej pamięci rejestratora.\nJeśli jest więcej niż 264 oznacza to że w pamięci " +
        "rejestratora są jeszcze ramki czekające na zrzucenie'>Pamięć</a>");


    $("td.network").each(function () {
        if ($(this).html() === 0) $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    $("th.network").html("<a title='Kod sieci z którą rejestrator aktualnie się połączył.\nCzerwony jeśli kod sieci " +
        "jest równy 0.\nKliknij aby przejść do strony z listą kodów.' " +
        "href='http://www.numberportabilitylookup.com/networks' target='_blank'>Kod sieci</a>");


    $("td.power").each(function () {
        if ($(this).html() < 10) $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    $("th.power").html("<a title='Napięcie akumulatora. Tło jest czerwone " +
        "jeśli napięcie akumulatora jest mniejsze niż 10V'>Nap. aku.</a>");

    $("td.battery").each(function () {
        if ($(this).html() < 8) $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    $("th.battery").html("<a title='Napięcie na wewnętrznej baterii rejestratora. " +
        "Tło jest czerwone jeśli napięcie baterii jest mniejsze niż 8V'>Bateria</a>");

    $("td.antenna").each(function () {
        if ($(this).html() === "1") $(this).css({'color': 'black', 'background-color': 'lightgreen'});
        else $(this).css({'color': 'black', 'background-color': 'red', 'font-weight': 'bold'});
    });
    $("th.antenna").html("<a title='Status anten. Oznaczenia\n1 - Prawidłowy status\n" +
        "2 - Zwarcie na co najmniej jednej z anten (zwróć uwagę która nie działa)\n" +
        "3 - Zamienione anteny GPS i GSM'>Antena</a>");


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
    $("th.signal").html("<a title='Zasięg GPS rejestratora. Jeśli jest więcej niż 16, ramka przybierze zielony kolor\n" +
        "Jeśli mniej niż 16 - tło stanie się żółte\nJeśli wartość wyniesie 0, kolor będzie czerwony a dla 99 - niebieski.\n" +
        "(99 oznacza brak możliwości połączenia się z dostawcą usługi)'>GSM</a>");

    $("td.frame").each(function () {
        if ($(this).html() !== "3 ") $(this).css({'color': 'black', 'background-color': 'yellow'});
        else $(this).css({'color': 'black', 'background-color': 'lightgreen'});
    });
    $("th.frame").html("<a title='Typ ramki.\n" +
        "1 - ramka aktualna\n2 - ramka archiwalna, z tzw. przeplotu\n3 - ramka aktualna i archiwalna, poprawny status'>Typ</a>");


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

    $("th.inputs").html("<a title='Liczba w systemie dziesiętnym (Liczba w systemie binarnym) <Które diny sa włączone>'>Wej. Cyfrowe</a>");


    $(".validity, .altitude, .course").each(function () {
        $(this).css('display', 'none');
    });

    console.log("Chowanie 'Praw.odczyt','Wysokosc','Kierunek'");

    console.log("DbImprover v1.4.2");
})();