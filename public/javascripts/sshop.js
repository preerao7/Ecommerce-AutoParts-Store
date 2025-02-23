$(function(){

	$.ajax({
		method:'GET',
		url: 'api/videos/id',
		success: function(videos){

			$.each(videos, function(i, video){

				$(#print).append('<li>'+video.title+'</li>');

				
		});

		},
		error: function(){

			alert("error loading videos");
		}
	});


	});



