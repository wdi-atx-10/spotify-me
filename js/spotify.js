// API Docs at:
// https://developer.spotify.com/web-api/search-item/
(function(){
  $('#search').on('submit', function(e){
      e.preventDefault();
      searchByArtist();
    })



})


function searchByArtist(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
  var data = {};

  var artistSearch = $('#search-keyword').val()

$.ajax({
    url: apiUrl,
    data: data

  })
.done(function(response){



  console.log(response);
  })
  .fail(function(error){
  console.log('error', error)
  })
  .always(function(){
  console.log("I always work!");
  })
}





function searchByTrack(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
}

}
