// API Docs at:
// https://developer.spotify.com/web-api/search-item/

$(document).ready(function(){
  $('form').on('submit',function(e){
    var keyword = $('#search-keyword').val();
    e.preventDefault();
    if($('#search-type').val() === 'artist'){
      searchByArtist(keyword);
    } else {
      searchByTrack(keyword);
    };
    clear();
  })

//end doc ready
})

function clear(){
  var oldNames = $('#results').children();
  $('.clear').append(oldNames);
  $('.clear').html('');
}

function searchByArtist(keyword) {
  var keyword = $('#search-keyword').val();
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
  var data = {
    q : keyword
  };
  $.ajax({
    url : url,
    method : 'GET',
    data : data
  })
  .done(function(results){
    console.log('success', results);
    var artists = results.artists.items;
    for (var i=0; i<artists.length; i++){
      $('#results').append('<li>'+artists[i].name+'</li>');
    }
  })
  .fail(function(error){
    console.log('nope', error);
  })
  .always(function(){
    console.log('ajax working');
  });
}


function searchByTrack(keyword) {
  var keyword = $('#search-keyword').val();
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
  var data = {
    q : keyword
  };
  $.ajax({
    url : url,
    method : 'GET',
    data : data
  })
  .done(function(results){
    console.log('success', results);
    var tracks = results.tracks.items;
    for (var i=0; i<tracks.length; i++){
      $('#results').append('<li>'+tracks[i].artists[0].name+'</li>');
    }
  })
  .fail(function(error){
    console.log('nope', error);
  })
  .always(function(){
    console.log('ajax working');
  });
}
