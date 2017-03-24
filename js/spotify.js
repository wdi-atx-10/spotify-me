// API Docs at:
// https://developer.spotify.com/web-api/search-item/



var offset = 0;
var type = $('#search-type').val();

$(function() {
  $('#search').on('submit', function(e) {
    e.preventDefault();
    searchByArtist();
  })
})


$(function() {
  $('#search').on('submit', function(e) {
    e.preventDefault();
    searchByTrack();
  })
})



function searchByArtist(artist) {
  var apiUrl = 'https://api.spotify.com/v1/search';

  $.ajax({
      url: apiUrl,
      method: 'GET',
      dataType: 'json',
      data: {
        q: $('#search-keyword').val(),
        offset: 0,
        type: $('#search-type').val()
      }

    })

    .done(function(response) {
      console.log(response);
      for (var i = 0; i < 7; i++) {
        var artist = response.artists.items[i].name;
        $('#results').append('<li>' + artist + '</li>');
      }
    })
    .fail(function(error) {
      console.log('error', error);
    })
    .always(function() {
      console.log('I always work');
    })


}


function searchByTrack(track) {
  var url = 'https://api.spotify.com/v1/search';
  var getTheTrack = $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
      data: {
        q: $('#search').val(),
        offset: 0,
        type: $('#search-type').val()
      }
    })

    .done(function(response) {
      console.log(response);
      for (var j = 0; j < 7; j++) {
        var track = response.track.items[j].name;
        $('#results').append('<li>' + track + '</li>');
      }
    })
  getTheTrack.fail(function(error) {
    console.log('error', error);
  })
  getTheTrack.always(function() {
    console.log('I always work');
  })



}
