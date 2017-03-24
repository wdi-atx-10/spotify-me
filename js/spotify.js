
var offset = 0;

$(function(){
  eventHandlers();
})

function search(){
  var url = 'https://api.spotify.com/v1/search';
  var type = $('#search-type').val();
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
    var items = 'items';
    $('#results').html('');
    // function artist(){
      for(i=0;i<20;i++){
        var a = (response+'.'+type+'.'+items+[i]);
      }
      // console.log(a);
      // response.type.items.forEach(function(a){
      list.append('<li>' + a+ '</li>');
      //  })
    //  }
    // function track(){
      // response.type.items.forEach(function(a){
      // list.append('<li>' + a.name + '</li>');
      //  })
    //  }

    // $('#search-type').val('artist')(artist());
    // $('#search-type').val('track')(track());

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
