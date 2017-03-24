var offset = 0;
var url = 'https://api.spotify.com/v1/search';

function search(offset) {
  var keyword = $('#search-keyword').val();
  var type = $('#search-type').val();
  $('.previous').remove();
  $('.next').remove();

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
      $('#results, p').html('');

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
          $('p').after('<button class="next">next</button>');
          $('.next').click(function(){
            offset+= 20;
            search(offset);
            });
          if (offset > 0){
            $('p').after('<button class="previous">previous</button>');
            $('.previous').click(function(){
              offset-= 20;
              search(offset);

            });
          };
        };
      };
      if (type == 'track'){
          var searchArray = response.tracks.items;
          searchArray.forEach(function(tracks){
            var li = $('<li />');
            li.text(tracks.name);
            $('#results').append(li);
            var showing = searchArray.length + offset;
            $('p').text('Showing ' + offset + '-' + showing + ' of ' + response.artists.total);
            if (response.tracks.total > 20){
              $('p').after('<button class="next">next</button>');
              $('.next').click(function(){
                offset+= 20;
                search(offset);
                });
              if (offset > 0){
                $('p').after('<button class="previous">previous</button>');
                $('.previous').click(function(){
                  offset-= 20;
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
    e.preventDefault();
    offset = 0;
    search(offset);
  });
}

$(function(){
  main();
});
