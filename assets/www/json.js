var res;
var latitude, longitude;
  $(function() {
    
    latitude = "35.681382";
    longitude = "139.766084";
    navigator.geolocation.getCurrentPosition(function() {
      latitude = position.coords.latitude;
      longitude = position.coords.longtitude;
    },function(){
    	//alert("GPS error");
    });
    $.getJSON("http://ngkr.net:3000/?lat=" + latitude + "&lng=" + longitude, function(json) {
    	res = json;
    }).success(setList).success(setProfile);
    
  });
