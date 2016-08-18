/**
 * Created by amade on 09.08.2016.
 */
function load_website_into_id(website,id){
    var height = screen.height;
    var blockHeight = height-229;
    document.getElementById(id).innerHTML='<object type="text/html" data='+website+' style="height: '+blockHeight+'px; width: 100%; overflow: hidden"></object>';
}

$(document).ready(function(){
    $("tr.animate").mouseover(function(){
        $(this).animate({'background-color':'red'},'fast')
    });
    $("tr.animate").mouseout(function(){
        $(this).animate({marginLeft:'0px'},0)
    });
});