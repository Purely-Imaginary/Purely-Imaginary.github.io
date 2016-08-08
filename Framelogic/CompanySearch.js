/**
 * Created by Amadeusz Opac on 08.08.2016.
 */

javascript:(function () {

    var companies = $("#menu-map > ul").clone();
    console.log(companies.children());
    if (companies.length == 0) {
        alert("Odśwież stronę i spróbuj ponownie");
        return;
    };

    /*$("#header-login").append('<div class="CompanyInput"><input id="company" placeholder="Firma"></div>');
*/  $( "#searcher" ).attr('placeholder','CompanySearch v1.1');

    $(document).unbind('keydown');

    $( "#searcher" ).keyup(function() {
        $('#menu-map').find('ul').first().css('display','block');

        if ($("#searcher").val()== ""){
            $('#menu-map').find('ul').first().css('display','none');

        }

        var filter = companies.clone().children().filter(function(){
            if ($(this).attr('data-desc') == null) return false;
            return ($(this).attr('data-desc').toLowerCase().indexOf($("#searcher").val().toLowerCase()) !== -1)});


        $('#menu-map > ul').html("");

        for(var i = 0;i<filter.length;i++)
        {
            $('#menu-map > ul').append(filter[i]);
        }
        if (filter.length == 0)$('#menu-map > ul').append("<li style='background-color: red'>No companies found</li>");



    });

})();