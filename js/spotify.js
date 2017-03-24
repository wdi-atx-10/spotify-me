// API Docs at:
// https://developer.spotify.com/web-api/search-item/


function search(keyword, type) {
  var url = 'https://api.spotify.com/v1/search';
  $.ajax({
    url: url,
    data:{
      q: keyword,
      type: type
    }
  })
    .done(function(response){
      console.log(response);
      $('#results').html('');
      if (type == 'artist'){
        var searchArray = response.artists.items;
        searchArray.forEach(function(artist){
          var li = $('<li />');
          li.text(artist.name);
          $('#results').append(li);
        });
      } else{
        var searchArray = response.tracks.items;
        searchArray.forEach(function(tracks){
          var li = $('<li />');
          li.text(tracks.name);
          $('#results').append(li);
        });
      };
    })
    .fail(function(error){
      console.log(error);
    });

}


function searchByTrack(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
}

function main(){
  $('#search').on('submit',function(e){
    e.preventDefault();
    var keyword = $('#search-keyword').val();
    var type = $('#search-type').val();
    search(keyword, type);
  });
}

$(function(){
  main();
});
