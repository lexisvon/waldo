window.addEventListener('load', function() {
	var coordinates = document.getElementsByClassName('xy-cord')[0];
	coordinates.addEventListener('click', function(event){
		var x = event.layerX;
	  	var y = event.layerY;
	  	
	  	var request = new XMLHttpRequest();
		request.open("GET", "/click_check?x=" + x + "&y=" + y);
		request.send();

		var resultShow = function(event){
			var result = event.target;
			var message = document.getElementsByClassName('modal__title')[0];
			
			if (result.response == "true"){
				modal.style.display = "block";
		  		message.innerHTML = "Waldo!";
			} else {
				modal.style.display = "block";
		  		message.innerHTML = "Nope!";
			}
		}

		request.addEventListener("load", resultShow);

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

	var h2 = document.getElementsByTagName('h2')[0],
	    seconds = 0, minutes = 0, hours = 0,
	    t;

	function add() {
	    seconds++;
	    if (seconds >= 60) {
	        seconds = 0;
	        minutes++;
	        if (minutes >= 60) {
	            minutes = 0;
	            hours++;
	        }
	    }
	    
	    h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

	    timer();
	}
	function timer() {
	    t = setTimeout(add, 1000);
	}
	timer();

	/* Stop button */
	coordinates.onclick = function() {
	    clearTimeout(t);
	}
	
});

// send variable x and y to server and the if statement and then send back the results