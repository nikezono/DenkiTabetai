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
    
    $.getJSON("http://denki.nikezono.net/?lat="+latitude+"&lng="+longitude, null,function(json) {
    	setList(json);
    });
    
    
    
  });