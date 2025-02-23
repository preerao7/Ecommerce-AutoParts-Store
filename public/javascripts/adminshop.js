$(function(){

	$.ajax({
		method:'GET',
		url: 'api/videos',
		success: function(videos){

			$.each(videos, function(i, video){

				 var ti=video.category;
				 var del= video.delete;

				 if(ti == "device" && del != "deleted")
				{$("#dcollector").append('<div class="devices text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><a href="api/videos/'+video._id+'"><h5 class="p-name">'+ video.title+'</h5></a><h4 class="p-price">$'+video.price+'</h4><a href="/api/videos/'+video._id+'/edit"><button class="buy-btn">Edit</button></a><a href="/api/videos/'+video._id+'/edit1"><button class="buy-btn">Delete</button></a></div>');

				}
				else if(ti == "ignition" && del != "deleted")
				{$("#icollector").append('<div class="ignition product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><a href="api/videos/'+video._id+'"><h5 class="p-name">'+ video.title+'</h5></a><h4 class="p-price">$'+video.price+'</h4><a href="/api/videos/'+video._id+'/edit"><button class="buy-btn">Edit</button></a><a href="/api/videos/'+video._id+'/edit1"><button class="buy-btn">Delete</button></a></div>');

				}
				else if(ti == "battery" && del != "deleted")
				{$("#bcollector").append('<div class="battery product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><a href="api/videos/'+video._id+'"><h5 class="p-name">'+ video.title+'</h5></a><h4 class="p-price">$'+video.price+'</h4><a href="/api/videos/'+video._id+'/edit"><button class="buy-btn">Edit</button></a><a href="/api/videos/'+video._id+'/edit1"><button class="buy-btn">Delete</button></a></div>');

				}
				else if(ti == "meter" && del != "deleted")
				{$("#mcollector").append('<div class="meters product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><a href="api/videos/'+video._id+'"><h5 class="p-name">'+ video.title+'</h5></a><h4 class="p-price">$'+video.price+'</h4><a href="/api/videos/'+video._id+'/edit"><button class="buy-btn">Edit</button></a><a href="/api/videos/'+video._id+'/edit1"><button class="buy-btn">Delete</button></a></div>');

				}
				else if(ti == "gauge" && del != "deleted")
				{$("#gcollector").append('<div class="gauges product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><a href="api/videos/'+video._id+'"><h5 class="p-name">'+ video.title+'</h5></a><h4 class="p-price">$'+video.price+'</h4><a href="/api/videos/'+video._id+'/edit"><button class="buy-btn">Edit</button></a><a href="/api/videos/'+video._id+'/edit1"><button class="buy-btn">Delete</button></a></div>');

				}
				
		});

		},
		error: function(){

			alert("error loading videos");
		}
	});

$.ajax({
		method:'GET',
		url: 'api/videos',
		success: function(videos){

			$.each(videos, function(i, video){

				 var ti=video.category;
				 var del= video.delete;
				 if(ti == "device" && del == "deleted")
				{$("#dcollector").append('<div class="devices text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><a href="api/videos/'+video._id+'"><h5 class="p-name">'+ video.title+'</h5></a><h4 class="p-price">$'+video.price+'</h4><a href="/api/videos/'+video._id+'/edit"><button class="buy-btn">Edit</button></a><a href="/api/videos/'+video._id+'/edit2"><button class="buy-btn"> Redo Delete</button></a></div>');

				}
				else if(ti == "ignition" && del == "deleted")
				{$("#icollector").append('<div class="ignition product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><a href="api/videos/'+video._id+'"><h5 class="p-name">'+ video.title+'</h5></a><h4 class="p-price">$'+video.price+'</h4><a href="/api/videos/'+video._id+'/edit"><button class="buy-btn">Edit</button></a><a href="/api/videos/'+video._id+'/edit2"><button class="buy-btn"> Redo Delete</button></a></div>');

				}
				else if(ti == "battery" && del == "deleted")
				{$("#bcollector").append('<div class="battery product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><a href="api/videos/'+video._id+'"><h5 class="p-name">'+ video.title+'</h5></a><h4 class="p-price">$'+video.price+'</h4><a href="/api/videos/'+video._id+'/edit"><button class="buy-btn">Edit</button></a><a href="/api/videos/'+video._id+'/edit2"><button class="buy-btn"> Redo Delete</button></a></div>');

				}
				else if(ti == "meter" && del == "deleted")
				{$("#mcollector").append('<div class="meters product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><a href="api/videos/'+video._id+'"><h5 class="p-name">'+ video.title+'</h5></a><h4 class="p-price">$'+video.price+'</h4><a href="/api/videos/'+video._id+'/edit"><button class="buy-btn">Edit</button></a><a href="/api/videos/'+video._id+'/edit2"><button class="buy-btn"> Redo Delete</button></a></div>');

				}
				else if(ti == "gauge" && del == "deleted")
				{$("#gcollector").append('<div class="gauges product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><a href="api/videos/'+video._id+'"><h5 class="p-name">'+ video.title+'</h5></a><h4 class="p-price">$'+video.price+'</h4><a href="/api/videos/'+video._id+'/edit"><button class="buy-btn">Edit</button></a><a href="/api/videos/'+video._id+'/edit2"><button class="buy-btn"> Redo Delete</button></a></div>');

				}
			});
		}});


	const btns=document.querySelectorAll(".btn");
const storeProducts =document.querySelectorAll(".product");

for(i=0;i<btns.length;i++)
{
	btns[i].addEventListener("click",(e)=>{

		e.preventDefault();

		const filter=e.target.dataset.filter;

		storeProducts.forEach((product)=>{

			if(filter == "all"){
				product.style.display="block";
			}
			else{
				if(product.classList.contains(filter)){
					product.style.display="block";		
				}
				else{
					product.style.display="none";
				}
			}
		})
		

	})
}

const search =document.getElementById("search");

search.addEventListener("keyup", (e)=>{
	e.preventDefault();
	const searchValue=search.value.toLowerCase().trim();

	for(i=0;i<storeProducts.length;i++){
		if(storeProducts[i].classList.contains(searchValue))
		{
			storeProducts[i].style.display="block";
		}
		else if(searchValue == ""){
		storeProducts[i].style.display="block";	

		}
		else
		{
			storeProducts[i].style.display="none";
		}
	}
})





});



