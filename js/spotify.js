// API Docs at:
// https://developer.spotify.com/web-api/search-item/

$(document).ready(function() {
  $('#search').on('submit', function(e) {
    e.preventDefault();
    console.log('I was clicked');
    var search = $('#search-keyword').val();

//NOT SURE WHAT IS HAPPENING HERE
    if ($('#search-type').val() == 'artist') {
      searchByArtist(search);
      console.log('success! artist');
    }
    if ($('#search-type').val() == 'track') {
      searchByTrack(search);
      console.log('success! track');
    }

  });
});


function searchByArtist(keyword) {
  var url = 'https://api.spotify.com/v1/search?q=' + keyword + '&type=artist';
  var data = {
    q: keyword,
    type: "artist"
  };

  $.ajax({
      url: url,
      data: data
    })
    .done(function(response) {
      for (var i = 0; i < 20; i++) {
        console.log(response);
        var artist = response.artists.items[i].name;
        $('#artistResults').append('<li>' + artist);
      }
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    })
}



function searchByTrack(keyword) {
  var url = 'https://api.spotify.com/v1/search?q=' + keyword + '&type=track';
  var data = {
    q: keyword,
    type: "track"
  };

  $.ajax({
      url: url,
      data: data
    })
    .done(function(response) {
      for (var i = 0; i < 20; i++) {
        console.log(response);
        var track = response.tracks.items[i].name;
        $('#songResults').append('<li>' + track);
      }
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    })
}
