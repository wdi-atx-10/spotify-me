// API Docs at:
// https://developer.spotify.com/web-api/search-item/

$(function(){
  $('#search').on('submit', function(e){
    e.preventDefault();
    var keyword = $('#search-keyword').val();
    var option = $('#search-type').val();
    if (keyword === ''){
      return;
    }
    if (option === 'artist'){
      searchByArtist(keyword);
    } else{
      searchByTrack(keyword);
    }
  })
})



function searchByArtist(keyword){
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';

  $.ajax({
    url: url,
    data: {},
    method: "GET",
    dataType: "json"
  })

  .done(function(response){
    console.log('success', response);
    var musicians = response.artists.items;
    var listItems = [];
    for (var i = 0; i < musicians.length; i++) {
      var artist = musicians[i];
      listItems.push($('<li>' + artist.name + '</li>'));
    }
    $('#results').html(listItems);
  })
  .fail(function(error){
    console.log('error', error);
  })
  .always(function(){
    console.log("I always work!");
  })
}

function searchByTrack(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';

  $.ajax({
    url: url,
    data: {},
    method: "GET",
    dataType: "json"
  })
  .done(function(response){
    console.log('success', response)
    var songs = response.tracks.items;
    var listItems = [];
    for (var i = 0; i < songs.length; i++) {
      var track = songs[i];
      listItems.push($('<li>' + track.name + '</li>'));
    }
    $('#results').html(listItems);
  })
  .fail(function(error){
    console.log('error', error);
  })
  .always(function(){
    console.log("I always work!");
  });

}
