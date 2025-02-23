$(function(){

	$.ajax({
		method:'GET',
		url: 'api/account',
		success: function(videos){

			$.each(videos, function(i, video){

				 var ti=video.username;

				$("#usernamedisplay").append('<h5>'+ti+'</h5>');
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



