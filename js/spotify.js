// API Docs at:
// https://developer.spotify.com/web-api/search-item/


//1. Spotify API URL
  var apiURL = 'https://api.spotify.com/v1/search';

$(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    console.log('form');

  var keyword = $('#search-keyword').val();
  var type = $('#search-type').val();

  if (type == 'artist') {
    searchByArtist(keyword)
  } else if (type == 'track') {
    searchByTrack(keyword);
  }
});

function searchByArtist(artistName) {

$.ajax({
  url: apiURL,
  data: {
    q: artistName,
    type: "artist"
  }
})

.done(function(response) {
  console.log(response);

  var artistArray = response.artists.items;
  for(var i = 0, var x = artistArray.length; i < x, i++){
  var artistName = artistArray[i].artistName
  append
    }

});




