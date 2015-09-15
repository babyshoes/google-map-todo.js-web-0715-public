$(document).ready(function(){


  function getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(display);
    }
  }

  function display(position) {
    $('#longitude').html(position.coords.longitude);
    $('#latitude').html(position.coords.latitude);
    insertMap(position.coords.latitude, position.coords.longitude);
  }

  getLocation();


});
