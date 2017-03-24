// API Docs at:
// https://developer.spotify.com/web-api/search-item/
$(function(){
//console.log('js works');

var search = $('#search-keyword').val();
var type = $('#search-type').val();
var limit = 10;
var offset = 0;
var clicks = 0;
var showingLower = 1+ offset;
var showingUpper = limit + showingLower - 1;


//on submit get results
$('#search').on('submit',function(evt) {
  evt.preventDefault();
  resetNewSearch();

  if (type=='artist') {
    searchByArtist();
  } else if (type=='track'){
    searchByTrack();
  }
});

$('a').on('click', function() {
  $('#results').empty();
  clicks++
  offset = clicks*limit
  showingLower = 1+ offset;
  showingUpper = limit + showingLower - 1;
  if (type=='artist') {
    searchByArtist();
  } else if (type=='track'){
    searchByTrack();
  }
});

function searchByArtist(keyword) {
  var url = 'https://api.spotify.com/v1/search';
  var searchArtist = $.ajax({
    url: url,
    method: 'GET',
    datatype: 'json',
    data: {
      q: search,
      type: type,
      limit: limit,
      offset: offset
    }
  });
  searchArtist.done(function(response) {
    console.log('Artist Search: ', response);
    for (var i=0; i<limit;i++) {
      var results= response.artists.items[i].name;
      $('#results').append('<li>'+results+'</li>');
    }
    var total = response.artists.total;
    $('p').text('Showing '+showingLower+'-'+showingUpper+' of '+total+' results');
    $('a').text('Next Page');
  });
  searchArtist.fail(function(error) {
    console.log('Artist fail...');
  });
}


function searchByTrack(keyword) {
  var url = 'https://api.spotify.com/v1/search';
  var searchTracks = $.ajax({
    url: url,
    method: 'GET',
    datatype: 'json',
    data: {
      q: search,
      type: type,
      limit: limit,
      offset: offset
    }
  });
  searchTracks.done(function(response) {
    console.log('Track Search: ', response);
    for (var i=0; i<limit;i++) {
      var results = response.tracks.items[i].name;
      var artist = response.tracks.items[i].artists[0].name;
      $('#results').append('<li>'+results+'</li>');
      $('#results li').eq(i).append('<dl>By: '+artist+'</dl>');
    }
    var total = response.tracks.total;
    $('p').text('Showing '+showingLower+'-'+showingUpper+' of '+total+' results');
    $('a').text('Next Page');
  });
  searchTracks.fail(function(error) {
    console.log('Track fail...');
  });
}

//reset variables
function resetNewSearch() {
  $('#results').empty();
  search = $('#search-keyword').val();
  type = $('#search-type').val();
  offset = 0;
  clicks = 0;
  showingLower = 1+ offset;
  showingUpper = limit + showingLower - 1;
}




//end of document ready
});
