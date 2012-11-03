/*
 * profile.js
 *  DenkiTabetai
 *  com.nun.denkitabetai
 *  取得したAPIから、物件ごとの詳細ページを作成する
 */

function setProfile(){
	$(function(){
		//jquery.appendでページを追加していく。
	  for (var num in res.results){
		json = res.results[num];
	    $("#profile").append(
	    		
	      "<div data-roll='page' id ='id" +json.entry_id +"'>" +//ページ化
	      "<div data-roll='header'><h1>"+json.title    +"</h1></div>"+//タイトルバー
	      "<div data-roll='content'>"
		  	
		  	);	
	  }
	});	
}