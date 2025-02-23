$(function(){

	$.ajax({
		method:'GET',
		url: 'api/videos',
		success: function(videos){

				var a= parseInt(1);
				var b= parseInt(1);
				var c= parseInt(1);
				var d= parseInt(1);
				var e= parseInt(1);
			$.each(videos, function(i, video){

				 var ti=video.category;
				 var del= video.delete;

				 if(ti == "device" && del != "deleted" && a<=4)
				{$("#dcollector").append('<div class="devices editt text-center col-lg-3 col-md-4 col-12"><img class="img-fluid mb-3" src="/images/'+video.image +'"><h5 class="p-name">'+ video.title+'</h5><h4 class="p-price">$'+video.price+'</h4><a href="api/videos/'+video._id+'"><button class="buy-btn">Buy Now</button></a></div>');
				a=a+1;
				}

				else if(ti == "device" && del != "deleted" && a>4 && a<=8)
				{$("#ddcollector").append('<div class="devices text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><h5 class="p-name">'+ video.title+'</h5><h4 class="p-price">$'+video.price+'</h4><a href="api/videos/'+video._id+'"><button class="buy-btn">Buy Now</button></a></div>');
				a=a+1;
				}
				else if(ti == "ignition" && del != "deleted" && b<=4)
				{$("#icollector").append('<div class="ignition product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><h5 class="p-name">'+ video.title+'</h5><h4 class="p-price">$'+video.price+'</h4><a href="api/videos/'+video._id+'"><button class="buy-btn">Buy Now</button></a></div>');
				b=b+1;
				}
				else if(ti == "ignition" && del != "deleted" && b>4 && b<=8)
				{$("#iicollector").append('<div class="ignition product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><h5 class="p-name">'+ video.title+'</h5><h4 class="p-price">$'+video.price+'</h4><a href="api/videos/'+video._id+'"><button class="buy-btn">Buy Now</button></a></div>');
				b=b+1;
				}
				else if(ti == "battery" && del != "deleted" && c<=4)
				{$("#bcollector").append('<div class="battery product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><h5 class="p-name">'+ video.title+'</h5><h4 class="p-price">$'+video.price+'</h4><a href="api/videos/'+video._id+'"><button class="buy-btn">Buy Now</button></a></div>');
					c=c+1;
				}
				else if(ti == "battery" && del != "deleted" && c>4 && c<=8)
				{$("#bbcollector").append('<div class="battery product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><h5 class="p-name">'+ video.title+'</h5><h4 class="p-price">$'+video.price+'</h4><a href="api/videos/'+video._id+'"><button class="buy-btn">Buy Now</button></a></div>');
					c=c+1;
				}
				else if(ti == "meter" && del != "deleted" && d<=4)
				{$("#mcollector").append('<div class="meters product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><h5 class="p-name">'+ video.title+'</h5><h4 class="p-price">$'+video.price+'</h4><a href="api/videos/'+video._id+'"><button class="buy-btn">Buy Now</button></a></div>');
				d=d+1;
				}
				else if(ti == "meter" && del != "deleted" && d>4 && d<=8)
				{$("#mmcollector").append('<div class="meters product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><h5 class="p-name">'+ video.title+'</h5><h4 class="p-price">$'+video.price+'</h4><a href="api/videos/'+video._id+'"><button class="buy-btn">Buy Now</button></a></div>');
				d=d+1;
				}
				else if(ti == "gauge" && del != "deleted" && e<=4)
				{$("#gcollector").append('<div class="gauges product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><h5 class="p-name">'+ video.title+'</h5><h4 class="p-price">$'+video.price+'</h4><a href="api/videos/'+video._id+'"><button class="buy-btn">Buy Now</button></a></div>');
				e=e+1;	
				}
				else if(ti == "gauge" && del != "deleted" && e>4 && e<=8)
				{$("#ggcollector").append('<div class="gauges product text-center col-lg-3 col-md-4 col-12" style="display: inline-block;"><img class="img-fluid mb-3" src="/images/'+video.image +'"><h5 class="p-name">'+ video.title+'</h5><h4 class="p-price">$'+video.price+'</h4><a href="api/videos/'+video._id+'"><button class="buy-btn">Buy Now</button></a></div>');
				e=e+1;	
				}
		});

		},
		error: function(){

			alert("error loading videos");
		}
	});






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



