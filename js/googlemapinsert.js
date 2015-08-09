function initialize() {
	var myCenter = new google.maps.LatLng(40.5456, -74.4608);
	var mapProp = {
		center : myCenter,
		zoom : 11,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	var marker = new google.maps.Marker({
		position : myCenter,
		icon : 'imgs/map_marker.png'
	});
	marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize); 