window.addEventListener('load', function() {
	var coordinates = document.getElementsByClassName('xy-cord')[0];
	coordinates.addEventListener('click', function(event){
		var x = event.layerX;
	  	var y = event.layerY;
	  	var message = document.getElementsByClassName('modal__title')[0];
	  	if (x >= 580 && x <= 590 && y >= 200 && y <= 225){
	  		modal.style.display = "block";
	  		message.innerHTML = "Waldo!";
	  	}else {
	  		modal.style.display = "block";
	  		message.innerHTML = "Nope!";
	  	}
	});
	
	
	// Modal 
	var modal = document.getElementsByClassName('modal')[0];
	var modalXClose = document.getElementsByClassName('modal__close')[0];
	modalXClose.addEventListener('click', function(event) {
		if (event.target == modalXClose) {
			modal.style.display = "none";
		}
	});
	modal.addEventListener('click', function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	});
});

// send variable x and y to server and the if statement and then send back the results