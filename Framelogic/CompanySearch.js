/**
 * Created by Amadeusz Opac on 08.08.2016.
 */

javascript:(function () {

    var companies = $("#menu-map > ul").clone();


    /*$("#header-login").append('<div class="CompanyInput"><input id="company" placeholder="Firma"></div>');
*/

    $(document).unbind('keydown');

    $( "#searcher" ).keyup(function() {



        var filter = companies.clone().children().filter(function(){
            return ($(this).attr('data-desc').toLowerCase().indexOf($("#searcher").val().toLowerCase()) !== -1)});


        $('#menu-map > ul').html("");

        for(var i = 0;i<filter.length;i++)
        {

            $('#menu-map > ul').append(filter[i]);
        }

        $('#menu-map').find('ul').first().css('display','block');

    });

})();