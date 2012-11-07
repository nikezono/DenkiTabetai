   //GPS起動のコールバック関数内をinitializeの代わりにする 
    function GoogleMaps(){
    var latitude,longitude,map,latlng,user;
    var infowindow = [];  
    var marker = [];
    navigator.geolocation.getCurrentPosition(function(position){
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        Display();
      },function(){
        latitude = 35.396221;
        longitude = 139.466404;
        Display();
        
        addMarker(0,latlng,map);
        marker[0].icon = "marker.png";
        createwindow(0,"You at here.")
        //ResultsごとにaddMarkerする
        
        //ユーザーの処理。 テストベッド 
        google.maps.event.addListener(marker[0], 'click', function() {
        	  infowindow[0].open(map,marker[0]);
        	});
      });
    
    //地図の初期化
    function Display() {
        latlng = new google.maps.LatLng(latitude, longitude);
        var myOptions = {
          zoom: 15,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map_canvas"),
            myOptions);
    }
    //infoWindowを作成するfunction 
    function createwindow(i,contentString){
    	infowindow[i] = new google.maps.InfoWindow({
        	content: contentString
    	});
    }
	//Markerを作成するFunction 
    function addMarker(i,location,map) {
    	  marker[i] = new google.maps.Marker({
    	    position: location,
    	    map: map,
    	    animation:google.maps.Animation.DROP,
    	  });
    	}
	}