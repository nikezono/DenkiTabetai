/*
 * gps.js
 * DenkiTabetai.apk
 * com.nun.DenkiTabetai
 * GPSの値を取得するjavascript
 * GPS gps = new GPS;
 * gps.getGps()でGPSの値を取得する
 * gps.latとかで緯度経度を取り出す
 */

class GPS(){

	var lat,lng,alt,hdng;
	
	function onSuccess(position) {
		lat = position.coords.latitude;
    	lng = position.coords.longitude;
    	alt = position.coords.altitude;
    	hdng = position.coords.heading;
    	//var t = new Date(position.timestamp);現在時刻
    	console.log(lat);
    	alert(lat);
    	
	};
 
	function onError(error) {
    	alert('code: ' + error.code + ':' + error.message);
	}
 
	function getGPS(){
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}
	
}