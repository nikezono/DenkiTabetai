/*
 * gps.js
 * DenkiTabetai.apk
 * com.nun.DenkiTabetai
 * GPSの値を取得するjavascript
 * GPS gps = new GPS;
 * gps.getGps()でGPSの値を取得する
 * gps.latとかで緯度経度を取り出す
*/
var latitude,longitude;

function getGPS(){


	function onSuccess(position) {
		latitude = position.coords.latitude;
    	longitude = position.coords.longitude;
    	//alt = position.coords.altitude;//高さ
    	//hdng = position.coords.heading;//方角(360度)
    	//var t = new Date(position.timestamp);現在時刻	
	};
 
	function onError(error) {
    	alert('code: ' + error.code + ':' + error.message);
	}
 
	function getGPS(){
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}
};

$(function(){getGPS();});