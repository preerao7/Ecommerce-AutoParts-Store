$(function(){

	$.ajax({
		method:'GET',
		url: 'api/cart',
		success: function(carts){

			$.each(carts, function(i, cart){

				var del=cart.delete;


				if(del == "not deleted")
					$("#tabledata").append('<tr><td><a href="/api/videos/'+cart._id+'/deleinsert"><i class="fas fa-trash-alt"></i></a></td><td><img src="/images/'+cart.image+'" alt=""></td><td><h5>'+ cart.title+'</h5></td><td><h5>$'+cart.price+'</h5></td><td>'+cart.quantity+'</td></tr>');
				
				
		});

		},
		error: function(){

			alert("error loading videos");
		}
	});

	

$.ajax({
		method:'GET',
		url: 'api/cart',
		success: function(carts){
			var tot=0;
			var toti=parseFloat(tot);

			$.each(carts, function(i, cart){

				var deel=cart.delete;

				if(deel !="deleted")
				{var qua=cart.quantity;
				var pr= cart.price;

				var qqua=parseFloat(qua);
				var ppr=parseFloat(pr);


				toti= toti+(qqua*ppr);}

				
				
				

				
		});
			$("#toto").append(toti);

		},
		error: function(){

			alert("error loading videos");
		}
	});



});



