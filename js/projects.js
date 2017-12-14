//https://api.github.com/users/Alexandru-S/repos
$.getJSON( "https://api.github.com/users/Alexandru-S/repos", function( json )
 {
  //console.log( "JSON Data: " + typeof(json) );
  var i =0
  var y = fetchPicture()

for(i=0; i<json.length; i++)
  {
         $('.w3-row-padding').append($(
         "<div id='project_"+i+"' class='w3-col s6'><h1> "+json[i].name+  "</h1><p> "+json[i].language+  "</p>  <a href='"+json[i].html_url +"'><img src='img/"+fetchPicture(json[i].language)+".jpg'></a>"
         +"<br><br><br></div>"));

    }
 });


function fetchPicture(picture) {

    console.log( "JSON Data: " + picture );
    switch(picture) {
            case "HTML":
                return "html"
                 break;
            case "C++":
                return "cplus"
                 break;
            case "C":
                return "c"
                 break;
        case "TeX":
            return "tex"
             break;
        case "Java":
             return "java"
             break;

        case "Python":
            return "python"
            break;


        default:
            return "sheep"
    }
}
