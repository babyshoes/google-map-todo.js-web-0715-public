function insertMap(latitude, longitude) {

  var latlng = new google.maps.LatLng(latitude, longitude);
  var mapCanvas = document.getElementById("map_canvas");
  var mapOptions = {
    center: latlng,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

}
