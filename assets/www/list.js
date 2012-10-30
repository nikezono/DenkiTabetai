(function() {
  $(function() {
    var latitude, longitude;
    latitude = "35.396221";
    longitude = "139.466404";
    navigator.geolocation.getCurrentPosition(function() {
      latitude = position.coords.latitude;
      return longitude = position.coords.longtitude;
    });
    return $.getJSON("http://ngkr.net:3000/?lat=" + latitude + "&lng=" + longitude, function(json) {
      return alert(json);
    });
  });
}).call(this);
