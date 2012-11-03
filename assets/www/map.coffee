$ ->

  mapCanvas = ->
    myLating = new google.maps.LatLng(36.230672,137.963916)
    myOptions =
      zoom: 15
      center: myLating
      mapTypeControl: false
      navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL}
      mapTypeId: google.maps.MapTypeId.ROADMAP
    map = new google.maps.Map(document.getElementById("map"),myOptions)

    pageHeight = $(document).height()
    $("#map").css "height", pageHeight

  $("#mapLoad").bind "pageshow",mapCanvas
