javascript:(function () {

    var url = window.location.href;
    var flota = url.split(".")[0].split("//")[1];

    if (url.indexOf("loose") !== -1) {
        $(".action_raports_showcard_showvehicle_pojazd_id").each(function () {
            var id = $(this).attr('value');
            $(this).parent().append('<a href="http://' + flota + '.framelogic.pl/api/fuel/main/calibration/' + id + '" target="_blank"><img src="/api/media/images/newLayout/info.png"></a>')
        })
    }
    if (url.indexOf("refueling") !== -1) {
        $(".action_pojazd_id_pojazd_id").each(function () {
            var id = $(this).attr('value');
            $(this).parent().append('<a href="http://' + flota + '.framelogic.pl/api/fuel/main/calibration/' + id + '" target="_blank"><img src="/api/media/images/newLayout/info.png"></a>')
        })
    }
    console.log("LooseQuickstart v1.0")
})();