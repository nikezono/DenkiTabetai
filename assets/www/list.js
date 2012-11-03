/* 
*  list.js
*  com.nun.denkitabetai
*  index.html#listにリストを追加していく
*/

function setList(res,latitude,longitude){

	  if(res.results.length == 0){
		  $("#li").text();
		  alert("現在位置周辺に利用可能な電源カフェはありません");
	  }else{
	  getDistance(res,latitude,longitude);
	  for(var num in res.results){
    	
	  	$("#li").append(
  			"<li><a href='" + res.results[num].url_pc + "'>"
	  			+ res.results[num].title + "</a>" +
	  			//ネガ・ポジ七段階アイコンを付ける
  			"<span class='ui-li-count'>"+res.results[num].powersupply +"</span>" +
  			"</li>"
     	);
	  	}
	  }
  //});
}

function getLength(x1 , y1 , x2 , y2 ) {
	　　var pointLength;
	　　pointLength = Math.sqrt(Math.pow(x2 - x1 , 2 ) + 
	　　　　　　　　　　　　　　　　　　　　Math.pow(y2 - y1 , 2 )); 
	　　return pointLength;
	}

//もらったjsonファイルを距離順に並べ替える
//まずは距離を付ける。
function getDistance(res,latitude,longitude){
	for(var num in res.results){
		//console.log(res.results[num].latitude,longitude);
		var dis = getLength(res.results[num].latitude,res.results[num].longitude,latitude,longitude);
		res.results[num].distance = dis;
	}

	//次に並べ替える
	res.results.sort(function(a,b) { return parseFloat(a.distance) - parseFloat(b.distance) } );
}
