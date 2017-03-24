// API Docs at:
// https://developer.spotify.com/web-api/search-item/


function search(keyword, type, offset, nextUrl) {
  var url = 'https://api.spotify.com/v1/search';
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
    if( type === 'artist'){
        list.after('Displaying ' + result.artists.limit + ' of ' + result.artists.total + ' <a href="' + result.artists.next + '" id="next">Next</a>')
        console.log(result);

    } else if (type === 'track') {
      list.after('Displaying ' + result.artists.limit + ' of ' + result.artists.total);
    }

    console.log(list);
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

$(function(){
  eventHandlers();
  //$('#search-keyword').val();
  //search('the beatles', 'artist');
})
