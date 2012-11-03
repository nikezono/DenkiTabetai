var res;
var latitude, longitude;
  $(function() {
    
    latitude = "35.681382";
    longitude = "139.766084";
    navigator.geolocation.getCurrentPosition(function() {
      latitude = position.coords.latitude;
      longitude = position.coords.longtitude;
      alert(latitude+longitude);
    },function(){
    	alert("GPS error");
    });
    
    $("#homeToMap,#homeToList").hide();
    $.getJSON("http://ngkr.net:3000/?lat=" + latitude + "&lng=" + longitude, function(json) {
    	res = json;
    }).success(setList).success($("#homeToMap,#homeToList").show()).success(alert("Load GPS successed"));
    
  });
