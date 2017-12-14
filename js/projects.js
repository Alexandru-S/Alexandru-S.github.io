//https://api.github.com/users/Alexandru-S/repos
$.getJSON( "https://api.github.com/users/Alexandru-S/repos", function( json )
 {
  console.log( "JSON Data: " + typeof(json) );
  var i =0

for(i=0; i<json.length; i++)
  {
         $('.w3-row-padding').append($("<div id='project_"+i+"' class='w3-col s6'> "+json[i].full_name+  "<img src='img/sheep.jpg'></div>"));

    }
 });