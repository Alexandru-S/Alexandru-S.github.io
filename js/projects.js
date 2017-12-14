//https://api.github.com/users/Alexandru-S/repos
$.getJSON( "https://api.github.com/users/Alexandru-S/repos", function( json )
 {
  console.log( "JSON Data: " + typeof(json) );
  var i =0
  var y = fetchPicture()

for(i=0; i<json.length; i++)
  {
         $('.w3-row-padding').append($(
         "<div id='project_"+i+"' class='w3-col s6'><p> "+json[i].name+  "</p><p> "+json[i].language+  "</p><img src='img/"+fetchPicture(i)+".jpg'>"
         +""
         +"<br><br><br></div>"));

    }
 });


var x = fetchPicture(4, 3);

function fetchPicture(picture) {
    var k = "sheep"
    var j = "mtns1"
    if(picture ==1)
    {
        return j;
    }
    if(picture !=1)
    {
        return k;
    }
}
