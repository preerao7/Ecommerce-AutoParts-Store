window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input elements 
	// they are initially empty and hidden

	var email = document.getElementById("email");
    var span1 = document.createElement("span");
    var password = document.getElementById("pwd");
    var span2 = document.createElement("span");
    var span3 = document.createElement("span");
    //var para = document.createElement("P");
    //var tex = document.createTextNode("enter email");
    //para.appendChild(tex);
	span1.style.display = "none"; //hide the span element
    span2.style.display = "none";
    span3.style.display = "none";
    span1.innerHTML = "Enter a valid email with valid domain";
    span2.innerHTML = "Create a password of 6 char length, a number, capital letter and a special character";
    

    email.parentNode.appendChild(span1);
    password.parentNode.appendChild(span2);

    email.onfocus = function(){ 

        span1.style.display = "inline";
       // span1.appendChild(tex);
        //email.parentNode.appendChild(span1);

    	}
    email.onblur = function(){
        span1.style.display = "none";
    }



    password.onfocus = function(){
        span2.style.display = "inline";
    }

    password.onblur = function(){
        span2.style.display = "none";
    }

   
    var form = document.getElementById("myForm");
    form.onsubmit = function(e){
        
        if(email.value == '' || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            email.classList.add("error");
            alert("Email invalid");
            span1.style.display = "inline";
            e.preventDefault();
        }
        if(!password.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/)) {
            password.classList.add("error");
            alert("password invalid");  
            span2.style.display = "inline";
            
            e.preventDefault();
        }

    }


}
