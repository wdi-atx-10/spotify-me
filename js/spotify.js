// API Docs at:
// https://developer.spotify.com/web-api/search-item/
$(function(){
  // console.log(searchByArtist('beyonce'));
  // console.log(searchByTrack('always'));
  $('#search-keyword').on('submit', function(event){
     event.preventDefault();
     console.log(search('beyonce'));
  //    console.log('please');
  //  if($('#search-type').val() == 'artist' ){
  // //   $('#search-keyword').on('submit', function(event){
  // //      event.preventDefault();
  //       // console.log(searchByArtist());
  // //     })
  //     console.log('thanks');
  //    }
  //  else{$('#search-type').val('track')
  // //   $('#search-keyword').on('submit', function(event){
  // //      event.preventDefault();
  //       console.log(searchByTrack());
  //     })
     }

   )
 })
//})
//
// function searchType(){
//   // var artist = $('#search-type.artist');
//   // var track = $('#search-type.track');
//   // var search = $('#search-keyword').on('submit', function(event){
//   //    event.preventDefault();
//   //  })
//   if($('#search-type').val('artist')){
//     $('#search-keyword').on('submit', function(event){
//        event.preventDefault();
//        searchByArtist();
//       })
//     }
//   else{$('#search-type').val('track')
//     $('#search-keyword').on('submit', function(event){
//        event.preventDefault();
//        searchByTrack();
//       })
//     }
// }

function search(){
  var url = 'https://api.spotify.com/v1/search';
  var data = {
    q: $('#search-keyword').val(),
    type: $('#search-type').val()
  };
  $.ajax({
    url: url,
    data: data
  })
  .done(function(response){
    var result = response.value();
    $('#results').append('<li>'+result+'</li>');
    console.log('response',response);
  })
  .fail(function(error){
    console.log('error',error);
  })
}

function searchByArtist(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
  var data = {
    q: $('#search-keyword').val()
  };
  $.ajax({
    url: url,
    data: data

  })
  .done(function(response){
    var result = response.value;
    $('#results').append('<li>'+result+'</li>');
    console.log('response',response);
  })
  .fail(function(error){
    console.log('error',error);
  })
}


function searchByTrack(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
  var data = {
    q: $('#search-keyword').val()
  };
  $.ajax({
    url: url,
    data: data

  })
  .done(function(response){
    var result = response.value();
    $('#results').append('<li>'+result+'</li>');
    console.log('response',response);
  })
  .fail(function(error){
    console.log('error',error);
  })
}
