// API Docs at:
// https://developer.spotify.com/web-api/search-item/

$(document).ready(function() {
  $('#search-type').on('click', findArtist )
})


function findArtist() {
  console.log("search for artist");
  var artrack = $.ajax({
    url: 'https://api.spotify.com/v1/search',
    method: 'GET'
  })
  artrack.done(function(data) {
    console.log(data)

    console.log(data.value)
    console.log(data.value.id)
    console.log(data.value.artist)
    $('#search-keyword').empty()
    $('#results').append(data.value.artist)

  })
  artrack.fail(function(error) {
    console.log(error)
  })

}

function findTrack() {
  console.log("search for track");

  artrack.done(function(data) {
    console.log(data)

    console.log(data.value)
    console.log(data.value.id)
    console.log(data.value.track)
    $('#search-keyword').empty()
    $('#results').append(data.value.track)

  })
  artrack.fail(function(error) {
    console.log(error)
  })

}

findTrack()
findArtist()
