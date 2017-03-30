// API Docs at:
// https://developer.spotify.com/web-api/search-item/
$(function() {
//document.ready around everything

//two large functions for two tasks for clarity
function getArtistInfo(input){
  var artistURL = 'https://api.spotify.com/v1/search?q='+input+'&type=artist';

  var getArtist = $.ajax({
    url:artistURL,
    method:'GET'
  });


  getArtist.done(function(response){
    // populate the DOM.  ajax has .done hard coded to mean it was successful in getting DOM
    console.log(response); //good to test to see if we are getting our objecst of data

    response.artists.items.forEach(function(value,index){
      $('#results').prepend('<li class="artist-name">'+value.name+'</li>');
    })
  });
//for each array method  drilleddown to one layer above items you want to iterate through
//then forEach with anonymous function(value, index) just names to remind myself of what will come through
//at that drill down point
//last to stuff in the list +value.name+ name being the most inner layer that was iterated through

  getArtist.fail(function(error){
    // console.log an error  .fail hardcoded possibly also
  });


}

function getTrackInfo(input){
  var trackUrl = 'https://api.spotify.com/v1/search?q='+input+'&type=track';

  var getTrack = $.ajax({
    url:artistURL,
    method:'GET'
  });


  getTrack.done(function(response){
    // populate the DOM
    console.log(response);
    response.tracks.items //-- drill down at end w/ the item we are going to open
    for (var i=0; i<tracks.length; i++) {  // loop through one layer outside of the item wanting to open and iterate
      $('#results)').prepend('<li class="track-name">'+tracks[i].name+'</li>');
      //stick in list one layer outside and inner layer of the things you want to iterate through +outerlayer[i].innerlayer+
    }

  });

  getTrack.fail(function(error){
    // console.log an error
  });
}



//event handlers with preventDefault() on click and emptying of my list when requesting new search!
$('input[type="submit"]').click(function(e) {
  e.preventDefault();
  var input = $('#search-keyword').val();
  var select = $('#search-type').val();
  $('#results').empty();
  if (input == '') {
    alert('please enter artist or track');
  } else {
    getArtistInfo(input);
  }

  });

});
