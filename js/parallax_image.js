console.log("------- paralalx image section")

var APIKEY = 'd6e1fdf795a9d10b971c04b8f02097745689cbc1ee15ac8b9156be9f540c984c'
$.getJSON( "https://api.unsplash.com/search/photos?query=chicago&client_id=d6e1fdf795a9d10b971c04b8f02097745689cbc1ee15ac8b9156be9f540c984c", function( json ){
    console.log("json stuff parallax image coord here",json );
    var imageList = json.results

    $.each(imageList,funtion(i,val){
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;



    })

});