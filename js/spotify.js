// API Docs at:
// https://developer.spotify.com/web-api/search-item/


function search(keyword, type, offset, nextUrl) {
  var url = nextUrl || 'https://api.spotify.com/v1/search';
  var offsetVal = offset ? offset : 0;

  data = {q: keyword,
          type: type,
          offset: offsetVal}

 a = $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    data: data,
  })
  .done(function(result) {
    //reset the list
    $('#results').html('');
    console.log(result);

    //build the new result list
    var list = $('#results')
    if( type === 'artist'){
      result.artists.items.forEach(function(a){
        list.append('<li>' + a.name + '</li>');

      })
    } else if (type === 'track') {
      result.tracks.items.forEach(function(a){
        list.append('<li>' + a.name+ '</li>');
      })
    }
    //displaying number of resulsts
    var displaying = $('#displaying').html('');
    if( type === 'artist'){
        displaying.append('displaying ' + result.artists.offset + ' - ' + (Number(result.artists.offset)+20) + ' of ' + result.artists.total + ' <a href="' + result.artists.next + '" id="next">Next</a>');
        setNext('artist', result.artists.next);

    } else if (type === 'track') {
      displaying.append('Displaying ' + result.tracks.offset + ' - ' + (Number(result.tracks.offset)+20) + ' of ' + result.tracks.total + ' <a href="' + result.tracks.next + '" id="next">Next</a>');
      setNext('track', result.tracks.next);
    }
    console.log(Number(result.artists.offset)-20);
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
}

function eventHandlers(){
    console.log('event handlers loaded');

  $('#submit-button').on('click', function(e){
    e.preventDefault();
    query = $('#search-keyword').val();
    type = $('#search-type').val();
    search(query, type);
  })


}

function setNext(type, newUrl){
    $('#next').on('click', function(e){
    e.preventDefault();

    search(null, type, null, newUrl);

  })
}

$(function(){
  eventHandlers();
  //$('#search-keyword').val();
  //search('the beatles', 'artist');
})
