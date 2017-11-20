//https://api.github.com/users/Alexandru-S/repos
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", https://api.github.com/users/Alexandru-S/repos, true); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp);
    return xmlHttp.responseText;
}