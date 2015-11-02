$(document).ready(function () {
  page.init();
});

var page = {


init: function() {
  page.initEvents ();
  page.initStyling ();

},

initEvents: function (){


},
 initStyling: function (){

$.ajax({
    url: 'https://www.reddit.com/r/beerporn.json',
    method: 'GET',
    success: function(data){
      var redditArr = data.data.children;
      console.log(redditArr.length);
      for (var i=0; i<redditArr.length; i++){
        $('body').append( '<h3>' + redditArr[i].data.title + '</h3>');
        if(redditArr[i].data.preview) {
            $('body').append('<img src="' + redditArr[i].data.preview.images[0].resolutions[2].url + '">');
          }
        }
      }
    });


 },

}; //end of page
