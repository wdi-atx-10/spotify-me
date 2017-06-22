// API Docs at:
// https://developer.spotify.com/web-api/search-item/
$(function(){
  $('#search').on('submit', function(e){
      console.log('ok!');
      e.preventDefault();
      $('ul').html('');
      var artistSearch = $('#search-keyword').val();
      searchByArtist(artistSearch);
    })



})


function searchByArtist(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist,track';




$.ajax({
    url: url
  })
.done(function(response){
  console.log(response);

  for (i=0;i<5;i++) {
    var trackArray = response.tracks.items[i];
    var trackTitle = trackArray.name;
    var trackArtist = trackArray.artists[0].name;
    var trackAlbum = trackArray.album.name;
    var artistArray = response.artists.items[i];
    var artistName = artistArray.name
    var artistUrl = artistArray.images[0].url
  $('#song-results').append('<li>'+trackTitle+'<br>'+trackArtist+'<br>'+trackAlbum+'</li>');
  $('#artist-results').append('<li><img src="'+artistUrl+'" height="100px" width="100px"/></li><br/>'+artistName)

}
  })
  .fail(function(error){
  console.log('error', error)
  })
  .always(function(){
  console.log("I always work!");
  })
}





/*
function searchByTrack(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
}

}*/
