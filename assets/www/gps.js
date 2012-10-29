/*
 * gps.js
 * DenkiTabetai.apk
 * com.nun.DenkiTabetai
 * GPSの値を取得するjavascript
 * getGps()でGPSの値を取得してアクセサメソッドで値をとってくる
 */


function onSuccess(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var alt = position.coords.altitude;
    var hdng = position.coords.heading;
    //var t = new Date(position.timestamp);現在時刻
};
 
function onError(error) {
    alert('code: ' + error.code + ':' + error.message);
}
 
function getGps(){
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
 