var response;
var latitude, longitude;
  $(function() {
    
    latitude = "35.681382";//東京駅
    longitude = "139.766084";//東京駅h
    navigator.geolocation.getCurrentPosition(function() {
      latitude = position.coords.latitude;
      longitude = position.coords.longtitude;
    },function(){
    	alert("GPS error");
    });
    
    $.getJSON("http://ngkr.net:3000/?lat=" + latitude + "&lng=" + longitude+"&callback=", function(json) {
    	setList(json);
    });
    
    
  });