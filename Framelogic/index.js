/**
 * Created by amade on 09.08.2016.
 */
function load_website_into_id(website,id){
    document.getElementById(id).innerHTML='<object type="text/html" data='+website+' style="height: 100%; width: 100%"></object>';
}