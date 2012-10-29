// -*- coding: utf-8 -*-

(function($) {
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var map;
    var marker;
    var currentLocation;

    $(function() {
    	$(document).bind("deviceready", initializeMap);
    	$("#reflesh").click(function() { 
    		setCurrentLocation();
    	});
    });

    function onError(e) {
    	alert('code: '    + e.code    + '\n' +
    			'message: ' + e.message + '\n');
    }

    function initializeMap() {
    	navigator.geolocation.getCurrentPosition(function(position) {
	    currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	    var options = {
		zoom: 10, center: currentLocation,
		disableDefaultUI: true, mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    map = new google.maps.Map($("#map_canvas").get(0), options);
	    map.setCenter(currentLocation);
	    directionsDisplay.setMap(map);
	    marker = new google.maps.Marker({
		position: currentLocation,
		map: map, title: "Current Location"
	    });
	}, onError);
    }

    function setCurrentLocation() {
	navigator.geolocation.getCurrentPosition(function(position) {
	    currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	    map.setCenter(currentLocation);
	    marker.setPosition(currentLocation);
	}, onError);
    }


})(jQuery)