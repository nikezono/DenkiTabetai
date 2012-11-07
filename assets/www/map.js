var infowindow = false;
var map, myLating, myOptions, pageHeight;
$(function() {
	//map描画
    var mapCanvas;
    mapCanvas = function() {
      myLating = new google.maps.LatLng(latitude, longitude);
      myOptions = {
        zoom: 17,
        center: myLating,
        mapTypeControl: false,
        navigationControlOptions: {
          style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById("canvas"), myOptions);
      
      //marker描画
      var marker = [];
      var infowindow = [];
      for(var num in res.results){
      	latlng = new google.maps.LatLng(res.results[num].latitude,res.results[num].longitude);
      	marker[num] = new google.maps.Marker({//オプションつきマーカー生成
      		position:latlng,
      		map:map,
      		title:res.results[num].title,
      		animation: google.maps.Animation.DROP,
      		draggable: false
      	});
      }
      
      //情報ウィンドウ用function
      for (var num in res.results){
    	  google.maps.event.addListener(marker[num], 'click', function() {
    		  showInfoWindow(this);
    	  });
      }
      
      pageHeight = $(document).height();
      return $("#canvas").css("height", pageHeight - $("#mapFoot").css("height"));
    };
    
    return $("#mapLoad").bind("pageshow", mapCanvas);
  });
 
  /* 情報ウィンドウ表示 */
  function showInfoWindow(obj){
      /* 既に開かれていたら閉じる */
      if(infowindow) infowindow.close();
      infowindow=new google.maps.InfoWindow({
          /* ここにぐるなびなどのコンテンツを載せる */
          content:obj.getTitle()+"<br />"+obj.getPosition().lat()+", "+obj.getPosition().lng(),
      });
      infowindow.open(map,obj);
  }

