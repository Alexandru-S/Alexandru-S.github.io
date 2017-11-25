//https://api.github.com/users/Alexandru-S/repos
$.getJSON( "https://api.github.com/users/Alexandru-S/repos", function( json )
 {
  //console.log( "JSON Data: " + json[0].full_name );
   $('.projects').append($("<div id='test111'> "+json[0].full_name+  "</div>"));
    $('.projects').append($("<div id='test111'> "+json[1].full_name+  "</div>"));
     $('.projects').append($("<div id='test111'> "+json[2].full_name+  "</div>"));
      $('.projects').append($("<div id='test111'> "+json[3].full_name+  "</div>"));
 });