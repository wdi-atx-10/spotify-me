// API Docs at: 
// https://developer.spotify.com/web-api/search-item/


function searchByArtist(keyword) {
  //var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
  var url = 'https://api.spotify.com/v1/search?';

	 	var data = {
	 		q: keyword,
	 		type: 'artist'
		};
		
		var musicreturn = $.ajax({
			url:url,
			data
		});

		musicreturn.done(function(response){
			console.log("YATA: ", response);


			for(var i = 0; i < response.artists.items.length; i++){
				$("ul").append("<li>"+response.artists.items[i].name+"</li>");
				//console.log("yolo");
			}

		//	$("li").each(function(){
		//			if ($(this).text()===response.Title){
		//				$(this).append("<li> Actors: " + response.Actors + "</li>")
		//				$(this).append("<li> Director: " + response.Director + "</li>");
		//			}
		//	});
			
		});
}


function searchByTrack(keyword) {
    //var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
  	var url = 'https://api.spotify.com/v1/search?';

	 	var data = {
	 		q: keyword,
	 		type: 'track'
		};
		
		var musicreturn = $.ajax({
			url:url,
			data
		});

		musicreturn.done(function(response){
			console.log("YATA: ", response.tracks.items);

		//	response.tracks.items.forEach(function(){
		//		console.log('yolo');
		//	});

			for(var i = 0; i < response.tracks.items.length; i++){
				$("ul").append("<li>"+response.tracks.items[i].name+"</li>");
				//console.log("yolo");
			}

		//	$("li").each(function(){
		//			if ($(this).text()===response.Title){
		//				$(this).append("<li> Actors: " + response.Actors + "</li>")
		//				$(this).append("<li> Director: " + response.Director + "</li>");
		//			}
		//	});
			
		});
}


$(function(){

	function main(){

		$("#submitbutton").on("click",function(evt){
			evt.preventDefault();
			if ($("#search-type").val() === "artist"){
				searchByArtist($("#search-keyword").val());
			}

			if ($("#search-type").val() === "track"){
				searchByTrack($("#search-keyword").val());
			} 
		})


	};

	main();



})