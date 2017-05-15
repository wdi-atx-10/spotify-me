// API Docs at:
// https://developer.spotify.com/web-api/search-item/


function searchByArtist(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
  $.ajax({
    url: url
  })
    .done(function(results){
      console.log(results);
      var searchArray = results.artists.items;
      searchArray.forEach(function(Object){
    var li = $('<li />');
    li.text(Object.name)
    $('#results').append(li);
    })
})
.fail(function(error){
  console.log('error', error);
});
}


function searchByTrack(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
  $.ajax({
    url: url
  })
    .done(function(results){
      console.log(results);
      var searchArray = results.tracks.items;
      searchArray.forEach(function(Object){
    var li = $('<li />');
    li.text(Object.name)
    $('#results').append(li);
    })
})
.fail(function(error){
  console.log('error', error);
});
}

function main(){
  $('#search').on('submit', function(e){
      e.preventDefault();
      var search = $('#search-keyword').val();
      var option = $('#search-type :selected').text();
      if (search.length > 0){
        if (option.includes('artist')) {
                searchByArtist(search);
            }
        if (option.includes("track")) {
              searchByTrack(search);
            }
        }
      else{
        alert('Please input a search query');
      }
  });
}

$(function(){
  main();
})
