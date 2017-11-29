//https://api.github.com/users/Alexandru-S/repos
$.getJSON( "https://api.github.com/users/Alexandru-S/repos", function( json )
 {
  console.log( "JSON Data: " + typeof(json) );
  var i =0

for(i=0; i<json.length; i++)
  {
         $('.projects').append($("<div id='test111'> "+json[i].full_name+  "</div>"));
    }

 });