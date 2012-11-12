var latitude, longitude;
var res;
  $(function() {
	  
    $(".HomeBtn").hide();//ホーム非表示
	  
    latitude = "35.681382";//東京駅
    longitude = "139.766084";//東京駅
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longtitude;
      alert(latitude);
      setJSON(latitude,longitude);
    },function(){
    	alert("GPSが利用できません\nアプリを再起動してください");
    	setJSON(latitude,longitude);    
    });
  });

function setJSON(latitude,longitude){
    
    //位置がとれたのでデータをhtmlに書き足していく
    $.getJSON("http://denki.nikezono.net/?lat="+latitude+"&lng="+longitude, null,function(json) {  
      	setList(json,latitude,longitude);
      	setProfile(json);
      	res = json;
      	$(".HomeBtn").show();
        });
}