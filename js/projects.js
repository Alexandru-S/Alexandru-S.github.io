//https://api.github.com/users/Alexandru-S/repos
$.getJSON( "https://api.github.com/users/Alexandru-S/repos", function( json )
 {
  var i =0
  var y = fetchPicture()

for(i=0; i<json.length; i++){
         $('.row').append($(
         "<div id='project_"+i+"' class='col s12 m6 portfolio-card'>"+
            "<div class='card'>"+
                 "<div class='card-image'>"+
                    "<img class='article-image' src='img/"+fetchPicture(json[i].language)+".jpg' border='0' alt=''>"+
                    "<span class='card-title'>"+json[i].name+"</span>"+
                 "</div>"+
                 "<div class='card-content'>"+
                       "<p> "+json[i].language+  "</p>"+
                 "</div>"+
                 "<div class='card-action'>"+
                       "<a class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent' href= href='"+json[i].html_url +"'>Visit</a>"+
                 "</div>"+
            "</div>"+
         "</div>"));
    }
 });

function fetchPicture(picture) {
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
