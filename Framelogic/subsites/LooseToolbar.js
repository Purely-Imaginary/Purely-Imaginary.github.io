javascript:(function () {

    var url = window.location.href;
    var flota = url.split(".")[0].split("//")[1];

    if (url.indexOf("loose") !== -1) {
        $(".action_raports_showcard_showvehicle_pojazd_id").each(function () {
            var id = $(this).attr('value');
            $(this).parent().append('<a href="http://' + flota + '.framelogic.pl/api/fuel/main/calibration/' + id + '" target="_blank"><img class="pagintipsy" src="/api/media/images/newLayout/arrow_copy.png" height="19" width="19"></a>');
            $(this).parent().append('<a href="http://' + flota + '.framelogic.pl/api/vehicle/calibrationmulti/index/' + id + '" target="_blank"><img src="/api/media/images/newLayout/info.png" height="19" width="19"></a>');
        })
    }
    if (url.indexOf("refueling") !== -1) {
        $(".action_pojazd_id_pojazd_id").each(function () {
            var id = $(this).attr('value');
            $(this).parent().append('<a href="http://' + flota + '.framelogic.pl/api/fuel/main/calibration/' + id + '" target="_blank"><img src="/api/media/images/newLayout/arrow_copy.png" height="19" width="19"></a>');
            $(this).parent().append('<a href="http://' + flota + '.framelogic.pl/api/vehicle/calibrationmulti/index/' + id + '" target="_blank"><img src="/api/media/images/newLayout/info.png" height="19" width="19"></a>');

        })
    }
    console.log("LooseToolbar v1.1")
})();