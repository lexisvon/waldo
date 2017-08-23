window.addEventListener('load', function() {
	var coordinates = document.getElementsByClassName('xy-cord')[0];
	coordinates.addEventListener('click', function(getPosition){});
	function getPosition(event) {
	  var x = event.x;
	  var y = event.y;
	  alert("x:" + x + " y:" + y);
	}
});