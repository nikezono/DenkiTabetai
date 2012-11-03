(function($){

	var latitude, longitude
  $(function() {
    
    latitude = "35.681382";//東京駅
    longitude = "139.766084";//東京駅h
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longtitude;
      alert(latitude);
      $.getJSON("http://denki.nikezono.net/?lat="+latitude+"&lng="+longitude, null,function(json) {  
      	alert(json.results[0].title);
      	setList(json,latitude,longitude);
        });
    },function(){
    	alert("GPS error");
    });
    
    //位置がとれたのでデータをhtmlに書き足していく
  
  });
})(jQuery)