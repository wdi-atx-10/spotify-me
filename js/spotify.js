// API Docs at:
// https://developer.spotify.com/web-api/search-item/
var apiUrl ='https://api.spotify.com/v1/search';

$(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    console.log('form');

    var keyword= $('#search-keyword').val();
    var type=$('#search-type').val();

    if (type =='artist') {
        searchByArtist(keyword)
    } else if (type == 'track') {
        searchByTrack(keyword);
    }
  })
});


function searchByArtist(keyword) {

  console.log(apiUrl);

    $.ajax({
      url: apiUrl,
      data:{
        q: keyword,
        type: "artist"
      }
    })

    .done(function(response){
      console.log(response);
      var artistArray= response.artists.items;

      for (i=0, x=artistArray.length; i<x; i++){
        var artistName=artistArray[i].name;
        console.log(artistName);
        var li = $('<li />');
        li.text(artistName);
        $('#results').append(li);
    }
    })
    .fail(function(error){
      console.log('error', error);
    })
    .always(function(){
      console.log("This works!");
    });
};


function searchByTrack(trackInput) {

    $.ajax({
      url: url,
      data: {
        q: trackInput,
        type: "track"
      }
    })

    .done(function(response){
      console.log(response);
      var track=response.track;
      console.log(track);

      $('#results').append(track);
    })
    .fail(function(error){
      console.log('error', error);
    })
    .always(function(){
      console.log("This works!");
    });
};
