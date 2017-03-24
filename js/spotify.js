
var offset = 0;
var type = $('#search-type').val();
$(function(){
  eventHandlers();
})

function search(){
  var url = 'https://api.spotify.com/v1/search';
  var data = {
    q: $('#search-keyword').val(),
    type: $('#search-type').val(),
    offset: offset ? offset : 0
  };
  a = $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    data: data
  })
  .done(function(response){
    var list = $('#results');
    $('#results').html('');
    function artist(){ response.artists.items.forEach(function(a){
      list.append('<li>' + a.name + '</li>');
       })
     }
    function track(){ response.tracks.items.forEach(function(a){
      list.append('<li>' + a.name + '</li>');
       })
     }

    $('#search-type').val('artist')(artist());
    $('#search-type').val('track')(track());

    console.log('response',response);
  })

  .fail(function(error){
    console.log('error',error);
  })
}
function eventHandlers(){
  $('#submitMe').on('click', function(e){
    e.preventDefault();
    search();
  })
}
