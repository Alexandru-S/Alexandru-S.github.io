//https://api.github.com/users/Alexandru-S/repos
$.getJSON( "https://api.github.com/users/Alexandru-S/repos", function( json )
 {
  console.log( "JSON Data: " + typeof(json) );
  var i =0
  var y = fetchPicture()

for(i=0; i<json.length; i++)
  {
         $('.mdl-grid').append($(
         "<div id='project_"+i+"' class='mdl-cell mdl-card mdl-shadow--4dp portfolio-card'>"+
         "<div class='mdl-card__media'>"+
            "<img class='article-image' src='img/"+fetchPicture(json[i].language)+".jpg' border='0' alt=''>"+
         "</div>"+
         "<div class='mdl-card__title'>"+
            "<h2 class='mdl-card__title-text'>"+json[i].name+"</h2>"+
         "</div>"+
         "<div class='mdl-card__supporting-text'>"+
               "<p> "+json[i].language+  "</p>"+
         "</div>"+

         "<div class='mdl-card__actions mdl-card--border'>"+
               "<a class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent' href= href='"+json[i].html_url +"'>Visit</a>"+
         "</div>"+
         "</div>"));

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
