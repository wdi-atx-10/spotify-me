var offset = 0;

function search(offset) {
  var url = 'https://api.spotify.com/v1/search';
  var keyword = $('#search-keyword').val();
  var type = $('#search-type').val();

  $.ajax({
    url: url,
    data:{
      q: keyword,
      type: type,
      offset: offset
    }
  })
    .done(function(response){
      console.log(response);
      $('#results, p, a, .next, .previous').html('');
      if (type == 'artist'){
        var searchArray = response.artists.items;
        searchArray.forEach(function(artist){
          var li = $('<li />');
          li.text(artist.name);
          $('#results').append(li);
          var showing = searchArray.length + offset;
          $('p').text('Showing ' + offset + '-'+ showing + ' of ' + response.artists.total);
        });
        if (response.artists.total > 20){
          $('.next').show();
          $('.next').text('next');
          $('.next').click(function(){
            offset= offset + 20;
            search(offset);
            });
          if (offset > 0){
            $('.previous').show();
            $('.previous').text('previous');
            $('.previous').click(function(){
              offset= offset - 20;
              search(offset);
            });
          };
        };
      } else{
          var searchArray = response.tracks.items;
          searchArray.forEach(function(tracks){
            var li = $('<li />');
            li.text(tracks.name);
            $('#results').append(li);
            var showing = searchArray.length + offset;
            $('p').text('Showing ' + offset + '-' + showing + ' of ' + response.artists.total);
            if (response.tracks.total > 20){
              $('.next').show();
              $('.next').text('next');
              $('.next').click(function(){
                offset= offset + 20;
                search(offset);
                });
              if (offset > 0){
                $('.previous').show();
                $('.previous').text('previous');
                $('.previous').click(function(){
                  offset= offset - 20;
                  search(offset);
                });
              };
            };
          });
        };
    })
    .fail(function(error){
      console.log(error);
    });

}

function main(){
  $('#search').on('submit',function(e){
    $('.next, .previous').hide();
    e.preventDefault();
    offset = 0;
    search(offset);
  });
}

$(function(){
  $('.next, .previous').hide();
  main();
});
