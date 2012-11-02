/* 
*  list.js
*  com.nun.denkitabetai
*  index.html#listにリストを追加していく
*/

function setList(){
	/*
	 * もし、随時通信を行うなら以下の書き方が正しい
	 * $(a#list).click(function(){})
	 */
	
	//とりあえず、ライブラリのロード時に自動でlist.htmlにappendしていくようにする
 // $("a#btnList").click(function(){
	  

		//もらったjsonファイルを距離順に並べ替える
		for(var num in res.results){
			//console.log(res.results[num].latitude,longitude);
			var dis = getLength(res.results[num].latitude,res.results[num].longitude,latitude,longitude);
			res.results[num].distance = dis;
		}
		res.results.sort(sort_by('distance', false, parseInt));
		//console.log(res.results);
	  
	  
	  if(res.results.length == 0){
		  $("#contentLi").text();
		  alert("現在位置周辺に利用可能な電源カフェはありません");
	  }else{
	  for(var num in res.results){
    	
	  	$("#li").append(
  			"<li><a href='" + res.results[num].url_pc + "'>"
	  			+ res.results[num].title + "</a>" +
  			"<span class='ui-li-aside' style=' text-align:left;font-weight:lighter;font-style:italic;'>" + 
  			res.results[num].category[0] +  "," + res.results[num].category[1] +"</span>" +
  			"<span class='ui-li-count'>"+res.results[num].powersupply +"</span>" +
  			"</li>"
     	);
	  	}
	  }
  //});
}

var sort_by = function(field, reverse, primer){
	   reverse = (reverse) ? -1 : 1;
	   return function(a,b){
	       a = a[field];
	       b = b[field];
	       if (typeof(primer) != 'undefined'){
	           a = primer(a);
	           b = primer(b);
	       }
	       if (a<b) return reverse * -1;
	       if (a>b) return reverse * 1;
	       return 0;
	   }
	}

function getLength(x1 , y1 , x2 , y2 ) {
	　　var pointLength;
	　　pointLength = Math.sqrt(Math.pow(x2 - x1 , 2 ) + 
	　　　　　　　　　　　　　　　　　　　　Math.pow(y2 - y1 , 2 )); 
	　　return pointLength;
	}

