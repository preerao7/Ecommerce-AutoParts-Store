$(function(){

	$.ajax({
		method:'GET',
		url: 'api/videos/cart',
		success: function(carts){

			$.each(carts, function(i, cart){


						var de= cart.delete;



						if(de != "deleted")	
						{$("#tabledata").append('<tr><td><img src="/images/'+cart.image+'" alt=""></td><td><h5>'+cart.delete+'</h5></td><td><h5>$'+cart.price+'</h5></td><td>'+cart.quantity+'</td></tr>');
				
				
		}});

		},
		error: function(){

			alert("error loading videos");
		}
	});

	





});



